"use client";

import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { TbMessageCircle } from "react-icons/tb";
import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.statusBar} aria-hidden="true">
          <span>9:41</span>
          <span className={styles.statusIcons}>Adam Kamal%</span>
        </div>

        <header className={styles.topBar}>
          <div className={styles.logo}>
            <BlueprintLogo />
          </div>
          <span className={styles.headerText}>
            <span className={styles.blueprint}>blueprint</span> volunteers
          </span>
        </header>

        <section className={styles.contentScroll}>
          <article className={styles.post}>
            <div className={styles.postHeader}>
              <div className={styles.avatar} />
              <div className={styles.userDetails}>
                <p className={styles.username}>
                  neha32 <span>at Mission Bit</span>
                </p>
                <p className={styles.location}>San Francisco, CA</p>
              </div>
            </div>

            <div className={styles.postBody}>
              <img
                className={styles.postImage}
                src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
                alt="San Francisco city streets and skyline"
              />

              <p className={styles.description}>
                This past weekend, I taught at Mission Bit. I was working with a
                group of 10 high school students who were building their first
                web pages. They were all really eager to learn, and I&apos;m
                glad I signed up. Highly recommend to any other software
                engineers interested in volunteering! Sign up here:
                https://missionbit.org/get-involved/volunteer-with-us/
              </p>

              <div className={styles.engagement}>
                <span>3 likes</span>
                <span>View 2 comments</span>
              </div>

              <div className={styles.actions}>
                <div className={styles.leftActions}>
                  <button aria-label="Like post">
                    <HeartIcon size={24} />
                  </button>
                  <button aria-label="View comments">
                    <TbMessageCircle size={24} />
                  </button>
                </div>
                <button aria-label="Share post">
                  <ShareIcon size={24} />
                </button>
              </div>

              <p className={styles.date}>February 1</p>
            </div>
          </article>

          <article className={styles.post}>
            <div className={styles.postHeader}>
              <div className={styles.avatar} />
              <div className={styles.userDetails}>
                <p className={styles.username}>
                  aiden_ugh <span>at Boys and Girls Club</span>
                </p>
                <p className={styles.location}>Oakland, CA</p>
              </div>
            </div>

            <div className={styles.postBody}>
              <p className={styles.description}>
                I recently volunteered at my local Boys and Girls Club!
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
