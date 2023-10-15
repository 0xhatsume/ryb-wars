import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { useAccount, useContractWrite, useNetwork } from 'wagmi';
import { chainConfig } from '../config/chainConfig';
import { parseEther } from 'viem';

function Buy() {

//   const { data, isLoading, error, isSuccess, write: writeBuyShares } = useContractWrite({
//     address: hainConfigs[parseInt(import.meta.env.VITE_CHAIN_ID)]?.contractAddress,
//     abi: chainConfigs[parseInt(import.meta.env.VITE_CHAIN_ID)]?.contractAbi,
//     functionName: 'buyShares',
// })

  return (
    <div className="border border-slate-800
    rounded-t-lg
    bg-white h-full
    py-2 px-2
    flex flex-col justify-start items-center
    ">
      <button className="bg-red-500
      mt-auto mb-5 text-white
      py-2 px-3 rounded-xl
      "
      onClick={()=>{
        console.log("buy shares")
        // writeBuyShares({
        //     args: [room, 1],
        //     value: parseEther("0.01"),
        // })
      }}
      >
        Buy A Key</button>

    </div>
  );
}

export default Buy;
