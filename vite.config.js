import { resolve } from 'path' /* node */


export default {
    css: {
      devSourcemap: true
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          nosotros: resolve(__dirname, './src/pages/nosotros/nosotros.html'),
          contacto: resolve(__dirname, './src/pages/contacto/contacto.html')
        }
      }
    }
  }