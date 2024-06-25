Movie App


Overview
This Movie App utilizes the OMDB API to fetch movie data and provides an excellent user interface using

React hooks such as useEffect, useState, useRef, and custom hooks. 

Users can search for movies, view detailed information, rate movies, and maintain a list of watched movies with their ratings.
Features

•	Search for movies using the OMDB API
•	View detailed information about selected movies
•	Add movies to a watched list with user ratings
•	Store the watched list in local storage
•	Custom hooks for managing movies, local storage state, and keyboard shortcuts
Installation
1.	Clone the repository:
bash
Copy code
git clone https://github.com/taiwohassan/useMovie-App.git
cd movie-app
2.	Install dependencies:
bash
Copy code
npm install
3.	Run the app:
bash
Copy code
npm start
Usage


1.	Search for Movies: Use the search bar to find movies. Results will be fetched from the OMDB API.
2.	View Movie Details: Click on a movie to view more details including title, year, rating, runtime, plot, actors, and director.
3.	Add to Watched List: Rate the movie using the star rating component and add it to your watched list.
4.	Manage Watched List: View a summary of watched movies, including average ratings and runtime. Remove movies from the watched list if needed.
Custom Hooks
useMovies
Fetches movies based on the search query.
useLocalStorageState
Manages state with local storage to persist the watched list.
useKey
Handles keyboard shortcuts, such as focusing the search bar or closing movie details with the Escape key.
Components
App
The main component that manages the overall state and renders the navbar, main content, and movie details.
NavBar
Contains the logo and search bar.
Main
Wraps the main content of the app.
Box
Collapsible box component used for the movie list and watched list sections.
MovieDetails
Displays detailed information about a selected movie and allows the user to add it to the watched list.

WatchedSummary
Shows a summary of the watched movies, including the number of movies, average IMDb rating, average user rating, and average runtime.

MovieList
Renders a list of movie search results.

WatchedMovieList
Renders a list of watched movies with options to delete them.

Loader
Displays a loading message while fetching data.

ErrorMessage

Displays an error message when there is an issue fetching data.
API Key
Replace the placeholder KEY in the code with your OMDB API key:
javascript
Copy code
const KEY = 'your_omdb_api_key';
License
This project is licensed under the MIT License.
Acknowledgements
•	OMDB API
•	React

