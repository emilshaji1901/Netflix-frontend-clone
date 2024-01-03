
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Roww from './components/Roww';
import requests from './requests';
function App() {
  return (
    <div >
        <Nav/>

        <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      <Roww title="Trending Movies" fetchUrl={requests.fetchTrending}/>

      <Roww title="Top Rated" fetchUrl={requests.fetchTopRated}/>

<Roww isPoster={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>

      <Roww title="Action Movies" fetchUrl={requests.fetchActionMovies}/>

      <Roww title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>

      <Roww title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies}/>

      <Roww title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>

      <Roww title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
