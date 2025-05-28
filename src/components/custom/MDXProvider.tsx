/**
 * @import {MDXComponents} from 'mdx/types.js'
 */
import { TH1, TH2, TH3, TH4, TP, TBlockquote, TList, TImage } from '@/components/custom/Typography'
import { MDXProvider } from '@mdx-js/react'
// ^-- Assumes an integration is used to compile MDX to JS, such as
// `@mdx-js/esbuild`, `@mdx-js/loader`, `@mdx-js/node-loader`, or
// `@mdx-js/rollup`, and that it is configured with
// `options.providerImportSource: '@mdx-js/react'`.

/** @type {MDXComponents} */
const components = {
    img: TImage
}

export default function CustomMDXProvider({ children }: { children: React.ReactNode }) {
    return (
        <MDXProvider components={components}>
            {children}
        </MDXProvider>
    )
}