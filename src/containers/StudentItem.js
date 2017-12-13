import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'

const evaluationShape = PropTypes.shape({
  date:  PropTypes.string,
  color:  PropTypes.string,
})

class StudentItem extends PureComponent {
  static propTypes = {
    fullname: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    evaluations: PropTypes.arrayOf(evaluationShape),
  }
  render() {
    return(
      <div className="StudentItem">
      </div>
    )
  }

}
export default StudentItem
