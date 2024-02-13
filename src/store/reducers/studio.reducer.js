const SET_STUDIOS = "SET_STUDIOS";
const ADD_STUDIOS = "ADD_STUDIOS";
const REMOVE_STUDIO = "REMOVE_STUDIO";
const UPDATE_STUDIO = "UPDATE_STUDIO";
const SET_STUDIO = " SET_STUDIO";

const initState = {
  studios: null,
  currStudio: null,
  filterBy: null,
};

export function studioReducer(state = initState, action = {}) {
  switch (action.type) {
    case SET_STUDIOS:
      return { ...state, studios: action.studios };
    // SET_STUDIO Not sure if will be needed
    case SET_STUDIO:
      return { ...state, currStudio: action.studio };
    case ADD_STUDIOS:
      return { ...state, studios: [...state.studios, action.studio] };
    case REMOVE_STUDIO:
      return {
        ...state,
        studios: state.studios.filter(
          (studio) => studio._id !== action.studioId
        ),
      };
    case UPDATE_STUDIO:
      return {
        ...state,
        studios: state.studios.map((studio) =>
          studio._id === action.studio._id ? action.studio : studio
        ),
      };

    default:
      break;
  }
}
