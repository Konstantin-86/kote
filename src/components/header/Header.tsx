import Link from "next/link";
import Image from "next/image";

import "../../styles/header/header.scss";

import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <Image src={logo} alt="logo" width={63} height={52}></Image>
      </Link>
      <nav>
        <ul>
          <li>Почему мы?</li>
          <li>
            <Link href={"/catalog"}>Номера</Link>
          </li>
          <li>Отзывы</li>
          <li>Как нас найти</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
