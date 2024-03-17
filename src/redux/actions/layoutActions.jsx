export const SWITCH_THEME = "SWITCH_THEME";
export const COLLAPSE_SIDEBAR = "COLLAPSE_SIDEBAR";
export const PRIME_REACT_SIZES = "PRIME_REACT_SIZES";
export const HOME_PROFILE_PIC_SIZE = "HOME_PROFILE_PIC_SIZE";

export const switchTheme = (mode) => ({
  type: SWITCH_THEME,
  payload: mode,
});

export const collapseSidebar = (mode) => ({
  type: COLLAPSE_SIDEBAR,
  payload: mode,
});

export const primeReactSizes = (size) => ({
  type: PRIME_REACT_SIZES,
  payload: size,
});

export const homeProfilePicSize = (size) => ({
  type: HOME_PROFILE_PIC_SIZE,
  payload: size,
});
