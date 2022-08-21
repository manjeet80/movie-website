
import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'
function App() {
  return (
    <div className="App">
 <Router>
 <Header/>
  <Routes>
  <Route path='/home' element={<Home />}></Route>
    <Route path="movie/:id" element={<MovieDetail/>}></Route>
    <Route path="movies/:type" element={<MovieList/>}></Route>
 <Route path='/*'element={<h1>Error Page</h1>}></Route>
  </Routes>
 </Router>
    </div>
  );
}

export default App;
