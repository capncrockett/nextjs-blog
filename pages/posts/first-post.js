import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
// import styles from "../alert.module.css";
// import cn from "classnames";

export default function FirstPost() {
  return (
    <>
      <Layout>
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
        {/* <div
          className={cn({
            [styles.success]: type === "success",
            [styles.error]: type === "error",
          })}
        >
          {children}
        </div> */}
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
