import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ParseStringify = (value: unknown) => {
  return JSON.parse(JSON.stringify(value))
}

export const handleError = (error: unknown, message: string) => {
  throw new Error(`${error}: ${message}`);
}
