// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

interface ProjectType {
	id: string;
	name: string;
	title: string;
	description: string[];
	link?: string;
	linkText?: string;
	image: string;
}
