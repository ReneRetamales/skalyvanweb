"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.div}>
        <span className={styles.link} onClick={() => scrollToSection("watch")}>
          Watch
        </span>
        <span className={styles.link} onClick={() => scrollToSection("music")}>
          Music
        </span>
        <span
          className={styles.link}
          onClick={() => scrollToSection("memories")}
        >
          Memories
        </span>
      </div>
      <div onClick={() => scrollToSection("home")}>
        <Image
          src={"/imgs/logowhite.png"}
          alt="SkalyVan Logo"
          className={styles.logo}
          width={375}
          height={125}
        />
      </div>
      <div className={styles.div}>
        <span className={styles.link} onClick={() => scrollToSection("events")}>
          Events
        </span>
        <span className={styles.link} onClick={() => scrollToSection("social")}>
          Social
        </span>
        <Link
          href={"/shop/products"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Shop
        </Link>
      </div>
    </nav>
  );
};
