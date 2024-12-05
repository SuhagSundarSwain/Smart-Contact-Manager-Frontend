export const ContactListReducer = (currentContactList, action) => {
  switch (action.type) {
    case "SET_CONTACT":
      return action.payload;
    case "ADD_CONTACT":
      return [...currentContactList, action.payload];
    case "DELETE_CONTACT":
      return currentContactList.filter(
        (contact) => contact.id !== action.payload.id
      );
    default:
      return currentContactList;
  }
};
