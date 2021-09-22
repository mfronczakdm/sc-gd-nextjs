import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <GDHead />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

function GDHead() {
  return (
    <>
      <meta content="on" httpEquiv="x-dns-prefetch-control" />
      <link href="//img1.wsimg.com/" rel="dns-prefetch" />
      <link href="//img1.wsimg.com/" rel="preconnect" />
      <link href="//img6.wsimg.com/" rel="dns-prefetch" />
      <link href="//img6.wsimg.com/" rel="preconnect" />
      <link
        as="font"
        crossOrigin="anonymous"
        href="//www.godaddy.com/assets/ux/fonts/gd-sage/1.0/gd-sage-bold.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href="//www.godaddy.com/assets/ux/fonts/sherpa/2.0/gdsherpa-vf.woff2"
        rel="preload"
        type="font/woff2"
      />
      <link
        as="style"
        href="https://www.godaddy.com/assets/wrhs/bfe76011472f25536402e912b01d8d98/uxcore2.min.css"
        rel="preload"
      />
      <style>{`/* godaddy v3 prod */
        :root {
            --ux - 1s0t9v0: 0.7023319615912209rem;
            --ux-vvspv2: 1rem;
            --ux-97h3vl: #d4dbe0;
            --ux-1067ph9: "gdsherpa", Helvetica, Arial, sans-serif;
            --ux-sm2he3: 500;
            --ux-1w31hux: 1.5;
            --ux-1fi898z: #708090;
            --ux-le566q: #999;
            --ux-16m8zm9: #905;
            --ux-ci632o: #690;
            --ux-1jw5w47: #9a6e3a;
            --ux-ps2t1y: #07a;
            --ux-1b06mhh: #DD4A68;
            --ux-gw3pxw: #e90;
            --ux-2domxp: #d6d6d6;
            --ux-2jubes: 4px;
            --ux-wikx71: #1976d2;
            --ux-1np4r62: transparent;
            --ux-oc0naw: 1rem;
            --ux-16aixzc: 1rem;
            --ux-18ime9a: 1.375rem;
            --ux-1le7uoa: #111;
            --ux-1fzd9l5: transparent;
            --ux-jg1026: 1.5rem;
            --ux-1s5tndb: 0;
            --ux-cao06b: #fff;
            --ux-1leynsm: #111;
            --ux-by6mab: #d4dbe0;
            --ux-k4t5bc: #00a4a6;
            --ux-yscvvt: #ef6c0f;
            --ux-3seoiy: #744bc4;
            --ux-ifyf3f: #aa6d00;
            --ux-1c4rju4: #1976d2;
            --ux-1qsbael: #db1802;
            --ux-vsd31q: #00a4a6;
            --ux-1afwtm7: #ef6c0f;
            --ux-3uv4tc: #744bc4;
            --ux-iievdt: #aa6d00;
            --ux-cxbe8g: 1rem;
            --ux-ekirkm: #f5f2f0;
            --ux-145pjib: #000;
            --ux-jqgd0i: #111;
            --ux-1pfsknb: 1.423828125rem;
            --ux-1smybcz: .875rem;
            --ux-1dbu8ei: #111;
            --ux-1nr6ynb: 500;
            --ux-1lxyxj9: normal;
            --ux-1oqjeuu: 0;
            --ux-10jlyin: #000;
            --ux-99lo9: #1976d2;
            --ux-ux0m8o: #db1802;
            --ux-1wlhylv: transparent;
            --ux-p4h24g: .875rem;
            --ux-9ic57q: 2rem;
            --ux-9wtaa3: "gdsherpa", Helvetica, Arial, sans-serif;
            --ux-3z6ccd: 500;
            --ux-hm1ty7: 1.5;
            --ux-15ks663: "gdsherpa", Helvetica, Arial, sans-serif;
            --ux-aarlu5: 700;
            --ux-h93mi7: 1.5;
            --ux-p4wcd9: "gdsherpa", Helvetica, Arial, sans-serif;
            --ux-1a9e4a3: 500;
            --ux-1pw8hzd: 1.25;
            --ux-1n2ego0: .8rem;
            --ux-uzt9o6: 0;
            --ux-gfnupv: "gdsherpa", Helvetica, Arial, sans-serif;
            --ux-j40yyd: 700;
            --ux-jw5s9j: 1.5;
            --ux-12zlqr9: .875rem;
            --ux-1wbe5uo: .75rem;
            --ux-1owc8nc: transparent;
            --ux-ut3xrx: #09757a;
            --ux-f7kpiw: #00a4a6;
            --ux-1gutwvn: "gdsherpa", Helvetica, Arial, sans-serif;
            --ux-g9ierp: 500;
            --ux-1dje42v: 1.5;
            --ux-shg991: "gd-sage", "Times New Roman", serif;
            --ux-c539b7: 500;
            --ux-p25s1t: 1.25;
            --ux-1klxlj4: 1rem;
            --ux-1q1acnc: .875rem;
            --ux-uoagkw: 500;
            --ux-1jw1vht: #bac0c3;
            --ux-bs151i: #d6d6d6;
            --ux-acokjr: #d8efef;
            --ux-1jc2o1e: #004249;
            --ux-vhce6u: #d6d6d6;
            --ux-195rcgy: 500;
            --ux-1g1i1da: #2b2b2b;
            --ux-1nu8itt: #fff;
            --ux-1glcx6s: #2b2b2b;
            --ux-1szqg1n: #111;
            --ux-1p4dc1z: transparent;
            --ux-14n8p36: #1976d2;
            --ux-1bul8sw: 500;
            --ux-11du3iw: 500;
            --ux-1qbop1h: 900;
            --ux-1c9yx5s: #bac0c3;
            --ux-2okpka: #bac0c3;
            --ux-1xliuhi: #00a4a6;
            --ux-1no0ng9: #fff;
            --ux-1rwkbsh: transparent;
            --ux-2rqapw: #09757a;
            --ux-117cu43: "gdsherpa", Helvetica, Arial, sans-serif;
            --ux-8n6y9x: 500;
            --ux-mgbt9j: 1.5;
            --ux-1ouw3v4: #e20087;
            --ux-y66o47: #111;
            --ux-2lqd62: .75rem;
            --ux-bt2zqe: 700;
            --ux-1qbn65p: #f4f8fc;
            --ux-1ds8u13: transparent;
            --ux-1bdtclp: transparent;
            --ux-kdwujq: #111;
            --ux-1lv81i7: 1.2rem;
            --ux-28rjk: 500;
            --ux-1x4w1cu: #f5f5f5;
            --ux-1oqmm01: 1em;
            --ux-vk6635: #d6d6d6;
            --ux-y3mv0: #d6d6d6;
            --ux-e0ldzz: #003a15;
            --ux-ceou01: #ae1302;
            --ux-io2uwb: transparent;
            --ux-1vw9arb: #d6d6d6;
            --ux-1i7a912: #d3c1f7;
            --ux-b0nj5b: transparent;
            --ux-18hc5o7: transparent;
            --ux-16apl5s: 2;
            --ux-1zta3b: #f4f8fc;
            --ux-1llin8a: 1.25em;
            --ux-7a9pn9: 700;
            --ux-1qsry5z: normal;
            --ux-1tx8bkn: #600801;
            --ux-1gpjrd8: #d6d6d6;
            --ux-1p5s1n4: #111;
            --ux-1nx9aml: #2b2b2b;
            --ux-1im0suq: #000;
            --ux-11i8wqh: #fff;
            --ux-1kpdpz9: transparent;
            --ux-1nk9qds: #767676;
            --ux-13yftfi: transparent;
            --ux-4kfa9g: transparent;
            --ux-492jj: transparent;
            --ux-ez3zlc: none;
            --ux-1ysi6jp: #111;
            --ux-ji3i29: 700;
            --ux-11ovj8p: .875rem;
            --ux-emb11o: #004249;
            --ux-9qpf6c: #00a4a6;
            --ux-h6e7c1: #fff;
            --ux-1a8ld87: #111;
            --ux-1e4z3ma: transparent;
            --ux-cup4ju: #d8efef;
            --ux-1kyybpb: #09757a;
            --ux-1ld6fs6: .875rem;
            --ux-1xzzhyl: #111;
            --ux-16dmnu8: #767676;
            --ux-1mh0ktr: #f4f8fc;
            --ux-1utwv7e: #111;
            --ux-15qjz45: transparent;
            --ux-1e85ids: #09757a;
            --ux-1m7qrkf: #f5f7f8;
            --ux-unx9i2: #00a4a6;
            --ux-c5mlr8: #111;
            --ux-t04p4h: #fff;
            --ux-1rfp50t: #ddeaf8;
            --ux-1u2jy43: #f4f8fc;
            --ux-em0gr: #9fffb8;
            --ux-1tgn1ki: #ffeea9;
            --ux-ako3l5: #111;
            --ux-7j9lri: #f5f7f8;
            --ux-1v7sr65: transparent;
            --ux-11cn5p4: #00a4a6;
            --ux-772dne: .875rem;
            --ux-1il25hb: rgba(245, 245, 245, 0.9);
            --ux-1hfks3w: 500;
            --ux-xkgc86: #2b2b2b;
            --ux-1marogz: #ae1302;
            --ux-17htz86: #fff;
            --ux-l7zq7p: #f5f7f8;
            --ux-vuekow: #111;
            --ux-1iiiqs3: #ffbbbb;
            --ux-bsmnmn: #fbd9ed;
            --ux-60ig31: transparent;
            --ux-1ymu8yg: #111111;
            --ux-mk2ln9: #d6d6d6;
            --ux-c9uvim: #00a4a6;
            --ux-187j9dd: #f4f8fc;
            --ux-1hnbfne: #00a4a6;
            --ux-1r87102: #fff;
            --ux-w7826f: #111;
            --ux-7wu8i7: #111;
            --ux-1o8cusa: #fff;
            --ux-18lg5k: #a6fff8;
            --ux-qnydfw: #111;
            --ux-e5ryhe: #111;
            --ux-1mph5ru: #111;
            --ux-l48e4z: #111;
            --ux-3i0zzw: transparent;
            --ux-10kwq3t: #09757a;
            --ux-ivu8ja: #f5f7f8;
            --ux-1j87vvn: #00a4a6;
            --ux-9i7okd: #F5F7F8;
            --ux-1xxygco: #5E5E5E;
            --ux-pdb1vi: #111;
            --ux-15ftva1: 80%;
            --ux-3rg0ia: #bac0c3;
            --ux-tnqad1: #00a4a6;
            --ux-18hlgn4: #f4f8fc;
            --ux-bg7olm: #f4f8fc;
            --ux-w3lhdp: #600801;
            --ux-1331zgr: #111;
            --ux-bgke81: #444;
            --ux-xaxxaq: #111;
            --ux-1ygutpa: #111;
            --ux-1rklle7: #2b2b2b;
            --ux-5jg1u4: normal;
            --ux-1utwyy9: #444;
            --ux-1njwmlo: #111;
            --ux-1novelo: #ae1302;
            --ux-n0tova: #db1802;
            --ux-5mgu1z: #444;
            --ux-1ixzvrg: #00a4a6;
            --ux-5n4ibx: #d4dbe0;
            --ux-1iwsz6x: #111;
            --ux-t61743: #1BDBDB;
            --ux-13vrbmz: #fff;
            --ux-1xeg43i: #111;
            --ux-asxrqp: #aab7c2;
            --ux-170hi5o: #f5f7f8;
            --ux-yp4309: #09757a;
            --ux-sji811: #00a63f;
            --ux-lt9ehq: normal;
            --ux-11sf7bz: transparent;
            --ux-1hei7eo: #db1802;
            --ux-1she0w: #111;
            --ux-8qoawt: #111;
            --ux-kkdx4n: #111;
            --ux-17fhz5j: #2b2b2b;
            --ux-1oppzsi: transparent;
            --ux-1tqourc: transparent;
            --ux-1sjqecz: #f5f5f5;
            --ux-a6rxy5: #00a4a6;
            --ux-144ksq0: #fff;
            --ux-1c5c9sy: #09757a;
            --ux-16d2ul: #db1802;
            --ux-6wr86x: #aab7c2;
            --ux-gdy377: #f4f8fc;
            --ux-k4fkva: #111;
            --ux-1ehwjjs: #00a4a6;
            --ux-1uyxcq5: #fff;
            --ux-953c7l: #111;
            --ux-1wp39lq: #00A4A6;
            --ux-1pvg8dx: #00a4a6;
            --ux-18vqnuy: #09757a;
            --ux-car98n: #db1802;
            --ux-qebq9u: #f4f8fc;
            --ux-6gm31z: #111;
            --ux-11rtwg8: #f4f8fc;
            --ux-1e4ese5: #111;
            --ux-926l8f: #600801;
            --ux-17znn9m: #fff;
            --ux-vhbo95: #111;
            --ux-lrwu2k: #fff;
            --ux-ran6wz: #444;
            --ux-1ckzto6: #fff;
            --ux-1ely98k: #111;
            --ux-1vtao7i: #111;
            --ux-18qj45h: transparent;
            --ux-1vjximi: #db1802;
            --ux-14gkznj: #744bc4;
            --ux-15isxca: #fff;
            --ux-83yt9q: #ae1302;
            --ux-tt846z: #fff;
            --ux-1q4q36s: #db1802;
            --ux-9cq6k1: #fff;
            --ux-ix2s5q: #00a4a6;
            --ux-19ykcyj: #fff;
            --ux-1iqicpb: rgba(255, 255, 255, 0.2);
            --ux-c3e9y2: #111;
            --ux-1uiriv5: transparent;
            --ux-1i83650: #111;
            --ux-44qvxk: #111;
            --ux-rm5d87: #d8efef;
            --ux-lgzajt: #00a4a6;
            --ux-vqhzzz: #fff;
            --ux-vwf4ne: #111;
            --ux-c624hh: #fff;
            --ux-1e7hthc: #09757a;
            --ux-wxwyd1: rgba(0, 0, 0, 0.85);
            --ux-i4fj7k: #fff;
            --ux-1lpd00q: #613ea3;
            --ux-n9sg1c: transparent;
            --ux-1gkt6kl: #1BDBDB;
            --ux-1ar08ze: transparent;
            --ux-h6e91r: #1BDBDB;
            --ux-1d8mwhj: #00a4a6;
            --ux-9gvyua: #111;
            --ux-1ap6ofp: #db1802;
            --ux-ny8bg2: #00a63f;
            --ux-aqzfxj: #fff;
            --ux-1g47djv: #fed317;
            --ux-15n32fv: #fff;
            --ux-1ajy4cm: #fff;
            --ux-38c183: #111;
            --ux-1l8kymk: #fff;
            --ux-1qc8i9l: #09757a;
            --ux-1a6cjk7: transparent;
            --ux-p3e15m: #db1802;
            --ux-1f7pqen: #fff;
            --ux-e1mf41: #145fa9;
            --ux-1m9ys0v: #767676;
            --ux-1ep3kxj: #003a15;
            --ux-lv1r6m: #aa6d00;
            --ux-1fhc073: #ae1302;
            --ux-1iwdp0z: #b4006c;
            --ux-md12r6: #00a4a6;
            --ux-177t0p3: #fff;
            --ux-cuskv8: #09757a;
            --ux-wi4oww: #fff;
            --ux-1j2zkam: #fff;
            --ux-zk0uja: #fff;
            --ux-tqp5z3: #fff;
            --ux-17o0ohq: #fff;
            --ux-s2edbm: #fff;
            --ux-c419qd: #fff;
        `}</style>
      <style>{`@font-face {
        font - family: gd-sage;
        src: url(//www.godaddy.com/assets/ux/fonts/gd-sage/1.0/gd-sage-bold.woff2) format("woff2"), url(//www.godaddy.com/assets/ux/fonts/gd-sage/1.0/gd-sage-bold.woff2) format("woff2");
        font-weight: 700;
        font-display: swap;
    }

        @font-face {
            font - family: gdsherpa;
            src: url(//www.godaddy.com/assets/ux/fonts/sherpa/2.0/gdsherpa-vf.woff2) format("woff2")
            ;
            font-weight: 300 700;
            font-display: swap;
        }`}</style>
      <link
        href="https://www.godaddy.com/assets/wrhs/bfe76011472f25536402e912b01d8d98/uxcore2.min.css"
        rel="stylesheet"
      />
      <link href="//www.godaddy.com/assets/ux/favicon/manifest.json" rel="manifest" />
      <link
        href="//www.godaddy.com/assets/ux/favicon/apple-icon-57x57.png"
        rel="apple-touch-icon"
        sizes="57x57"
      />
      <link
        href="//www.godaddy.com/assets/ux/favicon/apple-icon-60x60.png"
        rel="apple-touch-icon"
        sizes="60x60"
      />
      <link
        href="//www.godaddy.com/assets/ux/favicon/apple-icon-72x72.png"
        rel="apple-touch-icon"
        sizes="72x72"
      />
      <link
        href="//www.godaddy.com/assets/ux/favicon/apple-icon-76x76.png"
        rel="apple-touch-icon"
        sizes="76x76"
      />
      <link
        href="//www.godaddy.com/assets/ux/favicon/apple-icon-114x114.png"
        rel="apple-touch-icon"
        sizes="114x114"
      />
      <link
        href="//www.godaddy.com/assets/ux/favicon/apple-icon-120x120.png"
        rel="apple-touch-icon"
        sizes="120x120"
      />
      <link
        href="//www.godaddy.com/assets/ux/favicon/apple-icon-144x144.png"
        rel="apple-touch-icon"
        sizes="144x144"
      />
      <link
        href="//www.godaddy.com/assets/ux/favicon/apple-icon-152x152.png"
        rel="apple-touch-icon"
        sizes="152x152"
      />
      <link
        href="//www.godaddy.com/assets/ux/favicon/apple-icon-180x180.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="//www.godaddy.com/assets/ux/favicon/android-icon-192x192.png"
        rel="icon"
        sizes="192x192"
        type="image/png"
      />
      <link
        href="//www.godaddy.com/assets/ux/favicon/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href="//www.godaddy.com/assets/ux/favicon/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="//www.godaddy.com/assets/ux/favicon/favicon-96x96.png"
        rel="icon"
        sizes="96x96"
        type="image/png"
      />
      <link
        color="#52c4cb"
        href="//www.godaddy.com/assets/ux/favicon/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <meta content="#111111" name="msapplication-TileColor" />
      <meta
        content="//www.godaddy.com/assets/ux/favicon/ms-icon-144x144.png"
        name="msapplication-TileImage"
      />
      <meta
        content="//www.godaddy.com/assets/ux/favicon/browserconfig.xml"
        name="msapplication-config"
      />
      <meta content="#111" name="theme-color" />
      <meta charSet="utf-8" />
      <title>Domain Name Search | Check Available Domains - GoDaddy</title>
      <link href="https://www.godaddy.com/domains/domain-name-search" rel="canonical" />
      <meta
        content="GoDaddy Domain Name Search tool can instantly find the Domain Name that you&#x27;ve been looking for. Find the right domain name today."
        name="description"
      />
      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
      <meta content="https://www.godaddy.com/domains/domain-name-search" property="og:url" />
      <meta content="GoDaddy" property="og:site_name" />
      <meta
        content="GoDaddy Domain Name Search tool can instantly find the Domain Name that you&#x27;ve been looking for. Find the right domain name today."
        property="og:description"
      />
      <meta
        content="Domain Name Search | Advanced Domain Search Tool - GoDaddy"
        property="og:title"
      />
      <meta content="product" property="og:type" />
      <meta
        content="https://img1.wsimg.com/cdn/Image/All/Website/1/en-US/8c085434-532a-403e-950a-c076a1f942f9/og-domains-main-1200x630.jpg"
        property="og:image"
      />
      <meta content="summary" property="twitter:card" />
      <meta content="@GoDaddy" property="twitter:site" />
      <meta
        content="Domain Name Search | Advanced Domain Search Tool - GoDaddy"
        property="twitter:title"
      />
      <meta
        content="GoDaddy Domain Name Search tool can instantly find the Domain Name that you&#x27;ve been looking for. Find the right domain name today."
        property="twitter:description"
      />
      <meta
        content="https://img1.wsimg.com/cdn/Image/All/Website/1/en-US/8c085434-532a-403e-950a-c076a1f942f9/og-domains-main-1200x630.jpg"
        property="twitter:image"
      />
    </>
  );
}
