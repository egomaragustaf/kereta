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
import { generateHourlyTimes } from "@/lib/time";

type ComboboxStationsProps = {
  onSelect: (name: string, value: string | null) => void;
  value: string;
};

export function ComboboxTimeEnd({ onSelect, value }: ComboboxStationsProps) {
  const [open, setOpen] = React.useState(false);

  const times = generateHourlyTimes();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between">
          {times.includes(value) ? `${value} WIB` : "End"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="p-0 w-[var(--radix-popover-trigger-width)]">
        <Command>
          <CommandInput placeholder="Search time..." className="h-9" />
          <CommandList>
            <CommandEmpty>No time found.</CommandEmpty>
            <CommandGroup>
              {times.map((time) => (
                <CommandItem
                  key={time}
                  value={time}
                  onSelect={(currentValue) => {
                    onSelect(
                      "timeto",
                      currentValue === value ? "" : currentValue
                    );
                    setOpen(false);
                  }}>
                  {time}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === time ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
