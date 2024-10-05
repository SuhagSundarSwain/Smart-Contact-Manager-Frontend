import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img
              src="images/contact.jpg"
              className="bi"
              width="30"
              height="30"
              alt="LOGO"
            ></img>
          </a>
          <span className="mb-3 mb-md-0">© 2024 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="/">
              <svg className="bi" width="24" height="24">
                <XIcon />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a href="/">
              <svg className="bi" width="24" height="24">
                <InstagramIcon />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a href="/">
              <svg className="bi" width="24" height="24">
                <FacebookIcon />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
