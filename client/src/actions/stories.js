const apiKey = '7b48baa7e48541b9af219e981533d442';

export function fetchTopStories() {
  return (dispatch) => {
    return fetch(`https://newsapi.org/v2/top-headlines?pageSize=50&country=us&apiKey=${apiKey}`)
      .then(resp => resp.json())
      .then(json => json.articles)
      .then((stories) => {
        dispatch({ type: 'FETCH_TOP_STORIES', stories: stories });
      })
  }
}

export function saveStory(username, userId, story) {
  // debugger;
  const args = {
    method: 'POST',
    mode: 'cors',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      author: story.author,
      title: story.title,
      description: story.description,
      url: story.url,
      url_to_image: story.urlToImage,
      published_at: story.publishedAt,
      source: story.source.name
    })
  };
  // debugger;
  return (dispatch) => {
    // I'd need to both create a new source and a new story if on my API side I indicate that stories belong to a source, so for now, I will leave the source data as a string
    return fetch(`http://localhost:3001/users/${userId}/stories`, args)
      .then(resp => resp.json())
      .catch(error => console.log(error))
      .then(story => dispatch({ type: 'ADD_STORY', stories: story }))
  }
}

export function removeStory(storyId) {
  
}

// for some reason, even after changing the request parameter for pageSize to equal 50, only 20 results display on the page.
