import './App.css';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Home from './components/home';
import Profile from './components/profile';
import WatchList from './components/watchlist';

import { useBurnerKey } from './hooks/useBurnerKey';
import { MockConnector } from 'wagmi/connectors/mock';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { privateKeyToAccount } from 'viem/accounts';
import { createWalletClient, http, publicActions } from 'viem';
import { chainConfigs } from './config/chainConfig';
import { supportedChains } from './config/supportedChains';

function App() {
  const { connect } = useConnect();
  const { burnerKey, burnerKeyAccount, burnerAddress, updateBurnerKey } = useBurnerKey();
  const hasBurnerKey = burnerKey !==null

  useEffect(() => {
    if(!hasBurnerKey){
      const newBurnerKey = generatePrivateKey()
      updateBurnerKey(newBurnerKey);
      const viemAccount = privateKeyToAccount(newBurnerKey)
      const cachedClient = createWalletClient({
        account: viemAccount,
        chain: chainConfigs[parseInt(import.meta.env.VITE_CHAIN_ID)]?.config?.id,
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
        chain: chainConfigs[parseInt(import.meta.env.VITE_CHAIN_ID)]?.config?.id,
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
    <div style={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
      <Tabs defaultValue="home" className="">
        <TabsContent value="home">
          <Home />
        </TabsContent>

        <TabsContent value="watchList">
          <WatchList />
        </TabsContent>
        
        <TabsContent value="profile">
          <Profile />
        </TabsContent>

        <TabsContent value="worldWars">
          Change your password here.
        </TabsContent>

        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="watchList">watchlist</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="worldWars">World Wars</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

export default App;
