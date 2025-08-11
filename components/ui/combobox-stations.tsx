"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Stations } from "@/app/schemas/stations";
import {
  groupStationsByCategory,
  findSelectedStation,
  findStationIdByName,
  getStationDisplayLabel,
} from "@/lib/stations-utils";
import { useGetStations } from "@/app/hooks/useStations";

type ComboboxStationsProps = {
  onSelect: (name: string, value: string) => void;
  value: string;
  placeholder?: string;
};

export function ComboboxStations({
  onSelect,
  value,
  placeholder,
}: ComboboxStationsProps) {
  const [open, setOpen] = React.useState(false);

  const { data: stations, isLoading } = useGetStations();

  const groupedStations = React.useMemo(() => {
    return groupStationsByCategory(stations);
  }, [stations]);

  const selectedStation = React.useMemo(() => {
    return findSelectedStation(value, stations);
  }, [value, stations]);

  const labelStation = getStationDisplayLabel(selectedStation, placeholder);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={isLoading}
          className="w-full justify-between">
          {isLoading ? "Loading..." : labelStation}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="p-0 w-[var(--radix-popover-trigger-width)]">
        <Command>
          <CommandInput placeholder="Search the station.." className="h-9" />
          <CommandList>
            <CommandEmpty>No station found.</CommandEmpty>
            {groupedStations.map((group) => (
              <CommandGroup key={group.category} heading={group.category}>
                {group.stations.map((station: Stations) => (
                  <CommandItem
                    key={station.sta_id}
                    value={station.sta_name}
                    onSelect={(currentValue) => {
                      const selectedStationId = findStationIdByName(
                        currentValue,
                        stations
                      );
                      onSelect(
                        "stationid",
                        selectedStationId === value ? "" : selectedStationId
                      );
                      setOpen(false);
                    }}>
                    {station.sta_name}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === station.sta_id ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
