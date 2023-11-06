import React from 'react'
import AdsOptimizationService from '../assets/services/AdsOptimizationService.svg'
import ContentManagementService from '../assets/services/ContentManagementService.svg'
import SeoService from '../assets/services/SeoService.svg'
import SocialMediaService from '../assets/services/SocialMediaService.svg'
import UxWriterService from '../assets/services/UxWriterService.svg'

export default function OurServices() {
    return (
        <div className='flex flex-col justify-center items-center w-full gap-[82px]'>

            <div className='flex flex-col justify-center items-center gap-[24px]'>
                <h1 className='text-[#3F4352] text-[24px] font-[700]'>Our Services</h1>
                <p className='text-[#8B919E] text-[16px] font-[400] w-[465px] text-center'>Increase your linkability, make tagging and bookmarking easy. Reward inbound links  </p>
            </div>

            <div className='flex flex-col gap-y-[91px]'>
                <div className='flex gap-[24px]'>
                    <div className='rounded-[8px] hover:shadow-md shadow w-[280px] h-[180px] flex flex-col justify-center items-center gap-[21px]'>
                        <img src={SeoService} alt="SeoService" />
                        <p className='text-[#3F4352] text-[16px] font-dm-sans font-[400]'>Search Engine Optimization</p>
                    </div>
                    <div className='rounded-[8px] hover:shadow-md shadow w-[280px] h-[180px] flex flex-col justify-center items-center gap-[21px]'>
                        <img src={SocialMediaService} alt="SeoService" />
                        <p className='text-[#3F4352] text-[16px] font-dm-sans font-[400]'>Social Media Optimization</p>
                    </div>
                    <div className='rounded-[8px] hover:shadow-md shadow w-[280px] h-[180px] flex flex-col justify-center items-center gap-[21px]'>
                        <img src={UxWriterService} alt="SeoService" />
                        <p className='text-[#3F4352] text-[16px] font-dm-sans font-[400]'>UX Writer</p>
                    </div>
                </div>
                <div className='flex justify-center gap-[24px]'>
                    <div className='rounded-[8px] hover:shadow-md shadow w-[280px] h-[180px] flex flex-col justify-center items-center gap-[21px]'>
                        <img src={ContentManagementService} alt="SeoService" />
                        <p className='text-[#3F4352] text-[16px] font-dm-sans font-[400]'>Content Management</p>
                    </div>
                    <div className='rounded-[8px] hover:shadow-md shadow w-[280px] h-[180px] flex flex-col justify-center items-center gap-[21px]'>
                        <img src={AdsOptimizationService} alt="SeoService" />
                        <p className='text-[#3F4352] text-[16px] font-dm-sans font-[400]'>Ads Optimization</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
