import { Route } from "wouter";
import Home from "./../pages/Home"
import Protagonist from "./../pages/Protagonist"
import './App.css'

function App() {

  return (
    <>
      <Route path="/" component={Home}>Home</Route>
      <Route path="/protagonist" component={Protagonist}>Protagonist</Route>
    </>
  )
}

export default App
