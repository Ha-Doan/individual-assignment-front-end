// src/components/games/CreateGameButton.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import StarIcon from 'material-ui/svg-icons/action/favorite'
import createClass from '../../actions/classes/create'
import Paper from 'material-ui/Paper'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

class ClassCreator extends PureComponent {
  static propTypes = {
      createClass: PropTypes.func.isRequired,
  }

  submitForm(event) {
    event.preventDefault()
    const newClass = {
      batch: this.refs.batch.getValue(),
      startDate: this.refs.startDate.getValue(),
      endDate: this.refs.endDate.getValue(),
    }
    this.props.createClass(newClass)
  }

  render() {
    return (
      <Paper style={ dialogStyle }>
        <form onSubmit={this.submitForm.bind(this)}>
        <div className="input">
          <TextField ref="batch" type="batch" hintText="Batch number" />
        </div>
          <div className="input">
            <TextField ref="startDate" type="startDate" hintText="Start date(yyyy-mm-dd)" />
          </div>
          <div className="input">
            <TextField ref="endDate" type="endDate" hintText="End date(yyyy-mm-dd)"  />
          </div>
        </form>

        <RaisedButton
          label="Create Class"
          primary={true}
          onClick={ this.submitForm.bind(this) }
          icon={<StarIcon />} />
      </Paper>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { createClass })(ClassCreator)
