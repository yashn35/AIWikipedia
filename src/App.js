// src/App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  
  return (
  <>
  <meta charSet="utf-8" />
  <title>Wikipedia</title>
  <meta
    name="description"
    content="Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation."
  />
  <meta name="viewport" content="initial-scale=1,user-scalable=yes" />
  <link rel="apple-touch-icon" href="/static/apple-touch/wikipedia.png" />
  <link rel="shortcut icon" href="/static/favicon/wikipedia.ico" />
  <link rel="license" href="//creativecommons.org/licenses/by-sa/4.0/" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.sprite{background-image:linear-gradient(transparent,transparent),url(portal/wikipedia.org/assets/img/sprite-de847d1a.svg);background-repeat:no-repeat;display:inline-block;vertical-align:middle}.svg-Commons-logo_sister{background-position:0 0;width:47px;height:47px}.svg-MediaWiki-logo_sister{background-position:0 -47px;width:42px;height:42px}.svg-Meta-Wiki-logo_sister{background-position:0 -89px;width:37px;height:37px}.svg-Wikibooks-logo_sister{background-position:0 -126px;width:37px;height:37px}.svg-Wikidata-logo_sister{background-position:0 -163px;width:49px;height:49px}.svg-Wikifunctions-logo_sister{background-position:0 -212px;width:50px;height:50px}.svg-Wikimedia-logo_black{background-position:0 -262px;width:42px;height:42px}.svg-Wikipedia_wordmark{background-position:0 -304px;width:176px;height:32px}.svg-Wikiquote-logo_sister{background-position:0 -336px;width:42px;height:42px}.svg-Wikisource-logo_sister{background-position:0 -378px;width:39px;height:39px}.svg-Wikispecies-logo_sister{background-position:0 -417px;width:42px;height:42px}.svg-Wikiversity-logo_sister{background-position:0 -459px;width:43px;height:37px}.svg-Wikivoyage-logo_sister{background-position:0 -496px;width:36px;height:36px}.svg-Wiktionary-logo_sister{background-position:0 -532px;width:37px;height:37px}.svg-arrow-down{background-position:0 -569px;width:12px;height:8px}.svg-arrow-down-blue{background-position:0 -577px;width:14px;height:14px}.svg-badge_google_play_store{background-position:0 -591px;width:124px;height:38px}.svg-badge_ios_app_store{background-position:0 -629px;width:110px;height:38px}.svg-language-icon{background-position:0 -667px;width:22px;height:22px}.svg-noimage{background-position:0 -689px;width:58px;height:58px}.svg-search-icon{background-position:0 -747px;width:22px;height:22px}.svg-wikipedia_app_tile{background-position:0 -769px;width:42px;height:42px}\n"
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\nhtml{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-size:62.5%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:32px;font-size:3.2rem;margin:1.2rem 0}mark{background:#fef6e7;color:#000}small{font-size:13px;font-size:1.3rem}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}svg:not(:root){overflow:hidden}figure{margin:1.6rem 4rem}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:14px;font-size:1.4rem}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input[type=search]:focus{outline-offset:-2px}fieldset{border:1px solid #a2a9b1;margin:0 .2rem;padding:.6rem 1rem 1.2rem}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.hidden,[hidden]{display:none!important}.screen-reader-text{display:block;position:absolute!important;clip:rect(1px,1px,1px,1px);width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden}body{background-color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Inter,Helvetica,Arial,sans-serif;font-size:14px;font-size:1.4rem;line-height:1.5;margin:.4rem 0 1.6rem}main{padding:0 1.28rem}a{-ms-touch-action:manipulation;touch-action:manipulation}a,a:active,a:focus{unicode-bidi:embed;outline:0;color:#36c;text-decoration:none}a:focus{outline:1px solid #36c}a:hover{text-decoration:underline}img{vertical-align:middle}hr,img{border:0}hr{clear:both;height:0;border-bottom:1px solid #c8ccd1;margin:.26rem 0}.pure-button{display:inline-block;zoom:1;line-height:normal;white-space:nowrap;text-align:center;cursor:pointer;-webkit-user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background-color:#f8f9fa;color:#202122;position:relative;min-height:19.2px;min-height:1.92rem;min-width:16px;min-width:1.6rem;margin:.16rem 0;border:1px solid #a2a9b1;-moz-border-radius:2px;border-radius:2px;padding:.8rem 1.6rem;font-family:inherit;font-size:inherit;font-weight:700;text-decoration:none;vertical-align:top;-webkit-transition:background .1s ease,color .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease;transition:background .1s ease,color .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease;-o-transition:background .1s ease,color .1s ease,border-color .1s ease,box-shadow .1s ease;-moz-transition:background .1s ease,color .1s ease,border-color .1s ease,box-shadow .1s ease,-moz-box-shadow .1s ease;transition:background .1s ease,color .1s ease,border-color .1s ease,box-shadow .1s ease;transition:background .1s ease,color .1s ease,border-color .1s ease,box-shadow .1s ease,-webkit-box-shadow .1s ease,-moz-box-shadow .1s ease}.pure-button::-moz-focus-inner{padding:0;border:0}.pure-button-hover,.pure-button:hover{background-color:#fff;border-color:#a2a9b1;color:#404244}.pure-button-active,.pure-button:active{background-color:#eaecf0;border-color:#72777d;color:#000}.pure-button:focus{outline:1px solid transparent;border-color:#36c;-webkit-box-shadow:inset 0 0 0 1px #36c;-moz-box-shadow:inset 0 0 0 1px #36c;box-shadow:inset 0 0 0 1px #36c}.pure-button-primary-progressive{background-color:#36c;border-color:#36c;color:#fff}.pure-button-primary-progressive:hover{background:#447ff5;border-color:#447ff5}.pure-button-primary-progressive:active{background-color:#2a4b8d;border-color:#2a4b8d;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;color:#fff}.pure-button-primary-progressive:focus{-webkit-box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff;-moz-box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff;box-shadow:inset 0 0 0 1px #36c,inset 0 0 0 2px #fff;border-color:#36c}.pure-form input[type=search]{background-color:#fff;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:1px solid #a2a9b1;-moz-border-radius:2px;border-radius:2px;padding:.8rem;-webkit-box-shadow:inset 0 0 0 1px #fff;-moz-box-shadow:inset 0 0 0 1px #fff;box-shadow:inset 0 0 0 1px #fff;vertical-align:middle}.pure-form input:focus:invalid{color:#d73333;border-color:#b32424}.pure-form fieldset{margin:0;padding:.56rem 0 1.2rem;border:0}@media only screen and (max-width:480px){.pure-form input[type=search]{display:block}}.central-textlogo-wrapper{display:inline-block;vertical-align:bottom}.central-textlogo{position:relative;margin:4rem auto .5rem;width:270px;font-family:Linux Libertine,Hoefler Text,Georgia,Times New Roman,Times,serif;font-size:30px;font-size:3rem;font-weight:400;line-height:33px;line-height:3.3rem;text-align:center;-moz-font-feature-settings:\"ss05=1\";-moz-font-feature-settings:\"ss05\";-webkit-font-feature-settings:\"ss05\";-ms-font-feature-settings:\"ss05\";font-feature-settings:\"ss05\"}.localized-slogan{display:block;font-family:Linux Libertine,Georgia,Times,\"Source Serif Pro\",serif;font-size:15px;font-size:1.5rem;font-weight:400}.central-textlogo__image{color:transparent;display:inline-block;overflow:hidden;text-indent:-10000px}.central-featured-logo{position:absolute;top:158px;left:35px}@media (max-width:480px){.central-textlogo{position:relative;height:70px;width:auto;margin:2rem 0 0;text-align:center;line-height:25px;line-height:2.5rem;text-indent:-10px;text-indent:-1rem;font-size:1em}.central-textlogo-wrapper{position:relative;top:12px;text-indent:2px;text-indent:.2rem}.svg-Wikipedia_wordmark{width:150px;height:25px;background-position:0 -260px;-webkit-background-size:100% 100%;-moz-background-size:100%;background-size:100%}.localized-slogan{font-size:14px;font-size:1.4rem}.central-featured-logo{position:relative;display:inline-block;width:57px;height:auto;left:0;top:0}}@media (max-width:240px){.central-textlogo__image{height:auto}}.central-featured{position:relative;height:325px;height:32.5rem;width:546px;width:54.6rem;max-width:100%;margin:0 auto;text-align:center;vertical-align:middle}.central-featured-lang{position:absolute;width:156px;width:15.6rem}.central-featured-lang .link-box{display:block;padding:0;text-decoration:none;white-space:normal}.central-featured-lang .link-box:hover strong{text-decoration:underline}.central-featured-lang :hover{background-color:#eaecf0}.central-featured-lang strong{display:block;font-size:16px;font-size:1.6rem}.central-featured-lang small{color:#54595d;display:inline-block;font-size:13px;font-size:1.3rem;line-height:1.6}.central-featured-lang em{font-style:italic}.central-featured-lang .emNonItalicLang{font-style:normal}.lang1{top:0;right:60%}.lang2{top:0;left:60%}.lang3{top:20%;right:70%}.lang4{top:20%;left:70%}.lang5{top:40%;right:72%}.lang6{top:40%;left:72%}.lang7{top:60%;right:70%}.lang8{top:60%;left:70%}.lang9{top:80%;right:60%}.lang10{top:80%;left:60%}@media (max-width:480px){.central-featured{width:auto;height:auto;margin-top:8rem;font-size:13px;font-size:1.3rem;text-align:left}.central-featured:after{content:\" \";display:block;visibility:hidden;clear:both;height:0;font-size:0}.central-featured-lang{display:block;float:left;position:relative;top:auto;left:auto;right:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:64px;height:6.4rem;width:33%;margin:0 0 16px;padding:0 1.6rem;font-size:14px;font-size:1.4rem;text-align:center}.central-featured-lang strong{font-size:14px;font-size:1.4rem;margin-bottom:4px}.central-featured-lang small{line-height:1.4}}@media (max-width:375px){.central-featured-lang{font-size:13px;font-size:1.3rem}}@media (max-width:240px){.central-featured-lang{width:100%}}.search-container{float:none;max-width:95%;width:540px;margin:.4rem auto 1.95rem;text-align:center;vertical-align:middle}.search-container fieldset{word-spacing:-4px}.search-container button{min-height:44px;min-height:4.4rem;margin:0;-moz-border-radius:0 2px 2px 0;border-radius:0 2px 2px 0;padding:.8rem 1.6rem;font-size:16px;font-size:1.6rem;z-index:2}.search-container button .svg-search-icon{text-indent:-9999px}.search-container input[type=search]::-webkit-search-results-button,.search-container input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.search-container input::-webkit-calendar-picker-indicator{display:none}.search-container .sprite.svg-arrow-down{position:absolute;top:8px;top:.8rem;right:6px;right:.6rem}#searchInput{-webkit-appearance:none;width:100%;height:44px;height:4.4rem;border-width:1px 0 1px 1px;-moz-border-radius:2px 0 0 2px;border-radius:2px 0 0 2px;padding:.8rem 9.6rem .8rem 1.2rem;font-size:16px;font-size:1.6rem;line-height:1.6;-webkit-transition:background .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease;transition:background .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease;-o-transition:background .1s ease,border-color .1s ease,box-shadow .1s ease;-moz-transition:background .1s ease,border-color .1s ease,box-shadow .1s ease,-moz-box-shadow .1s ease;transition:background .1s ease,border-color .1s ease,box-shadow .1s ease;transition:background .1s ease,border-color .1s ease,box-shadow .1s ease,-webkit-box-shadow .1s ease,-moz-box-shadow .1s ease}#searchInput:hover{border-color:#72777d}#searchInput:focus{border-color:#36c;-webkit-box-shadow:inset 0 0 0 1px #36c;-moz-box-shadow:inset 0 0 0 1px #36c;box-shadow:inset 0 0 0 1px #36c;outline:1px solid transparent}.search-container .search-input{display:inline-block;position:relative;width:73%;vertical-align:top}@media only screen and (max-width:480px){.search-container .pure-form fieldset{margin-left:1rem;margin-right:6.6rem}.search-container .search-input{width:100%;margin-right:-6.6rem}.search-container .pure-form button{float:right;right:-56px;right:-5.6rem}}.suggestions-dropdown{background-color:#fff;display:inline-block;position:absolute;left:0;z-index:2;margin:0;padding:0;border:1px solid #a2a9b1;border-top:0;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.2);-moz-box-shadow:0 2px 2px 0 rgba(0,0,0,.2);box-shadow:0 2px 2px 0 rgba(0,0,0,.2);list-style-type:none;word-spacing:normal}.suggestion-link,.suggestions-dropdown{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;text-align:left}.suggestion-link{display:block;position:relative;min-height:70px;min-height:7rem;padding:1rem 1rem 1rem 8.5rem;border-bottom:1px solid #eaecf0;color:inherit;text-decoration:none;text-align:initial;white-space:normal}.suggestion-link.active{background-color:#eaf3ff}a.suggestion-link:hover{text-decoration:none}a.suggestion-link:active,a.suggestion-link:focus{outline:0;white-space:normal}.suggestion-thumbnail{background-color:#eaecf0;background-image:url(portal/wikipedia.org/assets/img/noimage.png);background-image:-webkit-linear-gradient(transparent,transparent),url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'%3E%3Cpath fill='%23eee' d='M0 0h56v56H0z'/%3E%3Cpath fill='%23999' d='M36.4 13.5H17.8v24.9c0 1.4.9 2.3 2.3 2.3h18.7v-25c.1-1.4-1-2.2-2.4-2.2zM30.2 17h5.1v6.4h-5.1V17zm-8.8 0h6v1.8h-6V17zm0 4.6h6v1.8h-6v-1.8zm0 15.5v-1.8h13.8v1.8H21.4zm13.8-4.5H21.4v-1.8h13.8v1.8zm0-4.7H21.4v-1.8h13.8v1.8z'/%3E%3C/svg%3E\");background-image:-webkit-linear-gradient(transparent,transparent),url(portal/wikipedia.org/assets/img/noimage.svg) !ie;background-image:-webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'%3E%3Cpath fill='%23eee' d='M0 0h56v56H0z'/%3E%3Cpath fill='%23999' d='M36.4 13.5H17.8v24.9c0 1.4.9 2.3 2.3 2.3h18.7v-25c.1-1.4-1-2.2-2.4-2.2zM30.2 17h5.1v6.4h-5.1V17zm-8.8 0h6v1.8h-6V17zm0 4.6h6v1.8h-6v-1.8zm0 15.5v-1.8h13.8v1.8H21.4zm13.8-4.5H21.4v-1.8h13.8v1.8zm0-4.7H21.4v-1.8h13.8v1.8z'/%3E%3C/svg%3E\");background-image:-moz- oldlinear-gradient(transparent,transparent),url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'%3E%3Cpath fill='%23eee' d='M0 0h56v56H0z'/%3E%3Cpath fill='%23999' d='M36.4 13.5H17.8v24.9c0 1.4.9 2.3 2.3 2.3h18.7v-25c.1-1.4-1-2.2-2.4-2.2zM30.2 17h5.1v6.4h-5.1V17zm-8.8 0h6v1.8h-6V17zm0 4.6h6v1.8h-6v-1.8zm0 15.5v-1.8h13.8v1.8H21.4zm13.8-4.5H21.4v-1.8h13.8v1.8zm0-4.7H21.4v-1.8h13.8v1.8z'/%3E%3C/svg%3E\");background-image:-o-linear-gradient(transparent,transparent),url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'%3E%3Cpath fill='%23eee' d='M0 0h56v56H0z'/%3E%3Cpath fill='%23999' d='M36.4 13.5H17.8v24.9c0 1.4.9 2.3 2.3 2.3h18.7v-25c.1-1.4-1-2.2-2.4-2.2zM30.2 17h5.1v6.4h-5.1V17zm-8.8 0h6v1.8h-6V17zm0 4.6h6v1.8h-6v-1.8zm0 15.5v-1.8h13.8v1.8H21.4zm13.8-4.5H21.4v-1.8h13.8v1.8zm0-4.7H21.4v-1.8h13.8v1.8z'/%3E%3C/svg%3E\");background-image:linear-gradient(transparent,transparent),url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 56'%3E%3Cpath fill='%23eee' d='M0 0h56v56H0z'/%3E%3Cpath fill='%23999' d='M36.4 13.5H17.8v24.9c0 1.4.9 2.3 2.3 2.3h18.7v-25c.1-1.4-1-2.2-2.4-2.2zM30.2 17h5.1v6.4h-5.1V17zm-8.8 0h6v1.8h-6V17zm0 4.6h6v1.8h-6v-1.8zm0 15.5v-1.8h13.8v1.8H21.4zm13.8-4.5H21.4v-1.8h13.8v1.8zm0-4.7H21.4v-1.8h13.8v1.8z'/%3E%3C/svg%3E\");background-image:-webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent)),url(portal/wikipedia.org/assets/img/noimage.svg) !ie;background-image:-moz- oldlinear-gradient(transparent,transparent),url(portal/wikipedia.org/assets/img/noimage.svg) !ie;background-image:-o-linear-gradient(transparent,transparent),url(portal/wikipedia.org/assets/img/noimage.svg) !ie;background-image:linear-gradient(transparent,transparent),url(portal/wikipedia.org/assets/img/noimage.svg) !ie;background-image:-o-linear-gradient(transparent,transparent),url(portal/wikipedia.org/assets/img/noimage.png);background-position:50%;background-repeat:no-repeat;-webkit-background-size:100% auto;-moz-background-size:100% auto;background-size:100% auto;-webkit-background-size:cover;-moz-background-size:cover;background-size:cover;height:100%;width:70px;width:7rem;position:absolute;top:0;left:0}.suggestion-title{margin:0 0 .78rem;color:#54595d;font-size:16px;font-size:1.6rem;line-height:18.72px;line-height:1.872rem}.suggestion-link.active .suggestion-title{color:#36c}.suggestion-highlight{font-style:normal;text-decoration:underline}.suggestion-description{color:#72777d;margin:0;font-size:13px;font-size:1.3rem;line-height:14.299px;line-height:1.43rem}.styled-select{display:none;position:absolute;top:10px;top:1rem;bottom:12px;bottom:1.2rem;right:12px;right:1.2rem;max-width:95px;max-width:9.5rem;height:24px;height:2.4rem;-moz-border-radius:2px;border-radius:2px}.styled-select:hover{background-color:#f8f9fa}.styled-select .hide-arrow{right:32px;right:3.2rem;max-width:68px;max-width:6.8rem;height:24px;height:2.4rem;overflow:hidden;text-align:right}.styled-select select{background:transparent;display:inline;overflow:hidden;height:24px;height:2.4rem;min-width:110px;min-width:11rem;max-width:110px;max-width:11rem;width:110px;width:11rem;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:0;line-height:24px;line-height:2.4rem;-webkit-appearance:none;-moz-appearance:window;text-indent:.01px;-o-text-overflow:\"\";text-overflow:\"\";opacity:0;-moz-appearance:none;appearance:none;cursor:pointer}.styled-select.no-js{width:95px;width:9.5rem}.styled-select.no-js select{opacity:1;margin:0;padding:0 2.4rem 0 .8rem;color:#54595d}.styled-select.no-js .hide-arrow{width:68px;width:6.8rem}.search-container .styled-select.no-js .js-langpicker-label{display:none}.styled-select.js-enabled .hide-arrow{padding:0 2.4rem 0 .8rem}.styled-select.js-enabled select{background:transparent;position:absolute;top:0;left:0;height:100%;z-index:1;width:100%;border:0;margin:0;padding:0 2.4rem;color:transparent;color:hsla(0,0%,100%,0)}.styled-select.js-enabled select option{color:#54595d}.styled-select.js-enabled select:hover{background-color:transparent}.styled-select-active-helper{display:none}.styled-select.js-enabled select:focus+.styled-select-active-helper{display:block;position:absolute;top:0;left:0;z-index:0;width:100%;height:100%;outline:1px solid #36c}.search-container .js-langpicker-label{display:inline-block;margin:0;color:#54595d;font-size:13px;font-size:1.3rem;line-height:24px;line-height:2.4rem;text-transform:uppercase}.styled-select select:hover{background-color:#f8f9fa}.styled-select select::-ms-expand{display:none}.styled-select select:focus{outline:1px solid transparent;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}@-moz-document url-prefix(){.styled-select select{width:110%}}.other-projects{display:inline-block;width:65%}.other-project{float:left;position:relative;width:33%;height:90px;height:9rem}.other-project-link{display:inline-block;min-height:50px;width:90%;padding:1em;white-space:nowrap}.other-project-link:hover{background-color:#eaecf0}a.other-project-link{text-decoration:none}.other-project-icon{display:inline-block;width:50px;text-align:center}.svg-Wikinews-logo_sister{background-image:url(portal/wikipedia.org/assets/img/Wikinews-logo_sister.png);background-position:0 0;-webkit-background-size:47px 26px;-moz-background-size:47px 26px;background-size:47px 26px;width:47px;height:26px}@media (-o-min-device-pixel-ratio:5/4),(-webkit-min-device-pixel-ratio:1.25),(min-resolution:120dpi){.svg-Wikinews-logo_sister{background-image:url(portal/wikipedia.org/assets/img/Wikinews-logo_sister@2x.png)}}.other-project-text,.other-project .sprite-project-logos{display:inline-block}.other-project-text{max-width:65%;font-size:14px;font-size:1.4rem;vertical-align:middle;white-space:normal}.other-project-tagline,.other-project-title{display:block}.other-project-tagline{color:#54595d;font-size:13px;font-size:1.3rem}@media screen and (max-width:768px){.other-projects{width:100%}.other-project{width:33%}}@media screen and (max-width:480px){.other-project{width:50%}.other-project-tagline{-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto}}@media screen and (max-width:320px){.other-project-text{margin-right:5px;font-size:13px;font-size:1.3rem}}.lang-list-container{background-color:#f8f9fa;overflow:hidden;position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:0;width:80%;margin:-1.6rem auto 4.8rem;-webkit-transition:max-height .5s ease-out .16s,visibility .5s ease-in 1s;-o-transition:max-height .5s ease-out .16s,visibility .5s ease-in 1s;-moz-transition:max-height .5s ease-out .16s,visibility .5s ease-in 1s;transition:max-height .5s ease-out .16s,visibility .5s ease-in 1s}.js-enabled .lang-list-container{visibility:hidden}.lang-list-active .lang-list-container,.no-js .lang-list-container{visibility:visible;max-height:10000px;-webkit-transition:max-height 1s ease-in .2s,visibility 1000s ease-in 0ms;-o-transition:max-height 1s ease-in .2s,visibility 1000s ease-in 0ms;-moz-transition:max-height 1s ease-in .2s,visibility 1000s ease-in 0ms;transition:max-height 1s ease-in .2s,visibility 1000s ease-in 0ms}.no-js .lang-list-button{display:none}.lang-list-button-wrapper{text-align:center}.lang-list-button{background-color:#f8f9fa;display:inline;position:relative;z-index:1;margin:0 auto;padding:.6rem 1.2rem;outline:16px solid #fff;outline:1.6rem solid #fff;border:1px solid #a2a9b1;-moz-border-radius:2px;border-radius:2px;color:#36c;font-size:14px;font-size:1.4rem;font-weight:700;line-height:1;-webkit-transition:outline-width .1s ease-in .5s;-o-transition:outline-width .1s ease-in .5s;-moz-transition:outline-width .1s ease-in .5s;transition:outline-width .1s ease-in .5s}.lang-list-button:hover{background-color:#fff;border-color:#a2a9b1}.lang-list-button:focus{border-color:#36c;-webkit-box-shadow:inset 0 0 0 1px #36c;-moz-box-shadow:inset 0 0 0 1px #36c;box-shadow:inset 0 0 0 1px #36c}.lang-list-active .lang-list-button{background-color:#fff;outline:1px solid #fff;border-color:#72777d;-webkit-transition-delay:0s;-moz-transition-delay:0s;-o-transition-delay:0s;transition-delay:0s}.lang-list-button-text{padding:0 .64rem;vertical-align:middle}.lang-list-button i{display:inline-block;vertical-align:middle}.no-js .lang-list-border,.no-js .lang-list-button{display:none}.lang-list-border{background-color:#c8ccd1;display:block;position:relative;max-width:460px;width:80%;margin:-1.6rem auto 1.6rem;height:1px;-webkit-transition:max-width .2s ease-out .4s;-o-transition:max-width .2s ease-out .4s;-moz-transition:max-width .2s ease-out .4s;transition:max-width .2s ease-out .4s}.lang-list-active .lang-list-border{max-width:85%;-webkit-transition-delay:0s;-moz-transition-delay:0s;-o-transition-delay:0s;transition-delay:0s}.no-js .lang-list-content{padding:0}.lang-list-content{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;padding:1.6rem 1.6rem 0}.svg-arrow-down-blue{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;-o-transition:transform .2s ease-out;-moz-transition:transform .2s ease-out,-moz-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out,-moz-transform .2s ease-out}.lang-list-active .svg-arrow-down-blue{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.langlist{width:auto;margin:1.6rem 0;text-align:left}.langlist-others{font-weight:700;text-align:center}.hlist ul{margin:0;padding:0}.hlist li,.hlist ul ul{display:inline}.hlist li:before{content:\" · \";font-weight:700}.hlist li:first-child:before{content:none}.hlist li>ul:before{content:\"\\00a0(\"}.hlist li>ul:after{content:\") \"}.langlist>ul{-webkit-column-width:11.2rem;-moz-column-width:11.2rem;column-width:11.2rem}.langlist>ul>li{display:block;line-height:1.7;-webkit-column-break-inside:avoid;page-break-inside:avoid;break-inside:avoid}.no-js .langlist>ul{text-align:center;list-style-type:circle}.no-js .langlist>ul>li{display:inline-block;padding:0 .8rem}.langlist>ul>li:before{content:none}.langlist>ul>li a{white-space:normal}@media (max-width:480px){.langlist{font-size:inherit}.langlist a{word-wrap:break-word;white-space:normal}.lang-list-container{width:auto;margin-left:.8rem;margin-right:.8rem}.bookshelf{overflow:visible}}.bookshelf{display:block;border-top:1px solid #c8ccd1;-webkit-box-shadow:0 -1px 0 #fff;-moz-box-shadow:0 -1px 0 #fff;box-shadow:0 -1px 0 #fff;text-align:center;white-space:nowrap}.bookshelf .text{background-color:#f8f9fa;position:relative;top:-11.2px;top:-1.12rem;font-weight:400;padding:0 .8rem}.bookshelf-container{display:block;overflow:visible;width:100%;height:1px;margin:2.4rem 0 1.6rem;font-size:13px;font-size:1.3rem;font-weight:700;line-height:1.5}@media (max-width:480px){.bookshelf{width:auto;left:auto}.bookshelf-container{text-align:left;width:auto}}.app-badges .footer-sidebar-content{background-color:#f8f9fa}.app-badges .footer-sidebar-text{padding-top:.8rem;padding-bottom:.8rem}.app-badges .sprite.footer-sidebar-icon{top:8px;top:.8rem}.app-badges ul{margin:0;padding:0;list-style-type:none}.app-badge{display:inline-block}.app-badge a{color:transparent}@media screen and (max-width:768px){.app-badges .footer-sidebar-content{text-align:center}.app-badges .sprite.footer-sidebar-icon{display:inline-block;position:relative;margin:0;top:-3px;left:0;vertical-align:middle;-webkit-transform:scale(.7);-moz-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7)}}.footer{overflow:hidden;max-width:100%;margin:0 auto;padding:4.16rem 1.28rem 0;font-size:13px;font-size:1.3rem}.footer:after,.footer:before{content:\" \";display:table}.footer:after{clear:both}.footer-sidebar{width:35%;float:left;clear:left;margin-bottom:3.2rem;vertical-align:top}.footer-sidebar-content{position:relative;max-width:350px;margin:0 auto}.sprite.footer-sidebar-icon{position:absolute;top:0;left:8px;left:.8rem}.footer-sidebar-text{position:relative;margin:0;padding-left:6rem;padding-right:2rem;color:#54595d}.site-license{color:#54595d;text-align:center}.site-license small:after{content:\"\\2022\";display:inline-block;font-size:13px;font-size:1.3rem;line-height:inherit;margin-left:.8rem;margin-right:.5rem}.site-license small:last-child:after{display:none}.footer hr{margin-top:1.28rem}@media screen and (max-width:768px){.footer{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-top:1.28rem}.footer .footer-sidebar{-webkit-box-ordinal-group:1;-moz-box-ordinal-group:1;-webkit-order:1;-ms-flex-order:1;order:1}.footer .other-projects{-webkit-box-ordinal-group:2;-moz-box-ordinal-group:2;-webkit-order:2;-ms-flex-order:2;order:2}.footer .app-badges{-webkit-box-ordinal-group:3;-moz-box-ordinal-group:3;-webkit-order:3;-ms-flex-order:3;order:3}.footer hr{-webkit-box-ordinal-group:4;-moz-box-ordinal-group:4;-webkit-order:4;-ms-flex-order:4;order:4}.footer .site-license{-webkit-box-ordinal-group:5;-moz-box-ordinal-group:5;-webkit-order:5;-ms-flex-order:5;order:5}.footer-sidebar{width:100%}.sprite.footer-sidebar-icon{display:block;position:relative;left:0;margin:0 auto 1.28rem}.footer-sidebar-content{max-width:none}.footer-sidebar-text{margin:0;padding:0;text-align:center}}@media screen and (max-width:480px){.footer{padding:.96rem .64rem 1.28rem}}@media (max-width:480px){.search-container{margin-top:0;height:78px;height:7.8rem;position:absolute;top:96px;top:9.6rem;left:0;right:0;max-width:100%;width:auto;padding:0;text-align:left}.search-container label{display:none}.search-form #searchInput{max-width:40%;vertical-align:middle}.search-form .formBtn{max-width:25%;vertical-align:middle}form fieldset{margin:0;border-left:0;border-right:0}hr{margin-top:.65rem}}@media (-o-min-device-pixel-ratio:2/1),(-webkit-min-device-pixel-ratio:2),(min--moz-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){hr{border-bottom-width:.5px}}@supports (-webkit-marquee-style:slide){hr{border-bottom-width:1px}}.js-enabled .central-featured,.js-enabled .jsl10n{opacity:0}.jsl10n-visible .central-featured,.jsl10n-visible .jsl10n{opacity:1}@media print{body{background-color:transparent}a{color:#000!important;background:none!important;padding:0!important}a:link,a:visited{color:#520;background:transparent}img{border:0}}\n"
    }}
  />
  <link rel="preconnect" href="//upload.wikimedia.org" />
  <link rel="me" href="https://wikis.world/@wikipedia" />
  <meta property="og:url" content="" />
  <meta property="og:title" content="Wikipedia, the free encyclopedia" />
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation."
  />
  <meta
    property="og:image"
    content="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/2244px-Wikipedia-logo-v2.svg.png"
  />
  <main>
    <div className="central-textlogo">
      <img
        className="central-featured-logo"
        src="portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"
        srcSet="portal/wikipedia.org/assets/img/Wikipedia-logo-v2@1.5x.png 1.5x, portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png 2x"
        width={200}
        height={183}
        alt=""
      />
      <h1 className="central-textlogo-wrapper">
        <span className="central-textlogo__image sprite svg-Wikipedia_wordmark">
          Wikipedia
        </span>
        <strong className="jsl10n localized-slogan" data-jsl10n="portal.slogan">
          The Free Encyclopedia
        </strong>
      </h1>
    </div>
    <nav
      data-jsl10n="top-ten-nav-label"
      aria-label="Top languages"
      className="central-featured"
      data-el-section="primary links"
    >
      {/* #1. en.wikipedia.org - 1,671,673,000 views/day */}
      <div className="central-featured-lang lang1" lang="en" dir="ltr">
        <a
          id="js-link-box-en"
          href="//en.wikipedia.org/"
          title="English — Wikipedia — The Free Encyclopedia"
          className="link-box"
          data-slogan="The Free Encyclopedia"
        >
          <strong>English</strong>
          <small>
            6,841,000+ <span>articles</span>
          </small>
        </a>
      </div>
      {/* #2. ja.wikipedia.org - 199,657,000 views/day */}
      <div className="central-featured-lang lang2" lang="ja" dir="ltr">
        <a
          id="js-link-box-ja"
          href="//ja.wikipedia.org/"
          title="Nihongo — ウィキペディア — フリー百科事典"
          className="link-box"
          data-slogan="フリー百科事典"
        >
          <strong>日本語</strong>
          <small>
            1,420,000+ <span>記事</span>
          </small>
        </a>
      </div>
      {/* #3. de.wikipedia.org - 179,780,000 views/day */}
      <div className="central-featured-lang lang3" lang="de" dir="ltr">
        <a
          id="js-link-box-de"
          href="//de.wikipedia.org/"
          title="Deutsch — Wikipedia — Die freie Enzyklopädie"
          className="link-box"
          data-slogan="Die freie Enzyklopädie"
        >
          <strong>Deutsch</strong>
          <small>
            2.921.000+ <span>Artikel</span>
          </small>
        </a>
      </div>
      {/* #4. ru.wikipedia.org - 175,039,000 views/day */}
      <div className="central-featured-lang lang4" lang="ru" dir="ltr">
        <a
          id="js-link-box-ru"
          href="//ru.wikipedia.org/"
          title="Russkiy — Википедия — Свободная энциклопедия"
          className="link-box"
          data-slogan="Свободная энциклопедия"
        >
          <strong>Русский</strong>
          <small>
            1&nbsp;986&nbsp;000+ <span>статей</span>
          </small>
        </a>
      </div>
      {/* #5. es.wikipedia.org - 171,147,000 views/day */}
      <div className="central-featured-lang lang5" lang="es" dir="ltr">
        <a
          id="js-link-box-es"
          href="//es.wikipedia.org/"
          title="Español — Wikipedia — La enciclopedia libre"
          className="link-box"
          data-slogan="La enciclopedia libre"
        >
          <strong>Español</strong>
          <small>
            1.962.000+ <span>artículos</span>
          </small>
        </a>
      </div>
      {/* #6. fr.wikipedia.org - 143,388,000 views/day */}
      <div className="central-featured-lang lang6" lang="fr" dir="ltr">
        <a
          id="js-link-box-fr"
          href="//fr.wikipedia.org/"
          title="français — Wikipédia — L’encyclopédie libre"
          className="link-box"
          data-slogan="L’encyclopédie libre"
        >
          <strong>Français</strong>
          <small>
            2 619 000+ <span>articles</span>
          </small>
        </a>
      </div>
      {/* #7. zh.wikipedia.org - 105,698,000 views/day */}
      <div className="central-featured-lang lang7" lang="zh" dir="ltr">
        <a
          id="js-link-box-zh"
          href="//zh.wikipedia.org/"
          title="Zhōngwén — 维基百科 / 維基百科 — 自由的百科全书 / 自由的百科全書"
          className="link-box localize-variant"
          data-slogan="自由的百科全书 / 自由的百科全書"
        >
          <strong>中文</strong>
          <small>
            1,427,000+ <span>条目 / 條目</span>
          </small>
        </a>
      </div>
      {/* #8. it.wikipedia.org - 98,220,000 views/day */}
      <div className="central-featured-lang lang8" lang="it" dir="ltr">
        <a
          id="js-link-box-it"
          href="//it.wikipedia.org/"
          title="Italiano — Wikipedia — L'enciclopedia libera"
          className="link-box"
          data-slogan="L'enciclopedia libera"
        >
          <strong>Italiano</strong>
          <small>
            1.869.000+ <span>voci</span>
          </small>
        </a>
      </div>
      {/* #9. pt.wikipedia.org - 50,819,000 views/day */}
      <div className="central-featured-lang lang9" lang="pt" dir="ltr">
        <a
          id="js-link-box-pt"
          href="//pt.wikipedia.org/"
          title="Português — Wikipédia — A enciclopédia livre"
          className="link-box"
          data-slogan="A enciclopédia livre"
        >
          <strong>Português</strong>
          <small>
            1.127.000+ <span>artigos</span>
          </small>
        </a>
      </div>
      {/* #10. fa.wikipedia.org - 49,848,000 views/day */}
      <div className="central-featured-lang lang10" lang="fa" dir="rtl">
        <a
          id="js-link-box-fa"
          href="//fa.wikipedia.org/"
          title="Fārsi — ویکی‌پدیا — دانشنامهٔ آزاد"
          className="link-box"
          data-slogan="دانشنامهٔ آزاد"
        >
          <strong>
            <bdi dir="rtl">فارسی</bdi>
          </strong>
          <small>
            ۱٬۰۰۵٬۰۰۰+ <span>مقاله</span>
          </small>
        </a>
      </div>
    </nav>
    <div role="search" className="search-container">
      <form
        className="pure-form"
        id="search-form"
        action="//www.wikipedia.org/search-redirect.php"
        data-el-section="search"
      >
        <fieldset>
          <input type="hidden" name="family" defaultValue="Wikipedia" />
          <input
            type="hidden"
            id="hiddenLanguageInput"
            name="language"
            defaultValue="en"
          />
          <div className="search-input" id="search-input">
            <label
              htmlFor="searchInput"
              className="screen-reader-text"
              data-jsl10n="portal.search-input-label"
            >
              Search Wikipedia
            </label>
            <input
              id="searchInput"
              name="search"
              type="search"
              size={20}
              autofocus="autofocus"
              accessKey="F"
              dir="auto"
              autoComplete="off"
            />
            <div className="styled-select no-js">
              <div className="hide-arrow">
                <select id="searchLanguage" name="language">
                  <option value="sh" lang="sh">
                    Srpskohrvatski / Српскохрватски
                  </option>
                  <option value="af" lang="af">
                    Afrikaans
                  </option>
                  {/* Afrikaans */}
                  <option value="pl" lang="pl">
                    Polski
                  </option>
                  <option value="ar" lang="ar">
                    العربية
                  </option>
                  {/* Al-ʿArabīyah */}
                  <option value="ast" lang="ast">
                    Asturianu
                  </option>
                  <option value="az" lang="az">
                    Azərbaycanca
                  </option>
                  <option value="bg" lang="bg">
                    Български
                  </option>
                  {/* Bǎlgarski */}
                  <option value="nan" lang="nan">
                    閩南語 / Bân-lâm-gú
                  </option>
                  {/* Bân-lâm-gú */}
                  <option value="bn" lang="bn">
                    বাংলা
                  </option>
                  {/* Bangla */}
                  <option value="be" lang="be">
                    Беларуская
                  </option>
                  {/* Belaruskaya */}
                  <option value="ca" lang="ca">
                    Català
                  </option>
                  <option value="cs" lang="cs">
                    Čeština
                  </option>
                  {/* čeština */}
                  <option value="cy" lang="cy">
                    Cymraeg
                  </option>
                  {/* Cymraeg */}
                  <option value="da" lang="da">
                    Dansk
                  </option>
                  <option value="de" lang="de">
                    Deutsch
                  </option>
                  <option value="et" lang="et">
                    Eesti
                  </option>
                  <option value="el" lang="el">
                    Ελληνικά
                  </option>
                  {/* Ellīniká */}
                  <option value="en" lang="en" selected="selected">
                    English
                  </option>
                  {/* English */}
                  <option value="es" lang="es">
                    Español
                  </option>
                  <option value="eo" lang="eo">
                    Esperanto
                  </option>
                  <option value="eu" lang="eu">
                    Euskara
                  </option>
                  <option value="fa" lang="fa">
                    فارسی
                  </option>
                  {/* Fārsi */}
                  <option value="fr" lang="fr">
                    Français
                  </option>
                  {/* français */}
                  <option value="gl" lang="gl">
                    Galego
                  </option>
                  <option value="ko" lang="ko">
                    한국어
                  </option>
                  {/* Hangugeo */}
                  <option value="hy" lang="hy">
                    Հայերեն
                  </option>
                  {/* Hayeren */}
                  <option value="hi" lang="hi">
                    हिन्दी
                  </option>
                  {/* Hindī */}
                  <option value="hr" lang="hr">
                    Hrvatski
                  </option>
                  <option value="id" lang="id">
                    Bahasa Indonesia
                  </option>
                  <option value="it" lang="it">
                    Italiano
                  </option>
                  <option value="he" lang="he">
                    עברית
                  </option>
                  {/* Ivrit */}
                  <option value="ka" lang="ka">
                    ქართული
                  </option>
                  {/* Kartuli */}
                  <option value="lld" lang="lld">
                    Ladin
                  </option>
                  <option value="la" lang="la">
                    Latina
                  </option>
                  <option value="lv" lang="lv">
                    Latviešu
                  </option>
                  <option value="lt" lang="lt">
                    Lietuvių
                  </option>
                  <option value="hu" lang="hu">
                    Magyar
                  </option>
                  <option value="mk" lang="mk">
                    Македонски
                  </option>
                  {/* Makedonski */}
                  <option value="arz" lang="arz">
                    مصرى
                  </option>
                  {/* Maṣrī */}
                  <option value="ms" lang="ms">
                    Bahasa Melayu
                  </option>
                  <option value="min" lang="min">
                    Bahaso Minangkabau
                  </option>
                  <option value="my" lang="my">
                    မြန်မာဘာသာ
                  </option>
                  {/* Myanmarsar */}
                  <option value="nl" lang="nl">
                    Nederlands
                  </option>
                  <option value="ja" lang="ja">
                    日本語
                  </option>
                  {/* Nihongo */}
                  <option value="no" lang="nb">
                    Norsk (bokmål)
                  </option>
                  <option value="nn" lang="nn">
                    Norsk (nynorsk)
                  </option>
                  <option value="ce" lang="ce">
                    Нохчийн
                  </option>
                  {/* Noxçiyn */}
                  <option value="uz" lang="uz">
                    Oʻzbekcha / Ўзбекча
                  </option>
                  {/* Oʻzbekcha */}
                  <option value="pt" lang="pt">
                    Português
                  </option>
                  <option value="kk" lang="kk">
                    Қазақша / Qazaqşa / قازاقشا
                  </option>
                  <option value="ro" lang="ro">
                    Română
                  </option>
                  {/* Română */}
                  <option value="ru" lang="ru">
                    Русский
                  </option>
                  {/* Russkiy */}
                  <option value="simple" lang="en">
                    Simple English
                  </option>
                  <option value="ceb" lang="ceb">
                    Sinugboanong Binisaya
                  </option>
                  <option value="sk" lang="sk">
                    Slovenčina
                  </option>
                  <option value="sl" lang="sl">
                    Slovenščina
                  </option>
                  {/* slovenščina */}
                  <option value="sr" lang="sr">
                    Српски / Srpski
                  </option>
                  <option value="fi" lang="fi">
                    Suomi
                  </option>
                  {/* suomi */}
                  <option value="sv" lang="sv">
                    Svenska
                  </option>
                  <option value="ta" lang="ta">
                    தமிழ்
                  </option>
                  {/* Tamiḻ */}
                  <option value="tt" lang="tt">
                    Татарча / Tatarça
                  </option>
                  <option value="th" lang="th">
                    ภาษาไทย
                  </option>
                  {/* Phasa Thai */}
                  <option value="tg" lang="tg">
                    Тоҷикӣ
                  </option>
                  {/* Tojikī */}
                  <option value="azb" lang="azb">
                    تۆرکجه
                  </option>
                  {/* Türkce */}
                  <option value="tr" lang="tr">
                    Türkçe
                  </option>
                  {/* Türkçe */}
                  <option value="uk" lang="uk">
                    Українська
                  </option>
                  {/* Ukrayins’ka */}
                  <option value="ur" lang="ur">
                    اردو
                  </option>
                  {/* Urdu */}
                  <option value="vi" lang="vi">
                    Tiếng Việt
                  </option>
                  <option value="war" lang="war">
                    Winaray
                  </option>
                  <option value="zh" lang="zh">
                    中文
                  </option>
                  {/* Zhōngwén */}
                  <option value="yue" lang="yue">
                    粵語
                  </option>
                </select>
                <div className="styled-select-active-helper" />
              </div>
              <i className="sprite svg-arrow-down" />
            </div>
          </div>
          <button
            className="pure-button pure-button-primary-progressive"
            type="submit"
          >
            <i
              className="sprite svg-search-icon"
              data-jsl10n="search-input-button"
            >
              Search
            </i>
          </button>
          <input type="hidden" defaultValue="Go" name="go" />
        </fieldset>
      </form>
    </div>
    <nav data-jsl10n="all-languages-nav-label" aria-label="All languages">
      <div className="lang-list-button-wrapper">
        <button
          id="js-lang-list-button"
          aria-expanded="false"
          aria-controls="js-lang-lists"
          className="lang-list-button"
        >
          <i className="sprite svg-language-icon" />
          <span
            className="lang-list-button-text jsl10n"
            data-jsl10n="portal.language-button-text"
          >
            Read Wikipedia in your language{" "}
          </span>
          <i className="sprite svg-arrow-down-blue" />
        </button>
      </div>
      <div className="lang-list-border" />
      <div className="lang-list-container">
        <div id="js-lang-lists" className="lang-list-content">
          <h2 className="bookshelf-container">
            <span className="bookshelf">
              <span className="text">
                <bdi dir="ltr">1,000,000+</bdi>
                <span className="jsl10n" data-jsl10n="entries">
                  articles
                </span>
              </span>
            </span>
          </h2>
          <div
            className="langlist langlist-large hlist"
            data-el-section="secondary links"
          >
            <ul>
              <li>
                <a href="//pl.wikipedia.org/" lang="pl">
                  Polski
                </a>
              </li>
              <li>
                <a href="//ar.wikipedia.org/" lang="ar" title="Al-ʿArabīyah">
                  <bdi dir="rtl">العربية</bdi>
                </a>
              </li>
              <li>
                <a href="//de.wikipedia.org/" lang="de">
                  Deutsch
                </a>
              </li>
              <li>
                <a href="//en.wikipedia.org/" lang="en" title="English">
                  English
                </a>
              </li>
              <li>
                <a href="//es.wikipedia.org/" lang="es">
                  Español
                </a>
              </li>
              <li>
                <a href="//fa.wikipedia.org/" lang="fa" title="Fārsi">
                  <bdi dir="rtl">فارسی</bdi>
                </a>
              </li>
              <li>
                <a href="//fr.wikipedia.org/" lang="fr" title="français">
                  Français
                </a>
              </li>
              <li>
                <a href="//it.wikipedia.org/" lang="it">
                  Italiano
                </a>
              </li>
              <li>
                <a href="//arz.wikipedia.org/" lang="arz" title="Maṣrī">
                  <bdi dir="rtl">مصرى</bdi>
                </a>
              </li>
              <li>
                <a href="//nl.wikipedia.org/" lang="nl">
                  Nederlands
                </a>
              </li>
              <li>
                <a href="//ja.wikipedia.org/" lang="ja" title="Nihongo">
                  日本語
                </a>
              </li>
              <li>
                <a href="//pt.wikipedia.org/" lang="pt">
                  Português
                </a>
              </li>
              <li>
                <a href="//ru.wikipedia.org/" lang="ru" title="Russkiy">
                  Русский
                </a>
              </li>
              <li>
                <a href="//ceb.wikipedia.org/" lang="ceb">
                  Sinugboanong Binisaya
                </a>
              </li>
              <li>
                <a href="//sv.wikipedia.org/" lang="sv">
                  Svenska
                </a>
              </li>
              <li>
                <a href="//uk.wikipedia.org/" lang="uk" title="Ukrayins’ka">
                  Українська
                </a>
              </li>
              <li>
                <a href="//vi.wikipedia.org/" lang="vi">
                  Tiếng Việt
                </a>
              </li>
              <li>
                <a href="//war.wikipedia.org/" lang="war">
                  Winaray
                </a>
              </li>
              <li>
                <a href="//zh.wikipedia.org/" lang="zh" title="Zhōngwén">
                  中文
                </a>
              </li>
            </ul>
          </div>
          <h2 className="bookshelf-container">
            <span className="bookshelf">
              <span className="text">
                <bdi dir="ltr">100,000+</bdi>
                <span className="jsl10n" data-jsl10n="portal.entries">
                  articles
                </span>
              </span>
            </span>
          </h2>
          <div
            className="langlist langlist-large hlist"
            data-el-section="secondary links"
          >
            <ul>
              <li>
                <a href="//sh.wikipedia.org/" lang="sh">
                  Srpskohrvatski / Српскохрватски
                </a>
              </li>
              <li>
                <a href="//af.wikipedia.org/" lang="af" title="Afrikaans">
                  Afrikaans
                </a>
              </li>
              <li>
                <a href="//ast.wikipedia.org/" lang="ast">
                  Asturianu
                </a>
              </li>
              <li>
                <a href="//az.wikipedia.org/" lang="az">
                  Azərbaycanca
                </a>
              </li>
              <li>
                <a href="//bg.wikipedia.org/" lang="bg" title="Bǎlgarski">
                  Български
                </a>
              </li>
              <li>
                <a
                  href="//zh-min-nan.wikipedia.org/"
                  lang="nan"
                  title="Bân-lâm-gú"
                >
                  閩南語 / Bân-lâm-gú
                </a>
              </li>
              <li>
                <a href="//bn.wikipedia.org/" lang="bn" title="Bangla">
                  বাংলা
                </a>
              </li>
              <li>
                <a href="//be.wikipedia.org/" lang="be" title="Belaruskaya">
                  Беларуская
                </a>
              </li>
              <li>
                <a href="//ca.wikipedia.org/" lang="ca">
                  Català
                </a>
              </li>
              <li>
                <a href="//cs.wikipedia.org/" lang="cs" title="čeština">
                  Čeština
                </a>
              </li>
              <li>
                <a href="//cy.wikipedia.org/" lang="cy" title="Cymraeg">
                  Cymraeg
                </a>
              </li>
              <li>
                <a href="//da.wikipedia.org/" lang="da">
                  Dansk
                </a>
              </li>
              <li>
                <a href="//et.wikipedia.org/" lang="et">
                  Eesti
                </a>
              </li>
              <li>
                <a href="//el.wikipedia.org/" lang="el" title="Ellīniká">
                  Ελληνικά
                </a>
              </li>
              <li>
                <a href="//eo.wikipedia.org/" lang="eo">
                  Esperanto
                </a>
              </li>
              <li>
                <a href="//eu.wikipedia.org/" lang="eu">
                  Euskara
                </a>
              </li>
              <li>
                <a href="//gl.wikipedia.org/" lang="gl">
                  Galego
                </a>
              </li>
              <li>
                <a href="//ko.wikipedia.org/" lang="ko" title="Hangugeo">
                  한국어
                </a>
              </li>
              <li>
                <a href="//hy.wikipedia.org/" lang="hy" title="Hayeren">
                  Հայերեն
                </a>
              </li>
              <li>
                <a href="//hi.wikipedia.org/" lang="hi" title="Hindī">
                  हिन्दी
                </a>
              </li>
              <li>
                <a href="//hr.wikipedia.org/" lang="hr">
                  Hrvatski
                </a>
              </li>
              <li>
                <a href="//id.wikipedia.org/" lang="id">
                  Bahasa Indonesia
                </a>
              </li>
              <li>
                <a href="//he.wikipedia.org/" lang="he" title="Ivrit">
                  <bdi dir="rtl">עברית</bdi>
                </a>
              </li>
              <li>
                <a href="//ka.wikipedia.org/" lang="ka" title="Kartuli">
                  ქართული
                </a>
              </li>
              <li>
                <a href="//lld.wikipedia.org/" lang="lld">
                  Ladin
                </a>
              </li>
              <li>
                <a href="//la.wikipedia.org/" lang="la">
                  Latina
                </a>
              </li>
              <li>
                <a href="//lv.wikipedia.org/" lang="lv">
                  Latviešu
                </a>
              </li>
              <li>
                <a href="//lt.wikipedia.org/" lang="lt">
                  Lietuvių
                </a>
              </li>
              <li>
                <a href="//hu.wikipedia.org/" lang="hu">
                  Magyar
                </a>
              </li>
              <li>
                <a href="//mk.wikipedia.org/" lang="mk" title="Makedonski">
                  Македонски
                </a>
              </li>
              <li>
                <a href="//ms.wikipedia.org/" lang="ms">
                  Bahasa Melayu
                </a>
              </li>
              <li>
                <a href="//min.wikipedia.org/" lang="min">
                  Bahaso Minangkabau
                </a>
              </li>
              <li>
                <a href="//my.wikipedia.org/" lang="my" title="Myanmarsar">
                  မြန်မာဘာသာ
                </a>
              </li>
              <li lang="no">
                Norsk
                <ul>
                  <li>
                    <a href="//no.wikipedia.org/" lang="nb">
                      bokmål
                    </a>
                  </li>
                  <li>
                    <a href="//nn.wikipedia.org/" lang="nn">
                      nynorsk
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="//ce.wikipedia.org/" lang="ce" title="Noxçiyn">
                  Нохчийн
                </a>
              </li>
              <li>
                <a href="//uz.wikipedia.org/" lang="uz" title="Oʻzbekcha">
                  Oʻzbekcha / Ўзбекча
                </a>
              </li>
              <li>
                <a href="//kk.wikipedia.org/" lang="kk">
                  <span lang="kk-Cyrl">Қазақша</span> /{" "}
                  <span lang="kk-Latn">Qazaqşa</span> /{" "}
                  <bdi lang="kk-Arab" dir="rtl">
                    قازاقشا
                  </bdi>
                </a>
              </li>
              <li>
                <a href="//ro.wikipedia.org/" lang="ro" title="Română">
                  Română
                </a>
              </li>
              <li>
                <a href="//simple.wikipedia.org/" lang="en">
                  Simple English
                </a>
              </li>
              <li>
                <a href="//sk.wikipedia.org/" lang="sk">
                  Slovenčina
                </a>
              </li>
              <li>
                <a href="//sl.wikipedia.org/" lang="sl" title="slovenščina">
                  Slovenščina
                </a>
              </li>
              <li>
                <a href="//sr.wikipedia.org/" lang="sr">
                  Српски / Srpski
                </a>
              </li>
              <li>
                <a href="//fi.wikipedia.org/" lang="fi" title="suomi">
                  Suomi
                </a>
              </li>
              <li>
                <a href="//ta.wikipedia.org/" lang="ta" title="Tamiḻ">
                  தமிழ்
                </a>
              </li>
              <li>
                <a href="//tt.wikipedia.org/" lang="tt">
                  Татарча / Tatarça
                </a>
              </li>
              <li>
                <a href="//th.wikipedia.org/" lang="th" title="Phasa Thai">
                  ภาษาไทย
                </a>
              </li>
              <li>
                <a href="//tg.wikipedia.org/" lang="tg" title="Tojikī">
                  Тоҷикӣ
                </a>
              </li>
              <li>
                <a href="//azb.wikipedia.org/" lang="azb" title="Türkce">
                  <bdi dir="rtl">تۆرکجه</bdi>
                </a>
              </li>
              <li>
                <a href="//tr.wikipedia.org/" lang="tr" title="Türkçe">
                  Türkçe
                </a>
              </li>
              <li>
                <a href="//ur.wikipedia.org/" lang="ur" title="Urdu">
                  <bdi dir="rtl">اردو</bdi>
                </a>
              </li>
              <li>
                <a href="//zh-yue.wikipedia.org/" lang="yue">
                  粵語
                </a>
              </li>
            </ul>
          </div>
          <h2 className="bookshelf-container">
            <span className="bookshelf">
              <span className="text">
                <bdi dir="ltr">10,000+</bdi>
                <span className="jsl10n" data-jsl10n="portal.entries">
                  articles
                </span>
              </span>
            </span>
          </h2>
          <div className="langlist hlist" data-el-section="secondary links">
            <ul>
              <li>
                <a href="//ace.wikipedia.org/" lang="ace">
                  Bahsa Acèh
                </a>
              </li>
              <li>
                <a href="//als.wikipedia.org/" lang="gsw">
                  Alemannisch
                </a>
              </li>
              <li>
                <a href="//am.wikipedia.org/" lang="am" title="Āmariññā">
                  አማርኛ
                </a>
              </li>
              <li>
                <a href="//an.wikipedia.org/" lang="an">
                  Aragonés
                </a>
              </li>
              <li>
                <a
                  href="//hyw.wikipedia.org/"
                  lang="hyw"
                  title="Arevmdahayeren"
                >
                  Արեւմտահայերէն
                </a>
              </li>
              <li>
                <a href="//gor.wikipedia.org/" lang="gor">
                  Bahasa Hulontalo
                </a>
              </li>
              <li>
                <a href="//ban.wikipedia.org/" lang="ban" title="Basa Bali">
                  Basa Bali
                </a>
              </li>
              <li>
                <a href="//bjn.wikipedia.org/" lang="bjn">
                  Bahasa Banjar
                </a>
              </li>
              <li>
                <a href="//map-bms.wikipedia.org/" lang="map-x-bms">
                  Basa Banyumasan
                </a>
              </li>
              <li>
                <a href="//ba.wikipedia.org/" lang="ba" title="Başqortsa">
                  Башҡортса
                </a>
              </li>
              <li>
                <a
                  href="//be-tarask.wikipedia.org/"
                  lang="be-tarask"
                  title="Bielaruskaja (taraškievica)"
                >
                  Беларуская (тарашкевіца)
                </a>
              </li>
              <li>
                <a href="//bcl.wikipedia.org/" lang="bcl">
                  Bikol Central
                </a>
              </li>
              <li>
                <a
                  href="//bpy.wikipedia.org/"
                  lang="bpy"
                  title="Bishnupriya Manipuri"
                >
                  বিষ্ণুপ্রিয়া মণিপুরী
                </a>
              </li>
              <li>
                <a href="//bar.wikipedia.org/" lang="bar">
                  Boarisch
                </a>
              </li>
              <li>
                <a href="//bs.wikipedia.org/" lang="bs">
                  Bosanski
                </a>
              </li>
              <li>
                <a href="//br.wikipedia.org/" lang="br">
                  Brezhoneg
                </a>
              </li>
              <li>
                <a href="//cv.wikipedia.org/" lang="cv" title="Čăvašla">
                  Чӑвашла
                </a>
              </li>
              <li>
                <a href="//ary.wikipedia.org/" lang="ary" title="Darija">
                  <bdi dir="rtl">الدارجة</bdi>
                </a>
              </li>
              <li>
                <a href="//nv.wikipedia.org/" lang="nv">
                  Diné Bizaad
                </a>
              </li>
              <li>
                <a href="//eml.wikipedia.org/" lang="roa-x-eml">
                  Emigliàn–Rumagnòl
                </a>
              </li>
              <li>
                <a href="//hif.wikipedia.org/" lang="hif">
                  Fiji Hindi
                </a>
              </li>
              <li>
                <a href="//fo.wikipedia.org/" lang="fo">
                  Føroyskt
                </a>
              </li>
              <li>
                <a href="//fy.wikipedia.org/" lang="fy">
                  Frysk
                </a>
              </li>
              <li>
                <a href="//ga.wikipedia.org/" lang="ga">
                  Gaeilge
                </a>
              </li>
              <li>
                <a href="//gd.wikipedia.org/" lang="gd">
                  Gàidhlig
                </a>
              </li>
              <li>
                <a href="//gu.wikipedia.org/" lang="gu" title="Gujarati">
                  ગુજરાતી
                </a>
              </li>
              <li>
                <a href="//hak.wikipedia.org/" lang="hak">
                  Hak-kâ-ngî / 客家語
                </a>
              </li>
              <li>
                <a href="//ha.wikipedia.org/" lang="ha" title="Hausa">
                  Hausa
                </a>
              </li>
              <li>
                <a href="//hsb.wikipedia.org/" lang="hsb">
                  Hornjoserbsce
                </a>
              </li>
              <li>
                <a href="//io.wikipedia.org/" lang="io" title="Ido">
                  Ido
                </a>
              </li>
              <li>
                <a href="//ig.wikipedia.org/" lang="ig">
                  Igbo
                </a>
              </li>
              <li>
                <a href="//ilo.wikipedia.org/" lang="ilo">
                  Ilokano
                </a>
              </li>
              <li>
                <a href="//ia.wikipedia.org/" lang="ia">
                  Interlingua
                </a>
              </li>
              <li>
                <a href="//ie.wikipedia.org/" lang="ie">
                  Interlingue
                </a>
              </li>
              <li>
                <a href="//os.wikipedia.org/" lang="os" title="Iron">
                  Ирон
                </a>
              </li>
              <li>
                <a href="//is.wikipedia.org/" lang="is">
                  Íslenska
                </a>
              </li>
              <li>
                <a href="//jv.wikipedia.org/" lang="jv" title="Jawa">
                  Jawa
                </a>
              </li>
              <li>
                <a href="//kn.wikipedia.org/" lang="kn" title="Kannada">
                  ಕನ್ನಡ
                </a>
              </li>
              <li>
                <a href="//km.wikipedia.org/" lang="km" title="Phéasa Khmér">
                  ភាសាខ្មែរ
                </a>
              </li>
              <li>
                <a href="//avk.wikipedia.org/" lang="avk">
                  Kotava
                </a>
              </li>
              <li>
                <a href="//ht.wikipedia.org/" lang="ht">
                  Kreyòl Ayisyen
                </a>
              </li>
              <li>
                <a href="//ku.wikipedia.org/" lang="ku">
                  <span lang="ku-Latn">Kurdî</span> /{" "}
                  <bdi lang="ku-Arab" dir="rtl">
                    كوردی
                  </bdi>
                </a>
              </li>
              <li>
                <a
                  href="//ckb.wikipedia.org/"
                  lang="ckb"
                  title="Kurdîy Nawendî"
                >
                  <bdi dir="rtl">کوردیی ناوەندی</bdi>
                </a>
              </li>
              <li>
                <a href="//ky.wikipedia.org/" lang="ky" title="Kyrgyzča">
                  Кыргызча
                </a>
              </li>
              <li>
                <a href="//mrj.wikipedia.org/" lang="mjr" title="Kyryk Mary">
                  Кырык мары
                </a>
              </li>
              <li>
                <a href="//lb.wikipedia.org/" lang="lb">
                  Lëtzebuergesch
                </a>
              </li>
              <li>
                <a href="//lij.wikipedia.org/" lang="lij">
                  Lìgure
                </a>
              </li>
              <li>
                <a href="//li.wikipedia.org/" lang="li">
                  Limburgs
                </a>
              </li>
              <li>
                <a href="//lmo.wikipedia.org/" lang="lmo">
                  Lombard
                </a>
              </li>
              <li>
                <a href="//mai.wikipedia.org/" lang="mai" title="Maithilī">
                  मैथिली
                </a>
              </li>
              <li>
                <a href="//mg.wikipedia.org/" lang="mg">
                  Malagasy
                </a>
              </li>
              <li>
                <a href="//ml.wikipedia.org/" lang="ml" title="Malayalam">
                  മലയാളം
                </a>
              </li>
              <li>
                <a href="//mr.wikipedia.org/" lang="mr" title="Marathi">
                  मराठी
                </a>
              </li>
              <li>
                <a href="//xmf.wikipedia.org/" lang="xmf" title="Margaluri">
                  მარგალური
                </a>
              </li>
              <li>
                <a href="//mzn.wikipedia.org/" lang="mzn" title="Mäzeruni">
                  <bdi dir="rtl">مازِرونی</bdi>
                </a>
              </li>
              <li>
                <a href="//cdo.wikipedia.org/" lang="cdo" title="Ming-deng-ngu">
                  Mìng-dĕ̤ng-ngṳ̄ / 閩東語
                </a>
              </li>
              <li>
                <a href="//mn.wikipedia.org/" lang="mn" title="Mongol">
                  Монгол
                </a>
              </li>
              <li>
                <a href="//nap.wikipedia.org/" lang="nap">
                  Napulitano
                </a>
              </li>
              <li>
                <a href="//new.wikipedia.org/" lang="new" title="Nepal Bhasa">
                  नेपाल भाषा
                </a>
              </li>
              <li>
                <a href="//ne.wikipedia.org/" lang="ne" title="Nepālī">
                  नेपाली
                </a>
              </li>
              <li>
                <a href="//frr.wikipedia.org/" lang="frr">
                  Nordfriisk
                </a>
              </li>
              <li>
                <a href="//oc.wikipedia.org/" lang="oc">
                  Occitan
                </a>
              </li>
              <li>
                <a href="//mhr.wikipedia.org/" lang="mhr" title="Olyk Marij">
                  Олык марий
                </a>
              </li>
              <li>
                <a href="//or.wikipedia.org/" lang="or" title="Oṛiā">
                  ଓଡି଼ଆ
                </a>
              </li>
              <li>
                <a href="//as.wikipedia.org/" lang="as" title="Ôxômiya">
                  অসমীযা়
                </a>
              </li>
              <li>
                <a
                  href="//pa.wikipedia.org/"
                  lang="pa"
                  title="Pañjābī (Gurmukhī)"
                >
                  ਪੰਜਾਬੀ
                </a>
              </li>
              <li>
                <a
                  href="//pnb.wikipedia.org/"
                  lang="pnb"
                  title="Pañjābī (Shāhmukhī)"
                >
                  <bdi dir="rtl">پنجابی (شاہ مکھی)</bdi>
                </a>
              </li>
              <li>
                <a href="//ps.wikipedia.org/" lang="ps" title="Paʂto">
                  <bdi dir="rtl">پښتو</bdi>
                </a>
              </li>
              <li>
                <a href="//pms.wikipedia.org/" lang="pms">
                  Piemontèis
                </a>
              </li>
              <li>
                <a href="//nds.wikipedia.org/" lang="nds">
                  Plattdüütsch
                </a>
              </li>
              <li>
                <a href="//crh.wikipedia.org/" lang="crh">
                  Qırımtatarca
                </a>
              </li>
              <li>
                <a href="//qu.wikipedia.org/" lang="qu">
                  Runa Simi
                </a>
              </li>
              <li>
                <a href="//sa.wikipedia.org/" lang="sa" title="Saṃskṛtam">
                  संस्कृतम्
                </a>
              </li>
              <li>
                <a href="//sat.wikipedia.org/" lang="sat" title="Santali">
                  ᱥᱟᱱᱛᱟᱲᱤ
                </a>
              </li>
              <li>
                <a href="//sah.wikipedia.org/" lang="sah" title="Saxa Tyla">
                  Саха Тыла
                </a>
              </li>
              <li>
                <a href="//sco.wikipedia.org/" lang="sco">
                  Scots
                </a>
              </li>
              <li>
                <a href="//sn.wikipedia.org/" lang="sn">
                  ChiShona
                </a>
              </li>
              <li>
                <a href="//sq.wikipedia.org/" lang="sq">
                  Shqip
                </a>
              </li>
              <li>
                <a href="//scn.wikipedia.org/" lang="scn">
                  Sicilianu
                </a>
              </li>
              <li>
                <a href="//si.wikipedia.org/" lang="si" title="Siṃhala">
                  සිංහල
                </a>
              </li>
              <li>
                <a href="//sd.wikipedia.org/" lang="sd" title="Sindhī">
                  <bdi dir="rtl">سنڌي</bdi>
                </a>
              </li>
              <li>
                <a href="//szl.wikipedia.org/" lang="szl">
                  Ślůnski
                </a>
              </li>
              <li>
                <a href="//su.wikipedia.org/" lang="su">
                  Basa Sunda
                </a>
              </li>
              <li>
                <a href="//sw.wikipedia.org/" lang="sw">
                  Kiswahili
                </a>
              </li>
              <li>
                <a href="//tl.wikipedia.org/" lang="tl">
                  Tagalog
                </a>
              </li>
              <li>
                <a href="//shn.wikipedia.org/" lang="shn">
                  ၽႃႇသႃႇတႆး
                </a>
              </li>
              <li>
                <a href="//te.wikipedia.org/" lang="te" title="Telugu">
                  తెలుగు
                </a>
              </li>
              <li>
                <a href="//tum.wikipedia.org/" lang="tum">
                  chiTumbuka
                </a>
              </li>
              <li>
                <a href="//bug.wikipedia.org/" lang="bug">
                  Basa Ugi
                </a>
              </li>
              <li>
                <a href="//vec.wikipedia.org/" lang="vec">
                  Vèneto
                </a>
              </li>
              <li>
                <a href="//vo.wikipedia.org/" lang="vo">
                  Volapük
                </a>
              </li>
              <li>
                <a href="//wa.wikipedia.org/" lang="wa">
                  Walon
                </a>
              </li>
              <li>
                <a
                  href="//zh-classical.wikipedia.org/"
                  lang="lzh"
                  title="Wényán"
                >
                  文言
                </a>
              </li>
              <li>
                <a href="//wuu.wikipedia.org/" lang="wuu" title="Wúyǔ">
                  吴语
                </a>
              </li>
              <li>
                <a href="//yi.wikipedia.org/" lang="yi" title="Yidiš">
                  <bdi dir="rtl">ייִדיש</bdi>
                </a>
              </li>
              <li>
                <a href="//yo.wikipedia.org/" lang="yo">
                  Yorùbá
                </a>
              </li>
              <li>
                <a href="//diq.wikipedia.org/" lang="diq" title="Zazaki">
                  Zazaki
                </a>
              </li>
              <li>
                <a href="//bat-smg.wikipedia.org/" lang="sgs">
                  žemaitėška
                </a>
              </li>
              <li>
                <a href="//zu.wikipedia.org/" lang="zu">
                  isiZulu
                </a>
              </li>
              <li>
                <a href="//mni.wikipedia.org/" lang="mni">
                  ꯃꯤꯇꯩ ꯂꯣꯟ
                </a>
              </li>
            </ul>
          </div>
          <h2 className="bookshelf-container">
            <span className="bookshelf">
              <span className="text">
                <bdi dir="ltr">1,000+</bdi>
                <span className="jsl10n" data-jsl10n="portal.entries">
                  articles
                </span>
              </span>
            </span>
          </h2>
          <div className="langlist hlist" data-el-section="secondary links">
            <ul>
              <li>
                <a href="//lad.wikipedia.org/" lang="lad">
                  <span lang="lad-Latn">Dzhudezmo</span> /{" "}
                  <bdi lang="lad-Hebr" dir="rtl">
                    לאדינו
                  </bdi>
                </a>
              </li>
              <li>
                <a href="//kbd.wikipedia.org/" lang="kbd" title="Adighabze">
                  Адыгэбзэ
                </a>
              </li>
              <li>
                <a href="//ang.wikipedia.org/" lang="ang">
                  Ænglisc
                </a>
              </li>
              <li>
                <a href="//smn.wikipedia.org/" lang="smn" title="anarâškielâ">
                  Anarâškielâ
                </a>
              </li>
              <li>
                <a href="//anp.wikipedia.org/" lang="anp" title="Angika">
                  अंगिका
                </a>
              </li>
              <li>
                <a href="//ab.wikipedia.org/" lang="ab" title="aṗsshwa">
                  Аԥсшәа
                </a>
              </li>
              <li>
                <a href="//roa-rup.wikipedia.org/" lang="rup">
                  armãneashti
                </a>
              </li>
              <li>
                <a href="//frp.wikipedia.org/" lang="frp">
                  Arpitan
                </a>
              </li>
              <li>
                <a href="//atj.wikipedia.org/" lang="atj">
                  atikamekw
                </a>
              </li>
              <li>
                <a href="//arc.wikipedia.org/" lang="arc" title="Ātûrāyâ">
                  <bdi dir="rtl">ܐܬܘܪܝܐ</bdi>
                </a>
              </li>
              <li>
                <a href="//gn.wikipedia.org/" lang="gn">
                  Avañe’ẽ
                </a>
              </li>
              <li>
                <a href="//av.wikipedia.org/" lang="av" title="Avar">
                  Авар
                </a>
              </li>
              <li>
                <a href="//ay.wikipedia.org/" lang="ay">
                  Aymar
                </a>
              </li>
              <li>
                <a href="//bew.wikipedia.org/" lang="bew">
                  Betawi
                </a>
              </li>
              <li>
                <a href="//bh.wikipedia.org/" lang="bh" title="Bhōjapurī">
                  भोजपुरी
                </a>
              </li>
              <li>
                <a href="//bi.wikipedia.org/" lang="bi">
                  Bislama
                </a>
              </li>
              <li>
                <a href="//bo.wikipedia.org/" lang="bo" title="Bod Skad">
                  བོད་ཡིག
                </a>
              </li>
              <li>
                <a href="//bxr.wikipedia.org/" lang="bxr" title="Buryad">
                  Буряад
                </a>
              </li>
              <li>
                <a href="//cbk-zam.wikipedia.org/" lang="cbk-x-zam">
                  Chavacano de Zamboanga
                </a>
              </li>
              <li>
                <a href="//ny.wikipedia.org/" lang="ny">
                  Chichewa
                </a>
              </li>
              <li>
                <a href="//co.wikipedia.org/" lang="co">
                  Corsu
                </a>
              </li>
              <li>
                <a href="//za.wikipedia.org/" lang="za">
                  Vahcuengh / 話僮
                </a>
              </li>
              <li>
                <a href="//dga.wikipedia.org/" lang="dga">
                  Dagaare
                </a>
              </li>
              <li>
                <a href="//dag.wikipedia.org/" lang="dag">
                  Dagbanli
                </a>
              </li>
              <li>
                <a href="//se.wikipedia.org/" lang="se" title="davvisámegiella">
                  Davvisámegiella
                </a>
              </li>
              <li>
                <a href="//pdc.wikipedia.org/" lang="pdc">
                  Deitsch
                </a>
              </li>
              <li>
                <a href="//dv.wikipedia.org/" lang="dv" title="Divehi">
                  <bdi dir="rtl">ދިވެހިބަސް</bdi>
                </a>
              </li>
              <li>
                <a href="//dsb.wikipedia.org/" lang="dsb">
                  Dolnoserbski
                </a>
              </li>
              <li>
                <a href="//myv.wikipedia.org/" lang="myv" title="Erzjanj">
                  Эрзянь
                </a>
              </li>
              <li>
                <a href="//ext.wikipedia.org/" lang="ext">
                  Estremeñu
                </a>
              </li>
              <li>
                <a href="//fon.wikipedia.org/" lang="fon">
                  Fɔ̀ngbè
                </a>
              </li>
              <li>
                <a href="//ff.wikipedia.org/" lang="ff">
                  Fulfulde
                </a>
              </li>
              <li>
                <a href="//fur.wikipedia.org/" lang="fur">
                  Furlan
                </a>
              </li>
              <li>
                <a href="//gv.wikipedia.org/" lang="gv">
                  Gaelg
                </a>
              </li>
              <li>
                <a href="//gag.wikipedia.org/" lang="gag">
                  Gagauz
                </a>
              </li>
              <li>
                <a href="//inh.wikipedia.org/" lang="inh" title="Ghalghai">
                  ГӀалгӀай
                </a>
              </li>
              <li>
                <a href="//gpe.wikipedia.org/" lang="gpe">
                  Ghanaian Pidgin
                </a>
              </li>
              <li>
                <a href="//ki.wikipedia.org/" lang="ki">
                  Gĩkũyũ
                </a>
              </li>
              <li>
                <a href="//glk.wikipedia.org/" lang="glk" title="Giləki">
                  <bdi dir="rtl">گیلکی</bdi>
                </a>
              </li>
              <li>
                <a
                  href="//gan.wikipedia.org/"
                  lang="gan"
                  title="Gon ua"
                  data-hans="赣语"
                  data-hant="贛語"
                  className="jscnconv"
                >
                  赣语 / 贛語
                </a>
              </li>
              <li>
                <a href="//guw.wikipedia.org/" lang="guw">
                  Gungbe
                </a>
              </li>
              <li>
                <a href="//xal.wikipedia.org/" lang="xal" title="Halʹmg">
                  Хальмг
                </a>
              </li>
              <li>
                <a href="//haw.wikipedia.org/" lang="haw">
                  ʻŌlelo Hawaiʻi
                </a>
              </li>
              <li>
                <a href="//rw.wikipedia.org/" lang="rw">
                  Ikinyarwanda
                </a>
              </li>
              <li>
                <a href="//kbp.wikipedia.org/" lang="kbp">
                  Kabɩyɛ
                </a>
              </li>
              <li>
                <a href="//pam.wikipedia.org/" lang="pam">
                  Kapampangan
                </a>
              </li>
              <li>
                <a href="//csb.wikipedia.org/" lang="csb">
                  Kaszëbsczi
                </a>
              </li>
              <li>
                <a href="//kw.wikipedia.org/" lang="kw">
                  Kernewek
                </a>
              </li>
              <li>
                <a href="//kv.wikipedia.org/" lang="kv" title="Komi">
                  Коми
                </a>
              </li>
              <li>
                <a href="//koi.wikipedia.org/" lang="koi" title="Perem Komi">
                  Перем коми
                </a>
              </li>
              <li>
                <a href="//kg.wikipedia.org/" lang="kg">
                  Kongo
                </a>
              </li>
              <li>
                <a href="//gom.wikipedia.org/" lang="gom">
                  कोंकणी / Konknni
                </a>
              </li>
              <li>
                <a href="//ks.wikipedia.org/" lang="ks" title="Koshur">
                  <bdi dir="rtl">كٲشُر</bdi>
                </a>
              </li>
              <li>
                <a
                  href="//gcr.wikipedia.org/"
                  lang="gcr"
                  title="Kriyòl Gwiyannen"
                >
                  Kriyòl Gwiyannen
                </a>
              </li>
              <li>
                <a href="//lo.wikipedia.org/" lang="lo" title="Phaasaa Laao">
                  ພາສາລາວ
                </a>
              </li>
              <li>
                <a href="//lbe.wikipedia.org/" lang="lbe" title="Lakku">
                  Лакку
                </a>
              </li>
              <li>
                <a href="//ltg.wikipedia.org/" lang="ltg">
                  Latgaļu
                </a>
              </li>
              <li>
                <a href="//lez.wikipedia.org/" lang="lez" title="Lezgi">
                  Лезги
                </a>
              </li>
              <li>
                <a href="//nia.wikipedia.org/" lang="nia">
                  Li Niha
                </a>
              </li>
              <li>
                <a href="//ln.wikipedia.org/" lang="ln">
                  Lingála
                </a>
              </li>
              <li>
                <a href="//lfn.wikipedia.org/" lang="lfn">
                  Lingua Franca Nova
                </a>
              </li>
              <li>
                <a href="//olo.wikipedia.org/" lang="olo">
                  livvinkarjala
                </a>
              </li>
              <li>
                <a href="//jbo.wikipedia.org/" lang="jbo">
                  lojban
                </a>
              </li>
              <li>
                <a href="//lg.wikipedia.org/" lang="lg">
                  Luganda
                </a>
              </li>
              <li>
                <a href="//mad.wikipedia.org/" lang="mad">
                  Madhurâ
                </a>
              </li>
              <li>
                <a href="//mt.wikipedia.org/" lang="mt">
                  Malti
                </a>
              </li>
              <li>
                <a href="//mi.wikipedia.org/" lang="mi">
                  Māori
                </a>
              </li>
              <li>
                <a href="//tw.wikipedia.org/" lang="tw" title="Mfantse">
                  Twi
                </a>
              </li>
              <li>
                <a href="//mwl.wikipedia.org/" lang="mwl">
                  Mirandés
                </a>
              </li>
              <li>
                <a href="//mdf.wikipedia.org/" lang="mdf" title="Mokšenj">
                  Мокшень
                </a>
              </li>
              <li>
                <a href="//mnw.wikipedia.org/" lang="mnw">
                  ဘာသာ မန်
                </a>
              </li>
              <li>
                <a href="//nqo.wikipedia.org/" lang="nqo" title="N'Ko">
                  ߒߞߏ
                </a>
              </li>
              <li>
                <a href="//fj.wikipedia.org/" lang="fj">
                  Na Vosa Vaka-Viti
                </a>
              </li>
              <li>
                <a href="//nah.wikipedia.org/" lang="nah">
                  Nāhuatlahtōlli
                </a>
              </li>
              <li>
                <a href="//pcm.wikipedia.org/" lang="pcm">
                  Naijá
                </a>
              </li>
              <li>
                <a href="//nds-nl.wikipedia.org/" lang="nds-nl">
                  Nedersaksisch
                </a>
              </li>
              <li>
                <a href="//nrm.wikipedia.org/" lang="roa-x-nrm">
                  Nouormand / Normaund
                </a>
              </li>
              <li>
                <a href="//nov.wikipedia.org/" lang="nov">
                  Novial
                </a>
              </li>
              <li>
                <a href="//om.wikipedia.org/" lang="om" title="Ingiliffaa">
                  Afaan Oromoo
                </a>
              </li>
              <li>
                <a href="//blk.wikipedia.org/" lang="blk">
                  ပအိုဝ်ႏဘာႏသာႏ
                </a>
              </li>
              <li>
                <a href="//pi.wikipedia.org/" lang="pi" title="Pāḷi">
                  पालि
                </a>
              </li>
              <li>
                <a href="//pag.wikipedia.org/" lang="pag">
                  Pangasinán
                </a>
              </li>
              <li>
                <a href="//ami.wikipedia.org/" lang="ami">
                  Pangcah
                </a>
              </li>
              <li>
                <a href="//pap.wikipedia.org/" lang="pap">
                  Papiamentu
                </a>
              </li>
              <li>
                <a href="//jam.wikipedia.org/" lang="jam">
                  Patois
                </a>
              </li>
              <li>
                <a href="//pfl.wikipedia.org/" lang="pfl">
                  Pfälzisch
                </a>
              </li>
              <li>
                <a href="//pcd.wikipedia.org/" lang="pcd">
                  Picard
                </a>
              </li>
              <li>
                <a
                  href="//krc.wikipedia.org/"
                  lang="krc"
                  title="Qaraçay–Malqar"
                >
                  Къарачай–малкъар
                </a>
              </li>
              <li>
                <a href="//kaa.wikipedia.org/" lang="kaa" title="Qaraqalpaqsha">
                  Qaraqalpaqsha
                </a>
              </li>
              <li>
                <a href="//ksh.wikipedia.org/" lang="ksh">
                  Ripoarisch
                </a>
              </li>
              <li>
                <a href="//rm.wikipedia.org/" lang="rm">
                  Rumantsch
                </a>
              </li>
              <li>
                <a href="//rue.wikipedia.org/" lang="rue" title="Rusin’skyj">
                  Русиньскый
                </a>
              </li>
              <li>
                <a href="//szy.wikipedia.org/" lang="szy">
                  Sakizaya
                </a>
              </li>
              <li>
                <a href="//sm.wikipedia.org/" lang="sm">
                  Gagana Sāmoa
                </a>
              </li>
              <li>
                <a href="//skr.wikipedia.org/" lang="skr" title="Saraiki">
                  سرائیکی
                </a>
              </li>
              <li>
                <a href="//sc.wikipedia.org/" lang="sc" title="Sardu">
                  Sardu
                </a>
              </li>
              <li>
                <a href="//trv.wikipedia.org/" lang="trv">
                  Seediq
                </a>
              </li>
              <li>
                <a href="//stq.wikipedia.org/" lang="stq">
                  Seeltersk
                </a>
              </li>
              <li>
                <a href="//st.wikipedia.org/" lang="st">
                  Sesotho
                </a>
              </li>
              <li>
                <a href="//nso.wikipedia.org/" lang="nso">
                  Sesotho sa Leboa
                </a>
              </li>
              <li>
                <a href="//tn.wikipedia.org/" lang="tn">
                  Setswana
                </a>
              </li>
              <li>
                <a href="//cu.wikipedia.org/" lang="cu" title="Slověnĭskŭ">
                  Словѣ́ньскъ / ⰔⰎⰑⰂⰡⰐⰠⰔⰍⰟ
                </a>
              </li>
              <li>
                <a href="//so.wikipedia.org/" lang="so">
                  Soomaaliga
                </a>
              </li>
              <li>
                <a href="//srn.wikipedia.org/" lang="srn">
                  Sranantongo
                </a>
              </li>
              <li>
                <a href="//shi.wikipedia.org/" lang="shi">
                  Taclḥit
                </a>
              </li>
              <li>
                <a href="//ty.wikipedia.org/" lang="ty">
                  Reo tahiti
                </a>
              </li>
              <li>
                <a
                  href="//zgh.wikipedia.org/"
                  lang="zgh"
                  title="Tamazight tanawayt"
                >
                  ⵜⴰⵎⴰⵣⵉⵖⵜ ⵜⴰⵏⴰⵡⴰⵢⵜ
                </a>
              </li>
              <li>
                <a href="//kab.wikipedia.org/" lang="kab" title="Taqbaylit">
                  Taqbaylit
                </a>
              </li>
              <li>
                <a href="//roa-tara.wikipedia.org/" lang="roa">
                  Tarandíne
                </a>
              </li>
              <li>
                <a href="//tay.wikipedia.org/" lang="tay">
                  Tayal
                </a>
              </li>
              <li>
                <a href="//tet.wikipedia.org/" lang="tet">
                  Tetun
                </a>
              </li>
              <li>
                <a href="//tpi.wikipedia.org/" lang="tpi">
                  Tok Pisin
                </a>
              </li>
              <li>
                <a href="//tly.wikipedia.org/" lang="tly">
                  tolışi
                </a>
              </li>
              <li>
                <a href="//to.wikipedia.org/" lang="to">
                  faka Tonga
                </a>
              </li>
              <li>
                <a href="//chr.wikipedia.org/" lang="chr" title="Tsalagi">
                  ᏣᎳᎩ
                </a>
              </li>
              <li>
                <a href="//tk.wikipedia.org/" lang="tk">
                  Türkmençe
                </a>
              </li>
              <li>
                <a href="//kcg.wikipedia.org/" lang="kcg">
                  Tyap
                </a>
              </li>
              <li>
                <a href="//tyv.wikipedia.org/" lang="tyv" title="Tyva dyl">
                  Тыва дыл
                </a>
              </li>
              <li>
                <a href="//udm.wikipedia.org/" lang="udm" title="Udmurt">
                  Удмурт
                </a>
              </li>
              <li>
                <a href="//ug.wikipedia.org/" lang="ug">
                  <bdi dir="rtl">ئۇيغۇرچه</bdi>
                </a>
              </li>
              <li>
                <a href="//vep.wikipedia.org/" lang="vep">
                  Vepsän
                </a>
              </li>
              <li>
                <a href="//fiu-vro.wikipedia.org/" lang="vro">
                  võro
                </a>
              </li>
              <li>
                <a href="//vls.wikipedia.org/" lang="vls">
                  West-Vlams
                </a>
              </li>
              <li>
                <a href="//wo.wikipedia.org/" lang="wo">
                  Wolof
                </a>
              </li>
              <li>
                <a href="//xh.wikipedia.org/" lang="xh">
                  isiXhosa
                </a>
              </li>
              <li>
                <a href="//zea.wikipedia.org/" lang="zea">
                  Zeêuws
                </a>
              </li>
              <li>
                <a href="//alt.wikipedia.org/" lang="alt">
                  алтай тил
                </a>
              </li>
              <li>
                <a href="//awa.wikipedia.org/" lang="awa">
                  अवधी
                </a>
              </li>
              <li>
                <a href="//dty.wikipedia.org/" lang="dty">
                  डोटेली
                </a>
              </li>
              <li>
                <a href="//tcy.wikipedia.org/" lang="tcy">
                  ತುಳು
                </a>
              </li>
            </ul>
          </div>
          <h2 className="bookshelf-container">
            <span className="bookshelf">
              <span className="text">
                <bdi dir="ltr">100+</bdi>
                <span className="jsl10n" data-jsl10n="portal.entries">
                  articles
                </span>
              </span>
            </span>
          </h2>
          <div
            className="langlist langlist-tiny hlist"
            data-el-section="secondary links"
          >
            <ul>
              <li>
                <a href="//bm.wikipedia.org/" lang="bm">
                  Bamanankan
                </a>
              </li>
              <li>
                <a href="//bbc.wikipedia.org/" lang="bbc">
                  Batak Toba
                </a>
              </li>
              <li>
                <a href="//ch.wikipedia.org/" lang="ch">
                  Chamoru
                </a>
              </li>
              <li>
                <a href="//dtp.wikipedia.org/" lang="dtp">
                  Dusun Bundu-liwan
                </a>
              </li>
              <li>
                <a href="//dz.wikipedia.org/" lang="dz" title="Rdzong-Kha">
                  རྫོང་ཁ
                </a>
              </li>
              <li>
                <a href="//ee.wikipedia.org/" lang="ee">
                  Eʋegbe
                </a>
              </li>
              <li>
                <a href="//gur.wikipedia.org/" lang="gur">
                  Farefare
                </a>
              </li>
              <li>
                <a href="//got.wikipedia.org/" lang="got" title="Gutisk">
                  𐌲𐌿𐍄𐌹𐍃𐌺
                </a>
              </li>
              <li>
                <a href="//igl.wikipedia.org/" lang="igl">
                  Igala
                </a>
              </li>
              <li>
                <a href="//iu.wikipedia.org/" lang="iu">
                  ᐃᓄᒃᑎᑐᑦ / Inuktitut
                </a>
              </li>
              <li>
                <a href="//ik.wikipedia.org/" lang="ik">
                  Iñupiak
                </a>
              </li>
              <li>
                <a href="//kl.wikipedia.org/" lang="kl">
                  Kalaallisut
                </a>
              </li>
              <li>
                <a href="//kus.wikipedia.org/" lang="kus">
                  Kʋsaal
                </a>
              </li>
              <li>
                <a href="//fat.wikipedia.org/" lang="fat">
                  Mfantse
                </a>
              </li>
              <li>
                <a href="//pih.wikipedia.org/" lang="pih">
                  Norfuk / Pitkern
                </a>
              </li>
              <li>
                <a href="//pwn.wikipedia.org/" lang="pwn">
                  pinayuanan
                </a>
              </li>
              <li>
                <a href="//pnt.wikipedia.org/" lang="pnt" title="Pontiaká">
                  Ποντιακά
                </a>
              </li>
              <li>
                <a href="//rmy.wikipedia.org/" lang="rmy">
                  romani čhib
                </a>
              </li>
              <li>
                <a href="//rn.wikipedia.org/" lang="rn">
                  Ikirundi
                </a>
              </li>
              <li>
                <a href="//sg.wikipedia.org/" lang="sg">
                  Sängö
                </a>
              </li>
              <li>
                <a href="//ss.wikipedia.org/" lang="ss">
                  SiSwati
                </a>
              </li>
              <li>
                <a href="//ti.wikipedia.org/" lang="ti" title="Təgərəña">
                  ትግርኛ
                </a>
              </li>
              <li>
                <a href="//din.wikipedia.org/" lang="din">
                  Thuɔŋjäŋ
                </a>
              </li>
              <li>
                <a href="//chy.wikipedia.org/" lang="chy">
                  Tsėhesenėstsestotse
                </a>
              </li>
              <li>
                <a href="//ts.wikipedia.org/" lang="ts">
                  Xitsonga
                </a>
              </li>
              <li>
                <a href="//ve.wikipedia.org/" lang="ve">
                  Tshivenḓa
                </a>
              </li>
              <li>
                <a href="//guc.wikipedia.org/" lang="guc">
                  Wayuunaiki
                </a>
              </li>
              <li>
                <a href="//ady.wikipedia.org/" lang="ady">
                  адыгабзэ
                </a>
              </li>
            </ul>
          </div>
          <div
            className="langlist langlist-others hlist"
            data-el-section="other languages"
          >
            <a
              className="jsl10n"
              href="https://meta.wikimedia.org/wiki/Special:MyLanguage/List_of_Wikipedias"
              lang=""
              data-jsl10n="other-languages-label"
            >
              Other languages
            </a>
          </div>
        </div>
      </div>
    </nav>
    <hr />
  </main>
  <footer className="footer" data-el-section="other projects">
    <div className="footer-sidebar">
      <div className="footer-sidebar-content">
        <div className="footer-sidebar-icon sprite svg-Wikimedia-logo_black"></div>
        <div
          className="footer-sidebar-text jsl10n"
          data-jsl10n="portal.footer-description"
        >
          Wikipedia is hosted by the Wikimedia Foundation, a non-profit
          organization that also hosts a range of other projects.
        </div>
        <div className="footer-sidebar-text">
          <a
            href="https://donate.wikimedia.org/?wmf_medium=portal&wmf_campaign=portalFooter&wmf_source=portalFooter"
            target="_blank"
          >
            <span className="jsl10n" data-jsl10n="footer-donate">
              You can support our work with a donation.
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="footer-sidebar app-badges">
      <div className="footer-sidebar-content">
        <div className="footer-sidebar-text">
          <div className="footer-sidebar-icon sprite svg-wikipedia_app_tile" />
          <strong className="jsl10n" data-jsl10n="portal.app-links.title">
            <a
              className="jsl10n"
              data-jsl10n="portal.app-links.url"
              href="https://en.wikipedia.org/wiki/List_of_Wikipedia_mobile_applications"
            >
              Download Wikipedia for Android or iOS
            </a>
          </strong>
          <p className="jsl10n" data-jsl10n="portal.app-links.description">
            Save your favorite articles to read offline, sync your reading lists
            across devices and customize your reading experience with the
            official Wikipedia app.
          </p>
          <ul>
            <li className="app-badge app-badge-android">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=org.wikipedia&referrer=utm_source%3Dportal%26utm_medium%3Dbutton%26anid%3Dadmob"
              >
                <span
                  className="jsl10n sprite svg-badge_google_play_store"
                  data-jsl10n="portal.app-links.google-store"
                >
                  Google Play Store
                </span>
              </a>
            </li>
            <li className="app-badge app-badge-ios">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://itunes.apple.com/app/apple-store/id324715238?pt=208305&ct=portal&mt=8"
              >
                <span
                  className="jsl10n sprite svg-badge_ios_app_store"
                  data-jsl10n="portal.app-links.apple-store"
                >
                  Apple App Store
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav
      data-jsl10n="other-projects-nav-label"
      aria-label="Other projects"
      className="other-projects"
    >
      <div className="other-project">
        <a className="other-project-link" href="//commons.wikimedia.org/">
          <div className="other-project-icon">
            <div className="sprite svg-Commons-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="commons.name"
            >
              Commons
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="commons.slogan"
            >
              Free media collection
            </span>
          </div>
        </a>
      </div>
      <div className="other-project">
        <a className="other-project-link" href="//www.wikivoyage.org/">
          <div className="other-project-icon">
            <div className="sprite svg-Wikivoyage-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="wikivoyage.name"
            >
              Wikivoyage
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="wikivoyage.slogan"
            >
              Free travel guide
            </span>
          </div>
        </a>
      </div>
      <div className="other-project">
        <a className="other-project-link" href="//www.wiktionary.org/">
          <div className="other-project-icon">
            <div className="sprite svg-Wiktionary-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="wiktionary.name"
            >
              Wiktionary
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="wiktionary.slogan"
            >
              Free dictionary
            </span>
          </div>
        </a>
      </div>
      <div className="other-project">
        <a className="other-project-link" href="//www.wikibooks.org/">
          <div className="other-project-icon">
            <div className="sprite svg-Wikibooks-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="wikibooks.name"
            >
              Wikibooks
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="wikibooks.slogan"
            >
              Free textbooks
            </span>
          </div>
        </a>
      </div>
      <div className="other-project">
        <a className="other-project-link" href="//www.wikinews.org/">
          <div className="other-project-icon">
            <div className="sprite svg-Wikinews-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="wikinews.name"
            >
              Wikinews
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="wikinews.slogan"
            >
              Free news source
            </span>
          </div>
        </a>
      </div>
      <div className="other-project">
        <a className="other-project-link" href="//www.wikidata.org/">
          <div className="other-project-icon">
            <div className="sprite svg-Wikidata-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="wikidata.name"
            >
              Wikidata
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="wikidata.slogan"
            >
              Free knowledge base
            </span>
          </div>
        </a>
      </div>
      <div className="other-project">
        <a className="other-project-link" href="//www.wikiversity.org/">
          <div className="other-project-icon">
            <div className="sprite svg-Wikiversity-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="wikiversity.name"
            >
              Wikiversity
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="wikiversity.slogan"
            >
              Free learning resources
            </span>
          </div>
        </a>
      </div>
      <div className="other-project">
        <a className="other-project-link" href="//www.wikiquote.org/">
          <div className="other-project-icon">
            <div className="sprite svg-Wikiquote-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="wikiquote.name"
            >
              Wikiquote
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="wikiquote.slogan"
            >
              Free quote compendium
            </span>
          </div>
        </a>
      </div>
      <div className="other-project">
        <a className="other-project-link" href="//www.mediawiki.org/">
          <div className="other-project-icon">
            <div className="sprite svg-MediaWiki-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="mediawiki.name"
            >
              MediaWiki
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="mediawiki.slogan"
            >
              Free &amp; open wiki software
            </span>
          </div>
        </a>
      </div>
      <div className="other-project">
        <a className="other-project-link" href="//www.wikisource.org/">
          <div className="other-project-icon">
            <div className="sprite svg-Wikisource-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="wikisource.name"
            >
              Wikisource
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="wikisource.slogan"
            >
              Free content library
            </span>
          </div>
        </a>
      </div>
      <div className="other-project">
        <a className="other-project-link" href="//species.wikimedia.org/">
          <div className="other-project-icon">
            <div className="sprite svg-Wikispecies-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="wikispecies.name"
            >
              Wikispecies
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="wikispecies.slogan"
            >
              Free species directory
            </span>
          </div>
        </a>
      </div>
      <div className="other-project">
        <a className="other-project-link" href="//www.wikifunctions.org/">
          <div className="other-project-icon">
            <div className="sprite svg-Wikifunctions-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="wikifunctions.name"
            >
              Wikifunctions
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="wikifunctions.slogan"
            >
              Free function library
            </span>
          </div>
        </a>
      </div>
      <div className="other-project">
        <a className="other-project-link" href="//meta.wikimedia.org/">
          <div className="other-project-icon">
            <div className="sprite svg-Meta-Wiki-logo_sister" />
          </div>
          <div className="other-project-text">
            <span
              className="other-project-title jsl10n"
              data-jsl10n="metawiki.name"
            >
              Meta-Wiki
            </span>
            <span
              className="other-project-tagline jsl10n"
              data-jsl10n="metawiki.slogan"
            >
              Community coordination &amp; documentation
            </span>
          </div>
        </a>
      </div>
    </nav>
    <hr />
    <p className="site-license">
      <small className="jsl10n" data-jsl10n="license">
        This page is available under the{" "}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/">
          Creative Commons Attribution-ShareAlike License
        </a>
      </small>
      <small className="jsl10n" data-jsl10n="terms">
        <a href="https://meta.wikimedia.org/wiki/Terms_of_use">Terms of Use</a>
      </small>
      <small className="jsl10n" data-jsl10n="privacy-policy">
        <a href="https://meta.wikimedia.org/wiki/Privacy_policy">
          Privacy Policy
        </a>
      </small>
    </p>
  </footer>
  <style
    dangerouslySetInnerHTML={{
      __html: "\n.styled-select {\n        display: block;\n    }\n"
    }}
  />
</>

  );
}

export default App;
