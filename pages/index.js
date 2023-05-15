import dynamic from 'next/dynamic';

import { useEffect, useState } from "react";

const MainScreen = dynamic(() =>
    import('./MainScreen').then((module) => module.default)
);

export default function Home() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            if (typeof window !== "undefined")
                setLoading(false)
        }, 3000)
    }, [])
    return loading ? <p>Loading...</p> : (
        <MainScreen />
    );
}
