import { Redirect } from "expo-router";

export default function Index() {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Redirect href={"/(auth)/welcome"} />;
  }
  return null;
}
