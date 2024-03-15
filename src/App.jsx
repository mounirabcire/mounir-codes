import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
    // TODO: make the navbar responsive (py)
    // TODO: mybe usign the humberger bar on small devices
    return (
        <Routes>
            <Route index path="/" element={<Homepage />} />
        </Routes>
    );
}

export default App;
