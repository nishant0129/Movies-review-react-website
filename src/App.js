
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./movie.json";
const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="main">
        {movies.map((element) => {
          return (
            <Movie
              title={element.itle}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
