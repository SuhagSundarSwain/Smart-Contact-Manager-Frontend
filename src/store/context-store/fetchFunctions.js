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
