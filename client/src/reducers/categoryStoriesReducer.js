export default function categoryStoriesReducer(state = {
  business: [],
  entertainment: [],
  general: [],
  health: [],
  science: [],
  sports: [],
  technology: []
}, action) {
  switch (action.type) {
    default:
      return state;
  }
}
