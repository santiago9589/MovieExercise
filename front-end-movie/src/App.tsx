import { Route } from "wouter";
import './App.css'
import DetailsMovie from "../pages/DetailsMovie";
import Menu from "../pages/Menu";
import Login from "../pages/Login"

function App() {

  return (
    <>
      <Route path="/menu" component={Menu}>Home</Route>
      <Route path="/details/:id" component={DetailsMovie}>Details</Route>
      <Route path="/" component={Login}>Login</Route>
    </>
  )
}

export default App
