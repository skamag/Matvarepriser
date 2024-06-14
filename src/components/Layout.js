import { Link, Outlet } from "react-router-dom";
import logoImg from '../images/bananaTransparent.png'

export default function Layout() {
    return(
        <div className="appContainer">
            <Link to='/' className="link">
                <div className="headerContainer">
                    {/* <h1 className="header">Matvarepriser</h1> */}
                    <div className='logo'>
                        <img className='logo-img' src={logoImg} alt='logoImg'></img>
                        <h2 className='logo-text main-logo-text'>Matvarepriser</h2>
                        <h2 className='logo-text alternate-logo-text'>Matinnhold</h2>
                    </div>
                    {/* <p>Finn dagligvarer og sammenlign priser fra ulike dagligvarekjeder.</p> */}
                </div>
            </Link>
            <Outlet />
        </div>
    )
}