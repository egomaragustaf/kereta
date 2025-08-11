"use client";

import * as React from "react";

import { CardSearchFare } from "@/components/layout/card-search-fare";
import { useTicketPrice } from "../hooks/useTicketPrice";
import { Loader } from "lucide-react";

export default function FarePage() {
  const [formStation, setFormStation] = React.useState({
    stationfrom: "",
    stationto: "",
  });
  const { mutate, data: ticket, isPending } = useTicketPrice();

  const onSelect = (name: string, value: string | null) => {
    setFormStation((current) => ({
      ...current,
      [name]: value || "",
    }));
  };

  const handleTicketPrice = () => {
    mutate({
      stationfrom: formStation.stationfrom,
      stationto: formStation.stationto,
    });
  };

  return (
    <section className="mx-auto flex w-full max-w-[500px] flex-col gap-0">
      <article className="flex w-full items-center justify-between py-4">
        <h1>FARE</h1>
      </article>

      <CardSearchFare
        formStation={formStation}
        onSelect={onSelect}
        handleTicketPrice={handleTicketPrice}
        isLoading={isPending}
      />

      <article className="flex w-full items-center justify-center min-h-[350px]">
        {isPending ? (
          <Loader className="animate-spin" size={60} />
        ) : (
          <h3>{ticket?.data[0].fare}</h3>
        )}
      </article>
    </section>
  );
}
