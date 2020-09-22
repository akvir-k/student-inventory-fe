import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import signup from './component/User/Signup';
import Login from './component/Login';
import Admin from './component/Admin/Admin';
import Addbed from './component/Admin/Addbed';
import showbed from './component/Admin/Showbed';
import AdminHome from './component/Admin/Home';
import UserHome from './component/User/Home';
import Logout from './component/Logout';
import Shuffule from './component/Admin/Shuffule';
import history from '../src/utils/history';
import upload from './component/User/Add_student_data'
import AdminStudentData from './component/common/StudentData';
import userData from './component/User/Student';
import UpdateStudent from './component/User/Update';
import OtpVerify from './component/OtpVerify/Otp';



const App=()=>{

    
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Home}/>,
                <Route exact path='/signup' component={signup}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/admin_signup' component={Admin}/>
                <Route exact path='/admin/addbed' component={Addbed}/>
                <Route exact path='/show' component={showbed}/>
                <Route exact path='/admin_home' component={AdminHome}/>
                <Route exact path='/user/userHome' component={UserHome}/>
                <Route exact path='/logout' component={Logout}/>
                <Route exact path='/shuffule' component={Shuffule}/>
                <Route exact path='/upload' component={upload}/>
                <Route exact path='/studentData' component={AdminStudentData}/>
                <Route exact path='/userStudent' component={userData}/>
                <Route exact path='/student/update' component={UpdateStudent}/>
                <Route exact path='/student/otpverify' component={OtpVerify}/>
            </Switch>
        </Router>
    )

}

export default App;