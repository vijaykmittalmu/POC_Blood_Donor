import { redirect } from "react-router-dom";
import mockResponse from "../mockData.json";

export const AuthLoader = ({ request }: any) => {
  let isUserLoggedIn = true;
  let users = [];
  if (!isUserLoggedIn) {
    return redirect("/auth/login");
  }
  users = mockResponse;
  return { users };
};
