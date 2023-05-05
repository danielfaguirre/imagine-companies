import { useAuthContext } from "../../../../contexts/AuthContext";
import useInputChange from "../../../../hooks/useInputChange";
import { Routes } from "../../../../routes/models";
import AuthForm from "../AuthForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LoginInfo, UserType } from "../../models";
import loginService from "../../../../services/login.service";

const Login = () => {
	const navigate = useNavigate();
	const { user, setUserInfo } = useAuthContext();
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [authInfo, handleInputChange] = useInputChange<LoginInfo>({
		email: "",
		password: "",
	});

	const handleSubmit = async () => {
		setErrorMessage("");
		setIsLoading(true);
		const { data, error } = await loginService.login(authInfo)
		if (error) {
			setErrorMessage(error);
		} else {
			setUserInfo(data as UserType);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		if (user) navigate(Routes.HOME);
	}, [user, navigate]);

	return (
		<AuthForm
			isLoading={isLoading}
			errorMessage={errorMessage}
			onSubmit={handleSubmit}
			onInputChange={handleInputChange}
			type="login"
		/>
	);
};

export default Login;
