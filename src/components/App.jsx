import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
export class App extends Component {
state = {
contacts: [],
  }
  
  formSubmitHandle = ({name,number}) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number
    }
    
    this.setState(prevState => ({
       contacts: [contact,...prevState.contacts] 
    }))
  
}
  render() {
    const { contacts } = this.state;
    return (
    <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandle} />
        <h2>Contacts</h2>  
        <ContactList contacts={contacts} />

  </div>
      
  )
  
};
}

