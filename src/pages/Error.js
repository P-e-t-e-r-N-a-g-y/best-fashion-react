import Navbar from "../components/Navbar";

function Error() {
    return (
        <>
            <Navbar />
            <main>
                <h1>😥</h1>
                <h1>404</h1>
                <p>Page not found!</p>
            </main>
        </>
    );
}

export default Error;