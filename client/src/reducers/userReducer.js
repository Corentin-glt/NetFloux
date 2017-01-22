/**
 * Created by corentin on 22/01/17.
 */
const users = [

  {username:'corentin', password: 'corentin', isConnected: false},
  {username:'jocelyne', password: 'jocelyne', isConnected: false},
  {username:'jeremie', password: 'jeremie', isConnected: false}
];

export default (state = users, action) => {
  switch (action.type){
    case 'LOGIN':
      return state.map((user, key) => {
        if (key === action.id){
          user.isConnected = true;
        }
        return user;
      });

    case 'LOGOUT':
      return state.map((user, key) => {
        if (key === action.id){
          user.isConnected = false;
        }
        return user;
      });

    case 'CREATE_USER':
      return [
        ...state,
        Object.assign({}, action.user)
      ];

    default:
      return state;
  }
};