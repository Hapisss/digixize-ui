import React from 'react'
import CompanyOverview from '../components/CompanyOverview'
import Clients from '../components/Clients'
import SeoStrategies from '../components/SeoStrategies'
import OurServices from '../components/OurServices'
import OurTeams from '../components/OurTeams'

export default function Home() {
    return (
        <div className='flex flex-col gap-[250px]'>
            <CompanyOverview />
            <Clients />
            <SeoStrategies />
            <OurServices />
            <OurTeams />
        </div>
    )
}
