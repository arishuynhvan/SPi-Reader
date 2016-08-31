var webpack = require("webpack");

//export the configuration object:
module.exports = {
    /*The entry property is the entry point for Webpack when it starts bundling everything together.
  Everything that's required directly in this file, or in subsequently required files, will be processed by Webpack.
  This includes non-JavaScript as well, which we'll get to later when we include Sass styles.
  The context property is an absolute path. It's used when resolving the location of entry,
  and since our entry file is ./src/entry.js we'll put __dirname + '/src' in the context property
  and entry.js in the entry property.*/
  context: __dirname + '/src',
  entry: {app:['webpack/hot/dev-server','\\..\\app.js']},

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath:"http://localhost:8080/build/"
  },

  devServer:{
    contentBase: __dirname,
    publicPath: 'http://localhost:8080/build/'
  },
  /*
  __dirname is a variable that stores the current root directory of the project
  The above instructs Webpack to output the file bundle.js in the path __dirname + '/build, which is what we wrote earlier in index.html.
  */

  resolveLoader: { root: __dirname + "node_modules" },
  devtool: 'source-map',

   /*Webpack supports a number of loaders for different file types.
   These are specified as an array of objects in module.loaders.
   The file type is matched by a regular expression, and when there's a match the file is processed by a loader.
   In the above code we've specified that we want all files with a .js extension to be processed by the babel-loader.
   It'll transpile the file for us before continuing on with bundling it up into the bundle.js file*/
   module: {
    loaders: [
    { test: /\.js$/,
      loaders:["react-hot","babel-loader"],
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      loaders: ["style",'css?sourceMap', 'sass?sourceMap'] 
      //Highly important to make the loader transpile jsx into react-compatible js by default
    }
    ]
  },
  //exclude propery is for ingoring certain file types while bundling
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins:[
  new webpack.HotModuleReplacementPlugin()
  ]
};


 /*Warnings received when install webpack

npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.0.14
npm WARN electron-react-sass-SPi-Reader-Prototype@0.1.0 No repository field.
npm WARN electron-react-sass-SPi-Reader-Prototype@0.1.0 No license field.
*/

/*IMPORTANT:
all the methods like join(), resolve() are deprecated (at least in Win)
recommend to use direct appending, e.g. __dirname + '<file/directories>'
*/
