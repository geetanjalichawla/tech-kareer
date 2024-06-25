import Image from 'next/image';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ["latin"] });

const Header = () => {

    return (
        <header className={"bg-white shadow-md p-4 flex justify-between items-center" + inter.className}>
            <div className="flex items-center bg-[#E7E7E7] text-[#DC4A2D] px-7 py-[12px]">
                <span className="text-xl font-semibold">Logo</span>
            </div>
            <nav className="flex space-x-8 border border-[#D1D1D1] p-3 rounded-full ">
                <a href="#" className="bg-[#DC4A2D] rounded-full p-3 ring-2 ring-[#FCB4A5] text-white flex flex-row gap-2"><Image src={'/images/payment.svg'} width={24} height={24} alt='job' /><span>Jobs</span>  </a>
                <a href="#" className="text-[#B0B0B0] flex flex-row gap-2 items-center"><Image src={'/images/message.svg'} width={24} height={24} alt='job' /><span>Messages</span>  </a>
                <a href="#" className="text-[#B0B0B0] flex flex-row gap-2 items-center"><Image src={'/images/job.svg'} width={24} height={24} alt='job' /><span>Payments</span>  </a>
            </nav>
            <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                    <Image src={'/images/bell-02.svg'} width={32} height={32} alt='job' />
                </a>
                <Avatar>
                    <AvatarImage src="/images/profile.svg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Image src={'/images/dropdown.svg'} width={20} height={20} alt='job' />


            </div>
        </header>
    );
};

export default Header;
