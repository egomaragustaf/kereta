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
import { Loader, ArrowUpDown } from "lucide-react";

type FormStation = {
  stationfrom: string;
  stationto: string;
};

type CardSearchFareProps = {
  formStation: FormStation;
  onSelect: (name: string, value: string | null) => void;
  handleTicketPrice: () => void;
  isLoading: boolean;
};

export function CardSearchFare({
  formStation,
  onSelect,
  handleTicketPrice,
  isLoading,
}: CardSearchFareProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Travel fare info</CardTitle>
        <CardDescription>Select the station.</CardDescription>
      </CardHeader>
      <CardContent className="grid w-full gap-4">
        <ComboboxStations
          value={formStation.stationfrom}
          onSelect={(name, value) => onSelect("stationfrom", value)}
          placeholder="Select departure station"
        />

        <ComboboxStations
          value={formStation.stationto}
          onSelect={(name, value) => onSelect("stationto", value)}
          placeholder="Select destination station"
        />
        <Button onClick={handleTicketPrice} disabled={isLoading}>
          {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
          Search
        </Button>
      </CardContent>
    </Card>
  );
}
