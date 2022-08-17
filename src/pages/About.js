import React from "react";
import Image from "../assets/1.jpg";
import Image2 from "../assets/2.png";
import { TbAward } from "react-icons/tb";
import { AiOutlineCloud } from "react-icons/ai";
import { BsBatteryHalf } from "react-icons/bs";

export const About = () => {
  return (
    <div>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div class="flex flex-col justify-center">
            <div class="max-w-xl mb-6">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                About Us
                <br class="hidden md:block" />
                <span class="relative px-1">
                  <div class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div>
                  <span class="relative inline-block text-deep-purple-accent-400"></span>
                </span>
              </h2>
              <p class="text-base text-gray-700 md:text-lg">
                Hopeland Systems has in-depth experience with AI and machine
                learning, specializing in image and video data analysis. The
                company also has experience with building large-scale SaaS
                platforms. Our partner company offers innovative and
                customizable IoT LoRaWAN network options. LoRaWAN is a low power
                wide area network than can be deployed anywhere and is
                especially useful for remote ares with no existing network
                infrastructure. We have the advantage of developing our product
                with potential clients to achieve a customized system that meets
                every need for the user and their region.
              </p>
            </div>
            {/* <div class="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div class="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div class="h-full p-5 border border-l-0 rounded-r">
                  <h6 class="mb-2 font-semibold leading-5">
                    Our team has over 10 years of AI experience
                  </h6>
                  <p class="text-sm text-gray-900">
                    Lookout flogging bilge rat main sheet bilge water nipper
                    fluke to go on account heave down.
                  </p>
                </div>
              </div>
              <div class="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div class="h-full p-5 border border-l-0 rounded-r">
                  <h6 class="mb-2 font-semibold leading-5">
                    A business big enough that it could be listed
                  </h6>
                  <p class="text-sm text-gray-900">
                    Those options are already baked in with this model shoot me
                    an email clear.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div class="flex items-center justify-center -mx-4 lg:pl-8">
            <div class="flex flex-col items-end px-3">
              <img
                class="object-cover mb-6 rounded shadow-lg sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={Image2}
                alt=""
              />
              <img
                class="object-cover mb-6 rounded shadow-lg sm:h-48 xl:h-max w-28 sm:w-48 xl:w-56"
                src={Image}
                alt=""
              />
              {/* <img
                class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={Image}
                alt=""
              /> */}
            </div>
            <div class="px-3">
              <img
                class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://images.pexels.com/photos/8551728/pexels-photo-8551728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div></div>
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span class="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width="52"
                  height="24"
                ></rect>
              </svg>
            </span>
            Why Hopeland Systems is Unique
          </h2>
          {/* <p class="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p> */}
        </div>
        <div class="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <TbAward className="w-10 h-10" />
              </div>
              <h6 class="mb-2 font-semibold leading-5">
                10 Years of AI Research
              </h6>
              <p class="mb-3 text-sm text-gray-900">
                Our team is experienced and oriented towards success
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  class="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </div>
              <h6 class="mb-2 font-semibold leading-5">
                Utilization of Big Data
              </h6>
              <p class="mb-3 text-sm text-gray-900">
                We use over 500 data sets to accurately predict when a forest
                fire will occur
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <AiOutlineCloud className="h-10 w-10" />
              </div>
              <h6 class="mb-2 font-semibold leading-5">
                Utilization of Cloud Computing
              </h6>
              <p class="mb-3 text-sm text-gray-900">
                We will be the first to notify you if there is a forest fire
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <BsBatteryHalf className="h-10 w-10" />
              </div>
              <h6 class="mb-2 font-semibold leading-5">LoRaWAN</h6>
              <p class="mb-3 text-sm text-gray-900">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
