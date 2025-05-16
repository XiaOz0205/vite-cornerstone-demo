import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url"
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vite.dev/config/
// 2.19.0
// 3.15.2
export default defineConfig({
  plugins: [
    vue(),     
    WindiCSS(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true
      },
      exclude: ['src/components'],
      dts: 'src/auto-imports.d.ts'
    }),
    // 按需引入
    Components({
      // dts: true,
      dirs: ['src/components', 'src/views'],
      resolvers: [ElementPlusResolver()]
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "#": fileURLToPath(new URL("./types", import.meta.url)),
      "@/utils": fileURLToPath(new URL("./utils", import.meta.url)),
      // "../itkConfig.js": itkConfig,
      // "../../itkConfig.js": itkConfig,
    }
  },
  optimizeDeps: {
    exclude: [
      // "node_modules",
      // "itk-wasm",
      // "@itk-wasm/image-io",
      // "@itk-wasm/dicom-io",
      // "@thewtex/zstddec",
      // "@cornerstonejs/core",
      // "@cornerstonejs/dicom-image-loader",
      // "@kitware/vtk.js",
    ],
  }
})
