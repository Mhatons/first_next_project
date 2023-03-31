import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'

const Navbar = () => {
    const router = useRouter()
    return (
        <div className="nav">
            <Link href="/">
                <Image src="/rose.png" width={100} height={70} />
            </Link>

            <ul style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "50%"}}>
                <Link href="/about"><li>About</li></Link>
                <li>Contact</li>
                <li>Biography</li>
                <li>Sales</li>
            </ul>
        </div>
    );
}
 
export default Navbar;