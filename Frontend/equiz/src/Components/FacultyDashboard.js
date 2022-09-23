import React, { useState,useEffect } from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

const FacultyDashboard = () => {

 

    const username = sessionStorage.getItem("authenticatedUser");
    const [faculty, setFaculty] = useState({

        facultyid: '',
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        gender: '',
        dateOfBirth: '',
        userName: '',
        password: ''

    });
   
        useEffect( () => {
          axios.post("http://localhost:8080/faculty/getfacultyprofile/"+username,{}).
          then((response)=>{
            setFaculty(response.data);
          }).catch((e)=>{
            console.log(e);
          })
        }, []);

        useEffect( () => {
            axios.post("http://localhost:8080/faculty/getfacultyprofile/"+username,{}).
            then((response)=>{
              setFaculty(response.data);
            }).catch((e)=>{
              console.log(e);
            })
          });
     

    return (
        <>
            <Header></Header>

            <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                            My Dashboard
                        </a>
                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>
                        <NavLink exact to="/view-all" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">View All Students</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/faculty-sche" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">View Quiz Schedule</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/add-schedule" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">Add Schedule</CDBSidebarMenuItem>
                            </NavLink>
                            
                            {/*     <NavLink exact to="/student-reg" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Student Registration</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/faculty-reg" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Faculty Registration</CDBSidebarMenuItem>
    </NavLink>  */}
                        </CDBSidebarMenu>
                    </CDBSidebarContent>
                </CDBSidebar>
                <div className="col-lg-8" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '200vh'
      }}>
                    <div className="card mb-4" style={{width:'100vh'}}>
                        <div className="card-body" >
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Full Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{faculty.firstName} {faculty.middleName} {faculty.lastName}</p>
                                </div>
                            </div>
                            <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{faculty.email}</p>
                                    </div>
                                </div>
                                <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Mobile</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{faculty.mobileNo}</p>
                                        </div>
                                    </div>
                                        <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Gender</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="text-muted mb-0">{faculty.gender}</p>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Date Of Birth</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="text-muted mb-0">{faculty.dateOfBirth}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>


                            </>
                            );
};

export default FacultyDashboard;