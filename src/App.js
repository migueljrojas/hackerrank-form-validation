import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    constructor() {
      super();

      this.state = {
        validationMessage: ''
      }

      this.setValidationMessage = this.setValidationMessage.bind(this);
    }

    setValidationMessage(message) {
      this.setState({validationMessage: message});
    }

    render() {
        const { validationMessage } = this.state;
        
        return (
          <div>
            <Form onFormValidation={this.setValidationMessage} />
            <Message message={validationMessage} />
          </div>
        );
    }
}

export default App;
