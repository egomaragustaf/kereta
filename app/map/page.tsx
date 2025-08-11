import { CardRouteMap } from "./_components/card-routemap";

export default function MapPage() {
  return (
    <section className="mx-auto flex w-full max-w-[500px] flex-col gap-0">
      <article className="flex w-full items-center justify-between py-4">
        <h1>Map</h1>
      </article>

      <article className="flex w-full items-center justify-center">
        <CardRouteMap />
      </article>
    </section>
  );
}
