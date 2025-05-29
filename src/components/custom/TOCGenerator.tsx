import React, { useEffect, useState } from "react";
import { Scrollspy } from "@makotot/ghostui";

type TocItem = {
    id: string;
    text: string;
    level: number;
    children: TocItem[];
    element: HTMLElement;
};

type TOCGeneratorProps = {
    containerClassName?: string;
    itemClassName?: string;
    activeItemClassName?: string;
    subItemClassName?: string;
    activeSubItemClassName?: string;
};

export const TOCGenerator: React.FC<TOCGeneratorProps> = ({
    containerClassName = "space-y-2 ",
    itemClassName = "text-gray-700 hover:text-black",
    activeItemClassName = "text-pink-500 font-bold",
    subItemClassName = "ml-4   text-gray-600 hover:text-black",
    activeSubItemClassName = "  text-blue-600 font-semibold",
}) => {
    const [toc, setToc] = useState<TocItem[]>([]);
    const [sectionElements, setSectionElements] = useState<HTMLElement[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const headers = Array.from(document.querySelectorAll("h1, h2"))
                .filter(el => !el.closest("[data-v-app]")) as HTMLElement[];
            const tocData: TocItem[] = [];
            let currentParent: TocItem | null = null;

            headers.forEach((el) => {
                if (!el.id) {
                    el.id = (el.textContent || "").toLowerCase().replace(/\s+/g, "-");
                }
                const level = Number(el.tagName[1]);
                const item: TocItem = {
                    id: el.id,
                    text: el.textContent || "",
                    level,
                    children: [],
                    element: el,
                };

                if (level === 1) {
                    tocData.push(item);
                    currentParent = item;
                } else if (level === 2 && currentParent) {
                    currentParent.children.push(item);
                }
            });

            setToc(tocData);

            const allSections = tocData.flatMap((item) => [item.element, ...item.children.map((c) => c.element)]);
            setSectionElements(allSections);
        }, 500); 

        return () => clearTimeout(timer);
    }, []);

    if (toc.length === 0 || sectionElements.length === 0) return null;

    return (
        <Scrollspy sectionRefs={sectionElements.map((el) => ({ current: el }))}>
            {({ currentElementIndexInViewport }) => {
                const currentElement = sectionElements[currentElementIndexInViewport] || null;
                const currentId = currentElement?.id || "";

                return (
                    <div className="max-h-[70vh] overflow-auto pr-2 max-w-[90%] scrollable-toc"> {/* ← 加这层容器 */}
                        <nav className={containerClassName} aria-label="Table of Contents">
                            <ul>
                                {toc.map((item) => {
                                    const isActive = currentId === item.id || item.children.some((c) => c.id === currentId);
                                    return (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                className={`${itemClassName} ${currentId === item.id ? activeItemClassName : ""}`}
                                            >
                                                {item.text}
                                            </a>
                                            {isActive && item.children.length > 0 && (
                                                <ul className="mt-1 space-y-1">
                                                    {item.children.map((child) => (
                                                        <li key={child.id}>
                                                            <a
                                                                href={`#${child.id}`}
                                                                className={`${subItemClassName} ${currentId === child.id ? activeSubItemClassName : ""}`}
                                                            >
                                                                {child.text}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                );
            }}
        </Scrollspy>
    );
};
