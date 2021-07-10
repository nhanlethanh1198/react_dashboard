const setMode = (mode) => {
  return {
    type: "SET_MODE",
    payload: mode,
  }
}

const setColor = (color) => {
  return {
    type: "SET_COLOR",
    payload: color,
  }
}

const getTheme = () => {
  return {
    type: "GET_THEME",
  }
}

const ThemeAction = {
  setMode,
  setColor,
  getTheme,
}

export default ThemeAction
