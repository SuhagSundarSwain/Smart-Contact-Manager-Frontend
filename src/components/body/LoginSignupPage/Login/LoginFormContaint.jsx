import { useRef, useState, useEffect } from "react";
import styles from "./LoginFormContaint.module.css";
import { TextField } from "@mui/material";

export const LoginFormContaint = ({ theme }) => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  let errorTimeout;

  const login = (event) => {
    event.preventDefault();
    setLoading(true); // Show loading state
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;

    fetch(process.env.REACT_APP_SCM_BACKEND_SERVER + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password }),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            return response.json().then((errorResponse) => {
              if (errorResponse.errorType === "INVALID_CREDENTIAL") {
                setErrorMessage(errorResponse.error);
                if (errorTimeout) clearTimeout(errorTimeout);
                errorTimeout = setTimeout(() => {
                  setErrorMessage("");
                }, 1500);
              }
              throw new Error(errorResponse.errorType || "Unauthorized");
            });
          }
          if (response.status === 400) {
            return response.json().then((errorResponse) => {
              if (errorResponse.errorType === "VALIDATION_ERROR") {
                setErrorMessage(errorResponse.error.password || "Bad Request");
                if (errorTimeout) clearTimeout(errorTimeout);
                errorTimeout = setTimeout(() => {
                  setErrorMessage("");
                }, 1500);
              }
              throw new Error("Bad Request");
            });
          }
          throw new Error("Login Failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login successful:", data);
        setErrorMessage("");
        // Handle login success, store tokens, redirect, etc.
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false); // Hide loading state
      });
  };

  useEffect(() => {
    return () => {
      // Clean up timeout when component unmounts to prevent memory leaks
      if (errorTimeout) clearTimeout(errorTimeout);
    };
  }, []);

  return (
    <>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <p className={styles.form_title}>Login Here</p>
      <p className={styles.form_description}>
        Start managing contacts on cloud
      </p>
      <form onSubmit={login}>
        <TextField
          id="userId-email"
          label="UserId/Email"
          placeholder="Enter your UserID or Email"
          variant="outlined"
          size="small"
          margin="normal"
          className={`${styles.textfield} ${
            theme.lightTheme ? styles.textfield_light : styles.textfield_dark
          }`}
          inputRef={userNameRef}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          placeholder="Enter your Password"
          size="small"
          margin="normal"
          className={`${styles.textfield} ${
            theme.lightTheme ? styles.textfield_light : styles.textfield_dark
          }`}
          inputRef={passwordRef}
        />

        <br />
        <div className={styles.button_container}>
          <button
            type="submit"
            className={`btn ${theme.lightTheme ? "btn-dark" : "btn-primary"}`}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Logging in..." : "Login"} {/* Show loading state */}
          </button>
          <button type="reset" className="btn btn-danger" disabled={loading}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
};
