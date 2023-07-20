const SIZE = "FONT/SIZE" as const;
const TYPE = "FONT/TYPE" as const;
const TEXT = "FONT/TEXT" as const;
const COLOR = "FONT/COLOR" as const;
const BORDER = "FONT/BORDER" as const;
const BG_COLOR = "BG_COLOR" as const;
const IMAGE = "IMAGE" as const;

type BannerState = {
  size: number;
  text: string;
  color: string;
  border: string;
  fttype: string;
  bgcolor: string;
  imageUrl: string;
};

const initialState: BannerState = {
  size: 30,
  text: "Sample Text",
  color: "#FFFFFF",
  border: "transparent",
  fttype: "SANJUGotgam",
  bgcolor: "#E9B1BE",
  imageUrl: "",
};

export const sizeInfo = (size: number) => ({ type: SIZE, size });
export const fontType = (fttype: string) => ({ type: TYPE, fttype });
export const setText = (text: string) => ({ type: TEXT, text });
export const fontColor = (color: string) => ({ type: COLOR, color });
export const fontBorder = (border: string) => ({ type: BORDER, border });
export const bg_Color = (bgcolor: string) => ({ type: BG_COLOR, bgcolor });
export const setImage = (imageUrl: string) => ({ type: IMAGE, imageUrl });

type BannerAction =
  | ReturnType<typeof sizeInfo>
  | ReturnType<typeof fontType>
  | ReturnType<typeof setText>
  | ReturnType<typeof fontColor>
  | ReturnType<typeof fontBorder>
  | ReturnType<typeof bg_Color>
  | ReturnType<typeof setImage>;

const bannerInfo = (
  state: BannerState = initialState,
  action: BannerAction
) => {
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
        border: action.border,
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
