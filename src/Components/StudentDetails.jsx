import './style.css'

function StudentDetails(props) {
  return (
    <div className="student-table-content">
      <div className='student-name'>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.course}</div>
      <div>{props.batch}</div>
      <div className='edit-link'>{props.change}</div>
    </div>
  )
}

export default StudentDetails