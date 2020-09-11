import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {


    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row w-100">
                    <div className="col-12.1 w-100 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-#2196F3">
                            <a className="navbar-brand" href="https://navgurukul.org/">
                                <img className="navbar-brand-img" src="navgurukul.png" alt="picture of navgurukul" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link btn btn-secondary" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link btn btn-secondary" to="/login">Login..</NavLink>
                                    </li>
                                    <li className="nav-item dropdown btn btn-secondary ">
                                        <NavLink className="nav-link dropdown-toggle  " to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                            Register here..
                                        </NavLink>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink className="dropdown-item btn btn-secondary" to="/admin_signup">Admin</NavLink>
                                            <NavLink className="dropdown-item btn btn-secondary" to="/signup">Student</NavLink>

                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Nav;