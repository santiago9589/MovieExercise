import { Route } from "wouter";
import './App.css'
import DetailsMovie from "../pages/DetailsMovie";
import Menu from "../pages/Menu";
import Home from "../pages/Home"

function App() {

  return (
    <>
      <Route path="/menu" component={Menu}>Home</Route>
      <Route path="/details/:id" component={DetailsMovie}>Details</Route>
      <Route path="/" component={Home}>Home</Route>
    </>
  )
}

export default App
