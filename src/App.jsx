// Create un nuovo progetto React e implementate un sistema di filtro per una lista di film in base al genere.
// Dovrete utilizzare lo stato e useEffect per gestire il filtraggio dinamico.

// Note
// Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
// Se non viene selezionato alcun genere, devono essere mostrati tutti i film.

import { useState, useEffect } from 'react'
import film from '../data/film'

function App() {

  //Destrutturizzazione di useState: "movies"= array "film", 
  // setMovies= funzione che mi permette di cambiare il valore di "movies"
  const [movies, setMovies] = useState(film)
  const [newMovie, setNewMovie] = useState("")

  const [search, setSearch] = useState("")
  const [filteredMovies, setFilteredeMovies] = useState(movies)


  //Funzione da applicare a "onSubmit" che mi permette di impostare la logica di "setMovies"
  // per cambiare il valore di "movies" ed impostarlo come un nuovo array contenente l'array
  //stesso più il "newMovie"
  const addMovie = (e) => {
    e.preventDefault();
    const movie = newMovie.trim()
    setMovies([...movies, movie])
    setNewMovie("")
  }

  useEffect(() => {
    setFilteredeMovies(
      movies.filter(movie => {
        return movie.genre.toLowerCase().includes(search.toLowerCase())
      })
    )

  })

  return (
    <>
      <div>
        <h1>Elenco movies</h1>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>



        <ul>
          {
            filteredMovies.map((movie, indice) => {

              return (
                <li key={indice}>{movie.title}</li>
              )
            })
          }
        </ul>

        <form onSubmit={addMovie}>

          {/* input di testo il cui value è "newMovie(vuoto)" */}
          <input type="text"
            value={newMovie}
            // alla funzione onChange applico la funzione "setNewMovie"
            //per definire "newMovie"
            onChange={(e) => setNewMovie(e.target.value)}
          />
          <button>Invia</button>
        </form>

      </div>
    </>
  )
}

export default App


