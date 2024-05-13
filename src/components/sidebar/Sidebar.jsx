import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="http://file3.instiz.net/data/file3/2018/02/01/5/8/3/583cca73a98118c21c3e01d06ce88905.jpg"
          alt=""
        />
        <p>
        Pokémon! Gotta catch 'em all (It's you and me) I know its my destiny Pokémon Oh, you're my best friend In a world we must defend
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
           
              Manga
           
          </li>
          <li className="sidebarListItem">
            
              Music
            
          </li>
          <li className="sidebarListItem">
           
              Pokémon
            
          </li>
          <li className="sidebarListItem">
           
              Style
            
          </li>
          <li className="sidebarListItem">
           
              Tech
           
          </li>
          <li className="sidebarListItem">
           
              Cinema
           
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
