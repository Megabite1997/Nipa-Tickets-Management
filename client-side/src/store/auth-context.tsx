import {
  createContext,
  FC,
  useState,
  useEffect,
  useContext,
  ReactElement,
} from "react";

interface Props {
  children: ReactElement;
}

type UserInfo = {
  // Define the properties of userInfo here
  name?: string;
  email?: string;
  // Add other properties as needed
};

interface AuthContextProps {
  token: string | null;
  isAuthenticated: boolean;
  login: (jwtToken: string) => void;
  logout: () => void;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | undefined>>;
}

const AuthContext = createContext<AuthContextProps>({
  token: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  setUserInfo: () => {},
});

export const AuthProviderProvider: FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  // Check if a token exists in localStorage on page load
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
    }
  }, []);

  // Login function
  const login = (jwtToken: string) => {
    localStorage.setItem("token", jwtToken);
    setIsAuthenticated(true);
    setToken(jwtToken);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setToken(null);
  };

  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length)
      console.log("userInfo: ", userInfo);
  }, [userInfo]);

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, login, logout, setUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
