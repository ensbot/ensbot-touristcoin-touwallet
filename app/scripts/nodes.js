'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    TOU: "TOU",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'tou': {
        'name': 'TOU',
        'blockExplorerTX': 'https://explorer.touristcoin.net/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.touristcoin.net/addr/[[address]]',
        'type': nodes.nodeTypes.TOU,
        'eip155': true,
        'chainId': 666999,
        'tokenList': require('./tokens/touTokens.json'),
        'abiList': require('./abiDefinitions/touAbi.json'),
        'estimateGas': true,
        'service': 'gazua.tv',
        'lib': new nodes.customNode('https://node.touristcoin.net', '')
    }
};

// add a 'key' attribute to each node that is its object key
Object.keys(nodes.nodeList).forEach(function(key) {
    nodes.nodeList[key].key = key;
});


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
