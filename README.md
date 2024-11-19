# News Website with React

## Overview

This project is a dynamic news website built using **React** that fetches the **top 7 news articles** daily based on user preferences. The application uses machine learning techniques to dynamically update user preferences by analyzing:

- Time spent viewing articles.
- Categories of news read.
- User feedback (like or dislike).

---

## Features

### Core Functionality
- **Daily News Fetching:**
  - Fetches the top 7 news articles each day from a news API.
  - Personalized based on user preferences.

- **Dynamic Preferences Update:**
  - Tracks user behavior (time spent reading, likes, dislikes).
  - Updates user preferences automatically.

- **Interactive Feedback:**
  - Users can like or dislike articles to refine recommendations.

### Technologies Used
- **Frontend:** React, React Router
- **State Management:** Redux (optional, for large-scale state)
- **Backend API:** Node.js (for fetching news and managing user preferences)
- **Styling:** CSS-in-JS (e.g., styled-components) or traditional CSS
- **Data Fetching:** Axios or Fetch API
- **API Source:** [News API](https://newsapi.org/) or other similar services
