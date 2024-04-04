"use client";
import Image from "next/image";
import { Rubik } from "next/font/google";
import { motion, useScroll } from "framer-motion";

import img1 from "../../images/icons/whyWe/icon1.png";
import img2 from "../../images/icons/whyWe/icon2.png";
import img3 from "../../images/icons/whyWe/icon3.png";
import img4 from "../../images/icons/whyWe/icon4.png";
import img5 from "../../images/icons/whyWe/icon5.png";
import img6 from "../../images/icons/whyWe/icon6.png";

import styles from "../../styles/whyWe/whyWe.module.scss";

const rubic = Rubik({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  style: "normal",
});

const item = [
  {
    id: 1,
    image: img1,
    title: "Комфортная температура",
    text: "Во всех номерах поддерживается комфортная температура в пределах 23 - 25 градусов. В каждом номере можно дополнительно отрегулироватьтемпературу.",
  },
  {
    id: 2,
    image: img2,
    title: "Видеонаблюдение",
    text: "Мы предоставляем доступ в нашу систему. Вы сможете следить за своим питомцем со своего смартфона или компьютера.",
  },
];

const WhyWe = () => {
  return (
    <div className={styles.container}>
      <h2 className={`${rubic.className} ${styles.title}`}>Почему мы?</h2>

      <div className={styles.inner}>
        {item.map((item) => (
          <motion.div
            className={styles.item}
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{ y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
          >
            <Image src={item.image} alt="img1" width={91} height={91}></Image>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
        {/*  <div className={styles.item}>
            <Image src={img1} alt="img1" width={91} height={91}></Image>
            <h3>Комфортная температура</h3>
            <p>
              Во всех номерах поддерживается комфортная температура в пределах
              23 - 25 градусов. В каждом номере можно дополнительно
              отрегулировать температуру.
            </p>
          </div>
          <div className={styles.item}>
            <Image src={img2} alt="img1" width={91} height={91}></Image>
            <h3>Видеонаблюдение</h3>
            <p>
              Мы предоставляем доступ в нашу систему. Вы сможете следить за
              своим питомцем со своего смартфона или компьютера.
            </p>
          </div>
          <div className={styles.item}>
            <Image src={img3} alt="img1" width={91} height={91}></Image>
            <h3>Услуги Зоотакси</h3>
            <p>Мы приедем за вашим питомцем в любой район Санкт-Петербурга.</p>
          </div>
          <div className={styles.item}>
            <Image src={img4} alt="img1" width={91} height={91}></Image>
            <h3>Сбалансированное питание</h3>
            <p>
              Вы можете привезти свой корм или доверить рацион своего питомца
              нашим профессионалам.
            </p>
          </div>
          <div className={styles.item}>
            <Image src={img5} alt="img1" width={91} height={91}></Image>
            <h3>Ежедневные прогулки</h3>
            <p>
              По вашему желанию мы выгуливаем вашего питомца два раза в день на
              специализированной закрытой территории.
            </p>
          </div>
          <div className={styles.item}>
            <Image src={img6} alt="img1" width={91} height={91}></Image>
            <h3>Лучшие ветеринары</h3>
            <p>
              В гостинице 24 часа дежурит ветеринарный врач, который окажет
              любую помощь в случае необходимости.
            </p>
          </div> */}
      </div>
    </div>
  );
};

export default WhyWe;
