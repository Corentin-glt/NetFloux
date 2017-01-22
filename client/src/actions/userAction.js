/**
 * Created by corentin on 22/01/17.
 */
export const createUser = (user) => {
  // Return actions
  return {
    // Unique identifier
    type: 'CREATE_USER',
    // Payload
    user: user
  }
};

export const login = (id) => {

  return {
    type: 'LOGIN',
    id
  }
};

export const logout = (id) => {

  return {
    type: 'LOGOUT',
    id
  }
};