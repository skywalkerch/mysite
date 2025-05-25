//import ModalImage from "react-modal-image";
//
function TH1({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h1 className={`mt-2 hover:before:content-['#'] before:text-gray-500 before:mr-2 text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}>
            {children}
        </h1>
    )
}

function TH2({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h2 className={`hover:before:content-['##'] before:text-gray-500 before:mr-2 text-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}>
            {children}
        </h2>
    )
}

function TH3({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h3 className={`hover:before:content-['###'] before:text-gray-500 before:mr-2 text-center scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
            {children}
        </h3>
    )
}

function TH4({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <h4 className={`hover:before:content-['####'] before:text-gray-500 before:mr-2 text-center scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
            {children}
        </h4>
    )
}


function TP({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={`indent-8 leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
            {children}
        </p>
    )
}

function TBlockquote({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <blockquote className={`mt-3 mb-3 border-l-4 border-l-gray-400  italic ${className}`}>
            {children}
        </blockquote>
    )
}

function TList({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`}>
            {children}
        </ul>
    )
}
function TInlineCode({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <code className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`}>
            {children}
        </code>
    )
}

function TLead({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={`text-xl text-muted-foreground ${className}`}>
            {children}
        </p>
    )
}

function TLarge({ children, className }: { children: React.ReactNode, className?: string }) {
    return <div className={`text-3xl font-semibold ${className}`}>{children}</div  >
}

function TSmall({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <small className={`text-sm font-medium leading-none ${className}`}>{children}</small>
    )
}

function TMuted({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
    )
}

function TImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
    return (
        // 
        <img src={src} alt={alt} />
    )
}

export { TH1, TH2, TH3, TH4, TP, TBlockquote, TList, TInlineCode, TLead, TLarge, TSmall, TMuted, TImage }