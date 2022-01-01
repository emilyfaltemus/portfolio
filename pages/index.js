import Head from "next/head";
import Image from "next/image";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Emmefen</title>
            </Head>
            <div className="test">
                <h1>Homepage</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <Link href="/work">
                    <a>See Work</a>
                </Link>
            </div>
        </>
    );
}
