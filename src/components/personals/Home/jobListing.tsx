import React from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { TbCoins } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

const JobListing = () => {
    return (
        <div className="mx-auto bg-white shadow-md rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className='col-span-3 p-6'>
                    <div className='flex flex-row gap-1 '>
                        <h2 className="text-2xl font-bold">Senior Product Designer</h2>
                        <p className="text-gray-400 flex flex-row  w-fit items-center px-1 gap-1"><span><GoDotFill size={'12'} className='text-gray-400' /></span> posted 2 days ago</p>
                        <p className="text-green-700  bg-green-200 border border-green-500 rounded-full flex flex-row  w-fit items-center px-2 gap-1"><span><GoDotFill size={'12'} className='text-green-700' /></span>Open</p>
                    </div>
                    <p className="text-gray-600 flex flex-row gap-1 items-center"><HiOutlineLocationMarker size={'20'} /> Delaware, USA <GoDotFill size={'12'} /> <TbCoins size={'20'} /> $300k-$400k</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 my-4">
                        <div>
                            <h3 className="font-semibold">Skills Required</h3>
                            <ul className="list-disc list-inside">
                                <li>Figma</li>
                                <li>Adobe Illustrator</li>
                                <li>Adobe XD</li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h3>Preferred Language</h3>
                                <p className="font-semibold">English</p>
                            </div>
                            <div>
                                <h3>Type</h3>
                                <p className="font-semibold">Full time</p>
                            </div>
                            <div>
                                <h3 >Years of Experience</h3>
                                <p className="font-semibold">3+ Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-semibold">About the job</h3>
                        <ol className="list-decimal list-inside">
                            <li>Handle the UI/UX research design</li>
                            <li>Work on researching on latest web applications designs & trends</li>
                            <li>Work on conceptualizing and visualizing</li>
                            <li>Work on creating graphics content and other graphic related works</li>
                        </ol>
                    </div>

                    <div>
                        <h3 className="font-semibold">Benefits</h3>
                        <ul className="list-disc list-inside">
                            <li>Health insurance</li>
                            <li>Provident Fund</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold">Schedule</h3>
                        <p>Day shift</p>
                        <h3 className="font-semibold mt-4">Supplemental pay types:</h3>
                        <ul className="list-disc list-inside">
                            <li>Performance bonus</li>
                            <li>Yearly bonus</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold">Work Location</h3>
                        <p>In person</p>
                    </div>
                </div>
                <div className="flex p-6 space-x-4 col-span-1 flex-wrap h-full border-l border-gray-300">
                    <button className="bg-red-100 border border-red-500 text-red-500 py-2 rounded-md flex flex-row gap-1 items-center px-8 h-fit"> <RiDeleteBinLine /> Delete job</button>
                    <button className="bg-red-500 border border-red-500 text-white py-2 rounded-md flex flex-row gap-1 items-center px-8  h-fit"><FiEdit2 /> Edit job</button>
                </div>
            </div>

        </div>
    );
};

export default JobListing;
