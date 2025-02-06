import { writable } from 'svelte/store';

export const openHistoryModal = writable(false);
export const history = writable([]);
