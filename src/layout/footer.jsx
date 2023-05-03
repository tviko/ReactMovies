function Footer() {
    return <footer className="page-footer color-base">
        <div className="footer-copyright">
            <div className="container">
                @ {new Date().getFullYear() + " "}
                Viko Design
                <a className="grey-text text-lighten-4 right" href="https://github.com/tviko/ReactMovies">GitHub</a>
            </div>
        </div>
    </footer>
}

export { Footer };
