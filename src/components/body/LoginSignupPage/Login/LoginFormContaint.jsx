import { useRef, useState, useEffect } from "react";
import styles from "./LoginFormContaint.module.css";
import { TextField, LinearProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { authActions } from "../../../../store/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginFormContaint = ({ theme }) => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [progress, setProgress] = useState(100);
  const [userNameError, setUserNameError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);

  const errorTimeout = useRef(null);

  const startProgressCountdown = () => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress <= 0) {
          clearInterval(interval);
          return 0;
        }
        return oldProgress - 1.5;
      });
    }, 15); // Update every 15ms for smoother progress
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    setProgress(100);

    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;

    fetch(process.env.REACT_APP_SCM_BACKEND_SERVER + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, password }),
      credentials: "include",
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorResponse = await response.json();
          if (
            response.status === 401 &&
            errorResponse.errorType === "INVALID_CREDENTIAL"
          ) {
            setErrorMessage(errorResponse.error);
            setShowPopup(true);
            startProgressCountdown();

            errorTimeout.current = setTimeout(() => {
              setShowPopup(false);
              setErrorMessage("");
            }, 1500);
          }
          if (
            response.status === 400 &&
            errorResponse.errorType === "VALIDATION_ERROR"
          ) {
            setUserNameError(errorResponse.error.userName);
            setPasswordError(errorResponse.error.password);
          }
          throw new Error(errorResponse.errorType || "Unauthorized");
        }
        return response.json();
      })
      .then((data) => {
        setErrorMessage("");
        if (data.userId === userName) dispatch(authActions.setAuthStatus(true));
        else dispatch(authActions.setAuthStatus(false));
        navigate(location.state?.from?.pathname || "/home");
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setUserNameError(undefined);
          setPasswordError(undefined);
        }, 1500);
      });
  };

  useEffect(() => {
    // Clear the timeout if the component unmounts
    return () => clearTimeout(errorTimeout.current);
  }, []);

  return (
    <>
      {showPopup && (
        <div className={styles.popup}>
          <p>{errorMessage}</p>
          <LinearProgress
            variant="determinate"
            value={progress}
            className={styles.progressBar}
          />
        </div>
      )}

      <p className={styles.form_title}>Login Here</p>
      <p className={styles.form_description}>
        Start managing contacts on cloud
      </p>
      <form onSubmit={handleLogin}>
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
          error={Boolean(userNameError)}
          helperText={userNameError}
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
          error={Boolean(passwordError)}
          helperText={passwordError}
        />

        <div className={styles.button_container}>
          <button
            type="submit"
            className={`btn ${theme.lightTheme ? "btn-dark" : "btn-primary"}`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <button type="reset" className="btn btn-danger" disabled={loading}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
};
