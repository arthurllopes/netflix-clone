import React from "react";
import Featuring from "./Components/Featuring/Featuring";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MovieList from "./Components/MovieList/MovieList";
import {HomeList} from './service/tmdb'
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  const [data, setData] = React.useState([])
  const [featuring, setFeaturing] = React.useState(null)

  React.useEffect(() => {
    const loadAll = async () => {
      const list = await HomeList.getHomeList()
      setData(list)

      const originals = list.filter((item) => item.slug === 'originals')
      const randomChoice = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      const randomMovie = originals[0].items.results[randomChoice]
      const movieInfo = await HomeList.getMovieInfo(randomMovie.id, 'tv')
      setFeaturing(movieInfo)

    }
    loadAll()
  }, [])

  

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {featuring && <Featuring movie={featuring} />}
      {data && data.map((item) => (
        <MovieList key={item.slug} title={item.title} items={item.items} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
