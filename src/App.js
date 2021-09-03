import React from "react";
import Featuring from "./Components/Featuring/Featuring";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Library from "./Components/Library/Library";
import Loading from "./Components/Loading/Loading";
import {HomeList} from './service/tmdb'
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState([])
  const [featuring, setFeaturing] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    const loadAll = async () => {
      const list = await HomeList.getHomeList()
      setData(list)

      const originals = list.filter((item) => item.slug === 'originals')
      const randomChoice = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      const randomMovie = originals[0].items.results[randomChoice]
      const movieInfo = await HomeList.getMovieInfo(randomMovie.id, 'tv')
      setFeaturing(movieInfo)

      setLoading(false)
    }
    loadAll()
  }, [])

  

  return (
    <>
      {loading? <Loading /> : 
      <>
      <GlobalStyle />
      <Header />
      {featuring && <Featuring movie={featuring} />}
      <Library data={data} />
      <Footer />
      </>}
    </>
  );
}

export default App;
