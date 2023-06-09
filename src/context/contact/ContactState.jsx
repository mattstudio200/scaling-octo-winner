import { useReducer } from 'react'
import { v4 as uuid4 } from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types'

const ContactState = (props) => {
  const initialState = {
    contacts: [],
    current: null,
    filtered: null,
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }
  // Delete
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }
  // Set Current
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }
  // Clear Current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Update
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  }
  // Filter
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text })
  }
  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
