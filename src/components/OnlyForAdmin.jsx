import React from "react";

export const OnlyForAdmin = () => {
  return (
    <div>
      <section class="flex items-center h-full p-16 ">
        <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div class="max-w-md text-center">
            <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span class="sr-only">Error</span>
            </h2>
            <p class="text-2xl font-semibold md:text-3xl">
              Sorry, this page is only for admin
            </p>
            <p class="mt-4 mb-8 dark:text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <a
              rel="noopener noreferrer"
              href="/"
              class="px-8 py-3 font-semibold rounded "
            >
              Back to homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};