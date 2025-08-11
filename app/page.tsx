"use client";

import * as React from "react";
import { Search, Loader } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardSearchStations } from "@/components/layout/card-search-stations";
import { CardSchedule } from "@/components/layout/card-schedule";

import { useGetSchedule } from "./hooks/useSchedule";

export default function Home() {
  const [formSchedule, setFormSchedule] = React.useState({
    stationid: "",
    timefrom: "",
    timeto: "",
  });
  const [isShownSearch, setIsShownSearch] = React.useState(true);
  const { mutate, data: schedule, isPending } = useGetSchedule();

  const onSelect = (name: string, value: string | null) => {
    setFormSchedule((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSearchSchedule = () => {
    mutate({
      stationid: formSchedule.stationid,
      timefrom: formSchedule.timefrom,
      timeto: formSchedule.timeto,
    });
    setIsShownSearch(false);
  };

  return (
    <section className="mx-auto flex w-full max-w-[500px] flex-col gap-0">
      <article className="flex w-full items-center justify-between py-4">
        <h1>STATION</h1>

        <Button
          className="h-8 w-8 p-0"
          variant="outline"
          onClick={() => setIsShownSearch((prev) => !prev)}>
          <Search />
        </Button>
      </article>

      {isShownSearch && (
        <CardSearchStations
          formSchedule={formSchedule}
          onSelect={onSelect}
          handleSearchSchedule={handleSearchSchedule}
          isLoading={isPending}
        />
      )}

      {isPending && (
        <article className="flex w-full items-center justify-center min-h-[350px]">
          <Loader className="animate-spin" size={60} />
        </article>
      )}

      <article className="grid w-full grid-cols-1 gap-2">
        {schedule &&
          schedule.data.map((item) => (
            <CardSchedule key={item.train_id} item={item} />
          ))}
      </article>
    </section>
  );
}
