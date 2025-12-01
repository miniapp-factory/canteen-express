"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TagPanel } from "./tag-panel";

export function FilterButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(!open)}>
        Filters
      </Button>
      {open && <TagPanel onClose={() => setOpen(false)} />}
    </>
  );
}
