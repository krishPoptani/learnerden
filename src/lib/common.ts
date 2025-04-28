import { useState, useEffect, RefObject } from "react";

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function useClickOutside<T extends HTMLElement | null>(
  ref: RefObject<T>,
  callback: () => void
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export const useDebounce = <T>(value: T, delay: number): [T] => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value !== undefined) {
        setDebouncedValue(value);
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue];
};

export function capitalizeFirstLetterAfterSpace(inputString: string): string {
  if (typeof inputString !== "string") return inputString;

  const words = inputString.split("_");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const goBack = (): void => {
  if (typeof window !== "undefined") {
    window.history.back();
  }
};

export function isEmpty(obj: Record<string, unknown>): boolean {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function isArrEmpty<T>(arr: T[] | undefined | null): boolean {
  return Array.isArray(arr) && arr.length === 0;
}
