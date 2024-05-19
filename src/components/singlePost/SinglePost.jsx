//import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={`${process.env.PUBLIC_URL}/imgs/cha.jpg`} 
          alt=""
        />
        <h1 className="singlePostTitle">
          Pokémon!
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
             
                Safak
             
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Pokémon!
          Gotta catch 'em all (It's you and me)
          I know its my destiny
          Pokémon
          Oh, you're my best friend
          In a world we must defend
          
        </p>
      </div>
    </div>
  );
}
