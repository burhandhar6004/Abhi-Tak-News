import React, { useContext, useEffect } from "react";
import Carousel from "../components/Carousel";
import NewsCard from "../components/NewsCard";
import Weather from "../components/Weather";
import fetchNews from "../context/NewsFetch";
import NewsContext from "../context/NewsContext";

const Home = () => {


  const {newsAll, newsDispatch} = useContext(NewsContext)

  console.log(newsAll)


  const getNews = async ()=>{
    const data = await fetchNews()

    newsDispatch({
      type : "GET_NEWS",
      payload : data
    })
  }


  useEffect(()=>{
    getNews()
  },[])




  return (
    <>
      <Carousel />
      <div class="font-sans p-4 bg-white lg:max-w-6xl max-w-xl mx-auto pt-40">
        <h1 class="text-3xl font-extrabold text-black">Today's News</h1>

        <div class="grid lg:grid-cols-3 gap-10 items-start mt-6">
          <div class="lg:col-span-2 divide-y">
          {
            newsAll?.map((news, index) => <NewsCard key={index}  news={news} />)
          }
            
          {/* <NewsCard/> */}
          </div>
          <Weather />
        </div>
      </div>
    </>
  );
};

export default Home;
