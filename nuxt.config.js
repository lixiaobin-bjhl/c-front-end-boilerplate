module.exports = {
    extractCSS: true,
    filenames: {
        vendor: 'vendor.[hash:12].js',
        app: 'hare.[chunkhash:12].js',
        css: 'hare.[contenthash:12].css'
    },
    /*
    ** Headers of the page
    */
    head: {
        title: '优能',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    extend(config) {
        const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
        vueLoader.query.loaders.scss = 'vue-style-loader!css-loader!sass-loader?' + JSON.stringify({ includePaths: [path.resolve(__dirname), 'node_modules'] })
    },
    vender: [
        'element-ui'
    ],
    babel: {
        "plugins": [["component", [
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            },
            'transform-async-to-generator',
            'transform-runtime'
        ]]],
        comments: true
    },
    /*
    ** Global CSS
    */
    css: [
        { src: '~assets/css/main.scss', lang: 'scss' },
        'element-ui/lib/theme-chalk/index.css'
    ],
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#3B8070' },
    plugins: [
        { src: '~plugins/element-ui', ssr: true }
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    proxy: {
        '/*.json': { target: 'http://127.0.0.1:3001' }
    }
}
