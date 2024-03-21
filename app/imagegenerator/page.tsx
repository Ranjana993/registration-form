"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Imagegenerator = () => {
  const [text, setText] = useState("")
  const [image, setImage] = useState("")
  const query = async (data) => {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/cagliostrolab/animagine-xl-3.1",
      {
        headers: { Authorization: `Bearer ${process.env.KEY}` },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();

    const output = URL.createObjectURL(result);
    return output;
  }

  const handleClick = async () => {
    try {
      const res = await query({ "inputs": text });
      const data = await query(res)
      setImage(data)
      console.log("data => ", data);
      setText("")
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='text-center flex flex-col  items-center justify-center'>
        <h2 className='text-5xl text-center py-4'>Text to image generator 🚀 </h2>
        <div className='flex mt-12'>
          <input type="text" className="border border-slate-500 w-96 pl-2" placeholder='enter your query here...' onChange={(e) => setText(e.target.value)} />
          <button onClick={handleClick} className='bg-blue-600 px-2'>Generate Image </button><br /><br />
        </div>
      </div>
      <div  className='mt-12 flex items-center justify-center'>
        <Image src={image} width={400}  height={400}  alt="image" />
      </div>

    </>
  )
}

export default Imagegenerator