import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import AuthenticateService from './AuthenticateService';

const Home = () => {
  return (
    <>
    <Header></Header>
   
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    {!AuthenticateService.isUserLoggedIn() ? <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            My Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/student-login" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Student Login</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/faculty-login" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Faculty Login</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/student-reg" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Student Registration</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/faculty-reg" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Faculty Registration</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

    
      </CDBSidebar>
    :
    <div style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/2384073.jpg)',backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' }}></div>}
    </div>
    </>
  );
};

export default Home;