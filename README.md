# Contact Keeper

A full stack MERN application where a user can register, login, and manage contacts.
Front end: React
Backend: MongoDB, Express, Node.js
Deployed: Heroku
https://blooming-lowlands-38791.herokuapp.com/login

# Features

- State management with React Hooks and Context API
- Created REST API for contacts
  - Create/Get/Update/Delete contacts
  - Used RegEx for filtering contact search by name or email
- Each contact is associated with a user (one user cannot edit another user's contacts)
- User can register a new account and login
  - Hashed password for storing password securely
- Utilized JSON Web Tokens (JWT) for user authentication and route protection
- Implemented validation with alerts for registration/login
