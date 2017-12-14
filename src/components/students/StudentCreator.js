// src/components/students/StudentCreator.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import StarIcon from 'material-ui/svg-icons/action/favorite'
import patchClass from '../../actions/classes/patch'
import Paper from 'material-ui/Paper'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

class StudentCreator extends PureComponent {
  static propTypes = {
      patchClass: PropTypes.func.isRequired,
      classId: PropTypes.string.isRequired,
  }

  submitForm(event) {
    event.preventDefault()
    const classId  = this.props.classId
    const newStudent = {
      fullname: this.refs.fullname.getValue(),
      photo: this.refs.photo.getValue(),
    }
    console.log('classId ' + classId)
    this.props.patchClass(classId, newStudent)
  }

  render() {
    return (
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
          label="Add Student"
          primary={true}
          onClick={ this.submitForm.bind(this) }
          icon={<StarIcon />} />
      </Paper>
    )
  }
}


export default connect(null, { patchClass })(StudentCreator)
