import { useLocation } from "react-router";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './homepage.css'

export default function Homepage() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="home">
          <Posts/>
          <Sidebar/>
      </div>
    </>
  )
}
