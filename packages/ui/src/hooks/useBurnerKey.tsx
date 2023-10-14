import { useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { privateKeyToAccount } from 'viem/accounts';

export const useBurnerKey = () => {
    const [burnerKey, updateBurnerKey] = useLocalStorage<`0x${string}`|null>(
        "rybwars-burner-key", null)
    
    const burnerKeyAccount = burnerKey ? privateKeyToAccount(burnerKey) : null
    const burnerAddress = burnerKeyAccount?.address ?? null
    
    return useMemo(
        ()=>({
            burnerKey, burnerKeyAccount, burnerAddress, updateBurnerKey
        }),[burnerKey, burnerKeyAccount, burnerAddress, updateBurnerKey]
    )
    
}
