/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7ce0f23fddf39119fea5a8061d9ff0e6"
  },
  {
    "url": "api/cli.html",
    "revision": "8e465dab9dfe190a1965d0dd1a4a6e78"
  },
  {
    "url": "api/node.html",
    "revision": "f4413553bcd11bb93dfbdc28fd3364b8"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.88266bd5.css",
    "revision": "519760d0506b567dd0d2988cd16b16a5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.07862669.js",
    "revision": "bba0bd3b0223a4f7c9f06c0045c073c6"
  },
  {
    "url": "assets/js/100.f537a444.js",
    "revision": "13d38c5b31b0ee1c782574e411230b7d"
  },
  {
    "url": "assets/js/101.43149cf9.js",
    "revision": "6d6c07472681f017212cabd95ab2650e"
  },
  {
    "url": "assets/js/102.9c480997.js",
    "revision": "5aafdc954ca8e988230cf6e9a53bb92a"
  },
  {
    "url": "assets/js/11.de91df90.js",
    "revision": "c053583a14d20ed368be769b0fec237a"
  },
  {
    "url": "assets/js/12.b08c9939.js",
    "revision": "08bde5b426d30dee0153c25ae02c5f2e"
  },
  {
    "url": "assets/js/13.177e3576.js",
    "revision": "179610e011930b985e805e40a0d1eecc"
  },
  {
    "url": "assets/js/14.fd80fd94.js",
    "revision": "6c41681d47531c310c10ad0541ecfda1"
  },
  {
    "url": "assets/js/15.eeca185d.js",
    "revision": "6d890edd2a6e6729a74ccb7c88b0e531"
  },
  {
    "url": "assets/js/16.3f2fc92b.js",
    "revision": "6305d14f934a97ef2e7acd12a685a33e"
  },
  {
    "url": "assets/js/17.215a8bce.js",
    "revision": "d2440c2b77a838f603db974d710385bb"
  },
  {
    "url": "assets/js/18.c3cafa63.js",
    "revision": "835e8d37b08ec9f3b9e9a077322a6b0d"
  },
  {
    "url": "assets/js/19.2608ec3c.js",
    "revision": "4a21ae62ce8496867ec26c83c03e13a0"
  },
  {
    "url": "assets/js/20.da4c8a8e.js",
    "revision": "981a3f538b2d9c5c0de9bbf893e133fa"
  },
  {
    "url": "assets/js/21.593a09fc.js",
    "revision": "a57f065c5bb31e10418dd4370e4a0628"
  },
  {
    "url": "assets/js/22.3bcade94.js",
    "revision": "56a3e528e354e6b1823dadaab8388278"
  },
  {
    "url": "assets/js/23.3929872a.js",
    "revision": "9c92742f21eb00b48f5dce36343652a9"
  },
  {
    "url": "assets/js/24.825c7540.js",
    "revision": "5a5033eb169e1494db09a2619ae91ca3"
  },
  {
    "url": "assets/js/25.f2a6462b.js",
    "revision": "de5f1e38e21e1b7d429beae8de79c22b"
  },
  {
    "url": "assets/js/26.76a48159.js",
    "revision": "085aeff83d8832a1f98c9259574a4751"
  },
  {
    "url": "assets/js/27.a68356ba.js",
    "revision": "db6b34df06aa38a08c963f031b53943d"
  },
  {
    "url": "assets/js/28.bb2e31c5.js",
    "revision": "99a5396eaa388e193d4bc135aaf2eca3"
  },
  {
    "url": "assets/js/29.73ce4984.js",
    "revision": "57c1db15fbca433006b890a39befbf27"
  },
  {
    "url": "assets/js/30.ba51b423.js",
    "revision": "5298a439c138303d30a593e20a1fcf36"
  },
  {
    "url": "assets/js/31.947aa784.js",
    "revision": "68d7a8d59f51a4d20f02e4388f3f39ef"
  },
  {
    "url": "assets/js/32.1b3087b5.js",
    "revision": "26c8ec26ed5dbd8ecfcc59f168a83f9d"
  },
  {
    "url": "assets/js/33.9b8c4ff1.js",
    "revision": "e7dbdd55b96ac37559fea8e6d2b5fbdb"
  },
  {
    "url": "assets/js/34.20a992b5.js",
    "revision": "f64d581e57da60684eefc96074a51abb"
  },
  {
    "url": "assets/js/35.76f65726.js",
    "revision": "c49b774e82e27341d9bdf428b9659394"
  },
  {
    "url": "assets/js/36.076ab4f4.js",
    "revision": "3f9483de0ad112d40fb5a2b0e77b7309"
  },
  {
    "url": "assets/js/37.45063488.js",
    "revision": "79b0ee2bba791be384c8a8a3f12ead35"
  },
  {
    "url": "assets/js/38.5d18bacc.js",
    "revision": "6cce63ec0562076a3d347d9325518f1a"
  },
  {
    "url": "assets/js/39.9d61701d.js",
    "revision": "b8e9dd76745fd54638ae407bd3b77df9"
  },
  {
    "url": "assets/js/40.fcb259b3.js",
    "revision": "0ac96b3770e49adc45d69871d2e53232"
  },
  {
    "url": "assets/js/41.a6f08a2c.js",
    "revision": "a14d861da4215e2e7f6fa1a048c7d1ac"
  },
  {
    "url": "assets/js/42.3a4eacdd.js",
    "revision": "da290679058b41b32cd03a5d89213f70"
  },
  {
    "url": "assets/js/43.762bb998.js",
    "revision": "dbccae55db4a17753cf4b7678f256bda"
  },
  {
    "url": "assets/js/44.0750259d.js",
    "revision": "c12ef4db86dea7210da6f5b8761d5f39"
  },
  {
    "url": "assets/js/45.a12dd5a5.js",
    "revision": "b781cdb3a7936e554be6ff9f4bfece8c"
  },
  {
    "url": "assets/js/46.95744d6b.js",
    "revision": "4a2430c80b17edadc0c1469dca55065f"
  },
  {
    "url": "assets/js/47.8397c47c.js",
    "revision": "ed6bdaa2ff6474cd476ac473f5561baa"
  },
  {
    "url": "assets/js/48.99867d55.js",
    "revision": "24ab7c8ab98ee529a369796966585096"
  },
  {
    "url": "assets/js/49.d17f12dc.js",
    "revision": "74a6434f3b294176474183951aa827fd"
  },
  {
    "url": "assets/js/5.9daa955c.js",
    "revision": "8a6c70b6570815ae09c8ec5362493d9b"
  },
  {
    "url": "assets/js/50.46eca41f.js",
    "revision": "d3429f85d67489e106f490aa3e268dac"
  },
  {
    "url": "assets/js/51.04b0d865.js",
    "revision": "4b56efc8e30c571c754037621138cfc6"
  },
  {
    "url": "assets/js/52.a5d79996.js",
    "revision": "b1ea0d940958820c7493fdb6b5e87658"
  },
  {
    "url": "assets/js/53.8082d162.js",
    "revision": "6c853ab52dd3b3a56450466461126b6b"
  },
  {
    "url": "assets/js/54.fb230494.js",
    "revision": "0b361261a79aceab2fe7634d3960b863"
  },
  {
    "url": "assets/js/55.a1c83728.js",
    "revision": "118deab3aad1911a07ec6db3e17e5e1f"
  },
  {
    "url": "assets/js/56.8c7663b8.js",
    "revision": "6ab320ee102372a58929b3c65eb3446f"
  },
  {
    "url": "assets/js/57.ee3adb17.js",
    "revision": "77aecbdffaa2143a3c2f35fe6806653b"
  },
  {
    "url": "assets/js/58.5af879ec.js",
    "revision": "deb47e27408ab450c5e044f7224f5e15"
  },
  {
    "url": "assets/js/59.5affdebc.js",
    "revision": "ae7c6eaa78fac45a5b72e2dd1e3e99e2"
  },
  {
    "url": "assets/js/6.a87fc071.js",
    "revision": "e5afa0eca6a4ad63a5c5bca9fee5945a"
  },
  {
    "url": "assets/js/60.a837026c.js",
    "revision": "cbba22e420ffe94af2239c96fbd13d37"
  },
  {
    "url": "assets/js/61.d3a7fd28.js",
    "revision": "37e19425fa95f8d2f7681774201a4c1c"
  },
  {
    "url": "assets/js/62.171249f9.js",
    "revision": "229abee3c7891257767988c270dead82"
  },
  {
    "url": "assets/js/63.a90851d6.js",
    "revision": "fbe310cc04516fbfdbf8276b37debf45"
  },
  {
    "url": "assets/js/64.2685cf17.js",
    "revision": "d1f94d7bd2bed4806eea85c08fd86674"
  },
  {
    "url": "assets/js/65.9bb0927c.js",
    "revision": "77e10e679dc463da792cc2e3942a8f99"
  },
  {
    "url": "assets/js/66.10e3fcc9.js",
    "revision": "519ccf15aac2eba2e4382ef11de64cdd"
  },
  {
    "url": "assets/js/67.ef8f9585.js",
    "revision": "b7f9b84d37a2482f81b112163b0e69ac"
  },
  {
    "url": "assets/js/68.bd8287d6.js",
    "revision": "d2ec44d0f5f44676b0bb4c9c1fdb127a"
  },
  {
    "url": "assets/js/69.2bf6a3a2.js",
    "revision": "ddb7ef12f59adbd557ee8402257ef31c"
  },
  {
    "url": "assets/js/7.3bb8fcc4.js",
    "revision": "f5a86b38e1503b895f4fe11cbc794089"
  },
  {
    "url": "assets/js/70.3d87ace9.js",
    "revision": "1559562f248bf3fb653818a97580ac73"
  },
  {
    "url": "assets/js/71.1b98741c.js",
    "revision": "887964ed4c1c26131eaec318059b2fdb"
  },
  {
    "url": "assets/js/72.b03e7ed1.js",
    "revision": "bc1e0ac35a241fb5dfda8ff6eb195639"
  },
  {
    "url": "assets/js/73.9c2eb9ae.js",
    "revision": "0e0536e08a4216bc519aa3aca9f189c8"
  },
  {
    "url": "assets/js/74.248a83a6.js",
    "revision": "63b4ed96fbe3e018a321c6fe1bd7987d"
  },
  {
    "url": "assets/js/75.5c28d359.js",
    "revision": "56ac710712405034fca21b902310cf0e"
  },
  {
    "url": "assets/js/76.20065fd2.js",
    "revision": "d723791e068277ee23f55a5de83982a7"
  },
  {
    "url": "assets/js/77.6c6adde2.js",
    "revision": "12084c19f520789f761d94998540f743"
  },
  {
    "url": "assets/js/78.da6c951f.js",
    "revision": "be67a87f4e818028351acad9bb8230b8"
  },
  {
    "url": "assets/js/79.e15031f7.js",
    "revision": "b632d9b446f3c421deeb377897cd58f5"
  },
  {
    "url": "assets/js/8.474a5640.js",
    "revision": "61bb7567fa64a1a849e78cc5a33251a7"
  },
  {
    "url": "assets/js/80.624c5848.js",
    "revision": "8be11ef77615861264cb93e7eac2e585"
  },
  {
    "url": "assets/js/81.73f99719.js",
    "revision": "62c3972ca494d3116c3f4bdd688bc1d7"
  },
  {
    "url": "assets/js/82.a4dc9d9a.js",
    "revision": "4db6181f272f4a52ff792d173b30e3a7"
  },
  {
    "url": "assets/js/83.506ce62c.js",
    "revision": "a1f44f9e185756413f895f7d266a8fa4"
  },
  {
    "url": "assets/js/84.e339909b.js",
    "revision": "4563e9d1c45930c619c23cc7afd36e09"
  },
  {
    "url": "assets/js/85.fda18bc3.js",
    "revision": "92cb16bdc4fc3c967c8ca315b19c9390"
  },
  {
    "url": "assets/js/86.7d6f2b04.js",
    "revision": "e3e2e88074d3e4641b98eb1d3ba338e7"
  },
  {
    "url": "assets/js/87.d028fa01.js",
    "revision": "19b3315877eb7b10123a7c354949477d"
  },
  {
    "url": "assets/js/88.538b5562.js",
    "revision": "fc16f882858f21f037be75563235d1ad"
  },
  {
    "url": "assets/js/89.9cfc7422.js",
    "revision": "2c7c56db2886018c4912b7e8299de59c"
  },
  {
    "url": "assets/js/9.e7cd2234.js",
    "revision": "0808b19855cd4283e9c42de2db1fb0bf"
  },
  {
    "url": "assets/js/90.1f397db5.js",
    "revision": "00313dc9ac6d35b1535f4cdbddacab2a"
  },
  {
    "url": "assets/js/91.82720d4e.js",
    "revision": "a70a2d410e5d773cba0b0d4fa1ef4e6d"
  },
  {
    "url": "assets/js/92.c25e572e.js",
    "revision": "56c6424ed8f1e504020af25b565049b2"
  },
  {
    "url": "assets/js/93.5f38ae8f.js",
    "revision": "8f8814fca0711ff446a64abc6f5cfeb0"
  },
  {
    "url": "assets/js/94.6f0972f8.js",
    "revision": "8f28cf9d480427b276e655891249a9ed"
  },
  {
    "url": "assets/js/95.66d53ce7.js",
    "revision": "4047b612d2e3f7fce33fe64df77304a4"
  },
  {
    "url": "assets/js/96.32d61df8.js",
    "revision": "a6cc0260068e2335c4340ae447b794e3"
  },
  {
    "url": "assets/js/97.6ae00482.js",
    "revision": "21d6a0784f9c39ed0d6685190ccb1a2d"
  },
  {
    "url": "assets/js/98.001f2271.js",
    "revision": "edc0e791946ab081fb207cbbf18ddf0f"
  },
  {
    "url": "assets/js/99.8ecf6a99.js",
    "revision": "59ebd8bc95974210ba05fc45dfdc72d7"
  },
  {
    "url": "assets/js/app.2d591347.js",
    "revision": "7d13fbd2a54b2a080c1ccedb4a89d38c"
  },
  {
    "url": "assets/js/vendors~docsearch.a1660f9d.js",
    "revision": "515441a65728f59e559ce53de2f8f020"
  },
  {
    "url": "assets/js/vendors~flowchart.20f8ad3e.js",
    "revision": "65c75163541915cb44d052137c06d058"
  },
  {
    "url": "assets/js/vendors~notification.d6355ad1.js",
    "revision": "23649d3328c02d190c737a90d11ef149"
  },
  {
    "url": "config/index.html",
    "revision": "ca8884add6125fcf79bef27d7ff8ace5"
  },
  {
    "url": "faq/index.html",
    "revision": "708e8ba86478b5e3b8807601b60f9ab7"
  },
  {
    "url": "guide/assets.html",
    "revision": "a7ebe01b161851a21ad0c0e84900eab2"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "53f3d6c48f6963c23b9c535952d429e1"
  },
  {
    "url": "guide/deploy.html",
    "revision": "4b5282194d55164ebd70eb72ee3e5185"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "f09283b76c1faf73449b6c790be188a2"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "9a8c400f1143b0d8ade1f1c441221875"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c0ec058a64dd6cebb99acdb834dfeda1"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "4801e881b8ba8f0ba85eefedb4ed2a77"
  },
  {
    "url": "guide/i18n.html",
    "revision": "9540b05a95968e05ede73c5c6cd38789"
  },
  {
    "url": "guide/index.html",
    "revision": "5c60fa0fe31b3df7af317eb8b5db79f3"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "340d81bd9d80faaaefc936609428ba28"
  },
  {
    "url": "guide/markdown.html",
    "revision": "c40da724687b7072b340d36fd2f2e0e8"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "f69639e56abd8f582cb2087d314fca8e"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "97c64899d49535ab7e410b1bfab1a828"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "92a711bdc0a19afea0570558d1c569c7"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "c257b3e7a86ec3ef49987b43b7c105c4"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "005cbfba9753ce4a53333ab8857a4412"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "e4cc499031416028b7e1c1c0dc0b8e56"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "57718448dfd5975c4e0dc36173ce8877"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "9887f1d04598fb366ce7e070d3b90533"
  },
  {
    "url": "plugin/index.html",
    "revision": "fdc9b64f8be2bf1ccc572129f6f51cf9"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "14790d9206b92a3f36533ef23fca4ba4"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "6632fc8297e5fd4a4210f2b257d85576"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "db826c83e1e178cbbefeb4ba7883ac63"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "e90a1b1b30fb70aadabd7ddd70e0ec41"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "258627fe0df1c780a2867d068df2f75c"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "30d7166b6fc09f20c6c61474889a1afe"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "4ab7967b752857d66f83c5a260d7751a"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "ba9bf7d83b0800e2705545c5da08e928"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "fe09a10b876df24aa1e06df697374e41"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "5daa6306785c5cb5dfadd6a0efa69e47"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "bfcc25035adae2a0df93e2173c31303e"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "0ffe74788254b664eab099f9dd7ef704"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "a11ef0c7a0a8f147fd04b0c055bdeb17"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "f84e196302537a9b36e4cf47667a7d82"
  },
  {
    "url": "theme/index.html",
    "revision": "b492c7c97ed9bfc358f3a04ef23ca852"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "4d691b5eef2a8cdc7ed4f12cdf3b75ae"
  },
  {
    "url": "theme/option-api.html",
    "revision": "ce5af7c4dd506727063ffdce003f7c0f"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "9214bcfce07897af01dc42e584e9d24b"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "d499164355909297bc5b452bee9c81da"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "56cafc2bc6db27b2291dc95235f90c8e"
  },
  {
    "url": "zh/api/node.html",
    "revision": "82ccbf08b750a9f6ba7c2bfc23001931"
  },
  {
    "url": "zh/config/index.html",
    "revision": "acabd85fa469162cb66d7606e5b832e4"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "199b239d2a13d3a0705eab20692c584a"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "f7fc8872164bc3cbecd8955aadf8deac"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "0040f19f0f909919c67dea309e165ab9"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "8ce524dda975896889a6be3b23018d9c"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "6fe01217ec729b20cb248a347115ea56"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "f01ada1430ac324e5cc7bdcac8eefec2"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "a7c49f70ec5d9928197461f41ea9f5e2"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "f04d6950adbac271f608e95c411c2884"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "c1a3c21d52f6c24fce1d8eaf951fbe46"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "5495ef5d2890ba73580267572b0805c3"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "d9feb0c838759af6c03f6637a46803c4"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "6e325fda300ed5b4d7498a87fe208dd9"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "473cbcff77cf89de6a8d79a1d393bcfb"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "337865f7c6d16ff3b3333f5a1850bf0a"
  },
  {
    "url": "zh/index.html",
    "revision": "bcf840fbde0ae3f46c80ad7a77c7d2ac"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "8c8969fa4ff28ab8b7d6786636596231"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "d38d7a4be251c7d81593390b27471925"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "4be23d8dc42f0e780ddb26389ffc2ac0"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "fafb0ca1bcda0a4a526256b6777e3e42"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "e38ff7a4f0e5eb0ca0309538a2f6a7af"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "701d27479a63611ea6e0afcab1aef551"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "4291e32a3ab9fb414fda5ed033fd0488"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "71e86ce174bb039f61bc2ca765006ae6"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "beb1cc51c843247cb6dc8ee4490a2656"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "1c5ab798e2dce49b34010548313c77f1"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "b74644e334772bd001ea93d40dddb872"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "8fc1f9151da80745d60b772d06b12af2"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "cf42653bfc5140aebc7e762303442879"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "bf7d99fa348e6f4a863cbe32771ed630"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "08f795453528b1cabc442107f04c654d"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "b1ac243b75dcb59f2655faf0d219753f"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "7b0fd3f5f31271e4cbd0bef2e9459dbd"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "02af55028b0d4eda6a3ef1e084244790"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "2d0af5c622eda2b91ae7198146775a06"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "485934b8d7d9377c3438aff080633245"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "ebcf8e89a695276dcdf9fb48383dd730"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "5d75b2f668737a7c9c3631f6c552372a"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "a988ab53068411bca17f8e4261402d70"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "481cc0718f1780ab4f92b929d290e9a5"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "2b87de46af21991bc80e7803f6eeb62f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
