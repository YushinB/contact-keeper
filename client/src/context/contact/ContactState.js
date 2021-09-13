import React, {useReducer} from 'react'
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
    SET_ARERT,
    REMOVE_ARERT
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [{
            id: 1,
            name: 'Binh Vu',
            email: 'binh@e-technostar.com',
            phone: '111-111-1111',
            type: 'personal'
        },
        {
            id: 2,
            name: 'Dat Vu',
            email: 'Dat@e-technostar.com',
            phone: '222-222-2222',
            type: 'personal'
        },{
            id: 3,
            name: 'Ha Nguyen',
            email: 'Ha@e-technostar.com',
            phone: '333-333-3333',
            type: 'professional'
        }]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // add contact information

    // delete contact information

    //set current contact information

    // clear current contact information

    // update contact information

    // filter

    // clear filter

    return (
        <ContactContext.Provider value = {{contacts: state.contacts}}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;



