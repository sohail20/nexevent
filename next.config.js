module.exports = {
    // Customizing webpack configuration
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Modify the webpack configuration here
      return config;
    },
  
    // Setting environment variables
    env: {
      // Define your environment variables here
    },
  
    // Customizing server-side rendering behavior
    serverRuntimeConfig: {
      // Define server-only environment variables here
    },
    publicRuntimeConfig: {
      // Define environment variables accessible on the client-side here
    },
  
    // Customizing headers
    async headers() {
      // Define custom headers here
      return [
        {
          // Header configuration object
        },
      ];
    },
  
    // Other configuration options
    // ...
  };
  