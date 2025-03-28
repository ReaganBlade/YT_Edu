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


export const saveUserData = async ({user_id, name, email, avatar}: saveUserDataProps) => {
    const { account, databases } = await createAdminClient();
    
    try {

        const user = await databases.createDocument(
            appwriteConfig.databaseId as string,
            appwriteConfig.userCollectionId as string,
            ID.unique(),
            {
                user_id,
                name,
                email,
                avatar
            }
        );


        return ParseStringify({data: user});
        
    } catch (error) {
        handleError(error, 'Error occured while saving user data');
    }
}


export const getUserData = async (user_id: string) => {
    const { databases } = await createAdminClient();
    
    try {
        const user = await databases.listDocuments(
            appwriteConfig.databaseId as string,
            appwriteConfig.userCollectionId as string,
            [Query.equal('user_id', user_id)]
        )
    } catch (error) {
        
    }
}

