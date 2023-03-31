import Link from 'next/link'
import styles from '../../styles/Home.module.css'
export const getStaticProps = async () => {
    const res = await fetch('http://localhost:4002/users')
    const data = await res.json()

    return {
        props: { test: data }
    }
}

const home3 = ({ test }) => {
    return (
        <div>
            <div className="body">
                <h1>Second Home Page</h1>
                <p>Emmet is one of the most used extensions by React and React Native developers. It provides many shorthand prefixes to accelerate development and help developers create code snippets and syntax for React, Redux, GraphQL, and React Native. So, this is a great extension to speed up your development process.</p>
                {test.map(data => (
                    <div className={styles.txt}>
                        <Link className={styles.name} href={`/extra/${data._id}`} key={data._id}>
                            <h3>{data.user_name}</h3>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default home3;