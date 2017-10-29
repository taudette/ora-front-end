import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { dispatch } from 'redux'

let ChatForm = props => {
  const { handleSubmit, pristine, submitting, resetForm } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <Field name="message" component="input" type="text" />
      </div>
      <button type="submit" disabled={pristine || submitting}>Submit</button>
    </form>
  )
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('chatForm'));
}

ChatForm = reduxForm({
  form: 'chatForm',
  onSubmitSuccess: afterSubmit,
})(ChatForm)

export default ChatForm;