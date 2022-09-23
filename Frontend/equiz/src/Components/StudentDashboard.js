import React, { useState, useEffect } from 'react';
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

const StudentDashboard = () => {

    const username = sessionStorage.getItem("authenticatedUser");
    const [student, setStudent] = useState({

        prnNo: '',
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

    useEffect(() => {
        axios.post("http://localhost:8080/student/getstudentprofile/" + username, {}).
            then((response) => {
                console.log(response.data);
                setStudent(response.data);
            }).catch((e) => {
                console.log(e);
            })
    }, []);



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
                            <NavLink exact to="/student-sche" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">View Schedule</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/my-perform" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">View Performance</CDBSidebarMenuItem>
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
                    <div className="card mb-4" style={{ width: '100vh' }}>
                        <div className="card-body" >
                        <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">PRN</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{student.prnNo}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Full Name</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{student.firstName} {student.middleName} {student.lastName}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{student.email}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Mobile</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{student.mobileNo}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Gender</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{student.gender}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <p className="mb-0">Date Of Birth</p>
                                </div>
                                <div className="col-sm-9">
                                    <p className="text-muted mb-0">{student.dateOfBirth}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default StudentDashboard;