import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchOneClass, fetchStudents } from '../actions/classes/fetch'
import StudentItem from './StudentItem'

class Students extends PureComponent{

  componentWillMount() {
  const { myClass, fetchOneClass } = this.props
  const { classId } = this.props.match.params

  if (!myClass) { fetchOneClass(classId) }

}
  componentWillReceiveProps(nextProps) {
    const { myClass } = nextProps

    if (myClass && myClass.students.length === 0) {
      this.props.fetchStudents(myClass)
    }
  }
  renderStudent = (student, index) => {
    return (
      <StudentItem key={index} {...student} />
    )
  }
  render() {

    return(
      <div className="Students">
      {this.props.myClass.students.map(this.renderStudent)}
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, classes }, { match }) => {
  const myClass = classes.filter((c) => (c._id === match.params.classId))[0]
  const students = myClass && myClass.students

  return {
    students,
    myClass,
  }
}
export default connect(mapStateToProps, {
  fetchOneClass,
  fetchStudents,
})(Students)
