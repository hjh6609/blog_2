import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className='headerTitleSm'>React & Node</span>
          <span className='headerTitleLg'>Blog</span>
        </div>
        <img 
          className='headerImg' 
          src="http://file3.instiz.net/data/file3/2018/02/01/5/8/3/583cca73a98118c21c3e01d06ce88905.jpg" 
          alt="" 
        />
    </div>
  )
}
