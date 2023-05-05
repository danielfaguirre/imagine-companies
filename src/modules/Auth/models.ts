export enum RoleEnum {
	ADMIN = "admin",
	GENERAL = "general",
}

export type UserType = {
	id: string;
	name: string,
	role: string;
};

export type LoginInfo = {
	email: string;
	password: string;
};

export type SignupInfo = {
	email: string;
	password: string;
	confirmPassword?: string;
	name: string;
};
