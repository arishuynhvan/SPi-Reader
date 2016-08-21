# Accompanying repository for the Electron guide

First, install/upgrade to the latest nodejs and npm.
Next, clone this repository and install all the dependencies using
```
npm install
```
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
- [ ] Implement navigation by tab (minimal for now) for all display elements
- [x] Implement Speech Synthesis API for reading out values of the current target
- [x] Server communication with the Sonic-Pi main applications
- [ ] ~~Migrate to Reactjs (structure the view, store/model, controller properly)~~
- [X] Write the blog post
- [ ] Finish up building of Sonic Pi from source code
- [ ] Learn how to handle database with JSON


### Note for running Electron on Raspberry Pi (untested):
Electron now does support ARM.

1. Get the dependecies going apt-get install libgtk2.0-0 libnotify4 libgconf2-4 libnss3 node npm
2. Download the latest arm release called electron-...-linux-arm.zip from here
3. unzip electron-...-linux-arm.zip
4. go inside the folder and double click the file named electron

Not so sure what #2 & #3 are necessary

Reflection:
1. If we want to build a standalone app for accessbility users with its own screen reader (i.e. speech synthesizer integration), why don't we might as well working on Sonic Pi original project?

2. Considering that Sonic Pi was built with Qt which has GTK+ browser, should we use GAIL module as mentioned in this article - [Make Your Application Accessible with Accerciser](http://www.linuxjournal.com/article/9991) ?

3. How much efforts are required for making a screen reader directly in Sonic Pi?
