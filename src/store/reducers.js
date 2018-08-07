export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return {
        ...state,
        links: [
          // update recently added link (the first link in the Array)
          {...state.links[0], title: action.title},
          ...state.links.slice(1)
        ]
      }

    case 'UPDATE_CLICKS':
      return {
        ...state,
        links: [
          // update recently added link (the first link in the Array)
          {...state.links[0], global_count: action.clicks},
          ...state.links.slice(1)
        ]
      }

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
