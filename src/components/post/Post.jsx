import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
           <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        I wanna be the very best
        Like no one ever was
        Catch them is my real test
        To train them is my cause
        
        Pokémon!
        Gotta catch 'em all (It's you and me)
        I know its my destiny
        Pokémon
        Oh, you're my best friend
        In a world we must defend
        Pokémon! 
        Gotta catch 'em all (A heart so true)
        Our courage will pull us through
        You teach me and I'll teach you
        Pokémon
        Gotta catch 'em all
        Gotta catch 'em all
        Pokémon!
      </p>
    </div>
  );
}
