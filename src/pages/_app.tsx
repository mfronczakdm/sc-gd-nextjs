import type { AppProps } from 'next/app';
import Router from 'next/router';
import { I18nProvider } from 'next-localization';
import NProgress from 'nprogress';

// Using bootstrap and nprogress are completely optional.
//  bootstrap is used here to provide a clean layout for samples, without needing extra CSS in the sample app
//  nprogress provides a loading indicator on page/route changes
// Remove these in package.json as well if removed here.
import 'bootstrap/dist/css/bootstrap.css';
import 'nprogress/nprogress.css';
import 'assets/app.css';
import { css } from '@linaria/core';

NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }: AppProps): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  return (
    // Use the next-localization (w/ rosetta) library to provide our translation dictionary to the app.
    // Note Next.js does not (currently) provide anything for translation, only i18n routing.
    // If your app is not multilingual, next-localization and references to it can be removed.
    <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
      <Component {...rest} />
    </I18nProvider>
  );
}

export default App;

// UXCore breakpoints
// I would import these from the UXCore dep, but
// they are not exported
const gridBreakpoints = {
  xs: 0,
  sm: 520,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1720,
};

// SiteGLass Device Sizes
// This is an augmented and expanded list that uses the
// UXCore Grid breakpoints as represented above
export const size = {
  mobileSm: 320, // Nuanced mobile sizes, it's important that we can have these to better target smaller screens
  mobile: 375, // Nuanced mobile sizes, it's important that we can have these to better target smaller screens
  mobileLg: gridBreakpoints.sm,
  tablet: gridBreakpoints.md,
  tabletLg: gridBreakpoints.lg,
  laptop: gridBreakpoints.xl,
  mostCommon: 1366,
  laptopLg: 1440,
  desktopSm: gridBreakpoints.xxl,
  desktop: 1920,
  desktopLg: 2360,
};

/**
 * objToCssVar
 *
 * @param {Object} obj obj
 * @param {String} key key
 * @returns {String} string of custom properties
 */

// @ts-ignore
export function objToCssVar(obj, key) {
  return Object.entries(obj)
    .map((item) => `--${key}-${item[0]}: ${item[1]};`)
    .join('');
}

css`
  :global() {
    /*
    Generated Custom Properties based on
    javascript objects
  */

    html {
      ${objToCssVar(size, 'screen')}
    }

    /*
    Common Typography Styles
  */

    h1,
    .h1,
    h2,
    .h2,
    h3,
    .h3,
    h4,
    .h4,
    h5,
    .h5,
    h6,
    .h6,
    p,
    .p {
      margin-top: 0;
      margin-bottom: var(--fixed-space-100);
      font-family: 'gdsherpa' !important;
    }

    .d1,
    .d2,
    .d3,
    h1,
    .h1,
    h2,
    .h2,
    h3,
    .h3,
    h4,
    .h4,
    h5,
    .h5,
    h6,
    .h6 {
      font-weight: 850 !important;
      margin-left: -0.05em;
    }

    :focus {
      outline: 0;
    }

    [tabindex='-1']:focus:not(:focus-visible) {
      outline: 0 !important;
    }

    a:focus-visible img,
    :focus-visible {
      outline: 0.1875rem solid #4095e8 !important;
      outline-offset: -0.1875rem;
      z-index: 99999;
    }

    .gdSherpa {
      font-family: 'gdsherpa' !important;
    }

    .gdSage {
      font-family: 'gd-sage' !important;
    }

    /*
    Display Sizes
  */

    .d1 {
      font-family: 'gd-sage' !important;
      font-size: var(--heading-d1);
      line-height: 120%;
      letter-spacing: calc(var(--letter-spacing-d1) * -1);
    }

    .d2 {
      font-family: 'gd-sage' !important;
      font-size: var(--heading-d2);
      line-height: 120%;
      letter-spacing: calc(var(--letter-spacing-d2) * -1);
    }

    .d3 {
      font-family: 'gd-sage' !important;
      font-size: var(--heading-d3);
      line-height: 120%;
      letter-spacing: calc(var(--letter-spacing-d3) * -1);
    }

    /*
    Heading Sizes
  */

    .h1 {
      font-size: var(--heading-h1);
      line-height: 120%;
    }

    .h2 {
      font-size: var(--heading-h2);
      line-height: 120%;
    }

    .h3 {
      font-size: var(--heading-h3);
      line-height: 120%;
    }

    .h4 {
      font-size: var(--heading-h4);
      line-height: 120%;
    }

    .h5 {
      font-size: var(--heading-h5);
      line-height: 120%;
    }

    .h6 {
      font-size: var(--heading-h6);
      line-height: 120%;
    }

    /*
    UXCore Title Sizes
  */

    .title-extra-large,
    .p-title-extra-large {
      font-size: 1.25rem;
      line-height: 140%;
      font-weight: 850;
    }

    .title-large,
    .p-title-large {
      font-size: 1.125rem;
      line-height: 133%;
      font-weight: 850;
    }

    .title,
    .p-title,
    .title-default,
    .p-title-default {
      font-size: 1rem;
      line-height: 150%;
      font-weight: 850;
    }

    .title-small,
    .p-title-small,
    .eyebrow,
    .p-eyebrow {
      font-size: 0.8125rem;
      line-height: 120%;
      font-weight: 850;
      letter-spacing: 0.06rem;
      text-transform: uppercase;
    }

    /*
    UXCore Paragraph Sizes
  */

    .large,
    .p-large {
      font-size: 1.125rem;
      line-height: 150%;
      font-weight: 565;
    }

    .p,
    .default,
    .p-default {
      font-size: 1rem;
      line-height: 150%;
      font-weight: 565;
    }

    .small,
    .p-small {
      font-size: 0.875rem;
      line-height: 140%;
      font-weight: 695;
    }

    .disclaimer,
    .p-disclaimer,
    .extra-small,
    .p-extra-small {
      font-size: 0.8125rem;
      line-height: 150%;
      font-weight: 565;
    }

    pre {
      white-space: pre-line;
    }
  }
`;
