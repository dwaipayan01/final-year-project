import { useEffect, useState } from "react";

const useData = (id) => {
    const [packages, setPackages] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/package/${id}`)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);
    return [packages, setPackages];
}
export default useData;