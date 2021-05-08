const INITIAL_STATE = {
  hidden: true,
  user: [
    {
      Id: "1",
      firstName: "Sachin",
      lastName: "Mehra",
      dob: "15/07/1998",
      gender: "M",
      yearExperience: 2,
    },
    {
      Id: "2",
      firstName: "Nikhil",
      lastName: "Arya",
      dob: "6/01/1997",
      gender: "M",
      yearExperience: 2,
    },
  ],
};

const addUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_ADD_USER_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_USER":
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case "REMOVE_USER":
      return {
        ...state,
        user: state.user.filter(
          (currentUser) => currentUser.Id != action.payload.Id
        ),
      };
    case "SEARCH_USER":
      return {
        ...state,
        user: state.user.filter(
          (val) =>
            val.lastName.toLowerCase().includes(action.payload) ||
            val.firstName.toLowerCase().includes(action.payload)
        ),
      };
    default:
      return state;
  }
};

export default addUserReducer;
