import { Routes } from "../../../../routes/models";

export const authFormConfig = {
	signup: {
		formTitle: "Sign up",
		redirectLabel: "Log in",
		redirectRoute: Routes.LOGIN,
	},
	login: {
		formTitle: "Log in",
		redirectLabel: "Sign up",
		redirectRoute: Routes.SIGNUP,
	},
};
