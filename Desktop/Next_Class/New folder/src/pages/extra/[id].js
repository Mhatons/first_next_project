import Image from 'next/image'
export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:4002/users')
    const data = await res.json()

    const paths = data.map(info => {
        return {
            params: { id: info._id }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:4002/users/${id}`)
    const data = await res.json();

    return {
        props: { test: data }
    }
}

const Details = ({ test }) => {
    return (
        <div className="body">
            <h1>Here is the Details Page</h1>
            <div>
                <div>
                    <Image src="/image.jpg" width={400} height={300} />
                </div>
                <div>
                    <h2>{test.user_name}</h2>
                    <h2>{test.email}</h2>
                    <p>{test.address}</p>
                </div>
            </div>
        </div>
    );
}

export default Details;