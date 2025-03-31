import axios from "axios";
import { envConfig } from "@/appwrite/config";
import { handleError } from "./utils";

export const fetchVideos = async (query: string) => {

  const youtube_base_url =  "https://www.googleapis.com/youtube/v3";
  // const baseURL = "https://www.googleapis.com/youtube/v3";
  console.log(`YT URL: ${envConfig.youtubeBaseUrl}`); 


  try {
    const response = await axios.get(`${youtube_base_url}/search`, {
      params: {
        part: "snippet",
        q: query,
        key: envConfig.ytAPIKey,
        maxResults: 15,
        type: "video",
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

