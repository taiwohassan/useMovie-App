import { useState, useEffect } from "react";
const KEY = 'ebe7f3c9';
export function useMovies(query){

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(function () {

        // callback?.()
        const controller=new AbortController()
    
        async function fetchMovies() {
          try {
            setIsLoading(true);
            setError("");
            const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
              {signal:controller.signal}
            );
    
            if (!res.ok) throw new Error("Something went wrong with fetching movies");
    
            const data = await res.json();
    
            if (data.Response === "False") throw new Error("Movies not Found");
    
            setMovies(data.Search);
            setError("")
            console.log(data.Search);
          } catch (err) {
            console.log("err");
            if(err.name !== "Abort"){
              setError(err.message);
    
            }
          } finally {
            setIsLoading(false);
          }
        }
    
        if (query.length < 3) {
          setMovies([]);
          setError("");
          return;
        }
    
  
        fetchMovies();
    
        return function (){
          controller.abort()
        }
      }, [query]);
      return {movies, isLoading, error}
     
}