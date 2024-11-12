import { useAuth0 } from "@auth0/auth0-react";
export function useGetUser() {
  const { user } = useAuth0();
  return user;
}
export function useIsAuthenticated() {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated;
}
export function useLogin() {
  const { loginWithRedirect } = useAuth0();
  return loginWithRedirect;
}
export function useLogout() {
  const { logout } = useAuth0();
  return logout;
}
