interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}

export function SEO({
  title,
  description,
  image,
  url,
  noIndex = false,
}: SEOProps) {
  const siteTitle = "thmsfolio";
  const siteUrl = "https://thmsfolio.vercel.app";
  const defaultDescription =
    "Découvrez mon portfolio de développeur Full Stack.";
  const defaultImage = "/og-image.png";

  const fullTitle = title === siteTitle ? siteTitle : `${siteTitle} | ${title}`;

  const absoluteUrl = url ? `${siteUrl}${url}` : siteUrl;
  const absoluteImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : `${siteUrl}${defaultImage}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={absoluteUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:image" content={absoluteImage} />

      <meta name="twitter:title" content={fullTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={absoluteImage} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </>
  );
}
