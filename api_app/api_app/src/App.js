import './App.css';
import MovieContainer from './containers/MovieContainer';


function App() {
  return (
    <div className="App">
      <h1>Movies</h1>
      <script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<div id="container"></div>
      <MovieContainer/>
    </div>
  );
}

export default App;
