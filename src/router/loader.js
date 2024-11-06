export const combineLoader = async () => {
  const [theme, loginStatus] = await Promise.all([
    fetchThemeLoader(),
    loginStatusLoader(),
  ]);
  return { theme, loginStatus };
};

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

export const loginStatusLoader = async () => {
  return fetch(process.env.REACT_APP_SCM_BACKEND_SERVER + "/loginStatus", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        if (response.status === 403) {
          return { status: false };
        }
        throw new Error("Something went wrong");
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
};
