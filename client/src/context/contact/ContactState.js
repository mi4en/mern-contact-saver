import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'Name 1',
				email: 'email@name1.com',
				phone: '12345',
				type: 'personal',
			},
			{
				id: 2,
				name: 'Name 2',
				email: 'email@name2.com',
				phone: '12345',
				type: 'personal',
			},
			{
				id: 3,
				name: 'Name 3',
				email: 'email@name3.com',
				phone: '12345',
				type: 'professional',
			},
		],
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add Contact

	// Delete Contact

	// Set Current Contact

	// Clear Current Contact

	// Update Contact

	// Filter Contacts

	// Clear Filter

	return (
		<ContactContext.Provider value={{ contacts: state.contacts }}>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
