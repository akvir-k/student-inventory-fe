import React from 'react'
import { NavLink } from 'react-router-dom';

const UserNav = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row w-100">
                    <div className="col-12.1 w-100 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light user_nav">
                            <a className="navbar-brand " href="https://navgurukul.org/" >
                                <img className="navbar-brand-img" src="/navgurukul.png" alt="navgurukul" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse user_nav_text" id="navbarTogglerDemo01">

                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link active user_link" aria-current="page" to="/user/userHome">Home</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link user_link " to="/userStudent">StudentData</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link user_link" to="/upload">UploadImage</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link user_link" to="/student/update">UpdateData</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link user_link" to="/logout">Logout</NavLink>
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

export default UserNav;