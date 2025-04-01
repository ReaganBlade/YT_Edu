# YouTube Educational Video Organizer

## Overview
This project is a web platform that utilizes the YouTube API to filter and organize only educational videos. It categorizes videos by topics to reduce distractions, ensuring users can access high-quality learning material without unnecessary recommendations.

## Features
- **YouTube API Integration**: Fetches videos based on search queries.
- **Filtering Mechanism**: Retrieves only educational content with additional filters (duration, quality, category, etc.).
- **User Authentication**: OAuth 2.0 integration for personalized experience.
- **Custom Playlists**: Users can save videos and create topic-based playlists.
- **Modern UI**: Built using TailwindCSS and Shadcn for a seamless experience.

## Tech Stack
- **Frontend**: Next.js, React.js, TailwindCSS, Shadcn
- **Backend**: Next.js API Routes
- **Database**: Appwrite (for user data management)
- **Authentication**: OAuth 2.0
- **Hosting**: Vercel

## Installation & Setup
### Prerequisites
- Node.js (v16+)
- npm or yarn
- YouTube Data API Key
- Appwrite Project Setup

### Steps to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   ```sh
   cp .env.example .env.local
   ```
   Fill in the `.env.local` file with:
   ```env
   YOUTUBE_API_KEY=your_youtube_api_key
   APPWRITE_ENDPOINT=your_appwrite_endpoint
   APPWRITE_PROJECT_ID=your_project_id
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## API Integration
The project utilizes the YouTube API to fetch and filter videos. Example API request:
```ts
const response = await axios.get(`${envConfig.youtubeUrl}/search`, {
  params: {
    part: "snippet",
    q: query,
    key: envConfig.ytAPIKey,
    maxResults: 15,
    type: "video",
    videoCategoryId: "27", // Education
    videoDuration: "medium", // 4-20 mins
    videoDefinition: "high", // HD videos
  },
});
```

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Commit changes:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push the branch:
   ```sh
   git push origin feature-branch
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any queries, reach out to [Rohit Tudu](mailto:rohittudu181@example.com).

