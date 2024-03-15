import { useEffect, useState } from "react";

function useWindowDimension() {
    const [windowDimension, setWindowDimension] = useState([0, 0]);

    useEffect(() => {
        window.addEventListener("resize", updateWindowDimension);

        function updateWindowDimension(e) {
            setWindowDimension([window.innerWidth, window.innerHeight]);
        }

        return () =>
            window.removeEventListener("resize", updateWindowDimension);
    }, []);
    return [...windowDimension];
}

export { useWindowDimension };
