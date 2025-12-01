"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function MealCard({ meal }: { meal: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{meal.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{meal.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
