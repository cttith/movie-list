import React from 'react';
import './App.css';
import MovieList from './Components/MovieList'
import Navbar from './Components/Nav'
import { MovieProvider } from './Contexts/MovieContext'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Navbar />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
