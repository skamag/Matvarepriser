import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <div className="appContainer">
            <Link to='/' className="link">
                <div>
                    <h1>Header</h1>
                </div>
            </Link>
            <Outlet />
        </div>
    )
}