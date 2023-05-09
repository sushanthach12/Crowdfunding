import React from 'react'
import { motion } from 'framer-motion'

const CampaignList = ({ title }) => {
    return (
        <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mx-auto px-4 py-16 sm:px-6 sm:py-6'>
            <div className="py-4 grid grid-cols-1 shadow-xl px-4 rounded-lg lg:w-72 lg:h-[60vh]">
                <div className="group realtive flex flex-col justify-around">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75">
                        <img src="https://kettocdn.gumlet.io/media/campaign/212000/212655/image/wid1f1a33100b0ce11487774ca00c4341f7d0364e69.jpg?w=300&dpr=1.3" alt="Front of men&#039;s Basic Tee in black." className="h-40 w-full object-cover object-center" />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h2 className="text-lg text-gray-700 font-semibold">{title.length > 50 ? title.substring(0, 50) + `...` : title}</h2>
                            <p className="mt-1 text-sm text-gray-500">Black</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <dl className='flex'>
                            <dt>23023402</dt>
                            <dd>raised</dd>
                        </dl>
                        <dl className='flex'>
                            <dt>progress bar</dt>
                        </dl>
                        <dl className='flex'>
                            <dt>Last donation 1m ago</dt>
                        </dl>
                    </div>

                    <div className="mt-4 flex justify-between items-center bottom-0">
                        <div className='flex justify-center items-center space-x-2'>
                            <span className='font-semibold'>12</span>
                            <span className="text-sm font-medium text-gray-800 tracking-wider">Days left</span>
                        </div>
                        <div className='flex justify-center items-center space-x-2'>
                            <span className='font-semibold'>12890</span>
                            <span className="text-sm font-medium text-gray-800 tracking-wider">Supporters</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CampaignList