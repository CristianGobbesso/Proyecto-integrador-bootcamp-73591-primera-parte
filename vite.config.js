import { resolve } from 'path' /* node */


export default {
    // config options
    css: {
        devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: resolve(__dirname, 'index.html'),
            nosotros: resolve(__dirname, './src/pages/nosotros.html'),
            contacto: resolve(__dirname, './src/pages/contacto.html')
        }
    }
}