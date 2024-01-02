import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  SiSpotify,
  SiYoutube,
  SiYoutubemusic,
  SiApplemusic,
} from "react-icons/si";
import styles from "./Music.module.css";

export const Music = () => {
  return (
    <div className={styles.music}>
      <span className={styles.title}>Music</span>
      <div className={styles.info}>
        <div className={styles.text}>
          <span>Listen our music in your favourite streaming platform!</span>
        </div>
        <div className={styles.links}>
          <Link
            href={
              "https://open.spotify.com/intl-es/artist/0eAsrkteWawo9GijMIJUty"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.link}>
              <SiSpotify />
              <span>Spotify</span>
            </div>
          </Link>
          <Link
            href={"https://www.youtube.com/@skalyvan"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.link}>
              <SiYoutube />
              <span>Youtube</span>
            </div>
          </Link>
          <Link
            href={"https://music.youtube.com/channel/UCP-Puc62tyNg_3smqkPBLMg"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.link}>
              <SiYoutubemusic />
              <span>YT Music</span>
            </div>
          </Link>
          <Link
            href={"https://music.apple.com/mx/artist/skalyvan/1569775068"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.link}>
              <SiApplemusic />
              <span>Apple Music</span>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.discography}>
        <div className={styles.cover}>
          <Image
            src={"/imgs/ashescover.jpg"}
            alt="Ashes To Remain Album Cover"
            className={styles.image}
            width={3000}
            height={3000}
          />

          <div className={styles.document}>
            <div className={styles.square}>
              <div className={styles.listens}>
                <Link
                  href={
                    "https://open.spotify.com/intl-es/album/2Tb5zXSe2LrDrB8c75aAbI"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.listen}
                >
                  <SiSpotify />
                </Link>
                <Link
                  href={
                    "https://www.youtube.com/watch?v=-GYRrXVXgJ0&list=PLtAyyY34HxpJRXCfb1HufFzg38VLYeO2Q"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.listen}
                >
                  <SiYoutube />
                </Link>
                <Link
                  href={
                    "https://music.youtube.com/playlist?list=OLAK5uy_n6jUnhy0aOz0ki4RRCX4LYYRxlG_wwdr0"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.listen}
                >
                  <SiYoutubemusic />
                </Link>
                <Link
                  href={
                    "https://music.apple.com/mx/album/ashes-to-remain/1701558663"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.listen}
                >
                  <SiApplemusic />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
