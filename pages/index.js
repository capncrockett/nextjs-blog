import Head from "next/head";
import { parse } from "postcss";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Joe. I'm a Junior Developer and an Audio Engineer.</p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial"</a>.)
        </p>
      </section>
    </Layout>
  );
}

// console.log(3 / 2);
// console.log(Math.floor(3 / 2));
// console.log(0.1 + 0.2);
// console.log(Math.sin(3.5));
// var r = 5;
// var circumference = 2 * Math.PI * r;
// console.log(circumference);
// console.log(parseInt("123", 10));
// console.log(parseInt("010", 10));

// console.log(parseInt("0", 2)); // 0
// console.log(parseInt("000000", 2)); // 0

// console.log(parseInt("01", 2)); // 1
// console.log(parseInt("10", 2)); // 2
// console.log(parseInt("11", 2)); // 3

// console.log(parseInt("100", 2)); // 4
// console.log(parseInt("101", 2)); // 5
// console.log(parseInt("110", 2)); // 6
// console.log(parseInt("111", 2)); // 7

// console.log(parseInt("1000", 2)); // 8
// console.log(parseInt("1001", 2)); // 9
// console.log(parseInt("1010", 2)); // 10
// console.log(parseInt("1011", 2)); // 11
// console.log(parseInt("1100", 2)); // 12
// console.log(parseInt("1101", 2)); // 13
// console.log(parseInt("1110", 2)); // 14
// console.log(parseInt("1111", 2)); // 15

// console.log(parseInt("10000", 2)); // 16
// console.log(parseInt("10001", 2)); // 17

// console.log(+"42");
// console.log(+"010");
// console.log(+"0x10");
// console.log(parseInt("hello", 10));
// console.log(NaN + 5);

// console.log(1 / 0);
// console.log(-1 / 0);

// console.log(parseInt("10.2abc"));
// console.log(parseFloat("10.2abc"));
// console.log(+"10.2abc");

