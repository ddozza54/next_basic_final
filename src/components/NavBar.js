import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <Link href='/' className="p-3">
                <span className="font-bold text-2xl link ">Home</span> </Link>
            <Link href='/about' className="p-3">
                <span className="font-bold text-2xl link ">About</span> </Link>
            <style jsx>{`
            nav{
                width: 100%;
                border-bottom: var(--main-color-black) 0.3rem solid;
                background-color: var(--main-color-gray);
                display: flex;
                justify-content: space-between;
            }
            span:hover {
                border-bottom: 2px solid black;
               }
            `}</style>
        </nav >
    );
}

