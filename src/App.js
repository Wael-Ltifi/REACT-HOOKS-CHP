import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react"
import MovieList from './components/MovieList';
import MoviesData from './components/MovieData';
import Filter from './components/Filter'
import Add from './components/Add'







function App() {
  const [filter, setFilter] = useState("")
  const [movieRating,setMovieRating]=useState(0);
  const [Movie,setMovie] = useState(MoviesData)
  


    const AddMovie = (newMovie) =>{
      setMovie(
        [...Movie, newMovie]
      )
    }

    const handelFilter=(val)=>{
    setFilter(val)
    }

    const handleRating=(rating)=>{
      setMovieRating(rating)
      }



  return (
    <div className=".App">
      <div className="header">
      <h1> 🎥 MOVIES LIST BY WAEL LTIFI 🎬</h1>
      <Filter r={handleRating} f={handelFilter} />
      <Add a={AddMovie} />
      </div>
      <div className='list'>
      <MovieList md ={Movie.filter(elm=>elm.title.toLowerCase().includes(filter.trim().toLowerCase())&& elm.rate>=movieRating)}/>
      </div>
    
    </div>
  );
}

export default App;




