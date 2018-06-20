export function fetchSources() {
  return (dispatch) => {
    return fetch(`https://newsapi.org/v2/sources?apiKey=7b48baa7e48541b9af219e981533d442`)
      .then(resp => resp.json())
      .then(json => json.sources)
      .then(sources => {
        dispatch({ type: 'FETCH_SOURCES', sources: sources })
      })
  }
}
