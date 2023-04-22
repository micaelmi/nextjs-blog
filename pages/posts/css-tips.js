import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function CssTips() {
    return (
        <Layout>
            <Head>
                <title>CSS TIPS</title>
            </Head>
            <h1>CSS TIPS</h1>
            <ul>
                <li>clsx - a simple library that lets you toggle class names easily</li>
                <li>Customize PostCSS config</li>
                <li>Next.js allows you to import Sass using both the .scss and .sass extensions</li>
            </ul>
            <Link href="https://nextjs.org/learn/basics/assets-metadata-css/styling-tips" target='_blank'>Find all of it clicking here</Link>
        </Layout >
    );
}