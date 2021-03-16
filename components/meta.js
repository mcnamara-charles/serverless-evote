import Head from "next/head";
import { CMS_NAME} from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/favicon.png"
        color="#000000"
      />
      <link href="/faw/css/fontawesome.css" rel="stylesheet" />
      <link href="/faw/css/brands.css" rel="stylesheet" />
      <link href="/faw/css/solid.css" rel="stylesheet" />
      <link rel="shortcut icon" href="/favicon/favicon.png" />
      <meta name="theme-color" content="#000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, initial-scale=1, minimum-scale=1" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${CMS_NAME}.`}
      />
    </Head>
  );
}
