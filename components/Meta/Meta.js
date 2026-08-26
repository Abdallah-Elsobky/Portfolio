import Head from "next/head";
import { METADATA } from "../../constants";

const Meta = () => (
  <Head>
    {/* Primary HTML Meta Tags */}
    <title>{METADATA.title}</title>
    <meta name="title" content={METADATA.title} />
    <meta name="description" content={METADATA.description} />
    <meta name="keywords" content={METADATA.keywords} />
    <meta name="author" content={METADATA.author} />
    <meta name="robots" content="index, follow" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content={METADATA.language} />
    <meta name="theme-color" content={METADATA.themeColor} />
    <meta name="msapplication-TileColor" content={METADATA.themeColor} />

    {/* Canonical URL */}
    <link rel="canonical" href={METADATA.siteUrl} />

    {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={METADATA.siteUrl} />
    <meta property="og:title" content={METADATA.title} />
    <meta property="og:description" content={METADATA.description} />
    <meta property="og:site_name" content={METADATA.title} />
    <meta property="og:locale" content="en_US" />

    {/* Preview Image for Social Sharing (WhatsApp, LinkedIn, Facebook, Slack) */}
    <meta property="og:image" content={METADATA.image} />
    <meta property="og:image:secure_url" content={METADATA.image} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Abdallah Elsobky | Android Developer Portfolio Preview" />

    {/* Twitter / X Cards */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={METADATA.siteUrl} />
    <meta name="twitter:title" content={METADATA.title} />
    <meta name="twitter:description" content={METADATA.description} />
    <meta name="twitter:image" content={METADATA.image} />
    <meta name="twitter:image:alt" content="Abdallah Elsobky | Android Developer Portfolio Preview" />
    <meta name="twitter:site" content={METADATA.twitterHandle} />
    <meta name="twitter:creator" content={METADATA.twitterHandle} />

    {/* Favicons & Manifest */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/manifest.json" />
  </Head>
);

export default Meta;
