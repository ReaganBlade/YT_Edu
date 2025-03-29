"use server";

import { createAdminClient } from "@/appwrite";
import { appwriteConfig } from "@/appwrite/config";
import { ParseStringify, handleError } from "../utils";
import { ID, Query } from "node-appwrite";

interface saveUserDataProps {
  user_id: string;
  name: string;
  email: string;
  avatar?: string;
}

export const saveUserData = async ({
  user_id,
  name,
  email,
  avatar,
}: saveUserDataProps) => {
  const { databases } = await createAdminClient();

  if (!databases) {
    throw new Error("Appwrite Databases instance is undefined");
  }
  const existingUser = await getUserData(user_id);

  if (existingUser) {
    return ParseStringify({ data: existingUser });
  }

  try {
    // console.log(
    //     `user_id: ${user_id}\nname: ${name}\nemail: ${email}\navatar: ${avatar}\n`
    // );
    const user = await databases.createDocument(
      appwriteConfig.databaseId as string,
      appwriteConfig.userCollectionId as string,
      ID.unique(),
      {
        user_id: user_id,
        name,
        email,
        avatar,
      }
    );

    return ParseStringify({ data: user });
  } catch (error) {
    handleError(error, "Error occured while saving user data");
  }
};

export const getUserData = async (user_id: string) => {
  const { databases } = await createAdminClient();

  if (!databases) {
    throw new Error("Appwrite Databases instance is undefined");
  }

  try {
    const user = await databases.listDocuments(
      appwriteConfig.databaseId as string,
      appwriteConfig.userCollectionId as string,
      [Query.equal("user_id", user_id)]
    );

    return user.total > 0 ? user.documents[0] : null;
  } catch (error) {
    handleError(error, "Error occured while getting user data");
  }
};
