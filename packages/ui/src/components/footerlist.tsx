import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import {AiFillHome} from 'react-icons/ai';
import {BsSunglasses, BsCash} from 'react-icons/bs';
import {PiPersonFill} from 'react-icons/pi';
import {BiWorld} from 'react-icons/bi';

const Footerlist = () => {
  return (
    <TabsList className="mt-auto w-full py-1 h-[80px]
    ">
        <TabsTrigger 
        className="mx-1"
        value="home">
            <div className='flex flex-col justify-center items-center
            py-2'>
                <AiFillHome/>
                <span>Home</span>
            </div>
        </TabsTrigger>

        <TabsTrigger 
        className="mx-1"
        value="watchlist">
            <div className='flex flex-col justify-center items-center
            py-2'>
                <BsSunglasses/>
                <span>Watchlist</span>
            </div>
        </TabsTrigger>

        <TabsTrigger className="mx-1"
        value="character">
            <div className='flex flex-col justify-center items-center
                py-2'>
                    <PiPersonFill/>
                    <span>Character</span>
                </div>
            </TabsTrigger>


        <TabsTrigger className="mx-1"
        value="world">
            <div className='flex flex-col justify-center items-center
                py-2'>
                    <BiWorld/>
                    <span>World</span>
                </div>
            </TabsTrigger>
        
        <TabsTrigger className="mx-1"
        value="buy">
            <div className='flex flex-col justify-center items-center
                py-2'>
                    <BsCash/>
                    <span>Buy</span>
                </div>
            </TabsTrigger>
    </TabsList>
  )
}

export default Footerlist