import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

import { AuthContextType } from "../models";
import { UserType } from "../../modules/Auth/models";
import { StorageEnum } from "../../config/storage/models";
import storage from "../../config/storage";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<UserType | undefined>();

	const setUserInfo = (userInfo?: UserType) => {
		if (userInfo) {
			storage.set(StorageEnum.USER_INFO, userInfo)
		} else {
			storage.remove(StorageEnum.USER_INFO)
		}
		setUser(userInfo)
	}

	useEffect(() => {
		const storagedUser = storage.get<UserType>(StorageEnum.USER_INFO)
		if (!user && storagedUser) {
			setUser(storagedUser)
		}
	}, [user]);

	return (
		<AuthContext.Provider value={{ user, setUserInfo }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext) as AuthContextType;
};

export default AuthProvider;
