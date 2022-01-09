import Head from "next/head";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sigil from "./Sigil";
import Clouds from "./Clouds";
import Stars from "./Stars";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Calistoga&family=Glass+Antiqua&family=Kranky&family=Overlock:ital,wght@1,700&family=Poiret+One&family=Yeseva+One&display=swap"
                    rel="stylesheet"
                />
                <link href="/css/style.css" rel="stylesheet" />
            </Head>
            <div className="page">
                <Navbar />
                <Header />
                {children}
                <Footer />
                <Sigil />
                <div className="background-scene">
                    <div className="background-scene background-scene__front">
                        <Clouds />
                    </div>
                    <div className="background-scene background-scene__back">
                        <Stars />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
