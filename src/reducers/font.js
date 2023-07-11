export const SIZE = "FONT/SIZE";
export const TYPE = "FONT/TYPE";
export const TEXT = "FONT/TEXT";
export const COLOR = "FONT/COLOR";
export const BORDER = "FONT/BORDER";
export const BG_COLOR = "BG_COLOR";
export const IMAGE = "IMAGE";

const initialState = {
  size: 60,
  text: "Sample Text",
  color: "#FFFFFF",
  border: "transparent",
  fttype: "SANJUGotgam",
  bgcolor: "#E9B1BE",
  imageUrl: "",
};

export const sizeInfo = (size) => ({ type: SIZE, size });
export const fontType = (fttype) => ({ type: TYPE, fttype });
export const setText = (text) => ({ type: TEXT, text });
export const fontColor = (color) => ({ type: COLOR, color });
export const fontBorder = (border) => ({ type: BORDER, border });
export const bg_Color = (bgcolor) => ({ type: BG_COLOR, bgcolor });
export const setImage = (imageUrl) => ({ type: IMAGE, imageUrl });

const bannerInfo = (state = initialState, action) => {
  switch (action.type) {
    case SIZE:
      return {
        ...state,
        size: action.size,
      };
    case TYPE:
      return {
        ...state,
        fttype: action.fttype,
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
    case BG_COLOR:
      return {
        ...state,
        bgcolor: action.bgcolor,
      };
    case IMAGE:
      return {
        ...state,
        imageUrl: action.imageUrl,
      };
    default:
      return state;
  }
};

export default bannerInfo;
