import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchClasses from '../actions/classes/fetch'
import ClassItem from './ClassItem'
import ClassCreator from '../components/classes/ClassCreator'

class ClassesContainer extends PureComponent{
  componentWillMount() {
    this.props.fetchClasses()

  }
  renderClass = (myClass, index) => {
    return (
      <ClassItem key={index} {...myClass} />
    )
  }
  render() {
    return (
      <div className="ClassesContainer">
        <ClassCreator />
         {this.props.classes.map(this.renderClass)}
      </div>
    )
  }

}

const mapStateToProps = ({ classes, currentUser }) => ({ classes, currentUser })

export default connect(mapStateToProps, { fetchClasses})(ClassesContainer)
