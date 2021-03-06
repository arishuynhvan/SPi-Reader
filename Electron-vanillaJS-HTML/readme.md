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

Start the application for incremental development & hot reload:
```
npm run dev
```

Currently, there is a small bug when the application is started in the development mode that is reported in the console of of devTool. The reason is that the build of webdev-server is much slower than the start of the app so the require scripts for React components won't be loaded at the start of the app.

For now, just refresh the page when the build is finished (' webpack: bundle is now VALID.' shows up in the terminal/cmd)

Alternatively, one can run
```
npm run watch
```
and
```
npm run start
```
in 2 distinct termals or cmd


Process management for Electron (outdated):
 
|    CPU   |   Memory      |  Disk |  Network |
|----------|:-------------:|------:|---------:|
|     0%   |  16.3M        | 0 Mbps|   0 Mbps | 

React, Webpack, Babel and SASS were set up according to this tutorial:
http://www.juxt.com/pov/thoughts/building-native-desktop-apps-with-web-tech

However, the package.json and webpack.config.js in the tutorial are outdated. Recommend using 'npm install' directly after cloning this repo locally because it contains all the compatible packages and relatively updated syntax for webpack configuration.

If any issue with path/directories may involve in the future, it will be higly due to change of syntax in webpack again.

### Limitation of Hot Reload:
- This is only tested for react components
- It may not work for non-react components

## To-do list:
- [x] Implement navigation by tab (minimal for now) for input elements
- [x] Implement Speech Synthesis API for reading out values of the current target
- [x] Server communication with the Sonic-Pi main applications
- [x] Migrate to Reactjs (structure the view, store/model, controller properly)
- [x] Write the blog post
- [ ] ~~Finish up building of Sonic Pi from source code~~
- [x] Hot Module Replacement for webpack => speed up development
- [ ] Learn how to handle database with JSON
- [ ] Fix the bug above with a loading page [spinner + application name].
- [ ] Update the Process Management with the latest data


### Note for running Electron on Raspberry Pi (untested):
Electron now does support ARM.

1. Get the dependecies going apt-get install libgtk2.0-0 libnotify4 libgconf2-4 libnss3 node npm
2. Download the latest arm release called electron-...-linux-arm.zip from here
3. unzip electron-...-linux-arm.zip
4. go inside the folder and double click the file named electron

Not so sure what #2 & #3 are necessary

#### Reflection:
1. If we want to build a standalone app for accessbility users with its own screen reader (i.e. speech synthesizer integration), why don't we might as well working on Sonic Pi original project?

2. Considering that Sonic Pi was built with Qt which has GTK+ browser, should we use GAIL module as mentioned in this article - [Make Your Application Accessible with Accerciser](http://www.linuxjournal.com/article/9991) ?

3. How much efforts are required for making a screen reader directly in Sonic Pi?
