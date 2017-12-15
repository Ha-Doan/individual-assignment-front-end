import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import StarIcon from 'material-ui/svg-icons/action/favorite'
import TextField from 'material-ui/TextField'
import patchClass from '../actions/classes/patch'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}
const evaluationShape = PropTypes.shape({
  date:  PropTypes.string,
  color:  PropTypes.string,
})

class StudentItem extends PureComponent {
  static propTypes = {
    patchClass: PropTypes.func.isRequired,
    classId: PropTypes.string.isRequired,
    fullname: PropTypes.string,
    photo: PropTypes.string,
    evaluations: PropTypes.arrayOf(evaluationShape),
  }

  removeStudent = () => {

     const classId  = this.props.classId
     const removedStudent = {}
     this.props.patchClass(classId, removedStudent, 'removeStudent')
  }
  submitForm(event) {
    event.preventDefault()
    const classId  = this.props.classId
    const editedStudent = {
      id: this.props._id,
      fullname: this.refs.fullname.getValue(),
      photo: this.refs.photo.getValue(),
    }

    this.props.patchClass(classId, editedStudent, 'editStudent')
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

        <Paper style={ dialogStyle }>
          <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField ref="fullname" type="fullname" hintText="Full name" />
          </div>
            <div className="input">
              <TextField ref="photo" type="photo" hintText="Photo URL" />
            </div>
          </form>

          <RaisedButton
            label="Edit Student"
            primary={true}
            onClick={ this.submitForm.bind(this) }
            icon={<StarIcon />} />
        </Paper>

        <div className="button">
        <RaisedButton
        label="Remove"
        primary={true}
        icon={<StarIcon />} />
        </div>
      </Paper>
    )
  }

}
export default connect(null, { patchClass })(StudentItem)
