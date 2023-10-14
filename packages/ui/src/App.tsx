import './App.css';
import React, { useEffect} from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Home from './components/home';
import Profile from './components/profile';
import WatchList from './components/watchlist';
import World from './components/world';

import { useBurnerKey } from './hooks/useBurnerKey';
import { MockConnector } from 'wagmi/connectors/mock';
import { useConnect } from 'wagmi';
import { privateKeyToAccount, generatePrivateKey } from 'viem/accounts';
import { createWalletClient, http, publicActions } from 'viem';
import { chainConfigs } from './config/chainConfig';
import { supportedChains } from './config/supportedChains';

function App() {
  const { connect } = useConnect();
  const { burnerKey, updateBurnerKey } = useBurnerKey();
  const hasBurnerKey = burnerKey !==null
  

  useEffect(() => {
    if(!hasBurnerKey){
      const newBurnerKey = generatePrivateKey()
      updateBurnerKey(newBurnerKey);
      const viemAccount = privateKeyToAccount(newBurnerKey)
      const cachedClient = createWalletClient({
        account: viemAccount,
        chain: chainConfigs[parseInt(import.meta.env.VITE_CHAIN_ID)]?.config,
        transport: http()
      }).extend(publicActions) 

      const cachedConnector = new MockConnector({
          chains: supportedChains,
          options: {
              flags:{
                  isAuthorized:true,
              },
              walletClient: cachedClient,
          },
      })
      // connect to new PK
      connect({connector: cachedConnector})

    }else{
      const viemAccount = privateKeyToAccount(burnerKey)
      const cachedClient = createWalletClient({
        account: viemAccount,
        chain: chainConfigs[parseInt(import.meta.env.VITE_CHAIN_ID)]?.config,
        transport: http()
      }).extend(publicActions) 

      const cachedConnector = new MockConnector({
          chains: supportedChains,
          options: {
              flags:{
                  isAuthorized:true,
              },
              walletClient: cachedClient,
          },
      })
      // connect to new PK
      connect({connector: cachedConnector})
    }
  },[]);

  return (
    <div 
    className="
    flex flex-row justify-center items-center">
      <Tabs defaultValue="home" 
        className="
        rounded-lg border 
        bg-gray-200 w-[23vw] h-[98vh]
        flex flex-col justify-start items-center
        pt-7
        ">

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

            <div className="mr-5 ml-auto 
            rounded-2xl bg-gray-100 px-3 py-1
            ">
              <span className="mx-1">0</span>
              <span className="mx-1">ETH</span>
            </div>
          </div>

          <TabsContent value="home"
          className="h-full w-full"
          >
            <Home />
          </TabsContent>

          <TabsContent value="watchlist"
          className="h-full w-full"
          >
            <WatchList />
          </TabsContent>
          
          <TabsContent value="character"
          className="h-full w-full"
          >
            <Profile />
          </TabsContent>

          <TabsContent value="world"
          className="h-full w-full"
          >
            <World />
          </TabsContent>

          <TabsList className="mt-auto w-full">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
            <TabsTrigger value="character">Character</TabsTrigger>
            <TabsTrigger value="world">World</TabsTrigger>
          </TabsList>
      </Tabs>
    </div>
  );
}

export default App;
