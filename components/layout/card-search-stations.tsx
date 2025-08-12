import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ComboboxStations } from "../ui/combobox-stations";
import { ComboboxTimeStart } from "../ui/combobox-time-start";
import { ComboboxTimeEnd } from "../ui/combobox-time-end";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

type FormSchedule = {
  stationid: string;
  timefrom: string;
  timeto: string;
};

type CardSearchStationsProps = {
  formSchedule: FormSchedule;
  onSelect: (name: string, value: string | null) => void;
  handleSearchSchedule: () => void;
  isLoading: boolean;
};

export function CardSearchStations({
  formSchedule,
  onSelect,
  handleSearchSchedule,
  isLoading,
}: CardSearchStationsProps) {
  return (
    <section className="absolute top-16 z-50 w-full">
      <Card>
        <CardHeader>
          <CardTitle>Where will you go today?</CardTitle>
          <CardDescription>
            Select the station and time to start your journey.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid w-full gap-4">
          <ComboboxStations
            value={formSchedule.stationid}
            onSelect={onSelect}
          />
          <ComboboxTimeStart
            value={formSchedule.timefrom}
            onSelect={onSelect}
          />
          <ComboboxTimeEnd value={formSchedule.timeto} onSelect={onSelect} />
          <Button onClick={handleSearchSchedule} disabled={isLoading}>
            Search
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
