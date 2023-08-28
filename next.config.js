/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    // basePath: '/syntho-mind',
    assetPrefix: '/syntho-mind',
    // images: {
    //     domains: ['https://github.com/sakha1370/syntho-mind/blob/master/public'],
    //     loader: 'default',
    //     path: '/_next/image',
    //     quality: 75,
    // },
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,

    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
}

module.exports = nextConfig