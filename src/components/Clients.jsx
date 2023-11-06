import React from 'react'
import GroupeQualiconsult from '../assets/clients/GroupeQualiconsult.svg'
import Burberry from '../assets/clients/Burberry.svg'
import Chanel from '../assets/clients/Chanel.svg'
import Esprit from '../assets/clients/Esprit.svg'

export default function Clients() {
    return (
        <div className='flex justify-center items-center gap-[68px]'>
            <img src={GroupeQualiconsult} alt="GroupeQualiconsult" />
            <img src={Esprit} alt="Esprit" />
            <img src={Burberry} alt="Burberry" />
            <img src={Chanel} alt="Chanel" />
        </div>
    )
}
