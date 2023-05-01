"use client"
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { variants } from '@/framer/variants'
import CampaignList from './CampaignList'


const Campaign = () => {

    const controlls = useAnimation();

    const [ref, inView] = useInView({ threshold: 0 });

    useEffect(() => {
        if (inView) {
            controlls.start("visible")
        }
        if(!inView){
            controlls.set("hidden")
        }
    }, [inView])


    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controlls}
            variants={variants}

            className='bg-white w-full' id='campaign'>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-18">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Trending Campaigns.
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Campaigns</h1>
                    </div>
                    <div className='flex items-center justify-center'>
                        <CampaignList />
                        <CampaignList />
                        <CampaignList />
                        <CampaignList />
                    </div>
                </div>
            </div>

        </motion.section>
    )
}

export default Campaign