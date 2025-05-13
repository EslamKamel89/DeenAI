type AuthState = {
  isChatting: boolean;
  username: string;
};
export const useAuth = () => {
  const authState = useState<AuthState>("authState", () => ({
    isChatting: false,
    username: "",
  }));
  const setAuthState = (state: Partial<AuthState>) => {
    if (state.username) authState.value.username = state.username;
    if (state.isChatting) authState.value.isChatting = state.isChatting;
  };
  return {
    authState,
    setAuthState,
  };
};
