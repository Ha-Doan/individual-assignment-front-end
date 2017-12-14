import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchClasses, {fetchStudents} from '../actions/classes/fetch'
import ClassItem from './ClassItem'
import ClassCreator from '../components/classes/ClassCreator'
import './ClassesContainer.css'
import { push } from 'react-router-redux'
import Students from './Students'

class ClassesContainer extends PureComponent{
  componentWillMount() {
    this.props.fetchClasses()

  }
  goToStudents = classId => event => this.props.push(`/classes/${classId}`)
  renderClass = (myClass, index) => {

    return (
      <ClassItem key={index} {...myClass} onClick={this.goToStudents(myClass._id)} />
    )
  }
  render() {
    return (
      <div className="ClassesContainer">
       <header>
        <ClassCreator />
       </header>
       <main>
         {this.props.classes.map(this.renderClass)}
       </main>
      </div>

    )
  }

}

const mapStateToProps = ({ classes, currentUser }) => ({ classes, currentUser })

export default connect(mapStateToProps, { fetchClasses, fetchStudents,push })(ClassesContainer)
