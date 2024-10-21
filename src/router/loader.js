export const fetchThemeLoader = async () => {
  return fetch(process.env.REACT_APP_SCM_BACKEND_SERVER + "/getTheme", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("Error:", error);
      return { theme: "light" };
    });
};
