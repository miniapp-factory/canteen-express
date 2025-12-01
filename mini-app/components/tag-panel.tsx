"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { MenuContext } from "./menu";

export const tags = [
  "spicy",
  "non-spicy",
  "vegetarian",
  "bestseller",
  "budget",
];

export function TagPanel({ onClose }: { onClose: () => void }) {
  const { selectedTags, setSelectedTags } = useContext(MenuContext);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="p-4 bg-background rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Filter by tags</h3>
      <div className="flex flex-col space-y-2">
        {tags.map(tag => (
          <div key={tag} className="flex items-center space-x-2">
            <Checkbox
              id={tag}
              checked={selectedTags.includes(tag)}
              onCheckedChange={() => toggleTag(tag)}
            />
            <Label htmlFor={tag}>{tag}</Label>
          </div>
        ))}
      </div>
      <Button className="mt-4" onClick={onClose}>
        Close
      </Button>
    </div>
  );
}
