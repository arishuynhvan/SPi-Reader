# Accompanying repository for the Electron guide

First, install/upgrade to the latest nodejs and npm 
It's recommended to set electron as global package
```
npm install --save-dev -g electron-prebuilt@latest
```
To start the running the application (pls don't miss the dot '.')
```
electron .
```
Reload with Ctrl+R during incremental build

Process management for Electron:
 
|    CPU   |   Memory      |  Disk |  Network |
|----------|:-------------:|------:|---------:|
|     0%   |  16.3M        | 0 Mbps|   0 Mbps | 

React, Webpack, Babel and SASS were set up according to this tutorial:
http://www.juxt.com/pov/thoughts/building-native-desktop-apps-with-web-tech

However, the package.json and webpack.config.js in the tutorial are outdated. Recommend using 'npm install' directly after cloning this repo locally because it contains all the compatible packages and relatively updated syntax for webpack configuration.

If any issue with path/directories may involve in the future, it will be higly due to change of syntax in webpack again.

## To-do list:
[ ] Implement navigation by tab (minimal for now) for all display elements
[ ] Implement Speech Synthesis API for reading out values of the current target
[ ] Server communication with the Sonic-Pi main applications
[ ] Migrate to Reactjs (structure the view, store/model, controller properly)
[ ] Write the blog post
[ ] Finish up building of Sonic Pi from source code

Learn how to handle databse with JSON