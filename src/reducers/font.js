export const SIZE = "FONT/SIZE";

const initialState = {
  size: 60,
};

export const sizeInfo = (size) => ({ type: SIZE, size });

const fontInfo = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SIZE:
      return {
        ...state,
        size: action.size,
      };
    default:
      return state;
  }
};

export default fontInfo;
