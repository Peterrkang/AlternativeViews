import axios from "axios";

export const fetchNews = async topic => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${topic}&apiKey=aa1fbab038b34038a0fd1cc0c5032de5`
    );
    return res.json();
  } catch (e) {
    throw new Error(`Unable to fetch news ${e}`);
  }
};
