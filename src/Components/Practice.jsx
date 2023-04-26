import React from 'react'

export const Practice = () => {
  return (

    <>
    <div className="container w-full">
      <div class="flex justify-center items-center mt-8">
    
      <form className="bg-white rounded-md shadow-md p-4 w-96 flex flex-col">

      <input className=' focus:outline-none bg-gray-100 rounded-md py-2 px-4 mb-4' type="text" placeholder="Title"  />
    <textarea className='resize-none bg-gray-100 focus:outline-none rounded-md py-2 px-4 mb-4' rows="3" placeholder="Write a note..." ></textarea>
    <button class="bg-yellow-500 text-white rounded-full h-10 w-10">Add</button>
 
        

     
       

    </form>
    </div>

    <div class="container px-3 py-20">
  <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4 ">
    <div class="bg-gray-100">Cell 1</div>
    <div class="bg-gray-100">Cell 2</div>
    <div class="bg-gray-100">Cell 3</div>
    <div class="bg-gray-100">Cell 4</div>
    <div class="bg-gray-100">Cell 5</div>
    <div class="bg-gray-100">Cell 6</div>
    <div class="bg-gray-100">Cell 7</div>
    <div class="bg-gray-100">Cell 8</div>
    
  </div>
</div>
     
</div>
</>
  )
}


{/* //IMPORTANT LINES ------------------------->>>>>>>>>>>>> */}


{/*  
<div class="container px-3 py-20">
  <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 ">
    <div class="bg-white">Cell 1</div>
    <div class="bg-white">Cell 2</div>
    <div class="bg-white">Cell 3</div>
    <div class="bg-white">Cell 4</div>
    <div class="bg-white">Cell 5</div>
    <div class="bg-white">Cell 6</div>
    <div class="bg-white">Cell 7</div>
    <div class="bg-white">Cell 8</div>
  </div>
</div></> */}

 