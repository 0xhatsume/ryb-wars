import { Chain} from "@wagmi/chains";

export const taikoTestnet: Chain = {
    id: 167007,
    name: 'Taiko Jolnir L2',
    network: 'tko-jolnir',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
        http: ['https://rpc.jolnir.taiko.xyz'],
        },
        public: {
        http: ['https://rpc.jolnir.taiko.xyz'],
        },
    },
    blockExplorers: {
        default: {
        name: 'blockscout',
        url: 'https://explorer.jolnir.taiko.xyz',
        },
    },
};

export const mantleTestnet: Chain = {
    id: 5001,
    name: 'Mantle Testnet',
    network: 'mantle',
    nativeCurrency: {
        decimals: 18,
        name: 'MNT',
        symbol: 'MNT',
    },
    rpcUrls: {
        default: { http: ['https://rpc.testnet.mantle.xyz'] },
        public: { http: ['https://rpc.testnet.mantle.xyz'] },
    },
    blockExplorers: {
        etherscan: {
            name: 'Mantle Testnet Explorer',
            url: 'https://explorer.testnet.mantle.xyz',
        },
        default: {
            name: 'Mantle Testnet Explorer',
            url: 'https://explorer.testnet.mantle.xyz',
        },
    },
};

export const supportedChains = [taikoTestnet, mantleTestnet];