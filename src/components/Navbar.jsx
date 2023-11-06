import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import Inbox from '../assets/Inbox.svg'
import Notification from '../assets/Notification.svg'
import Separator from '../assets/Separator.svg'
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/pageSlice'

export default function Navbar() {

    const currentPage = useSelector((state) => state.page)
    const dispatch = useDispatch()

    return (
        <div className='w-full h-20 flex justify-evenly items-center'>
            <img src={Logo} alt="logo" className='h-[33px]' />
            <div className='flex gap-[40px] font-dm-sans font-[400]'>
                <Link to={'/'} onClick={() => dispatch(setPage('home'))} className={currentPage.page === 'home' ? 'text-[#05060A]' : 'text-[#8B919E]'}>Home</Link>
                <Link to={'/about'} onClick={() => dispatch(setPage('about'))} className={currentPage.page === 'about' ? 'text-[#05060A]' : 'text-[#8B919E]'}>About</Link>
                <Link to={'/services'} onClick={() => dispatch(setPage('services'))} className={currentPage.page === 'services' ? 'text-[#05060A]' : 'text-[#8B919E]'}>Services</Link>
                <Link to={'/portfolio'} onClick={() => dispatch(setPage('portfolio'))} className={currentPage.page === 'portfolio' ? 'text-[#05060A]' : 'text-[#8B919E]'}>Portfolio</Link>
                <Link to={'/blog'} onClick={() => dispatch(setPage('blog'))} className={currentPage.page === 'blog' ? 'text-[#05060A]' : 'text-[#8B919E]'}>Blog</Link>
                <Link to={'/support'} onClick={() => dispatch(setPage('support'))} className={currentPage.page === 'support' ? 'text-[#05060A]' : 'text-[#8B919E]'}>Support</Link>
            </div>
            <div className='flex gap-[20px]'>
                <img src={Inbox} alt="inbox" />
                <img src={Separator} alt='' />
                <img src={Notification} alt="notification" />
            </div>
        </div>
    )
}
