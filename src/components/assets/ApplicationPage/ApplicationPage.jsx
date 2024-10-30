// src/components/ApplicationPage.js
import React from 'react';
import { FaHome, FaChartLine, FaUser, FaShoppingCart, FaBell } from 'react-icons/fa'; // Icons from react-icons
import './ApplicationPage.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded


function ApplicationPage() {
  return (
    <div className="app-container">
      
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>container</h2> 
        </div>

        <div className="sidebar-menu">
          <a href="#" className="menu-item">
            <FaHome className="icon" />  
            <span>Dashboard</span>
          </a>
          <a href="#" className="menu-item">
            <FaShoppingCart className="icon" />
            <span>Sales</span>
          </a>
          <a href="#" className="menu-item">
            <FaUser className="icon" />
            <span>Customer</span>
          </a>
          <a href="#" className="menu-item">
            <FaChartLine className="icon" />
            <span>Reports</span>
          </a>
          <a href="#" className="menu-item">
            <FaBell className="icon" />
            <span>Notifications</span>
          </a>
        </div>

        <div className="sidebar-footer">
        
          <span className="user-name">POORANI</span>
        </div>
      </div>

      <div className="main-content">

      <div className="container mt-3">
      {/* Row with two columns */}
      <div className="row">
        <div
          className="col-sm-6 one"
        >
          
{/* -------------------------------------------------------------------------------------------------------------------------- */}


      {/* <div className="navbar-container">
                <div className="navbar-left"> */}
                    <div className="navbar-search">
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="navbar-search-input" 
                        />
                        <i className="fas fa-search search-icon"></i>
                    </div>
                {/* </div>
                
            </div> */}
               <br></br>
               
               <div className="cartsummary">
               <p><b>Cart Summary</b></p>
               </div>
               <div>
                <p>Order Id :</p>
               </div>

        </div>
        <div
          className="col-sm-6 two"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </div>
      </div>
    </div>


      </div>
    </div>
  );
}

export default ApplicationPage;
