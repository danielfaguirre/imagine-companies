import { useState } from "react";

const useInputChange = <T,>(
	initialState: T,
): [
		T,
		(e: React.ChangeEvent<HTMLInputElement>) => void,
		(values: T) => void
	] => {
	const [inputs, setInputs] = useState<T>(initialState);
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setInputs({ ...inputs, [name]: value });
	};

	const setValues = (values: T) => {
		setInputs(values)
	}

	return [inputs, handleInputChange, setValues];
};

export default useInputChange;
