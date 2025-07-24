# Flickster Movies App

Flickster Movies App is a full-featured movie discovery web app built with React. It allows users to search for movies, sort them, rate and favorite them, toggle dark/light mode, and interact through comments. The app aims to provide a seamless and engaging user experience for movie enthusiasts.

## Features

### Navigation Bar
- Home
- Favorite Movies
- Watchlist
- Top Rated
- New Releases
- Login/Register

### Search Functionality
- It has a Search field which allows users search movies by:
  - Title
  - Writer
  - Year of Release
  - Actors

### Movie Card Component
Each movie information is displayed on a movie card with:
- Poster Image
- Title
- Writer
- Year of Release
- Country
- Type (Movie/Series)
- Actors
- Director
- Genre

### Sorting Component
Users can sort movies by:
- Year of Release
- IMDb Rating
- Runtime

### User Rating System
- 5-star clickable rating system (1 = Poor, 5 = Excellent)
- Displays average rating from all users

### Dark/Light Mode Toggle
- Toggle slider to switch between light and dark themes
- Uses `isDarkMode` state for mode tracking

### User Profile & Authentication
- Register and Login form
- Form fields: Full Name, Email, Phone Number, Password
- Email & password validation
- Redirects to Home after successful login
- Displays error messages for invalid credentials

### Favorite Movie Feature
- Heart icon toggle to favorite/unfavorite a movie
- Uses state to track favorite status

### Favorite Count
- Tracks number of times each movie has been favorited

### Comment System
- Users can post and view comments on each movie

###  About
- Additional pages to provide user support and information


## Tech Stack

- **Frontend**: React, JSX, CSS
- **Routing**: react-router-dom
- **Mock Backend**: JSON Server (`db.json`)
- **Icons**: React Icons

---

## Getting Started

### Prerequisites
Make sure you have the following:
- Node.js
- npm
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/stercym/Flickster-movies/
cd Flickster-movies

 ## Author Stercy
