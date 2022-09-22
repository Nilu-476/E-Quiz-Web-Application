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
import ViewAllQuestion from './Components/FacultyComponent/Question/ViewAllQuestion';
import DeleteQuizSchedule from './Components/QuizComponent/Schedule/DeleteQuizSchedule';
import FacultyProfileEdit from './Components/FacultyComponent/Login/FacultyProfileEdit';
import ExamResult from './Components/StudentComponent/Exam/ExamResult';
import DemoQuizResult from './Components/DemoQuizResult';
import AllStudentResult from './Components/FacultyComponent/Question/AllStudentResult';
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
        <Route exact path='/UpdateQuizSchedule/:quizId' element={<UpdateQuizSchedule/>}></Route>
        <Route exact path='/DeleteQuizSchedule/:quizId' element={<DeleteQuizSchedule/>}></Route>
        <Route exact path='/AddQuestion/:quizId' element={<AddQuestion/>} ></Route>
        <Route exact path='/UpdateQuestion/:questionId/:quizId' element={<UpdateQuestion/>}></Route>
        <Route exact path='/DeleteQuestion/:questionId/:quizId' element={<DeleteQuestion/>}></Route>
        <Route exact path='/ViewAllQuestion/:quizId' element={<ViewAllQuestion/>}></Route>
        <Route exact path='/DemoQuiz' element={<DemoQuiz/>}></Route>
        <Route exact path='/StartExam/:quizId' element={<StartExam/>}></Route>
        <Route exact path='/ExamResult/:quizId' element={<ExamResult/>}></Route>
        <Route exact path='/Feedback' element={<Feedback/>}></Route>
        <Route exact path='/FacultyLogout' element={<FacultyLogout/>}></Route>
        <Route exact path='/StudentLogout' element={<StudentLogout/>}></Route>
        <Route exact path='/FacultyProfileEdit' element={<FacultyProfileEdit/>}></Route>
        <Route exact path='/DemoQuizResult/:score' element={<DemoQuizResult/>}></Route>
        <Route exact path='/AllStudentResult' element={<AllStudentResult/>}></Route>
      </Routes>
      </BrowserRouter>
</div>
  );
}

export default App;
