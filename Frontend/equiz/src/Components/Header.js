import React,{useState} from "react";
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse
} from 'mdb-react-ui-kit';
import AuthenticateService from "./AuthenticateService";

export default function Header() {
    const [showNavText, setShowNavText] = useState(false);
    return (
        <MDBNavbar expand='lg' dark bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarText'
                    aria-controls='navbarText'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavText(!showNavText)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavText}>
                    <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem className='active'>
                            <MDBNavbarLink aria-current='page' href='/'>
                                <h2><b>E-Quiz</b></h2>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    {AuthenticateService.isUserLoggedIn() && <span className='navbar-text'>
                    {sessionStorage.getItem("userType")==='faculty' ? <MDBNavbarLink aria-current='page' href='/faculty-dash'>
                        <h6>{sessionStorage.getItem('authenticatedUser')}</h6>
                        </MDBNavbarLink> : <MDBNavbarLink aria-current='page' href='/student-dash'>
                        <h6>{sessionStorage.getItem('authenticatedUser')}</h6>
                        </MDBNavbarLink>}
                        <MDBNavbarLink aria-current='page' onClick={AuthenticateService.logout} href='/'>
                            <h6>Logout</h6>
                        </MDBNavbarLink>
                    </span>}
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )

}