import { writable } from "svelte/store";

export const intersections = writable(0);

export const increment = () => {
    return intersections.update((n) => n + 1);
}