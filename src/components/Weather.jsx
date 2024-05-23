import React from 'react'

const Weather = () => {
  return (
    <>
        
        <div class="bg-gray-100 rounded p-6 top-0">
            <h2 class="text-xl font-bold text-black">Today Weather</h2>
            {/* <ul class="text-black mt-6 divide-y">
              <li class="flex flex-wrap gap-4 text-base py-3">
                Subtotal <span class="ml-auto font-bold"></span>
              </li>
              <li class="flex flex-wrap gap-4 text-base py-3">
                Shipping <span class="ml-auto font-bold">$4.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-base py-3">
                Tax <span class="ml-auto font-bold">$4.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-base py-3 font-bold">
                Total <span class="ml-auto">$52.00</span>
              </li>
            </ul> */}
            {/* <button
              type="button"
              class="mt-6 text-base px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Check out
            </button> */}
            <p>Indore</p>
            <p>Temprature</p>
            <p>33° C</p>
            <img src='https://cdn.weatherapi.com/weather/64x64/night/116.png'/>
          </div>
    </>
  )
}

export default Weather