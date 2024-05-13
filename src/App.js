//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from "./pages/homepage/Homepage";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Setting";
import SinglePost from './components/singlePost/SinglePost';
import Post from './components/post/Post';
import Posts from './components/posts/Posts';


function App() {
  return (
    <Router>
    <TopBar />
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/posts" element={<Homepage/>}/>
      <Route path="/about" element={<SinglePost/>}/>
      <Route path="/contact" element={<Posts/>}/>
      <Route path="/write" element={<Write/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
  </Router>
  
  );
}

export default App;
