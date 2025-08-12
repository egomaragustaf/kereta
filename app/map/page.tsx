import { CardRouteMap } from "./_components/card-routemap";

export default async function MapPage() {
  return (
    <section className="relative flex flex-col h-screen">
      <article className="flex w-full items-center justify-between py-4">
        <h1>MAP</h1>
      </article>

      <article className="flex w-full items-center justify-center">
        <CardRouteMap />
      </article>
    </section>
  );
}
