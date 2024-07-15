function Navbar() {
    const logo = "./logo.jpeg"
    return (
        <>
            <nav className="Navbar">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Company Name</h1>
                <a className="App-link" href="/">Home</a>
                <a className="App-link" href="/about">About</a>
            </nav>
        </>
    )
};

export default Navbar;
