import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

export default function Instructions() {

	var style = {
		width: "75%",
		display: "block",
		textAlign: "left",
		boxSizing: "border-box",
		float: "left",
		padding: "0 2em",
		border: "solid",
		paddingTop: "20px",
	}

	const { quizid } = useParams();
	const { time } = useParams();

	const handleClick = ()=>{
        window.location = `/attempt-quiz/${quizid}/${time}`;
      }

	return (
		<>
		<Header></Header>
		<div style={{ backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

			<p style={style}>
				<h2 style={{ color: "blue" }}>Instructions</h2>
				<ul>

					<li>
						Before starting the test,please verify your Login Id
					</li>
					<li>
						The examination consist of Multiple Choice Question
					</li>
					<li>
						Each MCQ will have 4 choices and a student shall mark his/her
						choice For MCQs on the system itself
					</li>
					<li>
						Please Dont Press Back Button on Browser,It will Exit The Exam immediately and Response will not be recorded
					</li>
					<li>
						Do not close Your test window directly  when you are taking test
					</li>
					<li>
						There will be no negative marking for any wrong answer or non attempt and answers will be auto calculated
					</li>
				</ul>
				<h2 style={{ color: "green" }}><li>Best of luck for Your Exam......!</li></h2>

				<input type="submit" value="Start Exam" onClick={handleClick}/>
				<br/><br/>
			</p>
		</div>
		</>
	);
}