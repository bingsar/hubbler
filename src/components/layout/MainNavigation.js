import { Link } from "react-router-dom";
import './MainNavigation.css'
import companyLogo from "../../img/logo.jpg";

export default function MainNavigation() {
    return (
        <div className="container overflow-auto">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom align-items-center">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img className="logo bi me-2" src={companyLogo} alt=""/>
                    <span className="fs-4">Hubbler</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Соискатели
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/messages" className="nav-link">
                            Сообщения
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    )
}