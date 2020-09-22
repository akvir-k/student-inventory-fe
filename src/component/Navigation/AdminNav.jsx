import React from 'react'
import { NavLink } from 'react-router-dom';


const AdminNav = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row w-100">
                    <div className="col-12.1 w-100 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light admin_nav">
                            <a className="navbar-brand" href="https://navgurukul.org/" >
                                <img className="navbar-brand-img" src="/navgurukul.png" alt="Navgurukul Logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse admin_nav_text" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto ">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/admin_home">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/show">ShowBed</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/admin/addbed">Addbed</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/shuffule">Room Suffule</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/studentData">Student Data</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/logout'>Logout</NavLink>
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

export default AdminNav;