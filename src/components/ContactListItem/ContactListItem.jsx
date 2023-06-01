import PropTypes from 'prop-types';

export const ContactListItem = ({ contact, onDelete }) => {
    return (
        <div>
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
        
    )
}
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired,
    onDelete:PropTypes.func.isRequired
};