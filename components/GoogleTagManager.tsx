"use client";

/**
 * The Google Tag Manager.
 *
 * This will render a script tag that will initialize Google Tag Manager.
 *
 * @returns {JSX.Element} The Google Tag Manager script tag.
 */
export function GoogleTagManager() {
  return (
    <script
      id="gtm-init"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MLTB85XW');`,
      }}
    />
  );
}
/**
 * The noscript version of the Google Tag Manager.
 *
 * This will render a hidden iframe that will allow Google Tag Manager to
 * function even if a user has JavaScript disabled.
 *
 * @returns {JSX.Element} The noscript version of the Google Tag Manager.
 */
export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=GTM-MLTB85XW`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
