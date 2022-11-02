"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatIconUrlWithProxy = exports.formatAggregatorNames = exports.compareNftMetadata = void 0;
const util_1 = require("../util");
/**
 * Compares NFT metadata entries to any NFT entry.
 * We need this method when comparing a new fetched NFT metadata, in case a entry changed to a defined value,
 * there's a need to update the NFT in state.
 *
 * @param newNftMetadata - NFT metadata object.
 * @param nft - NFT object to compare with.
 * @returns Whether there are differences.
 */
function compareNftMetadata(newNftMetadata, nft) {
    const keys = [
        'image',
        'backgroundColor',
        'imagePreview',
        'imageThumbnail',
        'imageOriginal',
        'animation',
        'animationOriginal',
        'externalLink',
    ];
    const differentValues = keys.reduce((value, key) => {
        if (newNftMetadata[key] && newNftMetadata[key] !== nft[key]) {
            return value + 1;
        }
        return value;
    }, 0);
    return differentValues > 0;
}
exports.compareNftMetadata = compareNftMetadata;
const aggregatorNameByKey = {
    aave: 'Aave',
    bancor: 'Bancor',
    cmc: 'CMC',
    cryptocom: 'Crypto.com',
    coinGecko: 'CoinGecko',
    oneInch: '1inch',
    paraswap: 'Paraswap',
    pmm: 'PMM',
    zapper: 'Zapper',
    zerion: 'Zerion',
    zeroEx: '0x',
    synthetix: 'Synthetix',
    yearn: 'Yearn',
    apeswap: 'ApeSwap',
    binanceDex: 'BinanceDex',
    pancakeTop100: 'PancakeTop100',
    pancakeExtended: 'PancakeExtended',
    balancer: 'Balancer',
    quickswap: 'QuickSwap',
    matcha: 'Matcha',
    pangolinDex: 'PangolinDex',
    pangolinDexStableCoin: 'PangolinDexStableCoin',
    pangolinDexAvaxBridge: 'PangolinDexAvaxBridge',
    traderJoe: 'TraderJoe',
    airswapLight: 'AirswapLight',
    kleros: 'Kleros',
};
/**
 * Formats aggregator names to presentable format.
 *
 * @param aggregators - List of token list names in camelcase.
 * @returns Formatted aggregator names.
 */
const formatAggregatorNames = (aggregators) => {
    return aggregators.map((key) => aggregatorNameByKey[key] ||
        `${key[0].toUpperCase()}${key.substring(1, key.length)}`);
};
exports.formatAggregatorNames = formatAggregatorNames;
/**
 * Format token list assets to use image proxy from Codefi.
 *
 * @param params - Object that contains chainID and tokenAddress.
 * @param params.chainId - ChainID of network in decimal or hexadecimal format.
 * @param params.tokenAddress - Address of token in mixed or lowercase.
 * @returns Formatted image url
 */
const formatIconUrlWithProxy = ({ chainId, tokenAddress, }) => {
    const chainIdDecimal = (0, util_1.convertHexToDecimal)(chainId).toString();
    return `https://static.metaswap.codefi.network/api/v1/tokenIcons/${chainIdDecimal}/${tokenAddress.toLowerCase()}.png`;
};
exports.formatIconUrlWithProxy = formatIconUrlWithProxy;
//# sourceMappingURL=assetsUtil.js.map