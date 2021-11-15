import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.originals}/>
      <Row title="Trending Now" fetchURL={requests.trendingMovies}/>
      <Row title="Top Rated" fetchURL={requests.topRated}/>
      <Row title="Action Movies" fetchURL={requests.actionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.comedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.horrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.romanceMovies}/>
      <Row title="Documentary" fetchURL={requests.documentaries}/>
    </div>
  );
}

export default App;
