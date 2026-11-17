import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // GitHub Pages'deki /oto_parca/ alt klasör yolu için base ayarını buraya ekliyoruz:
  vite: {
    base: '/oto_parca/',
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
