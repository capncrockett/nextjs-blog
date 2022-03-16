import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'


export default function FirstPost() {
    return (
    <>
    <Head>
        <title>First Post</title>
    </Head>
    <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} //Desried size with correct aspect ratio
    width={144} //Desried size with correct aspect ratio
    alt="It's Joe"
    />
    <h1>First Post</h1>
    <h2>
        <Link href="/">
            <a>Back to home</a>
        </Link>
    </h2>
    </>
    )

}

