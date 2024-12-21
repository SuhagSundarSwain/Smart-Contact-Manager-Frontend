import MenuIcon from "@mui/icons-material/Menu";
import Dashboard from "@mui/icons-material/Dashboard";
import Contacts from "@mui/icons-material/Contacts";
import AddContact from "@mui/icons-material/AddIcCall";
import { useState } from "react";
import styles from "./Sidebar.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const theme = useSelector((store) => store.theme);
  const sidebar = useSelector((store) => store.sidebar);
  const [sideBarExpand, setSideBarExpand] = useState(false);
  const sideBarList = [
    { name: "Dashboard", icon: <Dashboard /> },
    { name: "Contacts", icon: <Contacts /> },
    { name: "Add Contact", icon: <AddContact /> },
  ];

  return (
    <div
      className={`d-flex flex-column flex-shrink-0 ${
        theme.lightTheme ? styles.sidebar_light : styles.sidebar_dark
      }`}
      style={{
        width: sideBarExpand ? "15.5rem" : "4.5rem",
      }}
      onMouseEnter={() => setSideBarExpand(true)}
      onMouseLeave={() => setSideBarExpand(false)}
    >
      <a
        className="d-block p-3 link-body-emphasis text-decoration-none"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title="Toggle Sidebar"
        onClick={() => setSideBarExpand(!sideBarExpand)}
      >
        <MenuIcon fontSize="large" />
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto">
        {sideBarList.map((tab, index) => (
          <li
            className="nav-item"
            key={index}
            // onClick={() => dispatch(sidebarActions.setTab({ tab: tab.name }))}
          >
            <Link
              to={`/user/${tab.name.toLowerCase()}`}
              className={`nav-link py-3 border-bottom rounded-0 d-flex align-items-center ${
                sidebar.current_tab === tab.name
                  ? styles.sidebar_tab_select
                  : styles.sidebar_tabs
              } ${
                sideBarExpand
                  ? "justify-content-start"
                  : "justify-content-center"
              }`}
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title={tab.name}
            >
              {tab.icon}
              {sideBarExpand && <span className="ms-2">{tab.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
