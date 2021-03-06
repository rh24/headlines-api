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
      urlToImage: story.urlToImage,
      publishedAt: story.publishedAt,
      source: story.source.name
    })
  };
  // debugger;
  return (dispatch) => {
    // I'd need to both create a new source and a new story if on my API side I indicate that stories belong to a source, so for now, I will leave the source data as a string
    console.log('A')
    return fetch(`http://localhost:3001/users/${userId}/stories`, args)
      .then(resp => {
        console.log('B')
        return resp.json()
      })
      .catch(error => console.log(error))
      .then(story => {
        console.log('C')
        return dispatch({ type: 'ADD_STORY', stories: story, userId: userId })
      })
      console.log('D')
  }
}

export function removeStory(storyId, userId) {
  const args = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };

  return (dispatch) => {
    return fetch(`http://localhost:3001/users/${userId}/stories/${storyId}`, args)
      .then(resp => resp.json())
      .catch(error => console.log(error))
      .then(story => dispatch({ type: 'REMOVE_STORY', storyId: storyId, userId: userId }));
  }
  // Do I also have to delete the user_story join table data?
  // I tried doing the above directly in the stories controller, but it doesn't delete the join table data
}

// for some reason, even after changing the request parameter for pageSize to equal 50, only 20 results display on the page.
