// https://github.com/diegohaz/arc/wiki/Containers
const req = require.context('.', true, /\.\/.+\/index\.js$/)

req.keys().forEach(key => {
  const componentName = key.replace(/\.\/(.+)\/.+$/, '$1')

  module.exports[componentName] = req(key).default
})
