function TH1({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {children}
        </h1>
    )
}

function TH2({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    )
}

function TH3({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    )
}

function TH4({ children }: { children: React.ReactNode }) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    )
}


function TP({ children }: { children: React.ReactNode }) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {children}
        </p>
    )
}

function TBlockquote({ children }: { children: React.ReactNode }) {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            {children}
        </blockquote>
    )
}

function TList({ children }: { children: React.ReactNode }) {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {children}
        </ul>
    )
}
function TInlineCode({ children }: { children: React.ReactNode }) {
    return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {children}
        </code>
    )
}

function TLead({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-xl text-muted-foreground">
            {children}
        </p>
    )
}

function TLarge({ children }: { children: React.ReactNode }) {
    return <div className="text-3xl font-semibold">{children}</div  >
}

function TSmall({ children }: { children: React.ReactNode }) {
    return (
        <small className="text-sm font-medium leading-none">{children}</small>
    )
}

function TMuted({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sm text-muted-foreground">{children}</p>
    )
}


export { TH1, TH2, TH3, TH4, TP, TBlockquote, TList, TInlineCode, TLead, TLarge, TSmall, TMuted }