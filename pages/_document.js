import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <meta charSet="utf-8" />
          <meta
            content="Director Creativo & Filmmaker. Me gusta contar historias y viajar."
            name="description"
          />
          <meta
            content="Director Creativo & Filmmaker. Me gusta contar historias y viajar."
            name="keywords"
          />
          <meta
            content="https://cdn.sanity.io/images/arac2r4p/production/ac7d7bf833f97cfbed82863e0026feedc2e564b8-1080x1080.jpg"
            name="image"
          />
          <meta content="https://juanignaciocali.com" property="og:url" />
          <meta content="Juan Ignacio Cali" property="og:title" />
          <meta
            content="Director Creativo & Filmmaker. Me gusta contar historias y viajar."
            property="og:description"
          />
          <meta
            content="https://cdn.sanity.io/images/arac2r4p/production/ac7d7bf833f97cfbed82863e0026feedc2e564b8-1080x1080.jpg"
            property="og:image"
          />
          <link rel="canonical" href="https://juanignaciocali.com" />
          <link
            rel="preload"
            as="font"
            href="/fonts/BarlowCondensed-ExtraLightItalic.ttf"
            type="application/octet-stream"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/BarlowCondensed-LightItalic.ttf"
            type="application/octet-stream"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/Gobold Bold Italic.otf"
            type="font/opentype"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/Lora-Italic-VariableFont_wght.ttf"
            type="application/octet-stream"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/Lora-VariableFont_wght.ttf"
            type="application/octet-stream"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/Poppins-Bold.ttf"
            type="application/octet-stream"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/Poppins-ExtraBold.ttf"
            type="application/octet-stream"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/Poppins-ExtraLight.ttf"
            type="application/octet-stream"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/Poppins-Light.ttf"
            type="application/octet-stream"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/Poppins-LightItalic.ttf"
            type="application/octet-stream"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/Poppins-Regular.ttf"
            type="application/octet-stream"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/Poppins-SemiBold.ttf"
            type="application/octet-stream"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/Poppins-ThinItalic.ttf"
            type="application/octet-stream"
            crossOrigin="anonymous"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
