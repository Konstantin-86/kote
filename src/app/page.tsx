import Link from "next/link";
import Image from "next/image";

import buttonIcon from "../images/icons/buttonIcon.png";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <p className="main__city">Санкт-Петербург</p>
        <h1>
          Котейка <span>Уютная гостиница для котов и кошек</span>
        </h1>
        <Link href={"/catalog"} className={styles.main__button}>
          Забронировать
          <Image
            src={buttonIcon}
            alt="buttonIcon"
            width={36}
            height={36}
          ></Image>
        </Link>
      </main>
    </>
  );
}
