import { createContext, useEffect, useReducer, useState } from "react";
import { ContactListReducer } from "./ContactListReducer";
import { fetchAddContact, fetchContact } from "./fetchFunctions";

export const ContactsContext = createContext({
  contactList: [],
  contactLoading: false,
  addContact: async () => {},
  addContactLoading: false,
  addContactError: {},
  deleteContact: () => {},
});

const ContactsContextProvider = ({ children }) => {
  const [contactLoading, setLoading] = useState(false);
  const [contactList, dispatchContactList] = useReducer(ContactListReducer, []);
  const [addContactLoading, setAddContactLoading] = useState(false);
  const [addContactError, setAddContactError] = useState({});

  useEffect(() => {
    setLoading(true);
    (async () => {
      const cList = await fetchContact();
      dispatchContactList({ type: "SET_CONTACT", payload: cList });
      setLoading(false);
    })();
  }, []);

  const addContact = async (contact) => {
    setAddContactLoading(true);
    try {
      const res = await fetchAddContact(contact);
      if (res?.status === 201) {
        dispatchContactList({ type: "ADD_CONTACT", payload: res.data });
        setAddContactLoading(false);
        return true; // Return success
      } else {
        setAddContactError(res?.error || {});
        setTimeout(() => setAddContactError({}), 3000);
        setAddContactLoading(false);
        return false; // Return failure
      }
    } catch (error) {
      setAddContactLoading(false);
      console.error("Error adding contact:", error);
      return false;
    }
  };

  const deleteContact = (contact) => {
    dispatchContactList({ type: "DELETE_CONTACT", payload: contact });
  };

  return (
    <ContactsContext.Provider
      value={{
        contactList,
        contactLoading,
        addContact,
        addContactLoading,
        addContactError,
        deleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContextProvider;
