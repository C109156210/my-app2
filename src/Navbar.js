import React ,{useEffect, useState}from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // 引入 Navbar.css

const Navbar = () => {
  const [touch, settouch] = useState({link1: false, link2: false , link3: false});
  const handletouch = (a) => {
    //filter
    const newtouch = {link1: false, link2: false , link3: false};
    newtouch[`link${a}`] = true;
    settouch(newtouch);
  }
  const style1 = touch.link1 ? {color: 'white',  backgroundColor: "#725099", borderRadius: "10px"} : {color: 'black'};
  const style2 = touch.link2 ? {color: 'white',  backgroundColor: "#725099", borderRadius: "10px"} : {color: 'black'};
  const style3 = touch.link3 ? {color: 'white', backgroundColor: "#725099" , borderRadius: "10px"} : {color: 'black'};
  useEffect(() => {
    handletouch(1);
  }, []);
  return (
    <nav className="navbar"> {/* 使用 className 指定 CSS class */}
      <ul>
        <li onClick={()=>handletouch(1)} ><Link to="/"style={style1}  >首頁</Link></li>
        <li onClick={()=>handletouch(2)} ><Link to="/about" style={style2}>關於我</Link></li>
        <li onClick={()=>handletouch(3)}  ><Link to="/articles"style={style3}>文章列表頁面</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
