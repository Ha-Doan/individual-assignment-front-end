import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneClass, fetchStudents } from '../actions/classes/fetch'
const evaluationShape = PropTypes.shape({
  date:  PropTypes.string,
  color:  PropTypes.string,
})

const studentShape = PropTypes.shape({
  fullname: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  evaluations: PropTypes.arrayOf(evaluationShape),
})

class Students extends PureComponent{
  static propTypes = {
    students: PropTypes.arrayOf(studentShape),
  }
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
  render() {
    const {students} = this.props.students
    return(
      <div className="Students">
      <p>{students}</p>
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
