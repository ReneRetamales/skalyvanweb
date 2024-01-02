import { Home, Watch, Music, Memories, Events, Social } from "@/components";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section id="home" className={styles.home}>
        <Home />
      </section>
      <section id="watch" className={styles.watch}>
        <Watch />
      </section>
      <section id="music" className={styles.music}>
        <Music />
      </section>
      <section id="memories" className={styles.memories}>
        <Memories />
      </section>
      <section id="events" className={styles.events}>
        <Events />
      </section>
      <section id="social" className={styles.social}>
        <Social />
      </section>
      {/* <Footer /> */}
    </div>
  );
}
