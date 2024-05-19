import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img={`${process.env.PUBLIC_URL}/imgs/cha.jpg`} />
      <Post img={`${process.env.PUBLIC_URL}/imgs/tur.png`} />
      <Post img={`${process.env.PUBLIC_URL}/imgs/bul.png`}/>
      <Post img={`${process.env.PUBLIC_URL}/imgs/cha2.jpg`} />
      <Post img={`${process.env.PUBLIC_URL}/imgs/tur2.jpg`}/>
    </div>
  );
}
