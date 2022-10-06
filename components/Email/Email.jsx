import React from 'react'
import emailjs from 'emailjs-com'

export default function Email() {



    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_6b73w0k','template_17wmphq',e.target,'Mjno34OiFcmblgMnz')
        .then(res => {
            console.log(res)
        }).catch(res => console.log(res))
    }

  return (
    <div className='lg:pl-[80px] text-center'>
        <form action="" className='max-w-[400px] min-h-[400px] flex flex-col justify-around p-5'
        onSubmit={sendEmail}>
            <div className='w-full items-end flex justify-between'>
            <label htmlFor="">Name</label>
            <input className='border-b-2 w-48 mb-1' type="text"name="name"/>
            </div>
            <div className='w-full flex items-end justify-between'>
            <label>Email</label>
            <input className='border-b-2 w-48 mb-1' type="email" name="email"/>
            </div>
            <div className='w-full flex items-end justify-between'>
            <label htmlFor="">Message</label>
            <textarea className="ml-5 h-[50px] border-b-2 w-48 mb-1" name="message"cols="30" rows="10"/>
            </div>
            <input className='mx-left border-[0.5px] p-1 w-fit' type="submit" name="" id="" />
        </form>
    </div>
  )
}
