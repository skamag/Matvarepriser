import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <div className="appContainer">
            <Link to='/' className="link">
                <div className="headerContainer">
                    <h1 className="header">Matvarepriser</h1>
                    {/* <p>Finn dagligvarer og sammenlign priser fra ulike dagligvarekjeder.</p> */}
                </div>
            </Link>
            <Outlet />
        </div>
    )
}