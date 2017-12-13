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

class ClassItem extends PureComponent{

  static propTypes = {
    //fetchOneGame: PropTypes.func.isRequired,
    //fetchPlayers: PropTypes.func.isRequired,

    class: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      batch: PropTypes.number.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      students: PropTypes.arrayOf(studentShape),
    })
  }
  render() {
    return (
      <div className="ClassItem">
      </div>
    )
  }
}
export default ClassItem
