import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchOneClass, fetchStudents } from '../actions/classes/fetch'
import StudentItem from './StudentItem'
import StudentCreator from '../components/students/StudentCreator'
import './Students.css'
class Students extends PureComponent{

  componentWillMount() {
  const { myClass, fetchOneClass } = this.props
  const { classId } = this.props.match.params

  if (!myClass) { fetchOneClass(classId) }

}
  componentWillReceiveProps(nextProps) {
    const { myClass } = nextProps

    if (myClass && !myClass.students[0]){
      this.props.fetchStudents(myClass)
    }
  }
  renderStudent = (student, index) => {
    return (
      <StudentItem key={index} {...student} />
    )
  }
  render() {
    const {myClass} = this.props
    if (!myClass) return null

    return(
      <div className="Students">
      <header>
       <StudentCreator classId={this.props.match.params.classId}/>
      </header>
      <main>
          {this.props.myClass.students.map(this.renderStudent)}
      </main>
      </div>
    )
  }
}

const mapStateToProps = ({ classes }, { match }) => {
 const myClass = classes.filter((g) => (g._id === match.params.classId))[0]
 return {myClass}
}

export default connect(mapStateToProps, {
  fetchOneClass,
  fetchStudents,
})(Students)
