import supabase from "../client";

export interface DatabasePost {
  id: number;
  created_at: string;
  user_name: string;
  npo_name: string;
  post_text: string;
  location_id: number;
  image_link: string | null;
  num_likes: number;
}

export interface DatabaseLocation {
  id: number;
  city_name: string;
  state_abbr: string;
}

export interface DatabaseComment {
  id: number;
  created_at: string;
  post_id: number;
  user_name: string;
  num_likes: number;
  comment_text: string;
}

export async function fetchPosts(): Promise<DatabasePost[]> {
  const { data, error } = await supabase.from("Posts").select("*").order("id");
  if (error) throw new Error(`Error fetching posts: ${error.message}`);
  return (data ?? []) as DatabasePost[];
}

export async function fetchLocations(): Promise<DatabaseLocation[]> {
  const { data, error } = await supabase
    .from("Locations")
    .select("id, city_name, state_abbr");
  if (error) throw new Error(`Error fetching locations: ${error.message}`);
  return (data ?? []) as DatabaseLocation[];
}

export async function fetchComments(): Promise<DatabaseComment[]> {
  const { data, error } = await supabase
    .from("Comments")
    .select("*")
    .order("id");
  if (error) throw new Error(`Error fetching comments: ${error.message}`);
  return (data ?? []) as DatabaseComment[];
}
