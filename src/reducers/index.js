import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, PUT_ON_SCREEN } from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
  tmp_total: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, state.tmp_total, state.operation),
      };
    /*       case APPLY_NUMBER:
        return {
          ...state,
          total: calculateResult(state.total, action.payload, state.operation),
        }; */

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        tmp_total: state.total,
      };
    /*       case CHANGE_OPERATION:
        return {
          ...state,
          operation: action.payload,
        }; */
    case PUT_ON_SCREEN:
      let last_total_state = 0;
      if (state.total === 0) {
        last_total_state = action.payload;
      } else {
        last_total_state = state.total + action.payload;
      }
      return {
        ...state,
        total: last_total_state,
      };

    default:
      return state;
  }
};

export default reducer;
