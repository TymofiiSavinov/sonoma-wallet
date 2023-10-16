<div align="center">

  <img src="/assets/backpack.png" />

  <h1>Backpack Sonoma wallet</h1>

</div> 


## Installing the Latest Release
Install latest Sonoma client and then:
set Sonoma claster
```bash
sonoma config set --url http://3.74.241.65:8899/
```

## Requirements
nodejs >14 version
```bash
sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
```

### Pull the code
```bash
git clone https://github.com/TymofiiSavinov/sonoma-wallet.git
cd sonoma-wallet
```

#### Environment variables
You can also optionally rename `.env.example` to `.env` and set your own variables.

### Install dependencies
```bash
yarn install
```

### Build all packages for production
```bash
yarn build
```

### Start everything inside `./packages` for development
```bash
yarn start
```
#### Enable self-signed local SSL certs
Go to `chrome://flags/#allow-insecure-localhost` and enable the toggle, then restart chrome. Note: Please don't enable this if you don't know what you're doing. It will leave you vulnerable to exploits if left on. It is recommended to undo this step when you are done developing.

### Install the production version of the extension
Go to `chrome://extensions`, enable developer mode (top right) and drag the `packages/app-extension/build` dir into the window.

### Install the development version of the extension
Go to `chrome://extensions`, enable developer mode (top right) and drag the `packages/app-extension/dev` dir into the window. This version will have (Dev) in the title and supports live-reloading.

#### Not seeing the dev folder?
```bash
cd packages/app-extension
yarn start
```
it will create 'dev' directory and run alive dev wallet

#### Troubleshooting
try 
```bash
yarn clean
```
and then 
```bash
yarn build:fresh
```
Important!!!
Monitor the amount of RAM used, sometimes the command crashes with an error when there is not enough RAM
