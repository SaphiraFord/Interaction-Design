import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {SideBarData} from './SidebarData';
import "./Sidebar.css";
import {IconContext} from 'react-icons';

import styled from "styled-components";


const StyledWrapper = styled.div`
  height: 100vh; 
  width: 100vw;
  margin: 0px 0px 0px 0px;
  background:  #E0F1F2;


`;



function Sidebar() {
    const [sideBar, setSidebar] = useState(false);

    const showSideBar = () => setSidebar(!sideBar);



    

    return (
        
        <>
        
        <IconContext.Provider value={{color: '#4A4A4A'}}>
        
            <StyledWrapper>
            
            <IconContext.Provider value={{color: 'white'}}>
                <div className="sideBar">
                    
                    <Link to="#" className='hamburgerIcon'>
                        <FaIcons.FaBars onClick={showSideBar}/>
                    </Link>
                </div>
            </IconContext.Provider>
            
                <nav className={sideBar ? 'sideBarMenu active' : 'sideBarMenu'}>
              
                    <ul className="sideBarMenuItems" onClick={showSideBar}>
    
                        {SideBarData.map((item, index) => { 
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>

                                    </Link>
                                </li>
                            )


                        })}

                    </ul>

                </nav>
                
            </StyledWrapper>

            
      
        </IconContext.Provider>

                        
        </>
    );
}

export default Sidebar;
