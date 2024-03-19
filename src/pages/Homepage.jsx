import About from "../components/About";
import Header from "../components/Header";

function Homepage({ updateMouseAnim }) {
    return (
        <>
            <Header updateMouseAnim={updateMouseAnim} />
            <About updateMouseAnim={updateMouseAnim} />
        </>
    );
}

export default Homepage;
