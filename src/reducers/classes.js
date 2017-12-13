import { FETCHED_CLASSES, FETCHED_STUDENTS } from '../actions/classes/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_CLASSES :
      return [ ...payload ]
    default:
      return state
  }
}
