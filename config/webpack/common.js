const { join } = require('path')

const paths = {
  root: join(__dirname, '..', '..'),
  src: join(__dirname, '..', '..', 'src'),
  public: join(__dirname, '..', '..', 'public'),
  build: join(__dirname, '..', '..', 'build'),

  //alias
  // atoms: join(__dirname, '..', '..', 'src', 'components', 'atoms'),
  // molecules: join(__dirname, '..', '..', 'src', 'components', 'molecules'),
  // organisms: join(__dirname, '..', '..', 'src', 'components', 'organisms'),
  // pages: join(__dirname, '..', '..', 'src', 'components', 'pages'),
  // templates: join(__dirname, '..', '..', 'src', 'components', 'templates'),
  // containers: join(__dirname, '..', '..', 'src', 'containers'),
}

module.exports = {
  paths,
  entry: {
    main: join(paths.src, 'index'),
  },

  output: {
    path: paths.build,
    filename: '[name]-[chunkhash].js',
    publicPath: '/',
  },

  htmlPluginConfig: {
    title: 'DreamShare',
    template: join(paths.public, 'index.html'),
    filename: './index.html',
  },

  // cssLoader: {
  //   test: /\.css$/,
  //   include: paths.src,
  //   use: ['style-loader', 'css-loader'],
  // },
  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: paths.src,
    use: [
      // 'react-hot-loader/webpack',
      {
        loader: 'babel-loader',
      }
    ],
  },
  // fileLoader: {
  //   test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
  //   include: paths.src,
  //   use: {
  //     loader: 'file-loader',
  //     options: {
  //       name: 'media/[name].[hash:8].[ext]',
  //     },
  //   },
  // },

  // urlLoader: {
  //   test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
  //   include: paths.src,
  //   use: {
  //     loader: 'url-loader',
  //     options: {
  //       limit: 10000,
  //       name: 'media/[name].[hash:8].[ext]',
  //     },
  //   },
  // },

  // copyLoader: [
  //   {
  //     from: `${paths.public}/**/**`,
  //     ignore: ['*.html'],
  //     to: `${paths.build}/[name].[ext]`,
  //   },
  // ],

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [paths.src, 'node_modules'],
    // alias: {
    //   src: paths.src,
    //   atoms: paths.atoms,
    //   molecules: paths.molecules,
    //   organisms: paths.organisms,
    //   pages: paths.pages,
    //   templates: paths.templates,
    //   containers: paths.containers,
    // },
  },
}
