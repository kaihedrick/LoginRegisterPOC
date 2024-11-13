// src/auth.js
export const isAuthenticated = () => !!localStorage.getItem('token');

export const logout = () => {
  localStorage.removeItem('token');
  window.location.reload(); // Reload to update auth state
};
