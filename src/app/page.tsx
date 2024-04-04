import Link from "next/link";
import Image from "next/image";

import buttonIcon from "../images/icons/buttonIcon.png";

import styles from "./page.module.scss";
import WhyWe from "@/components/whyWe/WhyWe";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <p className={styles.main__city}>Санкт-Петербург</p>
        <h1 className={styles.main__title}>Котейка</h1>
        <h2 className={styles.main__subtitle}>
          Уютная гостиница для котов и кошек
        </h2>
        <Link href={"/catalog"} className={styles.main__button}>
          Забронировать
        </Link>
      </main>
      <WhyWe />
    </>
  );
}
