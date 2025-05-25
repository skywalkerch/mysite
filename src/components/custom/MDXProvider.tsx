/**
 * @import {MDXComponents} from 'mdx/types.js'
 */
import { TH1, TH2, TH3, TH4, TP, TBlockquote, TList, TInlineCode, TLead, TLarge, TSmall, TMuted, TImage } from '@/components/custom/Typography'
import { MDXProvider } from '@mdx-js/react'
// ^-- Assumes an integration is used to compile MDX to JS, such as
// `@mdx-js/esbuild`, `@mdx-js/loader`, `@mdx-js/node-loader`, or
// `@mdx-js/rollup`, and that it is configured with
// `options.providerImportSource: '@mdx-js/react'`.

/** @type {MDXComponents} */
const components = {
    h1: TH1,
    h2: TH2,
    h3: TH3,
    h4: TH4,
    p: TP,
    blockquote: TBlockquote,
    ul: TList,
    ol: TList,
    img: TImage
    //code: TInlineCode,
    // pre:TCode

}

export default function CustomMDXProvider({ children }: { children: React.ReactNode }) {
    return (
        <MDXProvider components={components}>
            {children}
        </MDXProvider>
    )
}