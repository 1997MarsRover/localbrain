import { invoke } from '@tauri-apps/api';

type CurrentLanguageModel = {
	filename: string;
	name: string;
	path: string;
};

export async function getCurrentModel(): Promise<CurrentLanguageModel | null> {
	try {
		return await invoke<CurrentLanguageModel>('get_current_model');
	} catch (e) {
		console.error(e);
	}
	return null;
}

// export async function getModelName(): Promise<string | null> {
// 	let store: Store = new Store('store.bin');
// 	return await store.get<string>('current_model_name');
// }

// export async function getCurrentModelId(): Promise<number | null> {
// 	let store: Store = new Store('store.bin');
// 	return await store.get<number>('current_model_id');
// }

// export async function getCurrentModelName(): Promise<string | null> {
// 	let store: Store = new Store('store.bin');
// 	console.log(store);
// 	return await store.get<string>('current_model_name');
// }
