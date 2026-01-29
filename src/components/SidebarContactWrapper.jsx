import { useState, useEffect } from "react";
import SidebarContact from "./SidebarContact";

export default function SidebarContactWrapper({ heroId, mode = "home", children }) {
    const [showSidebar, setShowSidebar] = useState(mode === "always");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        if (mode === "always") {
            setShowSidebar(true);
            return;
        }
        if (!heroId) return;
        const heroElem = document.getElementById(heroId);
        if (!heroElem) return;

        const observer = new window.IntersectionObserver(
            ([entry]) => {
                // Show sidebar when the mission section is scrolled past (not intersecting)
                setShowSidebar(!entry.isIntersecting);
            },
            { threshold: 0, rootMargin: '-100px 0px 0px 0px' }
        );
        observer.observe(heroElem);
        return () => observer.disconnect();
    }, [heroId, mode, isClient]);

    return (
        <>
            {children}
            {isClient && <SidebarContact visible={showSidebar} />}
        </>
    );
}
