"use client";
import { Input } from "@/components/ui/input";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Input
      placeholder="Search meals..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-2/3"
    />
  );
}
