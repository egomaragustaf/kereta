import { Train } from "lucide-react";
import { TrainSchedule } from "../_components/card-train-schedule";

export default async function PageTrain({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="mx-auto flex w-full max-w-[500px] flex-col gap-0">
      <article className="flex w-full items-center justify-between py-4">
        <h1>KERETA</h1>

        <div className="flex items-center justify-center">
          <Train />
          <span className="ml-2 font-semibold">{slug}</span>
        </div>
      </article>
      <TrainSchedule trainId={slug} />
    </section>
  );
}
