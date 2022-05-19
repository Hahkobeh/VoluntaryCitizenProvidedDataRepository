export type Permissions = {
	fire: boolean;
	police: boolean;
	ems: boolean;
};

export type Tab = {
	id:number;
	result:Result;
	search:Search;
}

export type Result = {
	data:any;

}

export type Search = {
	parameters: Parameter[];
};

export type Parameter = {
	key: string;
	value: string | number;
};
