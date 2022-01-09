import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Emmefen | Aspiring UX Designer</title>
            </Head>
            <main aria-labelledby="main-title" className="view content section">
                <div id="main" className="view__anchor"></div>
                <div className="section__in">
                    <div className="pin-note content__text">
                        <h1 id="main-title">Home</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Aperiam ratione officia dignissimos at sit
                            vero saepe incidunt deserunt tenetur mollitia rem
                            illum pariatur reprehenderit veritatis, voluptas
                            voluptatum dolor nihil eligendi.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
