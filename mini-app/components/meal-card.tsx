"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface Meal {
  id: string;
  name: string;
  description: string;
  tags: string[];
}

export function MealCard({ meal }: { meal: Meal }) {
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
