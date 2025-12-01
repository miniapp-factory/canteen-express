export async function fetchMeals() {
  const res = await fetch("/api/meals");
  if (!res.ok) throw new Error("Failed to fetch meals");
  return res.json();
}
