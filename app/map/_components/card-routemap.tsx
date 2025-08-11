"use client";

import { useGetRouteMap } from "@/app/hooks/useRouteMap";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export function CardRouteMap() {
  const { data: routemaps, isLoading } = useGetRouteMap();

  return (
    <ul className="flex w-full flex-col gap-2">
      {isLoading && (
        <li>
          <Card>
            <Skeleton className="w-full h-[500px]" />
          </Card>
        </li>
      )}
      {routemaps &&
        routemaps.map((routemap) => {
          const imageUrl = routemap.permalink.replace("http://", "https://");

          return (
            <li key={routemap.permalink}>
              <Card>
                <Image
                  src={imageUrl}
                  alt={`Area ${routemap.area}`}
                  width={500}
                  height={500}
                />
              </Card>
            </li>
          );
        })}
    </ul>
  );
}
