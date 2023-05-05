import useInputChange from "../../../../hooks/useInputChange";
import { Routes } from "../../../../routes/models";
import { SignupInfo } from "../../models";
import AuthForm from "../AuthForm";
import { validateConfirmPassword } from "./utils";
import { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [authInfo, handleInputChange] = useInputChange<SignupInfo>({
		email: "",
		password: "",
		name: "",
		confirmPassword: "",
	});

	const handleSubmit = async () => {
		setErrorMessage("");
		setIsLoading(true);
		const confirmPasswordErrorMessage = validateConfirmPassword(authInfo.password, authInfo.confirmPassword)
		if (confirmPasswordErrorMessage === "") {

			console.log(authInfo)
			/**
			 * TODO: 
			 * 1 - Call sign up service using authInfo as parameter
			 * 2 - Sample: const { error } = await firebaseSignupUser(authInfo);
			 * 3 - delete hard-coded error const
			 */
			const error = ""
			if (error) setErrorMessage(error);
			else navigate(Routes.LOGIN);
		} else {
			setErrorMessage(confirmPasswordErrorMessage)
		}

		setIsLoading(false);
	};

	return (
		<AuthForm
			isLoading={isLoading}
			errorMessage={errorMessage}
			onSubmit={handleSubmit}
			onInputChange={handleInputChange}
			type="signup"
		/>
	);
};

export default Signup;
