"use server";

import { Client, Account, Databases, Storage, Avatars } from "node-appwrite";
import { envConfig } from "./config";

export const createAdminClient = async () => {
//   if (
//     !appwriteConfig.endpointUrl ||
//     !appwriteConfig.projectId ||
//     !appwriteConfig.secretKey
//   ) {
//     throw new Error("Appwrite configuration is missing");
//   }

  const client = new Client()
    .setEndpoint(envConfig.endpointUrl as string)
    .setProject(envConfig.projectId as string)
    .setKey(envConfig.secretKey as string);

  return {
    get account() {
      return new Account(client);
    },

    get databases() {
      return new Databases(client);
    },

    get storage() {
      return new Storage(client);
    },

    get avatars() {
      return new Avatars(client);
    },
  };
};
