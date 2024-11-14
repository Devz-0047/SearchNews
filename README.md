# Hacker News Search Clone

This is a Hacker News Search Clone built with React and React Query, using the Algolia Hacker News API. It allows users to search for stories, comments, and polls, with options for sorting and filtering by date range and popularity.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Components](#components)
- [API Details](#api-details)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Search for Hacker News stories, comments, or polls**
- **Filter by**:
  - **Search Type**: (All, Stories, Comments)
  - **Sorting**: (Popularity, Date)
  - **Time Range**: (All time, Last 24h, Past Week, Past Month, Past Year)
- **Pagination**: View additional search results across multiple pages.
- **Error handling** and loading indicators.

## Technologies

- **React**: For building the user interface.
- **React Redux Toolkit**: For global state management.
- **React Router**: For navigation.
- **React Query**: For data fetching, caching, and state management.
- **Axios**: For making API requests.

## Setup

### Prerequisites

- **Node.js** and **npm** should be installed on your local machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/hacker-news-clone.git
   cd hacker-news-clone
   ```

2. **Install dependencies**:

   ```bash
   npm i
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```
