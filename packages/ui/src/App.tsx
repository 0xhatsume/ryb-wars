import './App.css';
import React, { useEffect} from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Home from './components/home';
import Profile from './components/profile';
import WatchList from './components/watchlist';
import World from './components/world';
import Buy from './components/buy';
import Headerbar from './components/headerbar';
import Footerlist from './components/footerlist';

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
          chains: [chainConfigs[parseInt(import.meta.env.VITE_CHAIN_ID)]?.config],
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
        bg-gray-200 w-[30vw] h-[98vh]
        flex flex-col justify-start items-center
        pt-7
        ">

          <Headerbar />

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

          <TabsContent value="buy"
          className="h-full w-full"
          >
            <Buy />
          </TabsContent>

          <Footerlist/>
      </Tabs>
    </div>
  );
}

export default App;
