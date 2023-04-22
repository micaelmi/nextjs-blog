import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, my name is Micael! I graduated as a Systems Development Technician from Etec Atibaia and I'm currently studying Systems Analysis and Development at Fatec Bragança. I enjoy exploring various technologies to broaden my knowledge and stay up-to-date, but my expertise lies in web development. As of now, I work as a freelancer developing websites and I'm focusing on studying React and Typescript. These cutting-edge technologies fascinate me and I find them incredibly rewarding to work with.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <h2>My posts</h2>
        <Link href="posts/first-post">Exploring the Benefits and Advantages of Next.js for Modern Web Development</Link> <br /> <br />
        <Link href="posts/css-tips">Css Tips</Link>
      </section>
    </Layout>
  );
}