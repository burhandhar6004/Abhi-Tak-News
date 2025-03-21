import React from "react";

const Carousel = () => {
  const style = {
    width: "100%",
    height: "500px",
    objectFit: "fill",
  };
  return (
    <>
      <div id="default-carousel" class="relative w-full" data-carousel="slide">
        {/* <!-- Carousel wrapper --> */}
        <div class="relative h-56  rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div class=" duration-700 ease-in-out" data-carousel-item>
            <video
              muted
              loop
              autoPlay
              src="https://resource.flexclip.com/templates/video/720p/trending-news-intro.mp4"
              style={style}
            ></video>
          </div>
          {/* <!-- Item 2 --> */}
          <div class=" duration-700 ease-in-out" data-carousel-item>
          <video
              muted
              loop
              autoPlay
              src="https://resource.flexclip.com/templates/video/720p/blue-technology-breaking-news-live-show-youtube-intro-outro.mp4"
              style={style}
            ></video>
          </div>
          {/* <!-- Item 3 --> */}
          <div class=" duration-700 ease-in-out" data-carousel-item>
          <video
              muted
              loop
              autoPlay
              src="https://resource.flexclip.com/templates/video/720p/basketball-news-livestream.mp4https://resource.flexclip.com/templates/video/720p/basketball-news-livestream.mp4"
              style={style}
            ></video>
          </div>
          {/* <!-- Item 4 --> */}
          <div class=" duration-700 ease-in-out" data-carousel-item>
          <video
              muted
              loop
              autoPlay
              src="https://resource.flexclip.com/templates/video/720p/green-breaking-news-intro-outro.mp4"
              style={style}
            ></video>
          </div>
          {/* <!-- Item 5 --> */}
          <div class=" duration-700 ease-in-out" data-carousel-item>
          <video
              muted
              loop
              autoPlay
              src="https://resource.flexclip.com/templates/video/720p/golden-blue-breaking-financial-news.mp4"
              style={style}
            ></video>
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
