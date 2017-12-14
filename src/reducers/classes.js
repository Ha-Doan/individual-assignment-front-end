import { FETCHED_CLASSES, FETCHED_STUDENTS, FETCHED_ONE_CLASS } from '../actions/classes/fetch'
import {CREATED_CLASS} from '../actions/classes/create'
import {PATCHED_CLASS} from '../actions/classes/patch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case FETCHED_CLASSES :
      return [ ...payload ]

    case FETCHED_ONE_CLASS :
      const classIds = state.map(c => c._id)
      if (classIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
        }
      return state.map((myClass) => {
        if (myClass._id === payload._id) {
          console.log('in reducers ' + myClass._id)
          console.log('in reducers payload students' + {...payload.students})
          return { ...payload }
          }
        return myClass
      })

    case CREATED_CLASS :
      const newClass = { ...payload }
      return state.concat([newClass])

    case PATCHED_CLASS :
      return state.map((myClass) => {
        if (myClass._id === payload._id) {
          console.log('in reducers ' + Array.isArray(payload.students))
          return { ...payload }
        }
        return myClass
      })

    case FETCHED_STUDENTS :
      return state.map((myClass) => {
        if (myClass._id === payload.myClass._id) {
          return { ...payload.myClass, students: payload.students }
        }
        return myClass
      })
    default:
      return state
  }
}
