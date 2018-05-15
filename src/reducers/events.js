const INITIAL_STATE = {
  devices: null
};

const applySetEvents = (state, action) => ({
  ...state,
  events: action.events
});

function eventsReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'EVENTS_SET' : {
      return applySetEvents(state, action);
    }
    default : return state;
  }
}

export default eventsReducer;
