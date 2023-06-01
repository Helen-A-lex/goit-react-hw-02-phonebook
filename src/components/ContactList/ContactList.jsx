import { ContactListItem } from "components/ContactListItem/ContactListItem"
import PropTypes from 'prop-types';
export const ContactList = ({filteredContacts, onDelete}) => {
    return (
        <ul>
      {filteredContacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
    )
}
ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onDelete:PropTypes.func.isRequired
};