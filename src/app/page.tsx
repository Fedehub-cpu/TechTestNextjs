import styles from "./page.module.css";
import Link from "next/link";
import ThemeSwitcher from "./components/themeSwitcher/ThemeSwitcher";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
    <main className={styles.main}>
      <div className={styles.homeApp}>
      <h2 className="font-bold text-accent text-4xl">This is the Home Page</h2>
      <h3 className="text-accent font-semibold pt-4 text-xl">Click on the brush icon in the banner to switch your theme system.</h3>
      <div>
      </div>
      <Link className="font-bold text-accent text-lg mt-5 p-2 border-black border" href={'/login'}>Click here to log in!</Link>
      </div>
    </main>
    </div>
  );
}
