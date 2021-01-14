export interface Pokemon {
	id: number;
	name: string;
	img: string;
	icon: string;
	types: Array<Types>;
	stats: Array<Stats>;
	moves: Array<Moves>;
}

export interface SingleProp {
	name: string;
	url: string;
}

interface Stats {
	base_stat: number;
	effort: number;
	stat: SingleProp;
}

interface Types {
	slot: number;
	type: SingleProp;
}

interface Moves {
	move: SingleProp;
	version_group_details: any;
}

export interface TypeColor {
	background: string;
	color: string;
}
