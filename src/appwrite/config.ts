export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT_URI,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
  userCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID,
  playlistsCollectionId:
    process.env.NEXT_PUBLIC_APPWRITE_PLAYLISTS_COLLECTION_ID,
  secretKey: process.env.NEXT_PUBLIC_APPWRITE_SECRET_KEY
};
