
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.htaccess" | "/favicon.ico" | "/favicon.png" | "/fl-1.png" | "/fl-2.png" | "/fl-3.png" | "/graduationexhibition2023.svg" | "/greeting-teacher-img.png" | "/lecturers/akiyoshisama.jpg" | "/lecturers/hiraisama.jpg" | "/lecturers/itosama.jpg" | "/lecturers/kano.jpg" | "/lecturers/komata.jpg" | "/lecturers/mariko.jpg" | "/lecturers/narasama.jpg" | "/lecturers/sakai.jpg" | "/lecturers/sakakibara.jpg" | "/lecturers/taka.jpg" | "/lecturers/takeda.jpg" | "/lecturers/yoshiizumisama.jpg" | "/ogp.png" | "/title-v2-1.png" | "/title-v2.png" | "/top-pc 1.png" | "/top-pc.png" | "/top-sp 1.png" | "/top-sp.png" | string & {};
	}
}