const INITIAL_STATE = {
  devices: null,
  sites: null
};

const applySetDevices = (state, action) => ({
  ...state,
  devices: action.devices

});

const applySetSites = (state, action) => ({
  ...state,
  sites: action.sites
});

function devicesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'DEVICES_SET' : {
      return applySetDevices(state, action);
    }
    case 'SITES_SET' : {
      return applySetSites(state, action);
    }
    default : return state;
  }
}

export default devicesReducer;
