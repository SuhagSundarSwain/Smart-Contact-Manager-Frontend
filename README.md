# 🌟 Smart Contact Manager 🌟

Welcome to **Smart Contact Manager** – a sleek and user-friendly application for managing contacts securely on the cloud. This app provides easy contact management, seamless authentication, and personalized themes to enhance your experience!

## 🚀 Features

- **Login & Signup** 🔐: Secure authentication with JWT tokens for user privacy and safety.
- **Theme Customization** 🎨: Switch between light and dark themes based on your preference.
- **Contact Management** 📇: Add, view, edit, and delete contacts with ease.
- **Role-based Access Control** 🛡️: Granular access based on user roles.
- **OAuth Integration** 🌐: Log in with Google, GitHub, or Facebook for convenience.

## 💻 Tech Stack

- **Frontend**: React, Redux, Material UI, Bootstrap
- **Backend**: Spring Boot, JWT Authentication
- **Database**: MySQL
- **API Communication**: RESTful APIs
- **Deployment**: Docker, k8s, jenkins, AWS

## 📸 Screenshots

### Light Theme 🌞

![Light Theme Screenshot](path/to/light-theme-screenshot.png)

### Dark Theme 🌙

![Dark Theme Screenshot](path/to/dark-theme-screenshot.png)

## 🔧 Setup & Installation

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/SuhagSundarSwain/Smart-Contact-Manager-Frontend.git
   ```
2. Navigate into the project directory:
   ```bash
   cd smart-contact-manager
   ```
3. Install frontend dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables in `.env` file:
   ```bash
   REACT_APP_SCM_BACKEND_SERVER=http://<your-backend-url>
   ```
5. Start the app:
   ```bash
   npm start
   ```

### Backend Setup

To access the backend repository and learn about its setup:

- **Backend Repo**: [Smart Contact Manager Backend](https://github.com/SuhagSundarSwain/Smart-Contact-Manager-Backend)

### 🛠️ API Endpoints

- `/login` - Log in with your credentials
- `/contacts` - Manage your contacts
- `/setTheme` - Toggle between light and dark themes
- `/getTheme` - Retrieve the current theme

### ✨ Contributing

Feel free to submit pull requests or report issues. Contributions are always welcome!

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a pull request

### 📄 License

This project is licensed under the MIT License.
