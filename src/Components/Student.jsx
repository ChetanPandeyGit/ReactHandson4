import './style.css'
import StudentDetails from './StudentDetails'

function Student() {
  return (
    <div className="student-page">
      <div className="student-header">
        <h1>Student Details</h1>
        <div id='add-new-btn'>Add New Student</div>
      </div>
      <div className="student-table">
        <div className="student-table-content">
          <div className='student-name'>Name</div>
          <div>Age</div>
          <div>Course</div>
          <div>Batch</div>
          <div >Change</div>
        </div>
        <hr />
        <StudentDetails name='John' age='25' course='MERN' batch='April' change='Edit' />
        <hr />
        <StudentDetails name='Doe' age='26' course='MERN' batch='August' change='Edit' />
        <hr />
        <StudentDetails name='Biden' age='22' course='MERN' batch='June' change='Edit' />
        <hr />
        <StudentDetails name='Barar' age='23' course='MERN' batch='September' change='Edit' />
        <hr />
        <StudentDetails name='Christ' age='24' course='MERN' batch='June' change='Edit' />
        <hr />
        <StudentDetails name='Elent' age='27' course='MERN' batch='October' change='Edit' />
      </div>
    </div>
  )
}

export default Student