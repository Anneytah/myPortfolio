import React from 'react'

const Card = (props) => {
  return (
    <div class="max-w-[25rem]  mx-auto rounded-xl shadow border border-green-300">
      <a href='/'>
        <img class="rounded-t-lg" src={props.img} alt='not found'/>
      </a>

      <div class="p-5 flex flex-col gap-3 rounded-xl bg-[#343842] ">
        <h3 style={{ color: "#ccd6f6" }}  className={`text-xl text-center bg-[#343842]`}>{props.title}</h3>
        <h3 style={{ color: "#ccd6f6" }} className={`text-xl text-center bg-[#343842]`}>{props.terminologies}</h3>
      </div>

    </div>
  )
}

export default Card