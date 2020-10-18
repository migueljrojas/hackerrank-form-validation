import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };

        this.validateForm = this.validateForm.bind(this);
    }

    validateForm() {
      const { onFormValidation: sendMessage } = this.props;
      const isFormInvalidMessage = 'Form is Incomplete!';
      const isFormValidMessage = 'Form is Complete!';
      if (
        this.isValidName() &&
        this.isValidEmail() &&
        this.isValidPhone() &&
        this.isValidUrl()
      ) {
        sendMessage(isFormValidMessage)
      } else {
        sendMessage(isFormInvalidMessage)
      }
    }

    isValidName() {
      return false;
    }

    isValidEmail() {
      return false;
    }

    isValidPhone() {
      return false;
    }

    isValidUrl() {
      return false;
    }    
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input type="tel" />
              </div>
              <div className="form-group">
                <label>Blog URL:</label>
                <input type="url" />
              </div>
              <div className="small-6 small-centered text-center columns">
                  <a
                    href="#"
                    className="button success expand round text-center"
                    onClick={this.validateForm}
                  >
                    Verify
                  </a>
              </div>
            </form>
        </div>);
    }
}

export default Form;
