import React from 'react'
import { motion } from 'framer-motion'

const CampaignList = () => {
    return (
        <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:min-w-max lg:px-8'>
            <div className="py-4 grid grid-cols-1">
                <div className="group relative">
                    <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                    Basic Tee
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">Black</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">$35</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CampaignList