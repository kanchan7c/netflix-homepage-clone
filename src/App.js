import Row from './Row';
import requests from './requests';
import { Navbar } from './Navbar';
import Hero from './Hero';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.originals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.trendingMovies} />
      <Row title="Top Rated" fetchURL={requests.topRated} />
      <Row title="Action Movies" fetchURL={requests.actionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.comedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.horrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.romanceMovies} />
      <Row title="Documentary" fetchURL={requests.documentaries} />
    </div>
  );
}

export default App;
