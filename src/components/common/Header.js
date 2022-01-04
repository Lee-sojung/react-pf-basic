import {NavLink} from 'react-router-dom';

function Header(){
    const active = {color: "#111", fontWeight:"bold", fontSize:"15px"};
    return(
        <header>
            <div className="inner">
                <h1> <NavLink exact to="/">PORTFOLIO REACT</NavLink> </h1>

                <ul id="gnb">
                    <li><NavLink activeStyle={active} exact to="/department">DEPARTMENT</NavLink></li>
                    <li><NavLink activeStyle={active} exact to="/community">COMMUNITY</NavLink></li>
                    <li><NavLink activeStyle={active} exact to="/gallery">GALLERY</NavLink></li>
                    <li><NavLink activeStyle={active} exact to="/youtube">YOUTUBE</NavLink></li>
                    <li><NavLink activeStyle={active} exact to="/location">LOCATION</NavLink></li>
                    <li><NavLink activeStyle={active} exact to="/join">JOIN</NavLink></li>
                </ul>
            </div>
        </header>
    )
}
export default Header;