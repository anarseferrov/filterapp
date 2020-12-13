import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts';

class App extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
  }
  state = {
    contacts: [
      { name: "Anar Seferov", phone: "050 227 47 37", id: 1 },
      { name: "Ayaz Memmedov", phone: "050 225 45 35", id: 2 },
      { name: "Gunel Qurbanova", phone: "055 344 32 44", id: 3 }
    ]
  };
  addContact(contact) {
    const { contacts } = this.state
    contacts.push(contact)

    this.setState({
      contacts: contacts
    });
  }
  
  render() {
    return (
      <div className="App">
        <Contacts contacts={this.state.contacts} addContact={this.addContact} />
      </div>
    );
  }
}

export default App;