import React from "react";

export const BlogCard = (props) => {
  return (
    <div className="">
      <a href={props.href}>
        <div class="max-w p-6 rounded-xl shadow-xl">
          <img
            src={props.image}
            alt=""
            class="object-cover object-center w-full rounded-md h-72"
          />
          <div class="mt-6 mb-2">
            <h2 class="text-xl font-semibold tracking-wide">{props.title}</h2>
          </div>
          <p class="">{props.description}</p>
        </div>{" "}
      </a>
    </div>
  );
};
