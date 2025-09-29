import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/card";
import { VehicleFilters } from "../../features/discover/vehicle-filters";
import { mockVehicles } from "../../lib/mock-data";

export default function Discover() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tighter mb-8 pt-20">Discover Projects</h1>
        <VehicleFilters />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockVehicles.map((vehicle) => (
            <Card key={vehicle.id}>
              <CardHeader>
                <Image
                  src={vehicle.imageUrl || "/placeholder.svg"}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  width={400}
                  height={225}
                  className="rounded-t-lg object-cover aspect-video"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl">{vehicle.make} {vehicle.model}</CardTitle>
                <p className="text-muted-foreground">{vehicle.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
