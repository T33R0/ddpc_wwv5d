import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              DDPC Documentation
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Welcome to the official documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
