import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return {
        props: {
            people: data
        }
    };
};

const Work = ({ people }) => {
    return (
        <>
            <Head>
                <title>Work | Emmefen</title>
            </Head>
            <main aria-labelledby="main-title" className="view content section">
                <div id="main" className="view__anchor"></div>
                <div className="section__in content__text">
                    <h1 id="main-title">Work</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aperiam ratione officia dignissimos at sit vero
                        saepe incidunt deserunt tenetur mollitia rem illum
                        pariatur reprehenderit veritatis, voluptas voluptatum
                        dolor nihil eligendi.
                    </p>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Perspiciatis, sunt ut quis neque deleniti dicta
                        sed. Nulla quos sit asperiores, officia quas corporis in
                        molestias natus, veritatis sequi laboriosam ipsum?
                    </p>

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

export default Work;
