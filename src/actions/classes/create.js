// src/actions/classes/create.js

import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const CREATED_CLASS = 'CREATED_CLASS'

const api = new API()

export default (newClass) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.post('/classes', newClass)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({
          type: CREATED_CLASS,
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
