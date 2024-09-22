import { Metadata } from "next";
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated page to describe about our activity",
};

export default function Dashboard() {
    return (
      <div className="flex justify-center items-center h-full flex-col">
        <h1>Dashboard</h1>
        <p>In this section you will find our dashboard.</p>
        <div className='div_one'>       
          <a href="/">Go Home</a>
        </div>
      </div>
    );
  }
  