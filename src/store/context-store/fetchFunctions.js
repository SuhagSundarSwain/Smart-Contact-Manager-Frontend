export const fetchContact = async () => {
  try {
    const response = await fetch(
      process.env.REACT_APP_SCM_BACKEND_SERVER + "/user/contacts/all-contacts",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong while fetching contacts.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    return [];
  }
};

export const fetchAddContact = async (contact) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_SCM_BACKEND_SERVER + "/user/contacts/add",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(contact),
      }
    );
    if (!response.ok) {
      if (response.status === 400 || response.status === 409) {
        const res = await response.json();
        return { status: response.status, error: res.error };
      }
      throw new Error("Something went wrong while adding contact.");
    }
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error(error.message);
  }
};
