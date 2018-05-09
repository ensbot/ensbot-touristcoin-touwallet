## TouristCoin Web Wallet

[![Discord](https://discordapp.com/api/guilds/417146776974262273/widget.png)](https://discord.gg/gDjCQW)
[![dependencies Status](https://david-dm.org/touristcoin/touwallet/status.svg)](https://david-dm.org/touristcoin/touwallet)
[![NPM module](https://badge.fury.io/js/tou-custom.svg)](https://badge.fury.io/js/tou-custom)

TouristCoin Web Wallet is a frontend implementation of TouristCoin blockchain based on the stable version of MyEtherWallet and MyCrypto. It can be used for sending & managing TOU and it's based tokens & securities. It is the front-end implementation for [docker-tou-lb](https://github.com/touristcoin/docker-tou-lb).

### Live version

- [https://wallet.touristcoin.net](https://wallet.touristcoin.net)

### Download the Latest Release

- [https://github.com/touristcoin/touwallet/releases](https://github.com/touristcoin/touwallet/releases)


### Developers

- master is the working / development branch

- gh-pages contains only the smaller dist folder only and is served to [wallet.touristcoin.net](https://wallet.touristcoin.net)


#### If you would like to play around with this one for whatever reason:

First, clone the repo and `cd` into the working directory. Then...

```
$ npm install
```

```
$ npm run dev
```

Open the resulting `dist/index.html` file in your browser.

Gulp will auto-build it upon save.

#### To Prep for Production
```
$ gulp prep
```

```
$ gulp zipit
```

#### License

Adapted from https://github.com/kvhnuke/etherwallet & https://github.com/mycryptohq/mycrypto.com

Copyright (c) 2015-2017 MyEtherWallet LLC

Copyright (c) 2018 MyCrypto, Inc.

Copyright (c) 2018 TouristCoin Community
