module.exports = {
    presets: [
            ['@babel/preset-env', {targets: {node: 'current'}}],
            ['@babel/present-env', { targets: { esmodules: true}}],
            ['@babel/preset-react', { runtime: 'automatic'}],
            
            ],
  };