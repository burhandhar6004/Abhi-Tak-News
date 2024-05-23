import { Button, Stack } from "@mui/material";
import React from "react";

const NewsCard = ({news}) => {
  return (
    <>
      
          
            <div class="bg-white grid sm:grid-cols-2 items-center shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
              <img
                src={news?.urlToImage}
                class="w-full h-full"
              />
              <div class="px-4 py-6">
                <h3 class="text-xl font-semibold">{news?.title}</h3>
                <p class="mt-2 text-sm text-gray-400">
                  {news?.description}
                </p>
               
                <div class="flex flex-wrap items-center cursor-pointer border rounded-lg w-full px-4 py-2 mt-6">
                  <img
                    src="https://readymadeui.com/profile_2.webp"
                    class="w-9 h-9 rounded-full"
                  />
                  <div class="ml-4 flex-1">
                    <p class="text-sm text-black font-semibold">{news?.author}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 fill-gray-400"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
               
                <Button href={news?.url}>Read More..</Button>
            
              </div>
            </div>
            
        
            
       
    </>
  );
};

export default NewsCard;
