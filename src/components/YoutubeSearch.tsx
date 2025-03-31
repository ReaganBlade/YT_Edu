"use client";

import { useState } from "react";
import { fetchVideos } from "@/lib/youtube";

export const YoutubeSearch = () => {
    const [query, setQuery] = useState("");
    const [videos, setVideos] = useState([]);


    const handleSearch = async () => {
        const results = await fetchVideos(query);

        setVideos(results);
        console.log(results);
    };

    return (
        <div className="p-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Youtube..."
                className="border p-2"
            />

            <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white p-2">
                Search
            </button>

            <div className="mt-4">
                {videos.map((video) => (
                    <div key={video.id} className="mb-4 border-2 flex flex-col p-5 rounded-3xl ">
                        <img src={video.thumbnail} alt={`Title: ${video.title}`} className="rounded-3xl m-2" />
                        <p>{`Title: ${video.title}`}</p>
                        <p className="text-sm text-gray-500">{`Channel: ${video.channel}`}</p>
                    </div>
                )
                )}
            </div>
        </div>
    );
};
