package com.equiz.entities;

//import java.util.List;

//import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="faculty_info")
public class FacultyEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="facultyid")
	private long facultyid;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="middle_name")
	private String middleName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="email")
	private String email;
	
	@Column(name="mobile_no")
	private long mobileNo;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="dateofbirth")
	private String dateOfBirth;
	
	@Column(unique=true,name="username")
	private String userName;
	
	@Column(name="password")
	private String password;
	
//	@Column 
//	@OneToMany(mappedBy = "teacher",cascade = CascadeType.ALL)
//	private List<QuizScheduleEntity> quizTimetable;
//
//	@OneToMany(mappedBy = "faculty",cascade = CascadeType.ALL)
//	private List<QuestionEntity> questions; 
	
	public FacultyEntity() {
		super();
	}

	

	public FacultyEntity(long facultyId, String firstName, String middleName, String lastName, String email,
			long mobileNo, String gender, String dateOfBirth, String userName, String password) {
		super();
		this.facultyid = facultyId;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.email = email;
		this.mobileNo = mobileNo;
		this.gender = gender;
		this.dateOfBirth = dateOfBirth;
		this.userName = userName;
		this.password = password;
	}



	public long getFacultyId() {
		return facultyid;
	}

	public void setFacultyId(long facultyId) {
		this.facultyid = facultyId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

//	public List<QuizScheduleEntity> getQuizTimetable() {
//		return quizTimetable;
//	}
//
//	public void setQuizTimetable(List<QuizScheduleEntity> quizTimetable) {
//		this.quizTimetable = quizTimetable;
//	}

//	public List<QuestionEntity> getQuestions() {
//		return questions;
//	}
//
//	public void setQuestions(List<QuestionEntity> questions) {
//		this.questions = questions;
//	}

	
	
	
	
	
}
