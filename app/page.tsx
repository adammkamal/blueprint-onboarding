"use client";

import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { LuCircle as ProfileIcon } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";
import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import "@/styles/global.css";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.logo}>
            <BlueprintLogo />
          </div>
          <span className={styles.headerText}>
            <span className={styles.blueprint}>blueprint</span> volunteers
          </span>
        </div>

        <div className={styles.contentScroll}>
          <ProfileIcon size={24} />
          <p>neha32 at Mission Bit</p>
          <p>San Francisco, CA</p>

          <p>
            Image Link:
            https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg
          </p>

          <p>
            This past weekend, I taught at Mission Bit. I was working with a
            group of high school students who were building their first web
            pages. I really enjoyed being able to help guide 10 students on
            learning CS fundamentals through a project! They were all really
            eager to learn, and I&#39;m glad I signed up. Highly recommend to
            any other software engineers interested in volunteering! Sign-up
            here: https://missionbit.org/get-involved/volunteer-with-us/
          </p>

          <p>3 Likes</p>
          <p>View 2 Comments</p>
          <HeartIcon size={24} />
          <TbMessageCircle size={24} />
          <ShareIcon size={24} />

          <p>February 1</p>

          <ProfileIcon size={24} />
          <p>aiden_ugh at Boys and Girls Club</p>
          <p>Oakland, CA</p>
          <p>I recently volunteered at my local Boys and Girls Club!</p>
        </div>
      </div>
    </main>
  );
}
