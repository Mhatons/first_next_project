import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Test | Home</title>
      </Head>
      <div>
        <div className='body'>
          <h1>Home Page</h1>
          <p> is one of the most used extensions by React and React Native developers. It provides many shorthand prefixes to accelerate development and help developers create code snippets and syntax for React, Redux, GraphQL, and React Native. So, this is a great extension to speed up your development process.</p>
        </div>
      </div>
    </>
  )
}
