import MenuIcon from "@mui/icons-material/Menu";
import Dashboard from "@mui/icons-material/Dashboard";
import Contacts from "@mui/icons-material/Contacts";
import AddContact from "@mui/icons-material/AddIcCall";
import { useState } from "react";

const Sidebar = () => {
  const [sideBarExpand, setSideBarExpand] = useState(false);
  const sideBarList = [
    { name: "Dashboard", icon: <Dashboard /> },
    { name: "Contacts", icon: <Contacts /> },
    { name: "Add Contact", icon: <AddContact /> },
  ];

  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-body-tertiary"
      style={{ width: sideBarExpand ? "18.5rem" : "4.5rem", height: "80vh" }}
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
          <li className="nav-item" key={index}>
            <a
              href="/"
              className={`nav-link py-3 border-bottom rounded-0 d-flex align-items-center ${
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
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
