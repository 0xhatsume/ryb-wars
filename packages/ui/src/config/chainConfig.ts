import { taikoTestnet, mantleTestnet } from "./supportedChains";
import RybWarsV1 from "./abis/RybWarsV1.json";

export const chainConfigs = {
    //taiko
    167007: {
        config: taikoTestnet,
        contractAddress: "0x91a51939313Fb69197fF627FcfE22CEee006A998",
        contractAbi:RybWarsV1.abi,
    },
    //mantle
    5001: {
        config: mantleTestnet,
        contractAddress: "0x91a51939313Fb69197fF627FcfE22CEee006A998",
        contractAbi:RybWarsV1.abi,
    },
}