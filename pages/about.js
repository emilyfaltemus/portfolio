import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>About | Emmefen</title>
            </Head>
            <main aria-labelledby="main-title" className="view content section">
                <div id="main" className="view__anchor"></div>
                <div className="section__in content__text">
                    <h1 id="main-title">About Me</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aperiam ratione officia dignissimos at sit vero
                        saepe incidunt deserunt tenetur mollitia rem illum
                        pariatur reprehenderit veritatis, voluptas voluptatum
                        dolor nihil eligendi.
                    </p>
                </div>
            </main>
        </>
    );
};

export default About;
