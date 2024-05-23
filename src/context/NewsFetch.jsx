const fetchNews = async () => {
  const response = await fetch(`https://news-api-ql1i.onrender.com/api/news`);
  const data = await response.json();
  return data;
};

export default fetchNews;
