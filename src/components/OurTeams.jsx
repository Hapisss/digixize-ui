import React from 'react'
import AmandaJohnson from '../assets/teams/AmandaJohnson.svg'
import DanieRogue from '../assets/teams/DanieRogue.svg'
import JessicaLaw from '../assets/teams/JessicaLaw.svg'
import JoanaMarie from '../assets/teams/JoanaMarie.svg'
import LarrySam from '../assets/teams/LarrySam.svg'
import RisaWatson from '../assets/teams/RisaWatson.svg'
import SarahGilbert from '../assets/teams/SarahGilbert.svg'
import StephenJoe from '../assets/teams/StephenJoe.svg'

export default function OurTeams() {
    return (
        <div className='flex flex-col gap-[40px] justify-center items-center h-[350px]'>
            <h1 className='text-[#3F4352] text-[20px] font-dm-sans font-[700]'>Our Teams</h1>
            <div className='grid grid-cols-4 gap-4'>
                <div className='flex items-center gap-[9px] justify-center w-[198px] h-[76px] rounded-[11px] shadow'>
                    <img src={SarahGilbert} alt="SarahGilbert" />
                    <div>
                        <p className='text-[#5B5D63] font-dm-sans text-[12px] font-[500]'>Sarah Gilbert</p>
                        <p className='text-[#9A9EA8] italic font-dm-sans text-[11px] font-[400]'>CEO & Founder DigiXine</p>
                    </div>
                </div>
                <div className='flex items-center gap-[9px] justify-center w-[198px] h-[76px] rounded-[11px] shadow'>
                    <img src={StephenJoe} alt="StephenJoe" />
                    <div>
                        <p className='text-[#5B5D63] font-dm-sans text-[12px] font-[500]'>Stephen Joe</p>
                        <p className='text-[#9A9EA8] italic font-dm-sans text-[11px] font-[400]'>Social Media Manager</p>
                    </div>
                </div>
                <div className='flex items-center gap-[9px] justify-center w-[198px] h-[76px] rounded-[11px] shadow'>
                    <img src={AmandaJohnson} alt="AmandaJohnson" />
                    <div>
                        <p className='text-[#5B5D63] font-dm-sans text-[12px] font-[500]'>Amanda Johnson</p>
                        <p className='text-[#9A9EA8] italic font-dm-sans text-[11px] font-[400]'>Senior Content Writer</p>
                    </div>
                </div>
                <div className='flex items-center gap-[9px] justify-center w-[198px] h-[76px] rounded-[11px] shadow'>
                    <img src={DanieRogue} alt="DanieRogue" />
                    <div>
                        <p className='text-[#5B5D63] font-dm-sans text-[12px] font-[500]'>Danie Rogue</p>
                        <p className='text-[#9A9EA8] italic font-dm-sans text-[11px] font-[400]'>Senior UX Writer</p>
                    </div>
                </div>
                <div className='flex items-center gap-[9px] justify-center w-[198px] h-[76px] rounded-[11px] shadow'>
                    <img src={JoanaMarie} alt="JoanaMarie" />
                    <div>
                        <p className='text-[#5B5D63] font-dm-sans text-[12px] font-[500]'>Joana Marie</p>
                        <p className='text-[#9A9EA8] italic font-dm-sans text-[11px] font-[400]'>Frontend Engineer</p>
                    </div>
                </div>
                <div className='flex items-center gap-[9px] justify-center w-[198px] h-[76px] rounded-[11px] shadow'>
                    <img src={LarrySam} alt="LarrySam" />
                    <div>
                        <p className='text-[#5B5D63] font-dm-sans text-[12px] font-[500]'>Larry Sam</p>
                        <p className='text-[#9A9EA8] italic font-dm-sans text-[11px] font-[400]'>Backend Engineer</p>
                    </div>
                </div>
                <div className='flex items-center gap-[9px] justify-center w-[198px] h-[76px] rounded-[11px] shadow'>
                    <img src={JessicaLaw} alt="JessicaLaw" />
                    <div>
                        <p className='text-[#5B5D63] font-dm-sans text-[12px] font-[500]'>Jessica Law</p>
                        <p className='text-[#9A9EA8] italic font-dm-sans text-[11px] font-[400]'>Ads & Promotion Expert</p>
                    </div>
                </div>
                <div className='flex items-center gap-[9px] justify-center w-[198px] h-[76px] rounded-[11px] shadow'>
                    <img src={RisaWatson} alt="RisaWatson" />
                    <div>
                        <p className='text-[#5B5D63] font-dm-sans text-[12px] font-[500]'>Risa Watson</p>
                        <p className='text-[#9A9EA8] italic font-dm-sans text-[11px] font-[400]'>Senior SEO Specialist</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
