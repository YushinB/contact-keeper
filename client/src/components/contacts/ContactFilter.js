import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const text = useRef('');

  const { filterContact, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div className="card bg-light">
      <input
        ref={text}
        placeholder="Filter Contacts ..."
        onChange={onChange}
      ></input>
    </div>
  );
};

export default ContactFilter;
