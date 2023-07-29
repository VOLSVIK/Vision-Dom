(()=>{"use strict";var n={24:(n,e,t)=>{t.d(e,{Z:()=>d});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }',""]);const d=a},426:(n,e,t)=>{t.d(e,{Z:()=>k});var i=t(81),o=t.n(i),r=t(645),a=t.n(r),d=t(667),p=t.n(d),c=new URL(t(464),t.b),s=new URL(t(686),t.b),l=new URL(t(603),t.b),h=new URL(t(693),t.b),x=new URL(t(246),t.b),f=new URL(t(587),t.b),m=a()(o()),u=p()(c),g=p()(s),w=p()(l),b=p()(h),v=p()(x),y=p()(f);m.push([n.id,`html {\n  scroll-behavior: smooth; /*плавное перемещение по внутреним ссылкам*/\n}\n\n* {\n  font-family: Arial;\n  font-size: 1rem;\n  line-height: 1.4rem;\n  letter-spacing: 0.02rem;\n  font-weight: 400;\n  text-align: justify;\n  color: #000000;\n}\n\nbody {\n  /* min-width: 1280px; */\n  margin: 0 auto;\n  background:#FFFFFF;\n}\n\nheader {\n  width: 100%;\n}\n\n.visionPhoto {\n  width: 100%;\n  min-width: 250px;\n  object-fit: contain;\n}\n\n.aboutText {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  width: 90%;\n  padding: 0px 5px 0px 0px;\n  box-shadow: 0px 0px 0px 0px #000000;\n  margin-top: 20px;\n  margin-left: 30px;\n}\n\n.aboutText p {\n  margin: 10px 10px 10px 0px;\n}\n\n.zieloneLakiHead {\n  position: relative;\n  z-index: 2;\n  width: calc(-70px + 47%);\n  min-width: 147px;\n  top: calc(4vw + -80px);\n  margin-left: calc(147px + 34%);\n  object-fit: contain;\n}\n\n.zieloneLakiHead {\n  position: relative;\n  z-index: 2;\n  width: calc(-70px + 47%);\n  min-width: 147px;\n  top: calc(4vw + -80px);\n  margin-left: calc(-27px + 60%);\n  object-fit: contain;\n}\n\n.zieloneLaki {\n  width: 100%;\n  margin-top: 70px;\n}\n\n.zieloneLakiContent {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: calc(100% - 21px) ;\n  margin: -80px 0px 0px 20px;\n}\n\n.visionLakiPhoto {\n  width: 97%;\n  /* min-width: 250px; */\n  object-fit: contain;\n}\n\n.zieloneLakiContent p {\n  width: 94%;\n  /* min-width: 250px; */\n  align-self: center;\n  /* margin: 10px 20px 10px 20px;\n  padding: 10px 0px 10px 14px; */\n  box-shadow: 0px 0px 0px 0px #000000;\n}\n\n.planDomu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  margin: 20px 0px 0px 0px;\n}\n\n.rzutMieszkanie {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n}\n\n.planMieszkanie {\n  width: 97%;\n  object-fit: contain;\n  margin: 0px auto;\n}\n\n.planMieszkanieText{\n  width: 97%;\n  max-width: 970px;\n  margin: 0px auto;\n}\n\n.planMieszkanieText p {\n  width: 97%;\n  margin: 0px;\n  /* padding: 0px 7px 0px 7px; */\n  text-align: justify;\n}\n/*======================================================*/\n\n.wystrojDomu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: 20px 0px;\n}\n\n.widokDomu {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 97vw;\n  margin: 0 auto;\n}\n\n.widDomu01 {\n  width: 100%;\n  object-fit: contain;\n  margin: 10px;\n}\n\n.widDomu02 {\n  display: none;\n  width: 40%;\n  object-fit: contain;\n  margin: 10px;\n}\n\n.widokDomuText{\n  width: 95%;\n  max-width: 970px;\n  margin: 0px auto;\n}\n\n.widokDomuText p {\n  width: 97%;\n  max-width: 870px;\n  margin: 0px auto;\n  padding: 0px 0px 40px 0px;\n  text-align: justify;\n}\n\n.widokPokoj {\n  width: 300px;\n  object-fit: contain;\n  transform: rotate(90deg);\n  margin: 0px;\n}\n\n.widokMieszkanieText {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 97vw;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.widokMieszkanieText p {\n  width: 94%;\n  min-width: 250px;\n  max-width: 500px;\n  margin: 0px;\n  padding: 40px 17px 40px 17px;\n  text-align: justify;\n}\n\n.widokMieszkanieText p:last-child {\n  box-shadow: 0px 0px 0px 0px #000000;\n}\n\n.widokMieszkanieText img:nth-child(1) {\n  order: -2;\n}\n\n.widokMieszkanieText p:nth-child(3) {\n  order: -1;\n}\n\n.сontacts {\n  display: grid;\n    grid-template:\n      "a a c c b b" 0.2fr\n      "a a c c b b" 0.6fr \n      "e e c c d d" 0.9fr \n      "e e c c d d" 0.6fr  / 1fr 1fr 1fr 1fr 1fr 1fr;\n      grid-gap: 0px;\n      width: 100%;\n      background: #01321f;\n      /* height: 74vh; */\n      /* margin: 10px;  \n      grid-area: a;*/\n  }\n  \n.logo {\n  /* width: 40%; */\n  /* object-fit: contain; */\n  margin: 0px;\n  grid-area: a;\n}\n  \n.logoPict {\n  width: 100%;\n  object-fit: cover;\n  margin: 0px;\n}\n\n.scheme {\n  /* width: 40%; */\n  /* object-fit: contain; */\n  margin: 0px;\n  grid-area: b;\n}\n  \n.schemePict {\n  width: 100%;\n  object-fit: contain;\n  margin: 0px;\n}\n\n.socialNetwork {\n  width: 100%;\n  /* object-fit: contain; */\n  margin: 0px;\n  background: #01321f;\n  grid-area: c;\n}\n\n.socialNetwork01 {\n  width: 100%;\n  /* object-fit: contain; */\n  margin: 0px;\n  background: #01321f;\n  grid-area: e;\n}\n\n.map {\n  /* width: 40%; */\n  /* object-fit: contain; */\n  margin: 0px;\n  grid-area: d;\n}\n  \n.mapPict {\n  width: 100%;\n  object-fit: contain;\n  margin: 0px;\n}\n\n/* ==============Карусель================= */\n\n.carousel {\n  display: block;\n  position: relative;\n  width: 91.4vw;\n  padding: 0px 0vw 0vw 7vw;\n  border: 1px solid #CCC;\n  border-radius: 0.5vw;\n  background: #eee;\n}\n\n.visionDom {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 40vw;\n  height: 57vw;\n  /* height: 100%; */\n  background: #FFFFFF;\n  /* width: 100%; */\n  margin: 0px;\n  border-radius: 0vw;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  /* background-image: url("./vision-dom-08.jpg"); */\n}\n\n.photo01 {\n  width: 57vw;\n  height: 57vw;\n  background-image: url(${u});\n}\n\n.photo02 {\n  background-image: url(${g});\n}\n\n.photo03 {\n  width: 57vw;\n  height: 57vw;\n  background-image: url(${w});\n}\n\n.photo04 {\n  background-image: url(${b});\n}\n\n.photo05 {\n  width: 57vw;\n  height: 57vw;\n  background-image: url(${v});\n}\n\n.photo06 {\n  background-image: url(${y});\n}\n\n.arrow {\n  position: absolute;\n  display: flex;\n  top: 12vw;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0;\n  fill: #777;\n}\n\n.arrow:focus {\n  outline: none;\n}\n\n.arrow:hover {\n  fill: #000000;\n  cursor: pointer;\n}\n\n.prev {\n  left: 3.4vw;\n}\n\n.next {\n  right: 1vw;\n}\n\n.gallery {\n  width: 91.4vw;\n  overflow: hidden;\n}\n\n.gallery ul {\n  height: 57vw;\n  width: 300vw;\n  margin: 0px;\n  padding: 0;\n  opacity: 1;\n  transition: 0s;\n  font-size: 0;\n}\n\n.gallery li {\n  position: relative;  \n  /* width: 40vw;\n  height: 57vw; */\n  display: inline-block;\n  z-index: 2;\n}\n\n.photoGallery {\n  position: relative;  \n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 97vw;\n  margin: 0.5vw;\n}\n\n.photoColum {\n  position: relative;  \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 32vw;\n  margin: 0.5vw;\n}\n\n.photoColumWidokPokoj {\n  width: 100%;\n  margin: 0.5vw;\n}\n\n.photoAWidokPokoj {\n  width: 100%;\n  margin: 0vw;\n}\n\n\n\n/*=========================500=================  ======*/\n\n@media (min-width: 500px) {\n\n  .aboutText {\n    width: 470px;\n  }\n  \n  .zieloneLaki {\n    margin-top: calc(47px + 2%);\n  }\n \n  .zieloneLakiHead {\n    position: relative;\n    z-index: 2;\n    width: calc(-70px + 47%);\n    min-width: 147px;\n    top: calc(4vw + -80px);\n    margin-left: calc(147px + 34%);\n    object-fit: contain;\n  }\n \n  .visionLakiPhoto {\n    width: 500px;\n  }\n\n  .zieloneLakiContent p {\n    width: 57%;\n    min-width: 470px;\n    align-self: flex-end;\n    margin: 10px 20px 10px 20px;\n    padding: 10px 0px 10px 14px;\n  }\n  \n  .widokPokoj {\n    width: auto;\n    margin: 20px;\n    transform: rotate(0deg);\n  }\n  \n  .widokMieszkanieText p {\n    width: 64%;\n    min-width: 400px;\n    padding: 0px 17px 0px 17px;\n  }\n  \n\n}\n\n/*=========================600=================  ======*/\n\n@media (min-width: 600px) {\n\n  .zieloneLakiContent p {\n    box-shadow: -20px -4px 2px -17px #000000;\n  }\n\n  .aboutText {\n    box-shadow: 20px -4px 2px -17px #000000;\n  }\n  \n  .rzutMieszkanie {\n    flex-wrap: nowrap;\n  }\n\n  .planMieszkanie {\n    width: 47%;\n  }\n  \n  .сontacts {\n    display: grid;\n    grid-template:\n      "a a c c d d" 0.2fr\n      "a a c c d d" 0.6fr \n      "b b c c d d" 0.9fr \n      "b b c c d d" 0.1fr  / 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-gap: 0px;\n    width: 100%;\n    background: #01321f;\n  }\n\n}\n\n\n/*=========================780=======================*/\n\n@media (min-width: 780px) {\n  \n  .aboutText {\n    width: 500px;\n    max-width: 870px;\n  }\n\n  .widDomu01 {\n    width: 54%;\n    /* object-fit: contain;\n    margin: 10px; */\n  }\n  \n  .widDomu02 {\n    display: block;\n    /* width: 40%;\n    object-fit: contain;\n    margin: 10px; */\n  }\n  \n  .widokMieszkanieText {\n    /* display: flex; */\n    flex-direction: row;\n    flex-wrap: wrap;\n    /* align-items: center;\n    justify-content: center;\n    width: 97vw;\n    max-width: 1000px;\n    margin: 0 auto; */\n  }\n\n  .widokMieszkanieText p {\n    width: 40%;\n    min-width: 340px;\n    max-width: 440px;\n  }\n  \n  .widokMieszkanieText p:last-child {\n    box-shadow: -20px -4px 2px -17px #000000;\n  }\n\n  .widokMieszkanieText img:nth-child(1) {\n    order: 0;\n  }\n\n  .widokMieszkanieText p:nth-child(3) {\n    order: 0;\n  }\n\n  .carousel {\n    display: none;\n  }\n  \n  .photoGallery {\n    display: flex;\n  }\n\n}\n\n/*=========================1000=======================*/\n@media (min-width: 1000px) {\n  \n  .aboutText {\n    width: 47%;\n    max-width: 870px;\n  }\n\n  .aboutText p {\n    min-width: 440px;\n    margin: 10px 10px 10px 114px;\n  }\n\n  .zieloneLakiHead {\n    width: calc(-240px + 57vw);\n    top: calc(-140px + 10vw);\n    margin-left: 44%;\n  }\n\n  .zieloneLakiContent {\n    flex-direction: row;\n    align-items: end;\n    justify-content: start;\n  }\n\n  .visionLakiPhoto {\n    width: 47%;\n  }\n\n  .zieloneLakiContent p {\n    width: 34%;\n    margin: 10px 0px 10px 14px;\n    padding: 0px;\n    box-shadow: 0px 0px 0px 0px #000000;\n  }\n\n  /*===========continye===================*/\n\n\n}\n\n`,""]);const k=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var d=0;d<this.length;d++){var p=this[d][0];null!=p&&(a[p]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);i&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],d=0;d<n.length;d++){var p=n[d],c=i.base?p[0]+i.base:p[0],s=r[c]||0,l="".concat(c," ").concat(s);r[c]=s+1;var h=t(l),x={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==h)e[h].references++,e[h].updater(x);else{var f=o(x,i);i.byIndex=d,e.splice(d,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var d=t(r[a]);e[d].references--}for(var p=i(n,o),c=0;c<r.length;c++){var s=t(r[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}r=p}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},464:(n,e,t)=>{n.exports=t.p+"6fe5f68c309e30e9a078.jpg"},686:(n,e,t)=>{n.exports=t.p+"54babb9edfb33b847184.jpg"},603:(n,e,t)=>{n.exports=t.p+"f31db346c43f120e3454.jpg"},693:(n,e,t)=>{n.exports=t.p+"3350539bb2057db35241.jpg"},246:(n,e,t)=>{n.exports=t.p+"2165fae4a9c7ffe5acb9.jpg"},587:(n,e,t)=>{n.exports=t.p+"fa0470ffe413ca8b237a.jpg"}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!n;)n=i[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),o=t.n(i),r=t(569),a=t.n(r),d=t(565),p=t.n(d),c=t(216),s=t.n(c),l=t(589),h=t.n(l),x=t(426),f={};f.styleTagTransform=h(),f.setAttributes=p(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),e()(x.Z,f),x.Z&&x.Z.locals&&x.Z.locals;var m=t(24),u={};u.styleTagTransform=h(),u.setAttributes=p(),u.insert=a().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=s(),e()(m.Z,u),m.Z&&m.Z.locals&&m.Z.locals;let g,w,b=carousel.querySelector("ul");carousel.querySelectorAll("li"),carousel.querySelector(".prev").onclick=function(){for(let n=0;n<2;n++)w=b.lastElementChild,g=w.cloneNode(!0),b.insertBefore(g,b.firstElementChild),b.removeChild(w),console.log(b.firstElementChild);b.style.transition="0s",b.style.transform="translateX(-97vw)",setTimeout((function(){b.style.transition="1s",b.style.transform="translateX(0vw)"}),0)}})()})();