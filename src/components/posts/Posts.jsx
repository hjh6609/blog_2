import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://cdn.pixabay.com/photo/2021/10/04/16/42/dog-6680642_1280.jpg" />
      <Post img="https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_1280.jpg" />
      <Post img="https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625_1280.jpg"/>
      <Post img="https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_1280.jpg"/>
      <Post img="https://cdn.pixabay.com/photo/2014/06/09/12/29/otter-365370_1280.jpg"/>
    </div>
  );
}
