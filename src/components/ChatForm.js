import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ChatForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <Field name="message" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

ChatForm = reduxForm({
  form: 'contact'
})(ChatForm)

export default ChatForm;