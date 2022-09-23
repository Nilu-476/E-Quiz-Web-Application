import React from "react";
import { Route, Routes } from "react-router-dom";
import FacultyLogin from "./Components/FacultyLogin";
import FacultyReg from "./Components/FacultyReg";
import StudentLogin from "./Components/StudentLogin";
import StudentReg from "./Components/StudentReg";
import Home from "./Components/Home";
import AddQuestion from "./Components/AddQuestion";
import AddQuizSchedule from "./Components/AddQuizSchedule";
import FacultyDashboard from "./Components/FacultyDashboard";
import FacultySchedule from "./Components/FacultySchedule";
import ViewQuestion from "./Components/ViewQuestion";
import EditSchedule from "./Components/EditSchedule";
import EditQuestion from "./Components/EditQuestion";
import StudentDashboard from "./Components/StudentDashboard";
import StudentSchedule from "./Components/StudentSchedule";
import AttemptQuiz from "./Components/AttemptQuiz";
import Instructions from "./Components/Instructions";
import MyPeformance from "./Components/MyPerformance";
import ViewResults from "./Components/ViewResults";
import ViewAllStudents from "./Components/ViewAllStudents";
import StudentAuth from "./Components/StudentAuth";
import FacultyAuth from "./Components/FacultyAuth";

function App() {
  
  
  return (
    <>
    <div style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/2384073.jpg)',backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' }}>
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/student-login" element={<StudentLogin/>} />
            <Route path="/faculty-login" element={<FacultyLogin/>} />
            <Route path="/faculty-reg" element={<FacultyReg/>} />
            <Route path="/student-reg" element={<StudentReg/>} />
            <Route element={<StudentAuth/>}>
            
            <Route path="/student-dash" element={<StudentDashboard/>} />
            <Route path="/student-sche" element={<StudentSchedule/>} />
            <Route path="/attempt-quiz/:quizid/:time" element={<AttemptQuiz/>} />
            <Route path="/instrunction/:quizid/:time" element={<Instructions/>} />
            <Route path="/my-perform" element={<MyPeformance/>} />
            
            </Route>
            <Route element={<FacultyAuth/>}>
            <Route path="/view-result/:quizid" element={<ViewResults/>} />
            <Route path="/add-question/:quizid" element={<AddQuestion/>}/>
            <Route path="/add-schedule" element={<AddQuizSchedule/>} />
            <Route path="/faculty-dash" element={<FacultyDashboard/>} />
            <Route path="/faculty-sche" element={<FacultySchedule/>} />
            <Route path="/view-que/:quizid" element={<ViewQuestion/>} />
            <Route path="/edit-sche/:quizid" element={<EditSchedule/>} />
            <Route path="/edit-que/:questionid/:quizid" element={<EditQuestion/>} />
            <Route path="/view-all" element={<ViewAllStudents/>} />
            </Route>
            </Routes> 
    </div>
    </>
    
  );
}

export default App;
