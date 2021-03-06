import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    const {meta: {touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>   
        <label>{field.label}</label>
        <input className="form-control"
        type="text"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    )
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title" 
          component={this.renderField} 
        />
        <Field 
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />

        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-primary">Cancel</button>
      </form>
    );
  }
}

function validate(values) {

  const errors = {};

  // validate the imputs from values
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least three characters!";
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }

  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // if errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid 
  return errors; 
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
