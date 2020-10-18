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
        this.checkName = this.checkName.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.checkPhone = this.checkPhone.bind(this);
        this.checkUrl = this.checkUrl.bind(this);
    }

    validateForm() {
      const { onFormValidation: sendMessage } = this.props;
      const isFormInvalidMessage = 'Form is Incomplete!';
      const isFormValidMessage = 'Form is Complete!';
      const {
        isEmailValid,
        isNameValid,
        isPhoneValid,
        isUrlValid
      } = this.state;
      
      if (
        isEmailValid &&
        isNameValid &&
        isPhoneValid &&
        isUrlValid
      ) {
        sendMessage(isFormValidMessage)
      } else {
        sendMessage(isFormInvalidMessage)
      }
    }

    checkName(e) {
      const value = e.target.value;

      if (
        typeof value === 'string' &&
        value.length >= 3 &&
        value.length <= 30 &&
        (/^[a-zA-Z]+$/.test(value))
      ) {
        this.setState({isNameValid: true});
      } else {
        this.setState({isNameValid: false});
      }
    }

    checkEmail(e) {
      const value = e.target.value;
      const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      if (
        typeof value === 'string' &&
        emailRegEx.test(value)
      ) {
        this.setState({isEmailValid: true});
      } else {
        this.setState({isEmailValid: false});
      }
    }

    checkPhone(e) {
      const value = e.target.value;
      
      if (
        typeof value === 'string' &&
        value.length === 10 &&
        value.charAt(0) !== '0' &&
        value.charAt(0) !== '1'
      ) {
        this.setState({isPhoneValid: true});
      } else {
        this.setState({isPhoneValid: false});
      }
    }

    checkUrl(e) {
      const value = e.target.value;
      const urlRegEx = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

      if (
        typeof value === 'string' &&
        urlRegEx.test(value)
      ) {
        this.setState({isUrlValid: true});
      } else {
        this.setState({isUrlValid: false});
      }
    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  onChange={this.checkName}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  onChange={this.checkEmail}
                />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="tel"
                  onChange={this.checkPhone}
                />
              </div>
              <div className="form-group">
                <label>Blog URL:</label>
                <input
                  type="url"
                  onChange={this.checkUrl}
                />
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