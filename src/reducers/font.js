export const SIZE = "FONT/SIZE";
export const TYPE = "FONT/TYPE";
export const TEXT = "FONT/TEXT";
export const COLOR = "FONT/COLOR";
export const WEIGHT = "FONT/WEIGHT";
export const BORDER = "FONT/BORDER";

const initialState = {
  size: 60,
  text: "Sample Text",
  color: "#FFFFFF",
  border: "transparent",
  type: "SANJUGotgam",
  bgcolor: "#E9B1BE",
  imageUrl: "",
};

export const sizeInfo = (size) => ({ type: SIZE, size });
export const fontType = (type) => ({ type: TYPE, type });
export const setText = (text) => ({ type: TEXT, text });
export const fontColor = (color) => ({ type: COLOR, color });
export const fontBorder = (border) => ({ type: BORDER, border });

const bannerInfo = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SIZE:
      return {
        ...state,
        size: action.size,
      };
    case TYPE:
      return {
        ...state,
        type: action.type,
      };
    case TEXT:
      return {
        ...state,
        text: action.text,
      };
    case COLOR:
      return {
        ...state,
        color: action.color,
      };
    case BORDER:
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
};

export default bannerInfo;
