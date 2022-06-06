import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul class="nav justify-content-center">
          <li class=" nav-spacing nav-item">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-spacing nav-item">
            <Link to="/about">About</Link>
          </li>
          <li class="nav-spacing nav-item">
            <Link to="/work">Our Work</Link>
          </li>
          <li class="nav-spacing nav-item">
            <Link to="/quote">Get a quote</Link>
          </li>
        </ul>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
