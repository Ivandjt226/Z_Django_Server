
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import {NavLink} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import logoEd from '../static/Bot_IA.png'
import "../App.css";


const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
            <img
              src={logoEd}
              width="40"
              height="50"
              className="d-inline-block align-center"
              alt="React Bootstrap logo"
              exact = "true"
            />{' '}
            <strong>Asistente Virtual de la UNAB</strong>
        </Navbar.Brand>
    </Navbar>
    <div className='sidebar'>
    <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Ruta de Navegación
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact="true" to="/">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/UNAB_Virtual_Assistant">
              <CDBSidebarMenuItem icon="laptop">Conversación</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
    </div>
    
  );
};

export default Navigation;