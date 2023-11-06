import React from 'react'
import SeoImage from '../assets/SeoImage.svg'
import ChevronRightOrange from '../assets/ChevronRightOrange.svg'

export default function SeoStrategies() {
    return (
        <div className='flex justify-center items-center w-full px-[178px]'>
            <div className='w-1/2 flex justify-center items-center'>
                <img src={SeoImage} alt="seoImage" />
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <div className='flex flex-col gap-[32px]'>
                    <p className='text-[#8B919E] font-dm-sans text-[16px]'>Search Engine Optimization</p>
                    <h1 className='text-[#3F4352] font-dm-sans text-[40px] font-[700]'>
                        Improve Performance and Growth your Website
                    </h1>
                    <p className='text-[#8B919E] font-dm-sans text-[16px]'>
                        It's a theory of psychology that prioritizes the most fundamental human needs like air, water, and physical safety over more advanced needs.
                    </p>
                    <div className='flex items-center gap-[9px]'>
                        <p className='text-[#EE4E39] font-dm-sans text-[16px] font-[500]'>Explore Our SEO's Strategies</p>
                        <img src={ChevronRightOrange} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
