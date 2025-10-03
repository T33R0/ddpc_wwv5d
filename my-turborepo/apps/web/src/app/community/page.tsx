import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/card";
import { mockUsers } from "../../lib/mock-data";

import LandingLayout from "../landing-layout";

export default function Community() {
  return (
    <LandingLayout>
      <section className="py-12 pt-32">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tighter mb-8">Community</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mockUsers.map((user) => (
            <Card key={user.id} className="text-center">
              <CardHeader>
                <Image
                  src={user.avatarUrl || "/avatars/placeholder.svg"}
                  alt={user.username}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">{user.username}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </LandingLayout>
  );
}
