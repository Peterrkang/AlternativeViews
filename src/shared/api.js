import fetch from "isomorphic-fetch";

export function fetchNews(topic) {
  const encodedURI = encodeURI(
    `https://newsapi.org/v2/everything?q=${topic}&sortBy=popularity&apiKey=aa1fbab038b34038a0fd1cc0c5032de5`
  );
  return fetch(encodedURI)
    .then(data => data.json())
    .catch(error => {
      console.warn(error);
      return null;
    });
}
