import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <html>
            <div className="container">
                <NavBar />
                <main className="main">{children}</main>
                <style jsx>{`
            .container{
                width: 90%;
                margin: 1rem auto;
                border-radius: 0.3rem;
                background-color: var(--main-color-gray);
                background-image: linear-gradient(45deg, #888 25%, transparent 25%, transparent 75%, #888 75%, #888), linear-gradient(45deg, #888 25%, transparent 25%, transparent 75%, #888 75%, #888);
                background-position: 0 0, 4px 4px;
                background-size: 8px 8px;
                overflow: hidden;
                }
                .main{
                    display: flex;
                    flex-direction:column;
                }                `}</style>
            </div>
        </html>

    );
}

