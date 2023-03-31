import Link from "next/link";
import Image from 'next/image'

const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <Link href="/about"><li>About</li></Link>
                <Link href="/"><li>Home</li></Link>
                <li>Contact</li>
                <Link href="/extra"><li>Profile</li></Link>
                <li>Sales</li>  
                <li>Products</li>
                <li>Services</li>
                <Image src="/rose.png" width={259} height={200} />
            </ul>
            <ul>
                <Link href="/about"><li>About</li></Link>
                <Link href="/"><li>Home</li></Link>
                <li>Contact</li>
                <Link href="/extra"><li>Profile</li></Link>
                <li>Sales</li>  
                <li>Products</li>
                <li>Services</li>
            </ul>
            <ul>
                <Link href="/about"><li>About</li></Link>
                <Link href="/"><li>Home</li></Link>
                <li>Contact</li>
                <Link href="/extra"><li>Profile</li></Link>
                <li>Sales</li>  
                <li>Products</li>
                <li>Services</li>
            </ul>
            <ul>
                <Link href="/about"><li>About</li></Link>
                <Link href="/"><li>Home</li></Link>
                <li>Contact</li>
                <Link href="/extra"><li>Profile</li></Link>
                <li>Sales</li>  
                <li>Products</li>
                <li>Services</li>
            </ul>
        </div>
    );
}
 
export default Footer;