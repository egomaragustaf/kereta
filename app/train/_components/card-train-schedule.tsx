"use client";

import { useGetTrainSchedule } from "@/app/hooks/useTrain";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function TrainSchedule({ trainId }: { trainId: string }) {
  const { data: train, error, isLoading } = useGetTrainSchedule(trainId);

  return (
    <ul className="flex w-full flex-col gap-2">
      {train &&
        train.map((item) => (
          <li key={item.time_est}>
            <Card className={item.transit_station ? "bg-gray-200" : ""}>
              <CardHeader>
                <CardTitle>
                  {item.station_name}
                  {item.transit_station ? " - Transit Station" : ""}
                </CardTitle>
                <CardAction>
                  <h1>{item.time_est}</h1>
                </CardAction>
              </CardHeader>
            </Card>
          </li>
        ))}
    </ul>
  );
}
