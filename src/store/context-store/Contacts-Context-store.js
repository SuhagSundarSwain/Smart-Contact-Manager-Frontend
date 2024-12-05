import { createContext, useEffect, useReducer, useState } from "react";
import { ContactListReducer } from "./ContactListReducer";
import { fetchContact } from "./fetchFunctions";

export const ContactsContext = createContext({
  contactList: [],
  contactLoading: false,
  addContact: () => {},
  deleteContact: () => {},
});

const ContactsContextProvider = ({ children }) => {
  const [contactLoading, setLoading] = useState(false);
  const [contactList, dispatchContactList] = useReducer(ContactListReducer, []);

  useEffect(() => {
    setLoading(true);

    (async () => {
      const cList = await fetchContact();
      dispatchContactList({ type: "SET_CONTACT", payload: cList });
      setLoading(false);
    })();
  }, []);

  const addContact = (contact) => {
    dispatchContactList({ type: "ADD_CONTACT", payload: contact });
  };
  const deleteContact = (contact) => {
    dispatchContactList({ type: "DELETE_CONTACT", payload: contact });
  };

  return (
    <ContactsContext.Provider
      value={{ contactList, contactLoading, addContact, deleteContact }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContextProvider;
