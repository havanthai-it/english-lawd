import ACTION from '../../utils/action-utils'

export const openSignupSuccessBoxAction = (isSignupSuccess) => {
  return {
    type: ACTION.OPEN_SIGNUP_SUCCESS_BOX,
    payload: {
      isSignupSuccess: isSignupSuccess
    }
  }
}
