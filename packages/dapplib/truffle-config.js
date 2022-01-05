require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remember social install creek fringe tennis'; 
let testAccounts = [
"0x13aeb916829301642f3446836ea69e72a23de8fd366b4949a206af96683cf1e2",
"0xdfefe45e0f32be70cc94add98cb14386a0b329f1a530fae001e00756db7b8bd0",
"0x067ccb5dd4f7ce065cb49612914d1a1f79fdeaf7befee03960143af5a190a64d",
"0xc4617672ea52502ca0a0edcd6f817e9b0cab3d8a611ce713a06debaee90995e4",
"0x1cc5f0a5f2f322e3f08e3a1239f4cb8c336d91b5939348fd4cec04026630d682",
"0xa072c848cd5731abc78ec057b0c041bf8c4dfa9ea8d5c3fde9f80d2659037ef2",
"0xec4d6f2463ac8f62e3670b617251f6e78170bb042bfc92b7d47c584320ec3e18",
"0xedfcc06a059a98b9843fffaac1ff4e2c4b1aede4798454f6be6b73f27729dbcb",
"0x537c72090a8fb764819c875727c3f94d1284d132f6518bb727dd679a41e2801e",
"0xe4232770d47634ea73374a34c7771ffb16b57467acd8c6da99fddfae69339e56"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


