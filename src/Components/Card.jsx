import React from "react";

const Card = (props) => {
  return (
    <>
      <h3 className="text-3xl py-5 pb-0 text-[#64ffda] font-semibold">
        {props.title}
      </h3>
      <div
        className={`lg:flex md:flex-col gap-7 my-5 m-0 ${
          props.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div>
          <img
            className="rounded-t-lg lg:max-w-[38rem] border border-[#64ffda]"
            src={props.img}
            alt="not found"
          />
        </div>
        <div>
          <div>
            <h3 className="text-lg text-[#ccd6f6] font-semibold lg:pt-0 pt-6">
              {props.description}
            </h3>
            <p className="text-[#64ffda] font-semibold text-base py-5 pb-2">
              {props.feature}
            </p>

            <ul className="list-disc text-[#ccd6f6] text-[14px] px-5">
              <li>{props.first}</li>
              <li>{props.second}</li>
              <li>{props.third}</li>
              <li>{props.third}</li>
              <li>{props.forth}</li>
              <li>{props.fifth}</li>
            </ul>

            <p className="text-[#64ffda] font-semibold text-base py-5 pb-2">
              {props.tech}
            </p>

            <div className="flex gap-2 text-xs text-[#64ffda] text-center">
              <div className="border border-green-300 rounded-md lg:px-3 px-1 py-1">
                {props.react}
              </div>
              <div className="border border-green-300 rounded-md lg:px-3 px-1 py-1">
                {props.tailwind}
              </div>
              <div className="border border-green-300 rounded-md lg:px-3 px-1 py-1">
                {props.frame}
              </div>
              <div className="border border-green-300 rounded-md lg:px-3 px-1 py-1">
                {props.geo}
              </div>
            </div>

            <div className="flex gap-4 my-10">
              <a href="/" className="cursor-pointer">
                <div className="border p-2 border-green-300 rounded-md lg:px-8 lg:py-2 bg-[#64ffda] hover:bg-green-400 transform hover:-translate-y-1 transition duration-300 ease-in-out">
                  {props.view}
                </div>
              </a>

              <a href="/">
                <div className="border p-2 border-green-300 rounded-md lg:px-8 lg:py-2 text-[#64ffda] hover:bg-[#64ffda] hover:text-black transform hover:-translate-y-1 transition duration-300 ease-in-out">
                  {props.repo}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
