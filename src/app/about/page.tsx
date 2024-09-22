import { Metadata } from "next";
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "About",
  description: "Generated page to describe about our activity",
};

export default function About() {
    return (
      <div className="flex justify-center items-center h-full flex-col">
        <h1>About Us</h1>
        <p>Welcome to the About page of our Next.js app.</p>
        <div className='div_one'>       
          <a href="/">Go Home</a>
        </div>
      </div>
    );
  }
  