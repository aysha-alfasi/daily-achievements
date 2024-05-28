export default function updateActions(state, payload) {
    return {
      ...state,
      timeDetails: {
        ...state.timeDetails,
        ...payload
      }
    };
  }