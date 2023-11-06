import React from 'react'
import CompanyOverviewImage from '../assets/CompanyOverviewImage.svg'
import ArrowRightOrange from '../assets/ArrowRightOrange.svg'

export default function CompanyOverview() {
    return (
        <div className='flex justify-center items-center w-full'>

            <div className='w-1/2 pl-[40px]'>
                <div className='flex flex-col gap-[32px]'>
                    <p className='text-[#EE4E39] font-dm-sans text-[16px] font-[500]'>PT. Digital Media Nusantara</p>
                    <h1 className='text-[#3F4352] font-dm-sans text-[40px] font-[700]'>
                        Digital Marketing Agency
                    </h1>
                    <p className='text-[#8B919E] font-dm-sans text-[16px]'>
                        We examine the top of funnel to figure out how to make people to a subscribe newsletter then turn prospects into leads.
                    </p>
                    <div className='flex items-center gap-[54px]'>
                        <button className='bg-[#EE4E39] flex justify-center items-center w-[121px] h-[44px] rounded-[4px] text-white font-dm-sans text-[14px] font-[500]'>
                            Contact Us
                        </button>
                        <div className='flex items-center gap-[7px]'>
                            <p className='text-[#EE4E39] font-dm-sans text-[16px] font-[500]'>Our pricing</p>
                            <img src={ArrowRightOrange} alt="" />
                        </div>

                    </div>
                </div>
            </div>

            <div className='w-1/2 flex justify-end'>
                <img src={CompanyOverviewImage} alt="CompanyOverviewImage" />
            </div>

        </div>
    )
}
