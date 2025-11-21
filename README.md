# Hidden Sky

Hidden Sky is an interactive website designed to help users understand, measure, and reduce light pollution in their communities. The site blends science with a clean, star-themed interface, while also being a gamified challenge.  
This project is an entry for the Congressional App Challenge.  

## What It Does
- Finds light pollution levels in your area by using optional location access  
- Explains ways to reduce light pollution  
- Displays a map with an overlay showing light pollution all over the world  
- Pulls data from trusted sources  
- Includes an AI chat to learn more  
- Lists sources to learn more about light pollution  
- Has badges you can earn by browsing the website  

## Features

### Light Checker (Location-Based Tool)
- Uses browser geolocation to estimate local light pollution levels  
- Displays sky brightness data and interpretation  
- Includes safety fallback if location permissions are blocked  

### Interactive Maps
- Displays light pollution maps and overlays  
- Provides educational hotspots and “dark sky” safe areas  
- Unlocks the Planet Protector badge when the user scrolls to the map section  

### AI Chat
- An AI assistant to answer questions about light pollution, wildlife, and environmental conservation  
- Powered by the OpenAI Responses API via serverless functions  
- Designed to run without a permanent backend (Vercel)  

## Badge System
- Milky Way Explorer - Unlocks after completing the Light Check.  
- Galaxy Guardian - Unlocks after asking the AI about light pollution.  
- Planet Protector - Unlocks after viewing the Light Pollution Map.  
- Starlight Saver - Unlocks upon opening the homepage.  

Badges appear as pop-up modals triggered by scroll or interaction events.

## Modern Star-Themed UI
- Responsive layout  
- Starry background  
- Smooth transitions and animated popups  
- Clean nav bar that adapts to all screen sizes (mobile menu toggle)  

## Technical Overview
- Google Maps API for the map, OpenAI API for the AI Chat  
- AI Chat backend managed with Vercel  
- Weather API for the light check  

### Frontend
- HTML5, CSS3, JavaScript  
- Custom popup system  
- Responsive map and section-based interactions  
- Local storage for badge persistence  

## Deployment
- Works on local servers  
- Deployable via Vercel, Netlify, or GitHub Pages + serverless functions  
- Avoids the need for a traditional backend server  

## Getting Started (Local Development)

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/<your-username>/hidden-sky.git
cd hidden-sky
\`\`\`

### 2. Install Dependencies (If Using Vercel/Netlify Functions)
\`\`\`bash
npm install
\`\`\`

### 3. Add Your OpenAI API Key
In the serverless function folder (/api/ or /functions/):

Create an .env file:

\`\`\`
OPENAI_API_KEY=your_api_key_here
\`\`\`

### 4. Run Locally

**Option A — Vercel**
\`\`\`bash
vercel dev
\`\`\`

**Option B — Live Server**  
Open the HTML in your editor and run using:

- VS Code Live Server  
- npx live-server  
- Or your preferred local host  

### 5. Visit the Site
- http://localhost:3000 (Vercel)  
- http://127.0.0.1:5500 (Live Server)  

## Project Structure
\`\`\`
HiddenSky/
│── index.html
│── style.css
│── script.js
│── /images        (icons, backgrounds, images)
│── README.md
\`\`\`

## Why Hidden Sky Matters
Light pollution affects wildlife, human health, and the visibility of our night skies. Hidden Sky empowers students, communities, and curious users to:
- Recognize local light pollution levels  
- Learn how light affects the ecosystem  
- Take action through simple, science-based changes  
- Become environmental advocates through interactive learning  

## Author
Built by Diya Panthulu. If you would like to contribute, feel free to open an issue or pull request.
