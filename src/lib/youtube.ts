import axios from "axios";
import { envConfig } from "@/appwrite/config";
import { handleError } from "./utils";

export const fetchVideos = async (query: string) => {
  try {
    const response = await axios.get(`${envConfig.youtubeBaseUrl}/search`, {
      params: {
        part: "snippet",
        q: query,
        key: envConfig.ytAPIKey,
        maxResults: 15,
        type: "video",
        videoCategoryId: 27 // For Education
      },
    });

    return response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      channel: item.snippet.channelTitle,
    }));
  } catch (error) {
    handleError(error, "Error Occured while fetching the results...");
    return [];
  }
};

