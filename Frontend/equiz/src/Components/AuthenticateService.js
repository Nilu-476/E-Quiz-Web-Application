import { Component } from 'react'

class AuthenticateService extends Component
{
    studentLogin(username)
    {
        const type = "student"
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('userType',type);
    }

    facultyLogin(username)
    {
        const type = "faculty"
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('userType',type);
    }

    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('userType');
    }

    isUserLoggedIn()
    {
        let user = sessionStorage.getItem('authenticatedUser');

        if(user=== null)
        {
            return false;
        }
        else{
            return true;
        }
    }
}

export default new AuthenticateService();