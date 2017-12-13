import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'

const evaluationShape = PropTypes.shape({
  date:  PropTypes.string,
  color:  PropTypes.string,
})

const studentShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  evaluations: PropTypes.arrayOf(evaluationShape),
})

class ClassItem extends PureComponent{
  static propTypes = {
      batch: PropTypes.number.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      students: PropTypes.arrayOf(studentShape),
  }
  render() {
    const { _id, batch, startDate, endDate, students } = this.props

    if (!_id) return null
    return (
      <Paper>
      <div className="ClassItem" onClick={this.props.onClick}>
        <p>Batch: #{batch} </p>
        <p>Start date: {startDate} </p>
        <p>End date: {endDate} </p>
      </div>
      </Paper>
    )
  }
}
export default ClassItem
