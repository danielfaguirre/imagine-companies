export type ArticleType = {
	id: string | number;
	name: string;
	companyNIT: string
};

export type CompanyType = {
	NIT: string;
	address: string;
	phone: string;
	name: string;
	articles: ArticleType[];
};
