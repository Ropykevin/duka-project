import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import { BsCart3 , BsGrid1X2Fill ,BsFillArchiveFill,BsFillGrid3X2GapFill,BsPeopleFill,BsPeople,BsListCheck,BsMenuButtonWideFill,BsFillGearFill} from "react-icons/bs";
function Sidebar() {
    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <BsCart3 className="icon" /> MYDUKA
                </div>
                <span className="icon close_icon">X</span>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <Link to="/products">
                        <BsFillArchiveFill className='icon' />Products
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/dashboard">
                        <BsGrid1X2Fill className='icon' />Dashboard
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/sales">
                        <BsFillGrid3X2GapFill className='icon' />Sales
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/Register">
                        <BsPeopleFill className='icon' />Register
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/login">
                        <BsPeople className='icon' />Login
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/dd">
                        <BsPeople className='icon' />dd
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/Logout">
                        <BsPeople className='icon' />Logout
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
export default Sidebar