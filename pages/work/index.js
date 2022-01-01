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
        <div>
            <h1>Work</h1>
            {people.map((person) => (
                <Link href={`/work/${person.id}`} key={person.id}>
                    <a>{person.name}</a>
                </Link>
            ))}
        </div>
    );
};

export default Work;
