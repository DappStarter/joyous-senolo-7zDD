require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rifle noble social hockey kangaroo army general'; 
let testAccounts = [
"0xa3225dfe8d3aeee959e02693c2230dfb8ae0dca236dbd4a984ac272fff9eb026",
"0x85e02188e2c9996493ad2701ab01e25b06a4c8cae23e68f8429bf3ba791881fe",
"0x367bf540e59e9766b9dd3f8b86e495e3e2c9412485e36efa7363fa037b3c20d1",
"0x4386f8e82cb27bb22cb872aa90213d31887c8f434cb598b48c6c0e7d98f57390",
"0x2a186dde625d276314ca7bd3fbdd0f29cb9133749a8495557f51b42bfbd65ff1",
"0xf28e7d7708ddebb32bc71bc664922a195cf6efe2300e49d2ec34f192649fc6e3",
"0x25343839e6faa93116ec61321a942e7d5be23c92e901def1d9fd2ec3326305e9",
"0x74bec3f332be3c10ba347c4557d0d1a34f821d0520d4a0e958b73145d529fd8f",
"0x1e7cda3e2c0c432fdf03c3e3af3fdcf7991dea44ce46c86d75b6c8d851406405",
"0x381d48be89323228aac98af8ceb68ac77497f2d82da6cfb04a078b521978879d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

