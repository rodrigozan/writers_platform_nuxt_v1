
export default {
  SET_COMPONENT: (state, data) => {
    state.component = data;
  },
  OPEN: (state) => {
    state.open = true;
  },
  CLOSE: (state) => {
    state.open = false;
  },
  CLEAR: (state) => {
    state.open = false
    state.bind = []
    state.component = ""
  },
  SET_PARAMS : (state, data) =>{
    state.bind = data
  },
  SET_CONFIG : (state, data) =>{
    state.config = data
  }
}
