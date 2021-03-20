import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header/Header';
import Cursor from './common/customCursor/Cursor'
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import Loading from './common/loading/Loading';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function App() {

  const [loading, setLoading] = useState(false)
  const loadingState = useSelector(state => state.statusLoading)
  useEffect(() => {
    setLoading(loadingState)
  }, [loadingState])

  return (
    <Router>
      <div className="root-container">
        <Header />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
      <Cursor />
      { loading ? <Loading /> : ''}
    </Router>
  );
}

export default App;