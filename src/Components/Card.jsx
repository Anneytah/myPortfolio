import React from 'react'

const Card = (props) => {
  return (
    <div class="max-w-[25rem]  mx-auto rounded-xl shadow border border-green-300 relative">
<div className="absolute inset-0 flex p-4 justify-center bg-black bg-opacity-0 hover:bg-opacity-60 text-white text-lg opacity-0 hover:opacity-100 transition duration-300">
  {/* <div className='text-white'> */}
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid mollitia voluptatum tempora quis reiciendis autem, modi ex ea incidunt ad.</p>
    <a href='/' className='w-20 h-20 border '></a>
  {/* </div> */}
</div>
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