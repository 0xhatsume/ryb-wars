import React from 'react';
import { useAccount, useBalance, useNetwork } from 'wagmi';

const Headerbar = () => {
  const { address, isConnected } = useAccount()
  const { data, isError, isLoading } = useBalance({address, watch: true})
  const { chain } = useNetwork()

  return (
    <div className="flex flex-row
          justify-start items-center
          w-full
          ">
            <div className="text-2xl
            ml-5 font-bold
            ">
              <span className="text-red-500">R</span>
              <span className="text-orange-300">Y</span>
              <span className="text-blue-700">B</span>
              <span>.</span>
              <span className="font-normal">WARS</span>
            </div>


            {/* balance button */}
            <div className="mr-5 ml-auto 
            rounded-2xl bg-gray-100 px-3 py-1
            flex flex-row justify-center items-center
            ">
              {
                chain?.nativeCurrency.symbol === "ETH" ?
              <img className="h-[20px] mr-1" src="eth-logo.svg"/>
              :
              chain?.nativeCurrency.symbol === "MNT" ? 
              <img className="h-[20px] mr-1" src="mnt-logo.svg"/>
              : ""
              }
              <span className="mx-1">{`${

                    data?.formatted?parseFloat(data?.formatted).toFixed(3):"0"
                    }`}</span>
              <span className="mx-1">{chain?.nativeCurrency.symbol??"GAS"}</span>
            </div>
          </div>
  )
}

export default Headerbar;