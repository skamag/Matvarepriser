import { Link, Outlet } from "react-router-dom";
import Header from './Header'

export default function Layout() {
    return(
        <div className="appContainer">
            <Link to='/' className="link">
                <Header />
            </Link>
            <Outlet />
        </div>
    )
}