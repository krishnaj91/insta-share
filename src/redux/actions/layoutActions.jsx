export const SWITCH_THEME = "SWITCH_THEME";
export const COLLAPSE_SIDEBAR = "COLLAPSE_SIDEBAR";

export const switchTheme = (mode) => ({
  type: SWITCH_THEME,
  payload: mode,
});

export const collapseSidebar = (mode) => ({
  type: COLLAPSE_SIDEBAR,
  payload: mode,
});
