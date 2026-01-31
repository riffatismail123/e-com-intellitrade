import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Essential for dynamic Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());