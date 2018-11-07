# Building neutrino demo
```
tar xf hcl-artifacts.tar.gz
cd hcl-artifacts
tar xf neutrino.tar.gz
cd neutrino
npm install --save ../deps/*
npm install
npm run demo:build
```

# Running demo server

```
npm run demo:server
```
This starts a local demo server for neutrino - the code resides in `neutrino/demo/demo-app`

# Building component documentation

Either `npm run docs:build` or `npm run docs:server` would give access to compodocs for neutrino package. This is good
for knowing the architectural / desgin layout of neutrino modules

# Using neutrino in an application

```
npm install --save ../deps/*
npm install --save ../neutrino
npm install
```
After which you shoudl be able to use neutrino modules in your application


npm cache clean --force




