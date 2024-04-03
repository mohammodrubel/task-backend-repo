# Task Management Application

This project is a task management application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to perform CRUD operations on tasks, register accounts, log in, and manage their own tasks. Additionally, it includes extra features such as filtering, searching, an admin route to view all users, and improved error handling.

## Features

- **CRUD Operations:** Users can create, read, update, and delete tasks.
- **User Authentication:** Implemented JWT-based authentication for user registration and login.
- **Authorization:** Users can only manage their own tasks, and an admin route is available to view all users.
- **Pagination:** Implemented pagination for task listing to improve performance and user experience.
- **Filtering:** Added filtering options for tasks to allow users to narrow down their task list.
- **Searching:** Implemented a search feature to allow users to search for specific tasks.
- **Responsive Design:** The application is responsive, ensuring a seamless experience across different devices.
- **Redux Toolkit and RTK Query:** Used Redux Toolkit and RTK Query for state management and data fetching, respectively.
- **Data Caching:** Utilized RTK Query for data caching to improve application performance.
- **React Hook Form:** Employed React Hook Form for form handling to streamline user input.
- **Ant Design (Antd):** Used Ant Design for UI components to enhance the overall user interface.
- **Redux Persistence:** Stored user information in local storage using Redux Persistence.
- **Access Token Refresh Token:** Implemented access token refresh token mechanism for enhanced security.

## Error Handling

- Zod Error
- Cast Error
- Mongoose Error
- Global Error
- Mongoose Duplicate Error

**Global Error Handling:** All errors are handled through a global error handler to ensure a smooth user experience.

## Backend

- Express.js
- MongoDB with Mongoose (ODM)
- TypeScript

## Frontend

- React.js
- Tailwind CSS
- Ant Design (Antd)
- Redux Toolkit
- RTK Query
- React Hook Form

## Deployment

The application is deployed on the following platforms:

- Frontend: [Deployed Frontend URL](https://task-project-psi.vercel.app/)
- Backend: [Deployed Backend URL](https://authintication-backend.vercel.app/)
