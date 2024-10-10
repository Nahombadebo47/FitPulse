import { create } from 'zustand';

// Zustand store for handling authentication
export const useAuthStore = create((set, get) => ({
  isAuthenticated: false,  // Tracks if the user is logged in
  currentUser: null,        // Tracks the currently logged-in user
  users: [],                // Stores all registered users

  // Signup function
  signup: (name, email, password) => {
    const existingUsers = get().users;

    // Check if the email is already registered
    const userExists = existingUsers.some(user => user.email === email);
    if (userExists) {
      console.log("User already exists");
      return false;  // If user already exists, return false
    }

    // Add new user to the list
    const newUser = { name, email, password };
    set({
      users: [...existingUsers, newUser],
      isAuthenticated: true,
      currentUser: newUser,
    });
    console.log("New user added", newUser);  // Debug: Confirm user is added
    console.log("All users:", get().users);  // Debug: Log all users
    return true;  // Return true to indicate success
  },

  // Login function
  login: (email, password) => {
    const existingUsers = get().users;
    console.log("Attempting login with", { email, password });  // Debug

    // Find user with matching email and password
    const foundUser = existingUsers.find(user => user.email === email && user.password === password);

    if (foundUser) {
      set({
        isAuthenticated: true,
        currentUser: foundUser,
      });
      console.log("Login successful", foundUser);  // Debug: Successful login
      return true;  // Return true for successful login
    }
    console.log("Login failed: Invalid credentials");  // Debug: Login failed
    return false;   // Return false if login fails
  },

  // Logout function
  logout: () => {
    set({
      isAuthenticated: false,
      currentUser: null,
    });
  },
}));
