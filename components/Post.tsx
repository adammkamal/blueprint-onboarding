"use client";

import type { DatabaseComment } from "@/actions/supabase/queries/query";
import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { TbMessageCircle } from "react-icons/tb";
import Comment from "./Comment";
import styles from "./Post.module.css";

export interface PostProps {
  username: string;
  npo: string;
  city: string;
  state: string;
  text: string;
  image: string | null;
  likeCount: number;
  createdAt?: string;
  comments?: DatabaseComment[];
  showComments?: boolean;
  onOpenComments?: () => void;
}

export default function Post({
  username,
  npo,
  city,
  state,
  text,
  image,
  likeCount,
  createdAt,
  comments = [],
  showComments = false,
  onOpenComments,
}: PostProps) {
  const dateLabel = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      })
    : null;

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.avatar} aria-hidden="true" />
        <div className={styles.identity}>
          <p className={styles.byline}>
            <strong>
              {username} at {npo}
            </strong>
          </p>
          <p className={styles.location}>
            {[city, state].filter(Boolean).join(", ")}
          </p>
        </div>
      </header>
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={styles.photo}
          src={image}
          alt={`Volunteer activity shared by ${username}`}
          loading="lazy"
        />
      )}
      <p className={styles.body}>{text}</p>
      <div className={styles.meta}>
        <span>
          {likeCount} {likeCount === 1 ? "like" : "likes"}
        </span>
        {!showComments && comments.length > 0 && (
          <button
            type="button"
            className={styles.commentsToggle}
            onClick={onOpenComments}
          >
            View {comments.length}{" "}
            {comments.length === 1 ? "comment" : "comments"}
          </button>
        )}
      </div>
      <div className={styles.actions} aria-label="Post actions">
        <HeartIcon size={25} aria-label="Likes" />
        {onOpenComments && !showComments ? (
          <button
            type="button"
            className={styles.iconButton}
            aria-label={`View comments on ${username}'s post`}
            onClick={onOpenComments}
          >
            <TbMessageCircle size={25} />
          </button>
        ) : (
          <TbMessageCircle size={25} aria-label="Comments" />
        )}
        <span className={styles.actionSpacer} />
        <ShareIcon size={25} aria-label="Share" />
      </div>
      {dateLabel && <p className={styles.date}>{dateLabel}</p>}
      {showComments && (
        <section
          className={styles.comments}
          aria-label={`Comments on ${username}'s post`}
        >
          {comments.length === 0 ? (
            <p className={styles.emptyComments}>No comments yet.</p>
          ) : (
            comments.map(comment => (
              <Comment
                key={comment.id}
                username={comment.user_name}
                text={comment.comment_text}
                likeCount={comment.num_likes}
              />
            ))
          )}
        </section>
      )}
    </article>
  );
}
