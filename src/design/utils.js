// src/design/utils.js (helper pour cn)
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine classes avec Tailwind merge
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
