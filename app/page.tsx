"use client";

import type {
  DatabaseComment,
  DatabaseLocation,
  DatabasePost,
} from "@/actions/supabase/queries/query";
import { useEffect, useMemo, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import {
  fetchComments,
  fetchLocations,
  fetchPosts,
} from "@/actions/supabase/queries/query";
import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import Post from "@/components/Post";
import styles from "./styles.module.css";

type FeedData = {
  posts: DatabasePost[];
  comments: DatabaseComment[];
  locations: DatabaseLocation[];
};

export default function Home() {
  const [feed, setFeed] = useState<FeedData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    async function loadFeed() {
      try {
        const [posts, comments, locations] = await Promise.all([
          fetchPosts(),
          fetchComments(),
          fetchLocations(),
        ]);
        if (active) setFeed({ posts, comments, locations });
      } catch (cause) {
        if (active) {
          setError(
            cause instanceof Error ? cause.message : "Unable to load feed",
          );
        }
      }
    }
    void loadFeed();
    return () => {
      active = false;
    };
  }, []);

  const locationsById = useMemo(
    () =>
      new Map(feed?.locations.map(location => [location.id, location]) ?? []),
    [feed],
  );
  const visiblePosts =
    feed?.posts.filter(
      post => selectedPostId === null || post.id === selectedPostId,
    ) ?? [];

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          {selectedPostId !== null && (
            <button
              type="button"
              className={styles.backButton}
              aria-label="Back to post feed"
              onClick={() => setSelectedPostId(null)}
            >
              <FiArrowLeft size={24} />
            </button>
          )}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <BlueprintLogo />
            </div>
            <span className={styles.headerText}>
              <span className={styles.blueprint}>blueprint</span> volunteers
            </span>
          </div>
        </div>
        <div className={styles.contentScroll}>
          {error ? (
            <p role="alert" className={styles.message}>
              {error}
            </p>
          ) : feed === null ? (
            <p role="status" className={styles.message}>
              Loading posts...
            </p>
          ) : feed.posts.length === 0 ? (
            <p className={styles.message}>No posts yet.</p>
          ) : (
            visiblePosts.map(post => {
              const location = locationsById.get(post.location_id);
              return (
                <Post
                  key={post.id}
                  username={post.user_name}
                  npo={post.npo_name}
                  city={location?.city_name ?? ""}
                  state={location?.state_abbr ?? ""}
                  text={post.post_text}
                  image={post.image_link}
                  likeCount={post.num_likes}
                  createdAt={post.created_at}
                  comments={feed.comments.filter(
                    comment => comment.post_id === post.id,
                  )}
                  showComments={selectedPostId === post.id}
                  onOpenComments={() => setSelectedPostId(post.id)}
                />
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
