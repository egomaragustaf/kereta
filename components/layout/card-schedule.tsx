import { ChevronRight, Train } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

type CardScheduleItem = {
  train_id: string;
  ka_name: string;
  route_name: string;
  dest: string;
  time_est: string;
  color: string;
  dest_time: string;
};

type CardScheduleProps = {
  item: CardScheduleItem;
};

export function CardSchedule({ item }: CardScheduleProps) {
  return (
    <Card
      key={item.train_id}
      className="border-l-8"
      style={{ borderLeftColor: item.color }}>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <Train />
            <Badge variant="outline">{item.train_id}</Badge>
          </div>

          <div className="flex-1 mx-6 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold truncate">{item.dest}</h3>
              <h4 className="font-semibold">{item.time_est}</h4>
            </div>

            <div className="flex items-center text-sm text-gray-600 mb-2">
              <span className="truncate">{item.ka_name}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            <Button size="sm" variant="outline" asChild>
              <Link href={`/train/${item.train_id}`}>
                <ChevronRight />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
