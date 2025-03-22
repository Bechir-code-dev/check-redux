import { ADDING, DELETING, DOING, EDITING, FILTERING } from "./actionTypes";

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING:
      return { ...state, tasks: [...state.tasks, action.newTask] };
    case DELETING:
      return {
        ...state,
        tasks: state.tasks.filter((Element) => Element.id !== action.id),
      };
    case DOING:
      return {
        ...state,
        tasks: state.tasks.map((Element) =>
          Element.id === action.id
            ? { ...Element, isDone: !Element.isDone }
            : Element
        ),
      };
    case EDITING:
      return {
        ...state,
        tasks: state.tasks.map((Element) =>
          Element.id === action.payload.id
            ? { ...Element, description: action.payload.newDescription }
            : Element
        ),
      };
      case FILTERING:
        return { ...state , tasks: state.tasks.filter(Element=> Element.isDone===false)}
    
    default:
      return state;
  }
};
export default reducer;
