import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const evaluationShape = PropTypes.shape({
  date:  PropTypes.string,
  color:  PropTypes.string,
})

const studentShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  evaluations: PropTypes.arrayOf(evaluationShape),
})

class Students extends PureComponent{
  static propTypes = {
    students: PropTypes.arrayOf(studentShape),
  }
  render() {
    return()
  }
}

export default Students
