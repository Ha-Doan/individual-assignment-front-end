import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
const api = new API()

export const PATCHED_CLASS = 'PATCHED_CLASS'
export default (classId, patchedStudent, patchType) => {
  return (dispatch) => {
    api.patch(`/classes/${classId}`, {patchedStudent, patchType})
    .then((result) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })
      dispatch({
        type: PATCHED_CLASS,
        payload: result.body
      })

    })
    .catch((error) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({
        type: LOAD_ERROR,
        payload: error.message
      })
    })
}
}
