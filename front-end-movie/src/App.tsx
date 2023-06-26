import { Route } from "wouter";
import Home from "./../pages/Home"
import Protagonist from "../pages/DetailsMovie"
import './App.css'
import DetailsMovie from "../pages/DetailsMovie";

function App() {

  return (
    <>
      <Route path="/" component={Home}>Home</Route>
      <Route path="/details/:id" component={DetailsMovie}>Details</Route>
    </>
  )
}

export default App
