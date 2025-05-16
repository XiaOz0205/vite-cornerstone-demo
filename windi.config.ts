import { defineConfig } from 'windicss/helpers'
export default defineConfig({
    theme: {
        flexShrink: {
          0: 0,
          1: 1,
          2: 2,
          3: 3
        },
        flexGrow: {
          0: 0,
          DEFAULT: 2,
          1: 1,
          3: 3,
        }
      },
    shortcuts: { 
    },
    attributify: true
})