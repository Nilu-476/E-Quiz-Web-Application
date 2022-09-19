import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddQuizSchedule from './Components/QuizComponent/Schedule/AddQuizSchedule';
import FacultyLogin from './Components/FacultyComponent/Login/FacultyLogin';
import FacultyRegistration from './Components/FacultyComponent/Login/FacultyRegistration';
import AddQuestion from './Components/FacultyComponent/Question/AddQuestion';
import Homepage from './Components/HomeComponent/Homepage';
import StudentLogin from './Components/StudentComponent/StudentLoginComponent/StudentLogin';
import StudentRegistration from './Components/StudentComponent/StudentLoginComponent/StudentRegistration';
import StudentDashboard from './Components/StudentComponent/Dashboard/StudentDashboard';
import FacultyDashboard from './Components/FacultyComponent/Dashboard/FacultyDashboard';
import UpdateQuestion from './Components/FacultyComponent/Question/UpdateQuestion';
import DeleteQuestion from './Components/FacultyComponent/Question/DeleteQuestion';
import DemoQuiz from './Components/DemoQuiz';
import Feedback from './feedback';
import StartExam from './Components/StudentComponent/Exam/StartExam';
import ViewQuiz from './Components/FacultyComponent/Question/ViewQuiz';
import Result from './Components/ResultComponent/Result';
import FacultyLogout from './Components/FacultyComponent/Login/FacultyLogout';
import StudentLogout from './Components/StudentComponent/StudentLoginComponent/StudentLogout';
import StudentProfileEdit from './Components/StudentComponent/StudentLoginComponent/StudentProfileEdit';
import UpdateQuizSchedule from './Components/QuizComponent/Schedule/UpdateQuizSchedule';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route exact path='/StudentLogin' element={<StudentLogin/>}></Route>
        <Route exact path='/StudentRegistration' element={<StudentRegistration/>}></Route>
        <Route exact path='/StudentDashboard' element={<StudentDashboard/>}></Route>
        <Route exact path='/StudentProfileEdit' element={<StudentProfileEdit/>}></Route>
        <Route exact path='/FacultyLogin' element={<FacultyLogin/>}></Route>
        <Route exact path='/FacultyRegistration' element={<FacultyRegistration/>}></Route>
        <Route exact path='/FacultyDashboard' element={<FacultyDashboard/>}></Route>
        <Route exact path='/ViewQuiz' element={<ViewQuiz/>}></Route>
        <Route exact path='/AddQuizSchedule' element={<AddQuizSchedule/>}></Route>
        <Route exact path='/UpdateQuizSchedule' element={<UpdateQuizSchedule/>}></Route>
        <Route exact path='/AddQuestion' element={<AddQuestion/>} ></Route>
        <Route exact path='/UpdateQuestion' element={<UpdateQuestion/>}></Route>
        <Route exact path='/DeleteQuestion' element={<DeleteQuestion/>}></Route>
        <Route exact path='/DemoQuiz' element={<DemoQuiz/>}></Route>
        <Route exact path='/StartExam' element={<StartExam/>}></Route>
        <Route exact path='/Feedback' element={<Feedback/>}></Route>
        <Route exact path='/Result' element={<Result/>}></Route>
        <Route exact path='/FacultyLogout' element={<FacultyLogout/>}></Route>
        <Route exact path='/StudentLogout' element={<StudentLogout/>}></Route>
      </Routes>
      </BrowserRouter>
</div>
  );
}

export default App;
