export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_SHORTEN_LIST':
      return {
        ...state,
        links: [
          action.data,
          ...state.links,
        ]
      }

    default:
      return state
  }
}
