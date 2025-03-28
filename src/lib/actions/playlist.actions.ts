import { createAdminClient } from "@/appwrite";
import { appwriteConfig } from "@/appwrite/config";
import { ID, Query } from "node-appwrite";
import { ParseStringify, handleError } from "../utils";

interface createPlaylistProps {
  user_id: string;
  name: string;
  description?: string;
  videos?: string[];
  visibility?: string;
}

export const createPlaylist = async ({
  user_id,
  name,
  description,
  videos,
  visibility,
}: createPlaylistProps) => {
  const { databases } = await createAdminClient();

  try {
    const playlist = await databases.createDocument(
      appwriteConfig.databaseId as string,
      appwriteConfig.playlistsCollectionId as string,
      ID.unique(),
      {
        user_id,
        name,
        description,
        videos,
        created_at: new Date().toISOString(),
        visibility,
      }
    );

    return ParseStringify({ data: playlist });
  } catch (error) {
    handleError(error, "Error occured while creating playlist");
  }
};

export const getPlaylists = async ({ user_id }: { user_id: string }) => {
  const { databases } = await createAdminClient();

  try {
    const playlists = await databases.listDocuments(
      appwriteConfig.databaseId as string,
      appwriteConfig.playlistsCollectionId as string,
      [Query.equal("user_id", user_id)]
    );

    return playlists.total > 0 ? playlists.documents : null;
  } catch (error) {
    error;
    handleError(error, "Error occured while getting playlists");
  }
};

export const deletePlaylist = async ({
  playlist_id,
}: {
  playlist_id: string;
}) => {
  const { databases } = await createAdminClient();

  try {
    await databases.deleteDocument(
      appwriteConfig.databaseId as string,
      appwriteConfig.playlistsCollectionId as string,
      playlist_id
    );

    return { success: true, message: "Playlist deleted successfully" };
  } catch (error) {
    handleError(error, "Error occured while deleting playlist");
  }
};
