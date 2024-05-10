import React from 'react'
import {FooterData1,FooterData2,FooterData3} from '../../DataForPage/dummyData'


const Footer = () => {
    const dd = new Date()
    const year = dd.getFullYear()
  return (
    <div className='text-white bg-black min-h-[100px] min-w-screen'>
      <div className="">
        <div className="container grid grid-cols-2 md:grid-cols-3  content-center gap-5 px-20 py-10">
            <div className="section1">{
                FooterData1.map((itms)=>(
                    <p key={itms.id}>{itms.text}</p>
                ))}
            </div>
            <div className="section2">{
                FooterData2.map((itms)=>(
                    <p key={itms.id}>{itms.text}</p>
                ))}
            </div>

            <div className="section3">{
                FooterData3.map((itms)=>(
                    <p key={itms.id}>{itms.text}</p>
                ))}
            </div>
           

        </div>
        <hr className='mx-20'/>
        <div className='my-5'>
        <p className="sm:text-xs  pb-2 font-inter font-light cursor-pointer no-underline text-center tracking-wide normal-case">
            Copyright @ {year} page by SadhaSivam
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
