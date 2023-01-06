import { NavLink } from "react-router-dom"
import React from 'react';
import { FaHome, FaUser } from "react-icons/fa";
import { MdRestaurant, MdOutlinePostAdd } from "react-icons/md";

 const Sidebar = () => {
   return (
     <div className="sidebar">
         <ul>
             <li>
                 <NavLink to="/" className="active"><FaHome/>Inicio</NavLink>
             </li>
             <li>
                 <NavLink to="/admin/clients"><FaUser/>Clientes</NavLink>
             </li>
             <li>
                 <NavLink to="/admin/menu"><MdRestaurant/>Menus</NavLink>
             </li>
             <li>
                 <NavLink to="/admin/orders"><MdOutlinePostAdd/>Pedidos</NavLink>
             </li>
         </ul>

     </div>
   )
 }

export default Sidebar