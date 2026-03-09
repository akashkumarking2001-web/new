// src/firebase.js - Firebase disabled (no API keys configured)
// Safe stubs to prevent crashes when Firebase credentials are not set

export const auth = null;
export const db = null;
export const loginWithGoogle = () => {
  console.warn('Firebase not configured: loginWithGoogle is a no-op');
  return Promise.resolve(null);
};
export const logout = () => {
  console.warn('Firebase not configured: logout is a no-op');
  return Promise.resolve(null);
};
