module.exports = {
    experimental: {
        images: true, // Enable the experimental images feature
    },
    webpack: (config, { isServer }) => {
        // Modify the webpack configuration as needed
        return config;
    },
};
