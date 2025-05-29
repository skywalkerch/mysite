import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import rehypeMathjax from "rehype-mathjax/chtml";
import rehypeStringify from "rehype-stringify";
import mdx from "@mdx-js/rollup";
import remarkMdx from "remark-mdx";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import sitemapPlugin from "vite-plugin-tanstack-router-sitemap";
import rehypeHighlight from "rehype-highlight";
import rehypeCallout from "rehype-callouts";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import rehypeSlug from "rehype-slug";
export default defineConfig({
  plugins: [
    visualizer({ open: true }),
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
      routeFileIgnorePrefix: "-",
      quoteStyle: "single",
      autoCodeSplitting: true,
    }),
    sitemapPlugin({
      hostname: "https://skywalkerch.vercel.app",
      routeTreePath: "./src/routeTree.gen.ts",
      routes: {
        "/": {
          changefreq: "daily",
          priority: 1.0,
        },
      },
    }),
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkMdx, remarkMath, remarkRehype],
        rehypePlugins: [
          rehypeSlug,
          rehypeAutolinkHeadings,

          [
            rehypeMathjax,
            {
              chtml: {
                fontURL:
                  "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2",
              },
            },
          ],
          [rehypeHighlight, {}],

          [rehypeCallout, { theme: "vitepress", showIndicator: true }],

          rehypeStringify,
        ],
        providerImportSource: "@mdx-js/react",
      }),
    },
    viteReact({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@root": resolve(__dirname, "./"),
      "@docs": resolve(__dirname, "./docs"),
    },
  },
});
