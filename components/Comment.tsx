import { FiHeart as HeartIcon } from "react-icons/fi";
import styles from "./Comment.module.css";

export interface CommentProps {
  username: string;
  text: string;
  likeCount: number;
}

export default function Comment({ username, text, likeCount }: CommentProps) {
  return (
    <div className={styles.comment}>
      <div className={styles.avatar} aria-hidden="true" />
      <div className={styles.details}>
        <p>
          <strong>{username}</strong> {text}
        </p>
        <small>
          {likeCount} {likeCount === 1 ? "like" : "likes"}
        </small>
      </div>
      <HeartIcon
        size={19}
        aria-label="Comment likes"
        className={styles.heart}
      />
    </div>
  );
}
