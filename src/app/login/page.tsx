import { Metadata } from "next";
import styles from './page.module.css';
import Login from "../components/login/Login";

export const metadata: Metadata = {
  title: "Login",
  description: "Page where the user log in",
};

export default function LoginPage() {
    return (
      <div>
        <div>       
          <Login></Login>
        </div>
      </div>
    );
  }
  