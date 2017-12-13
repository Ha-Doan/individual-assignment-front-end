import { FETCHED_CLASSES, FETCHED_STUDENTS } from '../actions/classes/fetch'
import {CREATED_CLASS} from '../actions/classes/create'
export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_CLASSES :
      return [ ...payload ]
      case CREATED_CLASS :
      const newClass = { ...payload }
      return state.concat([newClass])
    default:
      return state
  }
}
