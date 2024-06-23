type LinkType = {
	id: number;
	text: string;
}

type Heading2Type = {
	title: string;
	image: {
		url: string;
	}
}

export type HeroBlockType = {
	data: {
		page: string;
		position: string;
		offWhite: boolean;
		links: LinkType[];
		h2: Heading2Type;
		h4: string;
		image: {
			url: string
		}
		
	}
}