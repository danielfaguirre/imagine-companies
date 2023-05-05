import { authFormConfig } from "./constants";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthFormContainer } from './styles'

export type AuthFormType = {
	type: "login" | "signup";
	isLoading: boolean;
	errorMessage: string;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
};

const AuthForm = ({
	isLoading,
	errorMessage,
	type,
	onInputChange,
	onSubmit,
}: AuthFormType) => {
	const navigate = useNavigate();

	const { formTitle, redirectLabel, redirectRoute } = authFormConfig[type];
	return (
		<AuthFormContainer
			autoComplete="off"
			onFinish={() => onSubmit()}
			name={formTitle}
			initialValues={{ remember: true }}
		>
			<Typography.Title>{formTitle}</Typography.Title>
			{type === "signup" && (
				<Form.Item
					name="userName"
					rules={[
						{ required: true, message: "Please input your Display name!" },
					]}
				>
					<Input
						disabled={isLoading}
						prefix={<UserOutlined />}
						placeholder="User name"
						name="name"
						onChange={onInputChange}
					/>
				</Form.Item>
			)}
			<Form.Item
				name="email"
				rules={[{ required: true, message: "Please input your Email!" }]}
			>
				<Input
					disabled={isLoading}
					prefix={<MailOutlined />}
					placeholder="Email"
					type="email"
					name="email"
					onChange={onInputChange}
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: "Please input your Password!" }]}
			>
				<Input
					disabled={isLoading}
					prefix={<LockOutlined />}
					type="password"
					placeholder="Password"
					name="password"
					onChange={onInputChange}
				/>
			</Form.Item>
			{type === "signup" && (
				<Form.Item
					name="confirmPassword"
					rules={[
						{
							required: true,
							message: "Please confirm your Password!",
						}
					]}
				>
					<Input
						disabled={isLoading}
						prefix={<LockOutlined />}
						type="password"
						placeholder="Confirm password"
						name="confirmPassword"
						onChange={onInputChange}
					/>
				</Form.Item>
			)}
			<Form.Item>
				<Button
					loading={isLoading}
					type="primary"
					htmlType="submit"
				>
					{formTitle}
				</Button>
				<Button
					loading={isLoading}
					onClick={() => navigate(redirectRoute)}
					type="link"
				>
					{redirectLabel}
				</Button>
			</Form.Item>
			{errorMessage && <Alert type="error" message={errorMessage} />}
		</AuthFormContainer>
	);
};

export default AuthForm;
