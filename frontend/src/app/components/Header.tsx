import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.link}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/gallery">Gallery</Link>
                    </li>
                    <figure>
                        <Image
                            // className={styles.logo}
                            src="/krenevicius-logo.svg"
                            alt="Krenevicius Logo"
                            width={93}
                            height={58}
                            priority
                        />
                    </figure>
                    <li className={styles.link}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
