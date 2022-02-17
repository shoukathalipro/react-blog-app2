import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Article from "./Components/Article";
import Bollywood from "./Components/Bollywood";
import Fitness from "./Components/Fitness";
import Food from "./Components/Food";
import Header from "./Components/Header";
import Hollywood from "./Components/Hollywood";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";
import Technology from "./Components/Technology";



function App() {
  return (
    <div>
      <Router>
          <Header/>

           <Routes>
              <Route path="/" element={   <Navigate   to={"/home"}/>}/>
              <Route path="/home" element={ <Home/> }/>
              <Route path="/article/:articleTitle/:articleCategory" element={  <Article/>  }/>
              <Route path="/Bollywood" element={ <Bollywood/> }/>
              <Route path="/Hollywood" element={ <Hollywood/> }/>
              <Route path="/Technology" element={ <Technology/> }/>
              <Route path="/Fitness" element={ <Fitness/> }/>
              <Route path="/Food" element={ <Food/> }/>
              <Route path='/*' element={  <PageNotFound/>  }/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
