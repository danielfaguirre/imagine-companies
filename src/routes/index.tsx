import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import { Routes } from "./models";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: Routes.HOME,
		element: <HomePage />,
	},
	{
		path: Routes.LOGIN,
		element: <LoginPage />,
	},
	{
		path: Routes.SIGNUP,
		element: <SignupPage />,
	},
	{
		path: Routes.INVENTORY,
		element: <>INVENTORY</>,
	},
]);
