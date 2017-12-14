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
    const { _id, fullname, photo, evaluations } = this.props

    if (!_id) return null
    return(
      <Paper>
      <div className="StudentItem">
        <p>Full name: {fullname} </p>
        <p>Photo: {photo} </p>
        <p>Evaluation color: {evaluations} </p>
      </div>
      </Paper>
    )
  }

}
export default StudentItem
