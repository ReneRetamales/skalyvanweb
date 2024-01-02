import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";

import {
  SiInstagram,
  SiSpotify,
  SiFacebook,
  SiTiktok,
  SiYoutube,
  SiYoutubemusic,
  SiApplemusic,
} from "react-icons/si";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Image
        src="/imgs/background.jpg"
        alt="SkalyVan Band Members Background"
        className={styles.background}
        width={5738}
        height={4000}
      />
      <div>
        <Image
          src={"/imgs/logowhite.png"}
          alt="SkalyVan Logo"
          className={styles.logo}
          width={375}
          height={125}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.left}></div>
        <div className={styles.center}>
          <span>Copyright © 2024 SkalyVan</span>
        </div>
        <div className={styles.right}>
          <Link
            href={"https://www.instagram.com/skalyvanband/?hl=es-la"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <SiInstagram />
          </Link>
          <Link
            href={"https://www.facebook.com/SkalyVan/"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <SiFacebook />
          </Link>
          <Link
            href={"https://www.tiktok.com/@skalyvanband"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <SiTiktok />
          </Link>
          <Link
            href={"https://www.youtube.com/@skalyvan"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <SiYoutube />
          </Link>
          <Link
            href={
              "https://open.spotify.com/intl-es/artist/0eAsrkteWawo9GijMIJUty"
            }
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <SiSpotify />
          </Link>
          <Link
            href={"https://music.youtube.com/channel/UCP-Puc62tyNg_3smqkPBLMg"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <SiYoutubemusic />
          </Link>
          <Link
            href={"https://music.apple.com/mx/artist/skalyvan/1569775068"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <SiApplemusic />
          </Link>
        </div>
      </div>
    </div>
  );
};
