"use client";
import { useEffect, useState, createContext } from "react";
import { MealCard } from "./meal-card";
import { SearchBar } from "./search-bar";
import { FilterButton } from "./filter-button";
import { fetchMeals } from "@/lib/api";

interface Meal {
  id: string;
  name: string;
  description: string;
  tags: string[];
}

interface MenuContextProps {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

export const MenuContext = createContext<MenuContextProps>({
  selectedTags: [],
  setSelectedTags: () => {},
});

export function Menu() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    fetchMeals().then(setMeals);
  }, []);

  const filtered = meals.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase());
    const matchesTags = selectedTags.every(tag => m.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <MenuContext.Provider value={{ selectedTags, setSelectedTags }}>
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <SearchBar value={search} onChange={setSearch} />
          <FilterButton />
        </div>
        <div className="grid grid-cols-1 gap-4">
          {filtered.map(meal => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </MenuContext.Provider>
  );
}
