const apiKey = '7b48baa7e48541b9af219e981533d442';

export function fetchStories() {
  return (dispatch) => {
    // dispatch({ type: 'FETCH_STORIES', stories });
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then(resp => resp.json())
      .then(json => json.articles)
      .then((stories) => {
        dispatch({ type: 'FETCH_STORIES', stories: stories });
      })
  }
}
