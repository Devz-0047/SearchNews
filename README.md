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
   git clone https://github.com/Devz-0047/SearchNews
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

## Usage

- **Search for content**: Use the search bar and filters to look up stories or comments.
- **Filter Results**: Select options from the dropdowns to narrow down the results by:
  - **Search Type**: (All, Stories, Comments)
  - **Sorting**: (Popularity, Date)
  - **Time Range**: (All time, Last 24h, Past Week, Past Month, Past Year)
- **Pagination**: Navigate through multiple pages of results.

## Components

- **App.jsx**

  - The main entry point of the app. Sets up the router and renders the main `Filter` component inside the `Home` component.

- **Filter.jsx**

  - Displays search filters (Search Type, Sort By, Time Range).
  - Uses React Query's `useQuery` to fetch data based on the selected filters.
  - Shows loading and error messages based on the state of the data request.

- **fetchStories.js**

  - Helper function to fetch stories based on the query parameters.
  - Uses Axios to make GET requests to the Algolia Hacker News API with parameters for page, search type, sort option, and time range.

- **getSearchTypeTag.js**
  - Helper function to map search type values to tags required by the Algolia API.

## API Details

The project uses the **Algolia Hacker News API**:

- **Base URL**: `https://hn.algolia.com/api/v1/`
- **Endpoints**:
  - **Search by relevance**: `/search`
  - **Search by date**: `/search_by_date`

## Example Query Parameters

| Parameter        | Type    | Description                                |
| ---------------- | ------- | ------------------------------------------ |
| `query`          | String  | The search query                           |
| `tags`           | String  | Filter by story, comment, etc.             |
| `page`           | Integer | Page number for pagination                 |
| `numericFilters` | String  | Filter results based on time, points, etc. |
