import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const active = { color: "#111", fontWeight: "bold", fontSize: "15px" };
    const menuMo = useRef(null);
    return (
        <header>
            <div className="inner">
                <h1> <NavLink exact to="/">REACT PORTFOLIO</NavLink> </h1>

                <ul id="gnb">
                    <li><NavLink activeStyle={active} exact to="/department">ABOUT</NavLink></li>
                    <li><NavLink activeStyle={active} exact to="/community">COMMUNITY</NavLink></li>
                    <li><NavLink activeStyle={active} exact to="/gallery">GALLERY</NavLink></li>
                    <li><NavLink activeStyle={active} exact to="/youtube">YOUTUBE</NavLink></li>
                    <li><NavLink activeStyle={active} exact to="/location">LOCATION</NavLink></li>
                    <li><NavLink activeStyle={active} exact to="/join">JOIN</NavLink></li>
                </ul>


                <div class="btnCall" onClick={e=>{
                    e.currentTarget.classList.toggle('on');
                    menuMo.current.classList.toggle('on');
                }}>
                    <span>메뉴호출</span>
                </div>

                <nav class="menuMobile" ref={menuMo}>
                    <h1>
                        <NavLink exact to="/">REACT PORTFOLIO</NavLink>
                        <span>UI/UX DEVELOPMENT INSTITUTE</span>
                    </h1>

                    <ul id="gnbMo">
                        <li><NavLink activeStyle={active} exact to="/department">ABOUT</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/community">COMMUNITY</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/gallery">GALLERY</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/youtube">YOUTUBE</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/location">LOCATION</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/join">JOIN</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;