import React, { useState } from 'react';

import parse from 'html-react-parser';
import './article.css';
import axios from 'axios';

import CARTESIA_API_KEY from './new_key';

const textToSpeech = async (text) => {
    try {
      const response = await axios.post(
        'https://api.cartesia.ai/tts/bytes',
        {
          transcript: text,
          model_id: "sonic-english",
          voice: {
            mode: "id",
            id: "69267136-1bdc-412f-ad78-0caad210fb40"
          },
          output_format: {
            container: "wav",  
            encoding: "pcm_s16le",  
            sample_rate: 44100
          }
        },
        {
          headers: {
            'Cartesia-Version': '2024-06-10',
            'X-API-Key': CARTESIA_API_KEY
          },
          responseType: 'arraybuffer'
        }
      );
  
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    audioContext.decodeAudioData(response.data, (buffer) => {
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContext.destination);
      source.start(0);
    }, (err) => {
      console.error("Error decoding audio data", err);
    });


    } catch (error) {
      console.error('Error in text-to-speech conversion:', error);
    }
  };
  
const Response = ({ responseContent, introImg, tagline1, outline, references, searchQuery }) => {

    const parsedContent = parse(responseContent);
    references = JSON.parse(references)

    const [expandedSections, setExpandedSections] = useState({
        History: false,
        RulesAndRegulations: true,
      });
    
      const toggleSection = (sectionId) => {
        setExpandedSections(prev => ({
          ...prev,
          [sectionId]: !prev[sectionId]
        }));
      };

    return (
        <>
  <meta charSet="UTF-8" />
  <title>Basketball - Wikipedia</title>
  <link
    rel="stylesheet"
    href="/w/load.php?lang=en&modules=ext.cite.styles%7Cext.tmh.player.styles%7Cext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cext.wikimediamessages.styles%7Cjquery.makeCollapsible.styles%7Cmediawiki.page.gallery.styles%7Cskins.vector.icons%2Cstyles%7Cskins.vector.search.codex.styles%7Cwikibase.client.init&only=styles&skin=vector-2022"
  />
  <meta name="ResourceLoaderDynamicStyles" content="" />
  <link
    rel="stylesheet"
    href="/w/load.php?lang=en&modules=site.styles&only=styles&skin=vector-2022"
  />
  <meta name="generator" content="MediaWiki 1.43.0-wmf.11" />
  <meta name="referrer" content="origin" />
  <meta name="referrer" content="origin-when-cross-origin" />
  <meta name="robots" content="max-image-preview:standard" />
  <meta name="format-detection" content="telephone=no" />
  <meta
    property="og:image"
    content="https://upload.wikimedia.org/wikipedia/commons/7/73/Chicago_Bulls_and_New_Jersey_Nets%2C_March_28%2C_1991.jpg"
  />
  <meta property="og:image:width" content={1200} />
  <meta property="og:image:height" content={857} />
  <meta
    property="og:image"
    content="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Chicago_Bulls_and_New_Jersey_Nets%2C_March_28%2C_1991.jpg/800px-Chicago_Bulls_and_New_Jersey_Nets%2C_March_28%2C_1991.jpg"
  />
  <meta property="og:image:width" content={800} />
  <meta property="og:image:height" content={572} />
  <meta
    property="og:image"
    content="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Chicago_Bulls_and_New_Jersey_Nets%2C_March_28%2C_1991.jpg/640px-Chicago_Bulls_and_New_Jersey_Nets%2C_March_28%2C_1991.jpg"
  />
  <meta property="og:image:width" content={640} />
  <meta property="og:image:height" content={457} />
  <meta name="viewport" content="width=1120" />
  <meta property="og:title" content="Basketball - Wikipedia" />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="//upload.wikimedia.org" />
  <link
    rel="alternate"
    media="only screen and (max-width: 640px)"
    href="//en.m.wikipedia.org/wiki/Basketball"
  />
  <link rel="apple-touch-icon" href="/static/apple-touch/wikipedia.png" />
  <link rel="icon" href="/static/favicon/wikipedia.ico" />
  <link
    rel="search"
    type="application/opensearchdescription+xml"
    href="/w/rest.php/v1/search"
    title="Wikipedia (en)"
  />
  <link
    rel="EditURI"
    type="application/rsd+xml"
    href="//en.wikipedia.org/w/api.php?action=rsd"
  />
  <link rel="canonical" href="https://en.wikipedia.org/wiki/Basketball" />
  <link
    rel="license"
    href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
  />
  <link
    rel="alternate"
    type="application/atom+xml"
    title="Wikipedia Atom feed"
    href="/w/index.php?title=Special:RecentChanges&feed=atom"
  />
  <link rel="dns-prefetch" href="//meta.wikimedia.org" />
  <link rel="dns-prefetch" href="//login.wikimedia.org" />
  <a className="mw-jump-link" href="#bodyContent">
    Jump to content
  </a>
  <div className="vector-header-container">
    <header className="vector-header mw-header">
      <div className="vector-header-start">
        <nav className="vector-main-menu-landmark" aria-label="Site">
          <div
            id="vector-main-menu-dropdown"
            className="vector-dropdown vector-main-menu-dropdown vector-button-flush-left vector-button-flush-right"
          >
            <input
              type="checkbox"
              id="vector-main-menu-dropdown-checkbox"
              role="button"
              aria-haspopup="true"
              data-event-name="ui.dropdown-vector-main-menu-dropdown"
              className="vector-dropdown-checkbox "
              aria-label="Main menu"
            />
            <label
              id="vector-main-menu-dropdown-label"
              htmlFor="vector-main-menu-dropdown-checkbox"
              className="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only "
              aria-hidden="true"
            >
              <span className="vector-icon mw-ui-icon-menu mw-ui-icon-wikimedia-menu" />
              <span className="vector-dropdown-label-text">Main menu</span>
            </label>
            <div className="vector-dropdown-content">
              <div
                id="vector-main-menu-unpinned-container"
                className="vector-unpinned-container"
              >
                <div
                  id="vector-main-menu"
                  className="vector-main-menu vector-pinnable-element"
                >
                  <div
                    className="vector-pinnable-header vector-main-menu-pinnable-header vector-pinnable-header-unpinned"
                    data-feature-name="main-menu-pinned"
                    data-pinnable-element-id="vector-main-menu"
                    data-pinned-container-id="vector-main-menu-pinned-container"
                    data-unpinned-container-id="vector-main-menu-unpinned-container"
                  >
                    <div className="vector-pinnable-header-label">
                      Main menu
                    </div>
                    <button
                      className="vector-pinnable-header-toggle-button vector-pinnable-header-pin-button"
                      data-event-name="pinnable-header.vector-main-menu.pin"
                    >
                      move to sidebar
                    </button>
                    <button
                      className="vector-pinnable-header-toggle-button vector-pinnable-header-unpin-button"
                      data-event-name="pinnable-header.vector-main-menu.unpin"
                    >
                      hide
                    </button>
                  </div>
                  <div
                    id="p-navigation"
                    className="vector-menu mw-portlet mw-portlet-navigation"
                  >
                    <div className="vector-menu-heading">Navigation</div>
                    <div className="vector-menu-content">
                      <ul className="vector-menu-content-list">
                        <li
                          id="n-mainpage-description"
                          className="mw-list-item"
                        >
                          <a
                            href="/wiki/Main_Page"
                            title="Visit the main page [z]"
                            accessKey="z"
                          >
                            <span>Main page</span>
                          </a>
                        </li>
                        <li id="n-contents" className="mw-list-item">
                          <a
                            href="/wiki/Wikipedia:Contents"
                            title="Guides to browsing Wikipedia"
                          >
                            <span>Contents</span>
                          </a>
                        </li>
                        <li id="n-currentevents" className="mw-list-item">
                          <a
                            href="/wiki/Portal:Current_events"
                            title="Articles related to current events"
                          >
                            <span>Current events</span>
                          </a>
                        </li>
                        <li id="n-randompage" className="mw-list-item">
                          <a
                            href="/wiki/Special:Random"
                            title="Visit a randomly selected article [x]"
                            accessKey="x"
                          >
                            <span>Random article</span>
                          </a>
                        </li>
                        <li id="n-aboutsite" className="mw-list-item">
                          <a
                            href="/wiki/Wikipedia:About"
                            title="Learn about Wikipedia and how it works"
                          >
                            <span>About Wikipedia</span>
                          </a>
                        </li>
                        <li id="n-contactpage" className="mw-list-item">
                          <a
                            href="//en.wikipedia.org/wiki/Wikipedia:Contact_us"
                            title="How to contact Wikipedia"
                          >
                            <span>Contact us</span>
                          </a>
                        </li>
                        <li id="n-sitesupport" className="mw-list-item">
                          <a
                            href="https://donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&utm_medium=sidebar&utm_campaign=C13_en.wikipedia.org&uselang=en"
                            title="Support us by donating to the Wikimedia Foundation"
                          >
                            <span>Donate</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    id="p-interaction"
                    className="vector-menu mw-portlet mw-portlet-interaction"
                  >
                    <div className="vector-menu-heading">Contribute</div>
                    <div className="vector-menu-content">
                      <ul className="vector-menu-content-list">
                        <li id="n-help" className="mw-list-item">
                          <a
                            href="/wiki/Help:Contents"
                            title="Guidance on how to use and edit Wikipedia"
                          >
                            <span>Help</span>
                          </a>
                        </li>
                        <li id="n-introduction" className="mw-list-item">
                          <a
                            href="/wiki/Help:Introduction"
                            title="Learn how to edit Wikipedia"
                          >
                            <span>Learn to edit</span>
                          </a>
                        </li>
                        <li id="n-portal" className="mw-list-item">
                          <a
                            href="/wiki/Wikipedia:Community_portal"
                            title="The hub for editors"
                          >
                            <span>Community portal</span>
                          </a>
                        </li>
                        <li id="n-recentchanges" className="mw-list-item">
                          <a
                            href="/wiki/Special:RecentChanges"
                            title="A list of recent changes to Wikipedia [r]"
                            accessKey="r"
                          >
                            <span>Recent changes</span>
                          </a>
                        </li>
                        <li id="n-upload" className="mw-list-item">
                          <a
                            href="/wiki/Wikipedia:File_upload_wizard"
                            title="Add images or other media for use on Wikipedia"
                          >
                            <span>Upload file</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <a href="/wiki/Main_Page" className="mw-logo">
          {/* <img
            className="mw-logo-icon"
            src="/static/images/icons/wikipedia.png"
            alt=""
            aria-hidden="true"
            height={50}
            width={50}
          /> */}
          <span className="mw-logo-container skin-invert">
            {/* <img
              className="mw-logo-wordmark"
              alt="Wikipedia"
              src="/static/images/mobile/copyright/wikipedia-wordmark-en.svg"
              style={{ width: "7.5em", height: "1.125em" }}
            /> */}
            {/* <img
              className="mw-logo-tagline"
              alt="The Free Encyclopedia"
            //   src="/static/images/mobile/copyright/wikipedia-tagline-en.svg"
              width={117}
              height={13}
              style={{ width: "7.3125em", height: "0.8125em" }}
            /> */}
          </span>
        </a>
      </div>
      <div className="vector-header-end">
        <div
          id="p-search"
          role="search"
          className="vector-search-box-vue  vector-search-box-collapses vector-search-box-show-thumbnail vector-search-box-auto-expand-width vector-search-box"
        >
          <a
            href="/wiki/Special:Search"
            className="cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only search-toggle"
            title="Search Wikipedia [f]"
            accessKey="f"
          >
            <span className="vector-icon mw-ui-icon-search mw-ui-icon-wikimedia-search" />
            <span>Search</span>
          </a>
          <div className="vector-typeahead-search-container">
            <div className="cdx-typeahead-search cdx-typeahead-search--show-thumbnail cdx-typeahead-search--auto-expand-width">
              <form
                action="/w/index.php"
                id="searchform"
                className="cdx-search-input cdx-search-input--has-end-button"
              >
                <div
                  id="simpleSearch"
                  className="cdx-search-input__input-wrapper"
                  data-search-loc="header-moved"
                >
                  <div className="cdx-text-input cdx-text-input--has-start-icon">
                    <input
                      className="cdx-text-input__input"
                      type="search"
                      name="search"
                      placeholder="Search Wikipedia"
                      aria-label="Search Wikipedia"
                      autoCapitalize="sentences"
                      title="Search Wikipedia [f]"
                      accessKey="f"
                      id="searchInput"
                    />
                    <span className="cdx-text-input__icon cdx-text-input__start-icon" />
                  </div>
                  <input
                    type="hidden"
                    name="title"
                    defaultValue="Special:Search"
                  />
                </div>
                <button className="cdx-button cdx-search-input__end-button">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <nav
          className="vector-user-links vector-user-links-wide"
          aria-label="Personal tools"
        >
          <div className="vector-user-links-main">
            <div
              id="p-vector-user-menu-preferences"
              className="vector-menu mw-portlet emptyPortlet"
            >
              <div className="vector-menu-content">
                <ul className="vector-menu-content-list"></ul>
              </div>
            </div>
            <div
              id="p-vector-user-menu-userpage"
              className="vector-menu mw-portlet emptyPortlet"
            >
              <div className="vector-menu-content">
                <ul className="vector-menu-content-list"></ul>
              </div>
            </div>
            <nav className="vector-appearance-landmark" aria-label="Appearance">
              <div id="vector-appearance-dropdown" className="vector-dropdown ">
                <input
                  type="checkbox"
                  id="vector-appearance-dropdown-checkbox"
                  role="button"
                  aria-haspopup="true"
                  data-event-name="ui.dropdown-vector-appearance-dropdown"
                  className="vector-dropdown-checkbox "
                  aria-label="Appearance"
                />
                <label
                  id="vector-appearance-dropdown-label"
                  htmlFor="vector-appearance-dropdown-checkbox"
                  className="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only "
                  aria-hidden="true"
                >
                  <span className="vector-icon mw-ui-icon-appearance mw-ui-icon-wikimedia-appearance" />
                  <span className="vector-dropdown-label-text">Appearance</span>
                </label>
                <div className="vector-dropdown-content">
                  <div
                    id="vector-appearance-unpinned-container"
                    className="vector-unpinned-container"
                  ></div>
                </div>
              </div>
            </nav>
            <div
              id="p-vector-user-menu-notifications"
              className="vector-menu mw-portlet emptyPortlet"
            >
              <div className="vector-menu-content">
                <ul className="vector-menu-content-list"></ul>
              </div>
            </div>
            <div
              id="p-vector-user-menu-overflow"
              className="vector-menu mw-portlet"
            >
              <div className="vector-menu-content">
                <ul className="vector-menu-content-list">
                  <li
                    id="pt-createaccount-2"
                    className="user-links-collapsible-item mw-list-item user-links-collapsible-item"
                  >
                    <a
                      data-mw="interface"
                      href="/w/index.php?title=Special:CreateAccount&returnto=Basketball"
                      title="You are encouraged to create an account and log in; however, it is not mandatory"
                      className=""
                    >
                      <span>Create account</span>
                    </a>
                  </li>
                  <li
                    id="pt-login-2"
                    className="user-links-collapsible-item mw-list-item user-links-collapsible-item"
                  >
                    <a
                      data-mw="interface"
                      href="/w/index.php?title=Special:UserLogin&returnto=Basketball"
                      title="You're encouraged to log in; however, it's not mandatory. [o]"
                      accessKey="o"
                      className=""
                    >
                      <span>Log in</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            id="vector-user-links-dropdown"
            className="vector-dropdown vector-user-menu vector-button-flush-right vector-user-menu-logged-out"
            title="Log in and more options"
          >
            <input
              type="checkbox"
              id="vector-user-links-dropdown-checkbox"
              role="button"
              aria-haspopup="true"
              data-event-name="ui.dropdown-vector-user-links-dropdown"
              className="vector-dropdown-checkbox "
              aria-label="Personal tools"
            />
            <label
              id="vector-user-links-dropdown-label"
              htmlFor="vector-user-links-dropdown-checkbox"
              className="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only "
              aria-hidden="true"
            >
              <span className="vector-icon mw-ui-icon-ellipsis mw-ui-icon-wikimedia-ellipsis" />
              <span className="vector-dropdown-label-text">Personal tools</span>
            </label>
            <div className="vector-dropdown-content">
              <div
                id="p-personal"
                className="vector-menu mw-portlet mw-portlet-personal user-links-collapsible-item"
                title="User menu"
              >
                <div className="vector-menu-content">
                  <ul className="vector-menu-content-list">
                    <li
                      id="pt-createaccount"
                      className="user-links-collapsible-item mw-list-item"
                    >
                      <a
                        href="/w/index.php?title=Special:CreateAccount&returnto=Basketball"
                        title="You are encouraged to create an account and log in; however, it is not mandatory"
                      >
                        <span className="vector-icon mw-ui-icon-userAdd mw-ui-icon-wikimedia-userAdd" />{" "}
                        <span>Create account</span>
                      </a>
                    </li>
                    <li
                      id="pt-login"
                      className="user-links-collapsible-item mw-list-item"
                    >
                      <a
                        href="/w/index.php?title=Special:UserLogin&returnto=Basketball"
                        title="You're encouraged to log in; however, it's not mandatory. [o]"
                        accessKey="o"
                      >
                        <span className="vector-icon mw-ui-icon-logIn mw-ui-icon-wikimedia-logIn" />{" "}
                        <span>Log in</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="p-user-menu-anon-editor"
                className="vector-menu mw-portlet mw-portlet-user-menu-anon-editor"
              >
                <div className="vector-menu-heading">
                  Pages for logged out editors{" "}
                  <a
                    href="/wiki/Help:Introduction"
                    aria-label="Learn more about editing"
                  >
                    <span>learn more</span>
                  </a>
                </div>
                <div className="vector-menu-content">
                  <ul className="vector-menu-content-list">
                    <li id="pt-anoncontribs" className="mw-list-item">
                      <a
                        href="/wiki/Special:MyContributions"
                        title="A list of edits made from this IP address [y]"
                        accessKey="y"
                      >
                        <span>Contributions</span>
                      </a>
                    </li>
                    <li id="pt-anontalk" className="mw-list-item">
                      <a
                        href="/wiki/Special:MyTalk"
                        title="Discussion about edits from this IP address [n]"
                        accessKey="n"
                      >
                        <span>Talk</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
  <div className="mw-page-container">
    <div className="mw-page-container-inner">
      <div className="vector-sitenotice-container">
        <div id="siteNotice" className="notheme">
          {/* CentralNotice */}
        </div>
      </div>
      <div className="vector-column-start">
        <div className="vector-main-menu-container">
          <div id="mw-navigation">
            <nav
              id="mw-panel"
              className="vector-main-menu-landmark"
              aria-label="Site"
            >
              <div
                id="vector-main-menu-pinned-container"
                className="vector-pinned-container"
              ></div>
            </nav>
          </div>
        </div>
        <div className="vector-sticky-pinned-container">
          <nav
            id="mw-panel-toc"
            aria-label="Contents"
            data-event-name="ui.sidebar-toc"
            className="mw-table-of-contents-container vector-toc-landmark"
            style={{ display: 'block', position: 'static' }} 
          >
            <div
              id="vector-toc-pinned-container"
              className="vector-pinned-container"
            >

              <div
                id="vector-toc"
                className="vector-toc vector-pinnable-element"
              >
                <div
                  className="vector-pinnable-header vector-toc-pinnable-header vector-pinnable-header-pinned"
                  data-feature-name="toc-pinned"
                  data-pinnable-element-id="vector-toc"
                >
                  <h2 className="vector-pinnable-header-label">Contents</h2>
                  <button
                    className="vector-pinnable-header-toggle-button vector-pinnable-header-pin-button"
                    data-event-name="pinnable-header.vector-toc.pin"
                  >
                    move to sidebar
                  </button>
                  <button
                    className="vector-pinnable-header-toggle-button vector-pinnable-header-unpin-button"
                    data-event-name="pinnable-header.vector-toc.unpin"
                  >
                    hide
                  </button>
                </div>
                <ul className="vector-toc-contents" id="mw-panel-toc-list">
                  <li
                    id="toc-mw-content-text"
                    className="vector-toc-list-item vector-toc-level-1"
                  >
                    <a href="#" className="vector-toc-link">
                      <div className="vector-toc-text">(Top)</div>
                    </a>
                  </li>
                  
                  {outline.map((section, index) => (
                    <li
                    key={section.title}
                    id={`toc-${section.title.replace(/\s+/g, '_')}`}
                    className="vector-toc-list-item vector-toc-level-1"
                    >
                    <a className="vector-toc-link" href={`#${section.title}`}>
                        <div className="vector-toc-text">
                        <span className="vector-toc-numb">{index + 1}</span>
                        <span>{section.title}</span>
                        </div>
                    </a>
                    <button
                        aria-controls={`toc-${section.title.replace(/\s+/g, '_')}-sublist`}
                        className="cdx-button cdx-button--weight-quiet cdx-button--icon-only vector-toc-toggle"
                        onClick={() => toggleSection(section.title)}
                    >
                        <span
                        className={`vector-icon-mw-ui-icon-wikimedia-${
                            expandedSections[section.title] ? 'collapse' : 'expand'
                        }`}
                        />
                        <span>Toggle {section.title} subsection</span>
                    </button>
                    {expandedSections[section.title] && (
                        <ul
                        id={`toc-${section.title.replace(/\s+/g, '_')}-sublist`}
                        className="vector-toc-list"
                        >
                        {section.subsections.map((subsection, subIndex) => (
                            <li
                            key={subsection.id}
                            id={`toc-${subsection.id}`}
                            className="vector-toc-list-item vector-toc-level-2"
                            >
                            <a className="vector-toc-link" href={`#${subsection.id}`}>
                                <div className="vector-toc-text">
                                <span className="vector-toc-numb">
                                    {index + 1}.{subIndex + 1}
                                </span>
                                <span>{subsection.title}</span>
                                </div>
                            </a>
                            <ul
                                id={`toc-${subsection.id}-sublist`}
                                className="vector-toc-list"
                            ></ul>
                            </li>
                        ))}
                        </ul>
                    )}
                    </li>
                ))}
                  
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
      <div className="mw-content-container">
        <main id="content" className="mw-body">
          <header className="mw-body-header vector-page-titlebar">
            <nav aria-label="Contents" className="vector-toc-landmark">
              <div
                id="vector-page-titlebar-toc"
                className="vector-dropdown vector-page-titlebar-toc vector-button-flush-left"
              >
                
                <input
                  type="checkbox"
                  id="vector-page-titlebar-toc-checkbox"
                  role="button"
                  aria-haspopup="true"
                  data-event-name="ui.dropdown-vector-page-titlebar-toc"
                  className="vector-dropdown-checkbox "
                  aria-label="Toggle the table of contents"
                />
                <label
                  id="vector-page-titlebar-toc-label"
                  htmlFor="vector-page-titlebar-toc-checkbox"
                  className="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only "
                  aria-hidden="true"
                >
                  <span className="vector-icon mw-ui-icon-listBullet mw-ui-icon-wikimedia-listBullet" />
                  <span className="vector-dropdown-label-text">
                    Toggle the table of contents
                  </span>
                </label>
                <div className="vector-dropdown-content">
                  <div
                    id="vector-page-titlebar-toc-unpinned-container"
                    className="vector-unpinned-container"
                  ></div>
                </div>
              </div>
            </nav>
            
            <h1 id="firstHeading" className="firstHeading mw-first-heading">
              <span className="mw-page-title-main">{searchQuery}</span>
            </h1>
            
            <button onClick={() => textToSpeech(responseContent)}>
                Read Using Cartesia's TTS!
            </button>
            <div
              id="p-lang-btn"
              className="vector-dropdown mw-portlet mw-portlet-lang"
            >
              <input
                type="checkbox"
                id="p-lang-btn-checkbox"
                role="button"
                aria-haspopup="true"
                data-event-name="ui.dropdown-p-lang-btn"
                className="vector-dropdown-checkbox mw-interlanguage-selector"
                aria-label="Go to an article in another language. Available in 186 languages"
              />
              <label
                id="p-lang-btn-label"
                htmlFor="p-lang-btn-checkbox"
                className="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--action-progressive mw-portlet-lang-heading-186"
                aria-hidden="true"
              >
                <span className="vector-icon mw-ui-icon-language-progressive mw-ui-icon-wikimedia-language-progressive" />
                <span className="vector-dropdown-label-text">
                  186 languages
                </span>
              </label>
              <div className="vector-dropdown-content">
                <div className="vector-menu-content">
                  <ul className="vector-menu-content-list">
                    <li className="interlanguage-link interwiki-af mw-list-item">
                      <a
                        href="https://af.wikipedia.org/wiki/Basketbal"
                        title="Basketbal – Afrikaans"
                        lang="af"
                        hrefLang="af"
                        className="interlanguage-link-target"
                      >
                        <span>Afrikaans</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-als mw-list-item">
                      <a
                        href="https://als.wikipedia.org/wiki/Basketball"
                        title="Basketball – Alemannic"
                        lang="gsw"
                        hrefLang="gsw"
                        className="interlanguage-link-target"
                      >
                        <span>Alemannisch</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-am mw-list-item">
                      <a
                        href="https://am.wikipedia.org/wiki/%E1%8B%A8%E1%89%85%E1%88%AD%E1%8C%AB%E1%89%B5_%E1%8A%B3%E1%88%B5"
                        title="የቅርጫት ኳስ – Amharic"
                        lang="am"
                        hrefLang="am"
                        className="interlanguage-link-target"
                      >
                        <span>አማርኛ</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-anp mw-list-item">
                      <a
                        href="https://anp.wikipedia.org/wiki/%E0%A4%AC%E0%A5%89%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%87%E0%A4%9F%E0%A4%AC%E0%A5%89%E0%A4%B2"
                        title="बॉस्केटबॉल – Angika"
                        lang="anp"
                        hrefLang="anp"
                        className="interlanguage-link-target"
                      >
                        <span>अंगिका</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ang mw-list-item">
                      <a
                        href="https://ang.wikipedia.org/wiki/Cawl%C3%BE%C5%8D%C3%B0er"
                        title="Cawlþōðer – Old English"
                        lang="ang"
                        hrefLang="ang"
                        className="interlanguage-link-target"
                      >
                        <span>Ænglisc</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ar mw-list-item">
                      <a
                        href="https://ar.wikipedia.org/wiki/%D9%83%D8%B1%D8%A9_%D8%A7%D9%84%D8%B3%D9%84%D8%A9"
                        title="كرة السلة – Arabic"
                        lang="ar"
                        hrefLang="ar"
                        className="interlanguage-link-target"
                      >
                        <span>العربية</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-an mw-list-item">
                      <a
                        href="https://an.wikipedia.org/wiki/Baloncesto"
                        title="Baloncesto – Aragonese"
                        lang="an"
                        hrefLang="an"
                        className="interlanguage-link-target"
                      >
                        <span>Aragonés</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-hyw mw-list-item">
                      <a
                        href="https://hyw.wikipedia.org/wiki/%D5%8A%D5%A1%D5%BD%D6%84%D5%A5%D5%A9%D5%BA%D5%B8%D5%AC_(%D4%BF%D5%B8%D5%B2%D5%B8%D5%BE%D5%A1%D5%A3%D5%B6%D5%A4%D5%A1%D5%AF)"
                        title="Պասքեթպոլ (Կողովագնդակ) – Western Armenian"
                        lang="hyw"
                        hrefLang="hyw"
                        className="interlanguage-link-target"
                      >
                        <span>Արեւմտահայերէն</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ast mw-list-item">
                      <a
                        href="https://ast.wikipedia.org/wiki/Baloncestu"
                        title="Baloncestu – Asturian"
                        lang="ast"
                        hrefLang="ast"
                        className="interlanguage-link-target"
                      >
                        <span>Asturianu</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-awa mw-list-item">
                      <a
                        href="https://awa.wikipedia.org/wiki/%E0%A4%AC%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%87%E0%A4%9F%E0%A4%AC%E0%A5%89%E0%A4%B2"
                        title="बास्केटबॉल – Awadhi"
                        lang="awa"
                        hrefLang="awa"
                        className="interlanguage-link-target"
                      >
                        <span>अवधी</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-gn mw-list-item">
                      <a
                        href="https://gn.wikipedia.org/wiki/Ajakakuapyt%C4%A9"
                        title="Ajakakuapytĩ – Guarani"
                        lang="gn"
                        hrefLang="gn"
                        className="interlanguage-link-target"
                      >
                        <span>Avañe'ẽ</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-az mw-list-item">
                      <a
                        href="https://az.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Azerbaijani"
                        lang="az"
                        hrefLang="az"
                        className="interlanguage-link-target"
                      >
                        <span>Azərbaycanca</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-azb mw-list-item">
                      <a
                        href="https://azb.wikipedia.org/wiki/%D8%A8%D8%B3%DA%A9%D8%AA%D8%A8%D8%A7%D9%84"
                        title="بسکتبال – South Azerbaijani"
                        lang="azb"
                        hrefLang="azb"
                        className="interlanguage-link-target"
                      >
                        <span>تۆرکجه</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ban mw-list-item">
                      <a
                        href="https://ban.wikipedia.org/wiki/Bola_basket"
                        title="Bola basket – Balinese"
                        lang="ban"
                        hrefLang="ban"
                        className="interlanguage-link-target"
                      >
                        <span>Basa Bali</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-bn mw-list-item">
                      <a
                        href="https://bn.wikipedia.org/wiki/%E0%A6%AC%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%87%E0%A6%9F%E0%A6%AC%E0%A6%B2"
                        title="বাস্কেটবল – Bangla"
                        lang="bn"
                        hrefLang="bn"
                        className="interlanguage-link-target"
                      >
                        <span>বাংলা</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-bjn mw-list-item">
                      <a
                        href="https://bjn.wikipedia.org/wiki/Bask%C3%A9t"
                        title="Baskét – Banjar"
                        lang="bjn"
                        hrefLang="bjn"
                        className="interlanguage-link-target"
                      >
                        <span>Banjar</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-zh-min-nan mw-list-item">
                      <a
                        href="https://zh-min-nan.wikipedia.org/wiki/N%C3%A2-ki%C3%BB"
                        title="Nâ-kiû – Minnan"
                        lang="nan"
                        hrefLang="nan"
                        className="interlanguage-link-target"
                      >
                        <span>閩南語 / Bân-lâm-gú</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ba mw-list-item">
                      <a
                        href="https://ba.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Bashkir"
                        lang="ba"
                        hrefLang="ba"
                        className="interlanguage-link-target"
                      >
                        <span>Башҡортса</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-be mw-list-item">
                      <a
                        href="https://be.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Belarusian"
                        lang="be"
                        hrefLang="be"
                        className="interlanguage-link-target"
                      >
                        <span>Беларуская</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-be-x-old mw-list-item">
                      <a
                        href="https://be-tarask.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Belarusian (Taraškievica orthography)"
                        lang="be-tarask"
                        hrefLang="be-tarask"
                        className="interlanguage-link-target"
                      >
                        <span>Беларуская (тарашкевіца)</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-bcl mw-list-item">
                      <a
                        href="https://bcl.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Central Bikol"
                        lang="bcl"
                        hrefLang="bcl"
                        className="interlanguage-link-target"
                      >
                        <span>Bikol Central</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-bg mw-list-item">
                      <a
                        href="https://bg.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Bulgarian"
                        lang="bg"
                        hrefLang="bg"
                        className="interlanguage-link-target"
                      >
                        <span>Български</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-bar mw-list-item">
                      <a
                        href="https://bar.wikipedia.org/wiki/Basketboi"
                        title="Basketboi – Bavarian"
                        lang="bar"
                        hrefLang="bar"
                        className="interlanguage-link-target"
                      >
                        <span>Boarisch</span>
                      </a>
                    </li>
                    <li
                      className="interlanguage-link interwiki-bs badge-Q17437796 badge-featuredarticle mw-list-item"
                      title="featured article badge"
                    >
                      <a
                        href="https://bs.wikipedia.org/wiki/Ko%C5%A1arka"
                        title="Košarka – Bosnian"
                        lang="bs"
                        hrefLang="bs"
                        className="interlanguage-link-target"
                      >
                        <span>Bosanski</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-br mw-list-item">
                      <a
                        href="https://br.wikipedia.org/wiki/Basketball"
                        title="Basketball – Breton"
                        lang="br"
                        hrefLang="br"
                        className="interlanguage-link-target"
                      >
                        <span>Brezhoneg</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-bxr mw-list-item">
                      <a
                        href="https://bxr.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Russia Buriat"
                        lang="bxr"
                        hrefLang="bxr"
                        className="interlanguage-link-target"
                      >
                        <span>Буряад</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ca mw-list-item">
                      <a
                        href="https://ca.wikipedia.org/wiki/Basquetbol"
                        title="Basquetbol – Catalan"
                        lang="ca"
                        hrefLang="ca"
                        className="interlanguage-link-target"
                      >
                        <span>Català</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-cv mw-list-item">
                      <a
                        href="https://cv.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Chuvash"
                        lang="cv"
                        hrefLang="cv"
                        className="interlanguage-link-target"
                      >
                        <span>Чӑвашла</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-cs mw-list-item">
                      <a
                        href="https://cs.wikipedia.org/wiki/Basketbal"
                        title="Basketbal – Czech"
                        lang="cs"
                        hrefLang="cs"
                        className="interlanguage-link-target"
                      >
                        <span>Čeština</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-cy mw-list-item">
                      <a
                        href="https://cy.wikipedia.org/wiki/P%C3%AAl-fasged"
                        title="Pêl-fasged – Welsh"
                        lang="cy"
                        hrefLang="cy"
                        className="interlanguage-link-target"
                      >
                        <span>Cymraeg</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-da mw-list-item">
                      <a
                        href="https://da.wikipedia.org/wiki/Basketball"
                        title="Basketball – Danish"
                        lang="da"
                        hrefLang="da"
                        className="interlanguage-link-target"
                      >
                        <span>Dansk</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ary mw-list-item">
                      <a
                        href="https://ary.wikipedia.org/wiki/%D8%A8%D8%A7%D8%B3%D9%83%D9%8A%D8%B7"
                        title="باسكيط – Moroccan Arabic"
                        lang="ary"
                        hrefLang="ary"
                        className="interlanguage-link-target"
                      >
                        <span>الدارجة</span>
                      </a>
                    </li>
                    <li
                      className="interlanguage-link interwiki-de badge-Q17437798 badge-goodarticle mw-list-item"
                      title="good article badge"
                    >
                      <a
                        href="https://de.wikipedia.org/wiki/Basketball"
                        title="Basketball – German"
                        lang="de"
                        hrefLang="de"
                        className="interlanguage-link-target"
                      >
                        <span>Deutsch</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-et mw-list-item">
                      <a
                        href="https://et.wikipedia.org/wiki/Korvpall"
                        title="Korvpall – Estonian"
                        lang="et"
                        hrefLang="et"
                        className="interlanguage-link-target"
                      >
                        <span>Eesti</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-el mw-list-item">
                      <a
                        href="https://el.wikipedia.org/wiki/%CE%9A%CE%B1%CE%BB%CE%B1%CE%B8%CE%BF%CF%83%CF%86%CE%B1%CE%AF%CF%81%CE%B9%CF%83%CE%B7"
                        title="Καλαθοσφαίριση – Greek"
                        lang="el"
                        hrefLang="el"
                        className="interlanguage-link-target"
                      >
                        <span>Ελληνικά</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-es mw-list-item">
                      <a
                        href="https://es.wikipedia.org/wiki/Baloncesto"
                        title="Baloncesto – Spanish"
                        lang="es"
                        hrefLang="es"
                        className="interlanguage-link-target"
                      >
                        <span>Español</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-eo mw-list-item">
                      <a
                        href="https://eo.wikipedia.org/wiki/Korbopilko"
                        title="Korbopilko – Esperanto"
                        lang="eo"
                        hrefLang="eo"
                        className="interlanguage-link-target"
                      >
                        <span>Esperanto</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ext mw-list-item">
                      <a
                        href="https://ext.wikipedia.org/wiki/Baloncestu"
                        title="Baloncestu – Extremaduran"
                        lang="ext"
                        hrefLang="ext"
                        className="interlanguage-link-target"
                      >
                        <span>Estremeñu</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-eu mw-list-item">
                      <a
                        href="https://eu.wikipedia.org/wiki/Saskibaloi"
                        title="Saskibaloi – Basque"
                        lang="eu"
                        hrefLang="eu"
                        className="interlanguage-link-target"
                      >
                        <span>Euskara</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-fa mw-list-item">
                      <a
                        href="https://fa.wikipedia.org/wiki/%D8%A8%D8%B3%DA%A9%D8%AA%D8%A8%D8%A7%D9%84"
                        title="بسکتبال – Persian"
                        lang="fa"
                        hrefLang="fa"
                        className="interlanguage-link-target"
                      >
                        <span>فارسی</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-hif mw-list-item">
                      <a
                        href="https://hif.wikipedia.org/wiki/Basketball"
                        title="Basketball – Fiji Hindi"
                        lang="hif"
                        hrefLang="hif"
                        className="interlanguage-link-target"
                      >
                        <span>Fiji Hindi</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-fo mw-list-item">
                      <a
                        href="https://fo.wikipedia.org/wiki/Kurvab%C3%B3ltur"
                        title="Kurvabóltur – Faroese"
                        lang="fo"
                        hrefLang="fo"
                        className="interlanguage-link-target"
                      >
                        <span>Føroyskt</span>
                      </a>
                    </li>
                    <li
                      className="interlanguage-link interwiki-fr badge-Q17437798 badge-goodarticle mw-list-item"
                      title="good article badge"
                    >
                      <a
                        href="https://fr.wikipedia.org/wiki/Basket-ball"
                        title="Basket-ball – French"
                        lang="fr"
                        hrefLang="fr"
                        className="interlanguage-link-target"
                      >
                        <span>Français</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-fy mw-list-item">
                      <a
                        href="https://fy.wikipedia.org/wiki/Basketbal"
                        title="Basketbal – Western Frisian"
                        lang="fy"
                        hrefLang="fy"
                        className="interlanguage-link-target"
                      >
                        <span>Frysk</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-fur mw-list-item">
                      <a
                        href="https://fur.wikipedia.org/wiki/Bale_tal_zei"
                        title="Bale tal zei – Friulian"
                        lang="fur"
                        hrefLang="fur"
                        className="interlanguage-link-target"
                      >
                        <span>Furlan</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ga mw-list-item">
                      <a
                        href="https://ga.wikipedia.org/wiki/Cispheil"
                        title="Cispheil – Irish"
                        lang="ga"
                        hrefLang="ga"
                        className="interlanguage-link-target"
                      >
                        <span>Gaeilge</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-gv mw-list-item">
                      <a
                        href="https://gv.wikipedia.org/wiki/Bluckan_bascaidagh"
                        title="Bluckan bascaidagh – Manx"
                        lang="gv"
                        hrefLang="gv"
                        className="interlanguage-link-target"
                      >
                        <span>Gaelg</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-gd mw-list-item">
                      <a
                        href="https://gd.wikipedia.org/wiki/Ball-basgaid"
                        title="Ball-basgaid – Scottish Gaelic"
                        lang="gd"
                        hrefLang="gd"
                        className="interlanguage-link-target"
                      >
                        <span>Gàidhlig</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-gl mw-list-item">
                      <a
                        href="https://gl.wikipedia.org/wiki/Baloncesto"
                        title="Baloncesto – Galician"
                        lang="gl"
                        hrefLang="gl"
                        className="interlanguage-link-target"
                      >
                        <span>Galego</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-gu mw-list-item">
                      <a
                        href="https://gu.wikipedia.org/wiki/%E0%AA%AC%E0%AA%BE%E0%AA%B8%E0%AB%8D%E0%AA%95%E0%AB%87%E0%AA%9F%E0%AA%AC%E0%AB%8B%E0%AA%B2_(%E0%AA%B0%E0%AA%AE%E0%AA%A4)"
                        title="બાસ્કેટબોલ (રમત) – Gujarati"
                        lang="gu"
                        hrefLang="gu"
                        className="interlanguage-link-target"
                      >
                        <span>ગુજરાતી</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-hak mw-list-item">
                      <a
                        href="https://hak.wikipedia.org/wiki/L%C3%A0m-khi%C3%B9"
                        title="Làm-khiù – Hakka Chinese"
                        lang="hak"
                        hrefLang="hak"
                        className="interlanguage-link-target"
                      >
                        <span>客家語/Hak-kâ-ngî</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ko mw-list-item">
                      <a
                        href="https://ko.wikipedia.org/wiki/%EB%86%8D%EA%B5%AC"
                        title="농구 – Korean"
                        lang="ko"
                        hrefLang="ko"
                        className="interlanguage-link-target"
                      >
                        <span>한국어</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ha mw-list-item">
                      <a
                        href="https://ha.wikipedia.org/wiki/Kwallon_kwando"
                        title="Kwallon kwando – Hausa"
                        lang="ha"
                        hrefLang="ha"
                        className="interlanguage-link-target"
                      >
                        <span>Hausa</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-hy mw-list-item">
                      <a
                        href="https://hy.wikipedia.org/wiki/%D4%B2%D5%A1%D5%BD%D5%AF%D5%A5%D5%BF%D5%A2%D5%B8%D5%AC"
                        title="Բասկետբոլ – Armenian"
                        lang="hy"
                        hrefLang="hy"
                        className="interlanguage-link-target"
                      >
                        <span>Հայերեն</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-hi mw-list-item">
                      <a
                        href="https://hi.wikipedia.org/wiki/%E0%A4%AC%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%87%E0%A4%9F%E0%A4%AC%E0%A5%89%E0%A4%B2"
                        title="बास्केटबॉल – Hindi"
                        lang="hi"
                        hrefLang="hi"
                        className="interlanguage-link-target"
                      >
                        <span>हिन्दी</span>
                      </a>
                    </li>
                    <li
                      className="interlanguage-link interwiki-hr badge-Q17437796 badge-featuredarticle mw-list-item"
                      title="featured article badge"
                    >
                      <a
                        href="https://hr.wikipedia.org/wiki/Ko%C5%A1arka"
                        title="Košarka – Croatian"
                        lang="hr"
                        hrefLang="hr"
                        className="interlanguage-link-target"
                      >
                        <span>Hrvatski</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-io mw-list-item">
                      <a
                        href="https://io.wikipedia.org/wiki/Basketbalo"
                        title="Basketbalo – Ido"
                        lang="io"
                        hrefLang="io"
                        className="interlanguage-link-target"
                      >
                        <span>Ido</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ig mw-list-item">
                      <a
                        href="https://ig.wikipedia.org/wiki/Basketball"
                        title="Basketball – Igbo"
                        lang="ig"
                        hrefLang="ig"
                        className="interlanguage-link-target"
                      >
                        <span>Igbo</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ilo mw-list-item">
                      <a
                        href="https://ilo.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Iloko"
                        lang="ilo"
                        hrefLang="ilo"
                        className="interlanguage-link-target"
                      >
                        <span>Ilokano</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-id mw-list-item">
                      <a
                        href="https://id.wikipedia.org/wiki/Bola_basket"
                        title="Bola basket – Indonesian"
                        lang="id"
                        hrefLang="id"
                        className="interlanguage-link-target"
                      >
                        <span>Bahasa Indonesia</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ia mw-list-item">
                      <a
                        href="https://ia.wikipedia.org/wiki/Basketball"
                        title="Basketball – Interlingua"
                        lang="ia"
                        hrefLang="ia"
                        className="interlanguage-link-target"
                      >
                        <span>Interlingua</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ie mw-list-item">
                      <a
                        href="https://ie.wikipedia.org/wiki/Basketball"
                        title="Basketball – Interlingue"
                        lang="ie"
                        hrefLang="ie"
                        className="interlanguage-link-target"
                      >
                        <span>Interlingue</span>
                      </a>
                    </li>
                    <li
                      className="interlanguage-link interwiki-is badge-Q17437798 badge-goodarticle mw-list-item"
                      title="good article badge"
                    >
                      <a
                        href="https://is.wikipedia.org/wiki/K%C3%B6rfuknattleikur"
                        title="Körfuknattleikur – Icelandic"
                        lang="is"
                        hrefLang="is"
                        className="interlanguage-link-target"
                      >
                        <span>Íslenska</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-it mw-list-item">
                      <a
                        href="https://it.wikipedia.org/wiki/Pallacanestro"
                        title="Pallacanestro – Italian"
                        lang="it"
                        hrefLang="it"
                        className="interlanguage-link-target"
                      >
                        <span>Italiano</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-he mw-list-item">
                      <a
                        href="https://he.wikipedia.org/wiki/%D7%9B%D7%93%D7%95%D7%A8%D7%A1%D7%9C"
                        title="כדורסל – Hebrew"
                        lang="he"
                        hrefLang="he"
                        className="interlanguage-link-target"
                      >
                        <span>עברית</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-jv mw-list-item">
                      <a
                        href="https://jv.wikipedia.org/wiki/Bask%C3%A8t"
                        title="Baskèt – Javanese"
                        lang="jv"
                        hrefLang="jv"
                        className="interlanguage-link-target"
                      >
                        <span>Jawa</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-kbp mw-list-item">
                      <a
                        href="https://kbp.wikipedia.org/wiki/%C6%89aaku%C9%96e_pombo"
                        title="Ɖaakuɖe pombo – Kabiye"
                        lang="kbp"
                        hrefLang="kbp"
                        className="interlanguage-link-target"
                      >
                        <span>Kabɩyɛ</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-kn mw-list-item">
                      <a
                        href="https://kn.wikipedia.org/wiki/%E0%B2%AC%E0%B3%8D%E0%B2%AF%E0%B2%BE%E0%B2%B8%E0%B3%8D%E0%B2%95%E0%B3%86%E0%B2%9F%E0%B3%8D%E2%80%8C%E0%B2%AC%E0%B2%BE%E0%B2%B2%E0%B3%8D%E2%80%8C"
                        title="ಬ್ಯಾಸ್ಕೆಟ್‌ಬಾಲ್‌ – Kannada"
                        lang="kn"
                        hrefLang="kn"
                        className="interlanguage-link-target"
                      >
                        <span>ಕನ್ನಡ</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ka mw-list-item">
                      <a
                        href="https://ka.wikipedia.org/wiki/%E1%83%99%E1%83%90%E1%83%9A%E1%83%90%E1%83%97%E1%83%91%E1%83%A3%E1%83%A0%E1%83%97%E1%83%98"
                        title="კალათბურთი – Georgian"
                        lang="ka"
                        hrefLang="ka"
                        className="interlanguage-link-target"
                      >
                        <span>ქართული</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-kk mw-list-item">
                      <a
                        href="https://kk.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Kazakh"
                        lang="kk"
                        hrefLang="kk"
                        className="interlanguage-link-target"
                      >
                        <span>Қазақша</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-kw mw-list-item">
                      <a
                        href="https://kw.wikipedia.org/wiki/Pel_ganstell"
                        title="Pel ganstell – Cornish"
                        lang="kw"
                        hrefLang="kw"
                        className="interlanguage-link-target"
                      >
                        <span>Kernowek</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-rw mw-list-item">
                      <a
                        href="https://rw.wikipedia.org/wiki/Umupira_w%E2%80%99agatebo"
                        title="Umupira w’agatebo – Kinyarwanda"
                        lang="rw"
                        hrefLang="rw"
                        className="interlanguage-link-target"
                      >
                        <span>Ikinyarwanda</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sw mw-list-item">
                      <a
                        href="https://sw.wikipedia.org/wiki/Mpira_wa_kikapu"
                        title="Mpira wa kikapu – Swahili"
                        lang="sw"
                        hrefLang="sw"
                        className="interlanguage-link-target"
                      >
                        <span>Kiswahili</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-kv mw-list-item">
                      <a
                        href="https://kv.wikipedia.org/wiki/%D0%9A%D1%83%D0%B4%D1%81%D1%8F%D1%80"
                        title="Кудсяр – Komi"
                        lang="kv"
                        hrefLang="kv"
                        className="interlanguage-link-target"
                      >
                        <span>Коми</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ht mw-list-item">
                      <a
                        href="https://ht.wikipedia.org/wiki/Bask%C3%A8tb%C3%B2l"
                        title="Baskètbòl – Haitian Creole"
                        lang="ht"
                        hrefLang="ht"
                        className="interlanguage-link-target"
                      >
                        <span>Kreyòl ayisyen</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ku mw-list-item">
                      <a
                        href="https://ku.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Kurdish"
                        lang="ku"
                        hrefLang="ku"
                        className="interlanguage-link-target"
                      >
                        <span>Kurdî</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ky mw-list-item">
                      <a
                        href="https://ky.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Kyrgyz"
                        lang="ky"
                        hrefLang="ky"
                        className="interlanguage-link-target"
                      >
                        <span>Кыргызча</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-lbe mw-list-item">
                      <a
                        href="https://lbe.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Lak"
                        lang="lbe"
                        hrefLang="lbe"
                        className="interlanguage-link-target"
                      >
                        <span>Лакку</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-lo mw-list-item">
                      <a
                        href="https://lo.wikipedia.org/wiki/%E0%BA%9A%E0%BA%B2%E0%BA%99%E0%BA%9A%E0%BB%89%E0%BA%A7%E0%BA%87"
                        title="ບານບ້ວງ – Lao"
                        lang="lo"
                        hrefLang="lo"
                        className="interlanguage-link-target"
                      >
                        <span>ລາວ</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-la mw-list-item">
                      <a
                        href="https://la.wikipedia.org/wiki/Canistriludium"
                        title="Canistriludium – Latin"
                        lang="la"
                        hrefLang="la"
                        className="interlanguage-link-target"
                      >
                        <span>Latina</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-lv mw-list-item">
                      <a
                        href="https://lv.wikipedia.org/wiki/Basketbols"
                        title="Basketbols – Latvian"
                        lang="lv"
                        hrefLang="lv"
                        className="interlanguage-link-target"
                      >
                        <span>Latviešu</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-lb mw-list-item">
                      <a
                        href="https://lb.wikipedia.org/wiki/Basketball"
                        title="Basketball – Luxembourgish"
                        lang="lb"
                        hrefLang="lb"
                        className="interlanguage-link-target"
                      >
                        <span>Lëtzebuergesch</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-lez mw-list-item">
                      <a
                        href="https://lez.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Lezghian"
                        lang="lez"
                        hrefLang="lez"
                        className="interlanguage-link-target"
                      >
                        <span>Лезги</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-lt mw-list-item">
                      <a
                        href="https://lt.wikipedia.org/wiki/Krep%C5%A1inis"
                        title="Krepšinis – Lithuanian"
                        lang="lt"
                        hrefLang="lt"
                        className="interlanguage-link-target"
                      >
                        <span>Lietuvių</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-lij mw-list-item">
                      <a
                        href="https://lij.wikipedia.org/wiki/Ballabanastra"
                        title="Ballabanastra – Ligurian"
                        lang="lij"
                        hrefLang="lij"
                        className="interlanguage-link-target"
                      >
                        <span>Ligure</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ln mw-list-item">
                      <a
                        href="https://ln.wikipedia.org/wiki/Mot%C3%B3pi_mwa_dang%C3%BA"
                        title="Motópi mwa dangú – Lingala"
                        lang="ln"
                        hrefLang="ln"
                        className="interlanguage-link-target"
                      >
                        <span>Lingála</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-lfn mw-list-item">
                      <a
                        href="https://lfn.wikipedia.org/wiki/Bascetbal"
                        title="Bascetbal – Lingua Franca Nova"
                        lang="lfn"
                        hrefLang="lfn"
                        className="interlanguage-link-target"
                      >
                        <span>Lingua Franca Nova</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-olo mw-list-item">
                      <a
                        href="https://olo.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Livvi-Karelian"
                        lang="olo"
                        hrefLang="olo"
                        className="interlanguage-link-target"
                      >
                        <span>Livvinkarjala</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-hu mw-list-item">
                      <a
                        href="https://hu.wikipedia.org/wiki/Kos%C3%A1rlabda"
                        title="Kosárlabda – Hungarian"
                        lang="hu"
                        hrefLang="hu"
                        className="interlanguage-link-target"
                      >
                        <span>Magyar</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-mai mw-list-item">
                      <a
                        href="https://mai.wikipedia.org/wiki/%E0%A4%AC%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%87%E0%A4%9F%E0%A4%AC%E0%A4%B2"
                        title="बास्केटबल – Maithili"
                        lang="mai"
                        hrefLang="mai"
                        className="interlanguage-link-target"
                      >
                        <span>मैथिली</span>
                      </a>
                    </li>
                    <li
                      className="interlanguage-link interwiki-mk badge-Q17437796 badge-featuredarticle mw-list-item"
                      title="featured article badge"
                    >
                      <a
                        href="https://mk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%88%D0%B0%D1%80%D0%BA%D0%B0"
                        title="Кошарка – Macedonian"
                        lang="mk"
                        hrefLang="mk"
                        className="interlanguage-link-target"
                      >
                        <span>Македонски</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ml mw-list-item">
                      <a
                        href="https://ml.wikipedia.org/wiki/%E0%B4%AC%E0%B4%BE%E0%B4%B8%E0%B5%8D%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B5%8D%E0%B4%AC%E0%B5%8B%E0%B5%BE"
                        title="ബാസ്ക്കറ്റ്ബോൾ – Malayalam"
                        lang="ml"
                        hrefLang="ml"
                        className="interlanguage-link-target"
                      >
                        <span>മലയാളം</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-mt mw-list-item">
                      <a
                        href="https://mt.wikipedia.org/wiki/Baskitbol"
                        title="Baskitbol – Maltese"
                        lang="mt"
                        hrefLang="mt"
                        className="interlanguage-link-target"
                      >
                        <span>Malti</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-mi mw-list-item">
                      <a
                        href="https://mi.wikipedia.org/wiki/Poit%C5%ABkohu"
                        title="Poitūkohu – Māori"
                        lang="mi"
                        hrefLang="mi"
                        className="interlanguage-link-target"
                      >
                        <span>Māori</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-mr mw-list-item">
                      <a
                        href="https://mr.wikipedia.org/wiki/%E0%A4%AC%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%87%E0%A4%9F%E0%A4%AC%E0%A5%89%E0%A4%B2"
                        title="बास्केटबॉल – Marathi"
                        lang="mr"
                        hrefLang="mr"
                        className="interlanguage-link-target"
                      >
                        <span>मराठी</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-xmf mw-list-item">
                      <a
                        href="https://xmf.wikipedia.org/wiki/%E1%83%99%E1%83%90%E1%83%A0%E1%83%90%E1%83%A9%E1%83%AE%E1%83%90%E1%83%91%E1%83%A3%E1%83%A0%E1%83%97%E1%83%98"
                        title="კარაჩხაბურთი – Mingrelian"
                        lang="xmf"
                        hrefLang="xmf"
                        className="interlanguage-link-target"
                      >
                        <span>მარგალური</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-arz mw-list-item">
                      <a
                        href="https://arz.wikipedia.org/wiki/%D9%83%D9%88%D8%B1%D8%A9_%D8%B3%D9%84%D9%87"
                        title="كورة سله – Egyptian Arabic"
                        lang="arz"
                        hrefLang="arz"
                        className="interlanguage-link-target"
                      >
                        <span>مصرى</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-mzn mw-list-item">
                      <a
                        href="https://mzn.wikipedia.org/wiki/%D8%A8%D8%B3%DA%A9%D8%AA%D9%88%D8%A7%D9%84"
                        title="بسکتوال – Mazanderani"
                        lang="mzn"
                        hrefLang="mzn"
                        className="interlanguage-link-target"
                      >
                        <span>مازِرونی</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ms mw-list-item">
                      <a
                        href="https://ms.wikipedia.org/wiki/Bola_keranjang"
                        title="Bola keranjang – Malay"
                        lang="ms"
                        hrefLang="ms"
                        className="interlanguage-link-target"
                      >
                        <span>Bahasa Melayu</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-min mw-list-item">
                      <a
                        href="https://min.wikipedia.org/wiki/Bola_basket"
                        title="Bola basket – Minangkabau"
                        lang="min"
                        hrefLang="min"
                        className="interlanguage-link-target"
                      >
                        <span>Minangkabau</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-cdo mw-list-item">
                      <a
                        href="https://cdo.wikipedia.org/wiki/L%C3%A0i-gi%C3%B9"
                        title="Lài-giù – Mindong"
                        lang="cdo"
                        hrefLang="cdo"
                        className="interlanguage-link-target"
                      >
                        <span>閩東語 / Mìng-dĕ̤ng-ngṳ̄</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-mwl mw-list-item">
                      <a
                        href="https://mwl.wikipedia.org/wiki/Basquetebol"
                        title="Basquetebol – Mirandese"
                        lang="mwl"
                        hrefLang="mwl"
                        className="interlanguage-link-target"
                      >
                        <span>Mirandés</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-mn mw-list-item">
                      <a
                        href="https://mn.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B3%D1%81%D0%B0%D0%BD_%D0%B1%D3%A9%D0%BC%D0%B1%D3%A9%D0%B3"
                        title="Сагсан бөмбөг – Mongolian"
                        lang="mn"
                        hrefLang="mn"
                        className="interlanguage-link-target"
                      >
                        <span>Монгол</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-my mw-list-item">
                      <a
                        href="https://my.wikipedia.org/wiki/%E1%80%98%E1%80%90%E1%80%BA%E1%80%85%E1%80%80%E1%80%80%E1%80%BA%E1%80%98%E1%80%B1%E1%80%AC"
                        title="ဘတ်စကက်ဘော – Burmese"
                        lang="my"
                        hrefLang="my"
                        className="interlanguage-link-target"
                      >
                        <span>မြန်မာဘာသာ</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-fj mw-list-item">
                      <a
                        href="https://fj.wikipedia.org/wiki/Basiketibolo"
                        title="Basiketibolo – Fijian"
                        lang="fj"
                        hrefLang="fj"
                        className="interlanguage-link-target"
                      >
                        <span>Na Vosa Vakaviti</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-nl mw-list-item">
                      <a
                        href="https://nl.wikipedia.org/wiki/Basketbal"
                        title="Basketbal – Dutch"
                        lang="nl"
                        hrefLang="nl"
                        className="interlanguage-link-target"
                      >
                        <span>Nederlands</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ne mw-list-item">
                      <a
                        href="https://ne.wikipedia.org/wiki/%E0%A4%AC%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%87%E0%A4%9F%E0%A4%AC%E0%A4%B2"
                        title="बास्केटबल – Nepali"
                        lang="ne"
                        hrefLang="ne"
                        className="interlanguage-link-target"
                      >
                        <span>नेपाली</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-new mw-list-item">
                      <a
                        href="https://new.wikipedia.org/wiki/%E0%A4%AC%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%87%E0%A4%9F%E0%A4%AC%E0%A4%B2"
                        title="बास्केटबल – Newari"
                        lang="new"
                        hrefLang="new"
                        className="interlanguage-link-target"
                      >
                        <span>नेपाल भाषा</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ja mw-list-item">
                      <a
                        href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%B9%E3%82%B1%E3%83%83%E3%83%88%E3%83%9C%E3%83%BC%E3%83%AB"
                        title="バスケットボール – Japanese"
                        lang="ja"
                        hrefLang="ja"
                        className="interlanguage-link-target"
                      >
                        <span>日本語</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ce mw-list-item">
                      <a
                        href="https://ce.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Chechen"
                        lang="ce"
                        hrefLang="ce"
                        className="interlanguage-link-target"
                      >
                        <span>Нохчийн</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-pih mw-list-item">
                      <a
                        href="https://pih.wikipedia.org/wiki/Basketball"
                        title="Basketball – Norfuk / Pitkern"
                        lang="pih"
                        hrefLang="pih"
                        className="interlanguage-link-target"
                      >
                        <span>Norfuk / Pitkern</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-no mw-list-item">
                      <a
                        href="https://no.wikipedia.org/wiki/Basketball"
                        title="Basketball – Norwegian Bokmål"
                        lang="nb"
                        hrefLang="nb"
                        className="interlanguage-link-target"
                      >
                        <span>Norsk bokmål</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-nn mw-list-item">
                      <a
                        href="https://nn.wikipedia.org/wiki/Korgball"
                        title="Korgball – Norwegian Nynorsk"
                        lang="nn"
                        hrefLang="nn"
                        className="interlanguage-link-target"
                      >
                        <span>Norsk nynorsk</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-nov mw-list-item">
                      <a
                        href="https://nov.wikipedia.org/wiki/Basketbale"
                        title="Basketbale – Novial"
                        lang="nov"
                        hrefLang="nov"
                        className="interlanguage-link-target"
                      >
                        <span>Novial</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-oc mw-list-item">
                      <a
                        href="https://oc.wikipedia.org/wiki/Basquetb%C3%B2l"
                        title="Basquetbòl – Occitan"
                        lang="oc"
                        hrefLang="oc"
                        className="interlanguage-link-target"
                      >
                        <span>Occitan</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-mhr mw-list-item">
                      <a
                        href="https://mhr.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Eastern Mari"
                        lang="mhr"
                        hrefLang="mhr"
                        className="interlanguage-link-target"
                      >
                        <span>Олык марий</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-uz mw-list-item">
                      <a
                        href="https://uz.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Uzbek"
                        lang="uz"
                        hrefLang="uz"
                        className="interlanguage-link-target"
                      >
                        <span>Oʻzbekcha / ўзбекча</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-pa mw-list-item">
                      <a
                        href="https://pa.wikipedia.org/wiki/%E0%A8%AC%E0%A8%BE%E0%A8%B8%E0%A8%95%E0%A8%9F%E0%A8%AC%E0%A8%BE%E0%A8%B2"
                        title="ਬਾਸਕਟਬਾਲ – Punjabi"
                        lang="pa"
                        hrefLang="pa"
                        className="interlanguage-link-target"
                      >
                        <span>ਪੰਜਾਬੀ</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-pag mw-list-item">
                      <a
                        href="https://pag.wikipedia.org/wiki/Basketball"
                        title="Basketball – Pangasinan"
                        lang="pag"
                        hrefLang="pag"
                        className="interlanguage-link-target"
                      >
                        <span>Pangasinan</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-pnb mw-list-item">
                      <a
                        href="https://pnb.wikipedia.org/wiki/%D8%A8%D8%A7%D8%B3%DA%A9%D9%B9_%D8%A8%D8%A7%D9%84"
                        title="باسکٹ بال – Western Punjabi"
                        lang="pnb"
                        hrefLang="pnb"
                        className="interlanguage-link-target"
                      >
                        <span>پنجابی</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ps mw-list-item">
                      <a
                        href="https://ps.wikipedia.org/wiki/%D8%A8%D8%A7%D8%B3%DA%A9%DB%90%D9%BC%D8%A8%D8%A7%D9%84"
                        title="باسکېټبال – Pashto"
                        lang="ps"
                        hrefLang="ps"
                        className="interlanguage-link-target"
                      >
                        <span>پښتو</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-jam mw-list-item">
                      <a
                        href="https://jam.wikipedia.org/wiki/Baaskitbaal"
                        title="Baaskitbaal – Jamaican Creole English"
                        lang="jam"
                        hrefLang="jam"
                        className="interlanguage-link-target"
                      >
                        <span>Patois</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-nds mw-list-item">
                      <a
                        href="https://nds.wikipedia.org/wiki/Basketball"
                        title="Basketball – Low German"
                        lang="nds"
                        hrefLang="nds"
                        className="interlanguage-link-target"
                      >
                        <span>Plattdüütsch</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-pl mw-list-item">
                      <a
                        href="https://pl.wikipedia.org/wiki/Koszyk%C3%B3wka"
                        title="Koszykówka – Polish"
                        lang="pl"
                        hrefLang="pl"
                        className="interlanguage-link-target"
                      >
                        <span>Polski</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-pt mw-list-item">
                      <a
                        href="https://pt.wikipedia.org/wiki/Basquetebol"
                        title="Basquetebol – Portuguese"
                        lang="pt"
                        hrefLang="pt"
                        className="interlanguage-link-target"
                      >
                        <span>Português</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-kaa mw-list-item">
                      <a
                        href="https://kaa.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Kara-Kalpak"
                        lang="kaa"
                        hrefLang="kaa"
                        className="interlanguage-link-target"
                      >
                        <span>Qaraqalpaqsha</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ro mw-list-item">
                      <a
                        href="https://ro.wikipedia.org/wiki/Baschet"
                        title="Baschet – Romanian"
                        lang="ro"
                        hrefLang="ro"
                        className="interlanguage-link-target"
                      >
                        <span>Română</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-rm mw-list-item">
                      <a
                        href="https://rm.wikipedia.org/wiki/Ballabasket"
                        title="Ballabasket – Romansh"
                        lang="rm"
                        hrefLang="rm"
                        className="interlanguage-link-target"
                      >
                        <span>Rumantsch</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-qu mw-list-item">
                      <a
                        href="https://qu.wikipedia.org/wiki/Isanka_rump%27u"
                        title="Isanka rump'u – Quechua"
                        lang="qu"
                        hrefLang="qu"
                        className="interlanguage-link-target"
                      >
                        <span>Runa Simi</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-rue mw-list-item">
                      <a
                        href="https://rue.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%B0%D0%BB"
                        title="Баскетбал – Rusyn"
                        lang="rue"
                        hrefLang="rue"
                        className="interlanguage-link-target"
                      >
                        <span>Русиньскый</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ru mw-list-item">
                      <a
                        href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Russian"
                        lang="ru"
                        hrefLang="ru"
                        className="interlanguage-link-target"
                      >
                        <span>Русский</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sah mw-list-item">
                      <a
                        href="https://sah.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Yakut"
                        lang="sah"
                        hrefLang="sah"
                        className="interlanguage-link-target"
                      >
                        <span>Саха тыла</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-szy mw-list-item">
                      <a
                        href="https://szy.wikipedia.org/wiki/basketball"
                        title="basketball – Sakizaya"
                        lang="szy"
                        hrefLang="szy"
                        className="interlanguage-link-target"
                      >
                        <span>Sakizaya</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sm mw-list-item">
                      <a
                        href="https://sm.wikipedia.org/wiki/Pasiketipolo"
                        title="Pasiketipolo – Samoan"
                        lang="sm"
                        hrefLang="sm"
                        className="interlanguage-link-target"
                      >
                        <span>Gagana Samoa</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sa mw-list-item">
                      <a
                        href="https://sa.wikipedia.org/wiki/%E0%A4%AC%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A5%87%E0%A4%9F%E0%A5%8D%E0%A4%AC%E0%A4%BE%E0%A4%B2%E0%A5%8D-%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%A1%E0%A4%BE"
                        title="बास्केट्बाल्-क्रीडा – Sanskrit"
                        lang="sa"
                        hrefLang="sa"
                        className="interlanguage-link-target"
                      >
                        <span>संस्कृतम्</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sat mw-list-item">
                      <a
                        href="https://sat.wikipedia.org/wiki/%E1%B1%B5%E1%B1%9F%E1%B1%A5%E1%B1%A0%E1%B1%AE%E1%B1%B4%E1%B1%B5%E1%B1%9A%E1%B1%9E"
                        title="ᱵᱟᱥᱠᱮᱴᱵᱚᱞ – Santali"
                        lang="sat"
                        hrefLang="sat"
                        className="interlanguage-link-target"
                      >
                        <span>ᱥᱟᱱᱛᱟᱲᱤ</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sc mw-list-item">
                      <a
                        href="https://sc.wikipedia.org/wiki/Botzacanastra"
                        title="Botzacanastra – Sardinian"
                        lang="sc"
                        hrefLang="sc"
                        className="interlanguage-link-target"
                      >
                        <span>Sardu</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sco mw-list-item">
                      <a
                        href="https://sco.wikipedia.org/wiki/Basketbaw"
                        title="Basketbaw – Scots"
                        lang="sco"
                        hrefLang="sco"
                        className="interlanguage-link-target"
                      >
                        <span>Scots</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-nso mw-list-item">
                      <a
                        href="https://nso.wikipedia.org/wiki/Kgwele_ya_ntlatlana"
                        title="Kgwele ya ntlatlana – Northern Sotho"
                        lang="nso"
                        hrefLang="nso"
                        className="interlanguage-link-target"
                      >
                        <span>Sesotho sa Leboa</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sq mw-list-item">
                      <a
                        href="https://sq.wikipedia.org/wiki/Basketbolli"
                        title="Basketbolli – Albanian"
                        lang="sq"
                        hrefLang="sq"
                        className="interlanguage-link-target"
                      >
                        <span>Shqip</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-scn mw-list-item">
                      <a
                        href="https://scn.wikipedia.org/wiki/Palla_a_canistru"
                        title="Palla a canistru – Sicilian"
                        lang="scn"
                        hrefLang="scn"
                        className="interlanguage-link-target"
                      >
                        <span>Sicilianu</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-si mw-list-item">
                      <a
                        href="https://si.wikipedia.org/wiki/%E0%B6%B4%E0%B7%90%E0%B7%83%E0%B7%92%E0%B6%B4%E0%B6%B1%E0%B7%8A%E0%B6%AF%E0%B7%94"
                        title="පැසිපන්දු – Sinhala"
                        lang="si"
                        hrefLang="si"
                        className="interlanguage-link-target"
                      >
                        <span>සිංහල</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-simple mw-list-item">
                      <a
                        href="https://simple.wikipedia.org/wiki/Basketball"
                        title="Basketball – Simple English"
                        lang="en-simple"
                        hrefLang="en-simple"
                        className="interlanguage-link-target"
                      >
                        <span>Simple English</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sd mw-list-item">
                      <a
                        href="https://sd.wikipedia.org/wiki/%D8%A8%D8%A7%D8%B3%DA%AA%D9%BD_%D8%A8%D8%A7%D9%84"
                        title="باسڪٽ بال – Sindhi"
                        lang="sd"
                        hrefLang="sd"
                        className="interlanguage-link-target"
                      >
                        <span>سنڌي</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sk mw-list-item">
                      <a
                        href="https://sk.wikipedia.org/wiki/Basketbal"
                        title="Basketbal – Slovak"
                        lang="sk"
                        hrefLang="sk"
                        className="interlanguage-link-target"
                      >
                        <span>Slovenčina</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sl mw-list-item">
                      <a
                        href="https://sl.wikipedia.org/wiki/Ko%C5%A1arka"
                        title="Košarka – Slovenian"
                        lang="sl"
                        hrefLang="sl"
                        className="interlanguage-link-target"
                      >
                        <span>Slovenščina</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-szl mw-list-item">
                      <a
                        href="https://szl.wikipedia.org/wiki/Korbbal"
                        title="Korbbal – Silesian"
                        lang="szl"
                        hrefLang="szl"
                        className="interlanguage-link-target"
                      >
                        <span>Ślůnski</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-so mw-list-item">
                      <a
                        href="https://so.wikipedia.org/wiki/Kubadda_Koleyga"
                        title="Kubadda Koleyga – Somali"
                        lang="so"
                        hrefLang="so"
                        className="interlanguage-link-target"
                      >
                        <span>Soomaaliga</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ckb mw-list-item">
                      <a
                        href="https://ckb.wikipedia.org/wiki/%D8%AA%DB%86%D9%BE%DB%8C_%D8%B3%DB%95%D8%A8%DB%95%D8%AA%DB%95"
                        title="تۆپی سەبەتە – Central Kurdish"
                        lang="ckb"
                        hrefLang="ckb"
                        className="interlanguage-link-target"
                      >
                        <span>کوردی</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sr mw-list-item">
                      <a
                        href="https://sr.wikipedia.org/wiki/%D0%9A%D0%BE%D1%88%D0%B0%D1%80%D0%BA%D0%B0"
                        title="Кошарка – Serbian"
                        lang="sr"
                        hrefLang="sr"
                        className="interlanguage-link-target"
                      >
                        <span>Српски / srpski</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sh mw-list-item">
                      <a
                        href="https://sh.wikipedia.org/wiki/Ko%C5%A1arka"
                        title="Košarka – Serbo-Croatian"
                        lang="sh"
                        hrefLang="sh"
                        className="interlanguage-link-target"
                      >
                        <span>Srpskohrvatski / српскохрватски</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-fi mw-list-item">
                      <a
                        href="https://fi.wikipedia.org/wiki/Koripallo"
                        title="Koripallo – Finnish"
                        lang="fi"
                        hrefLang="fi"
                        className="interlanguage-link-target"
                      >
                        <span>Suomi</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-sv mw-list-item">
                      <a
                        href="https://sv.wikipedia.org/wiki/Basket"
                        title="Basket – Swedish"
                        lang="sv"
                        hrefLang="sv"
                        className="interlanguage-link-target"
                      >
                        <span>Svenska</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-tl mw-list-item">
                      <a
                        href="https://tl.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Tagalog"
                        lang="tl"
                        hrefLang="tl"
                        className="interlanguage-link-target"
                      >
                        <span>Tagalog</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ta mw-list-item">
                      <a
                        href="https://ta.wikipedia.org/wiki/%E0%AE%95%E0%AF%82%E0%AE%9F%E0%AF%88%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%AE%E0%AF%8D"
                        title="கூடைப்பந்தாட்டம் – Tamil"
                        lang="ta"
                        hrefLang="ta"
                        className="interlanguage-link-target"
                      >
                        <span>தமிழ்</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-kab mw-list-item">
                      <a
                        href="https://kab.wikipedia.org/wiki/Takurt_n_Uqecwal"
                        title="Takurt n Uqecwal – Kabyle"
                        lang="kab"
                        hrefLang="kab"
                        className="interlanguage-link-target"
                      >
                        <span>Taqbaylit</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-tt mw-list-item">
                      <a
                        href="https://tt.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Tatar"
                        lang="tt"
                        hrefLang="tt"
                        className="interlanguage-link-target"
                      >
                        <span>Татарча / tatarça</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-shn mw-list-item">
                      <a
                        href="https://shn.wikipedia.org/wiki/%E1%80%99%E1%81%A2%E1%81%B5%E1%80%BA%E1%82%87%E1%81%BC%E1%80%84%E1%80%BA%E1%80%9E%E1%80%BD%E1%80%84%E1%80%BA%E1%80%B8"
                        title="မၢၵ်ႇၼင်သွင်း – Shan"
                        lang="shn"
                        hrefLang="shn"
                        className="interlanguage-link-target"
                      >
                        <span>ၽႃႇသႃႇတႆး </span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-te mw-list-item">
                      <a
                        href="https://te.wikipedia.org/wiki/%E0%B0%AC%E0%B0%BE%E0%B0%B8%E0%B1%8D%E0%B0%95%E0%B1%86%E0%B0%9F%E0%B1%8D_%E0%B0%AC%E0%B0%BE%E0%B0%B2%E0%B1%8D"
                        title="బాస్కెట్ బాల్ – Telugu"
                        lang="te"
                        hrefLang="te"
                        className="interlanguage-link-target"
                      >
                        <span>తెలుగు</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-th mw-list-item">
                      <a
                        href="https://th.wikipedia.org/wiki/%E0%B8%9A%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%81%E0%B8%95%E0%B8%9A%E0%B8%AD%E0%B8%A5"
                        title="บาสเกตบอล – Thai"
                        lang="th"
                        hrefLang="th"
                        className="interlanguage-link-target"
                      >
                        <span>ไทย</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-din mw-list-item">
                      <a
                        href="https://din.wikipedia.org/wiki/D%C3%B6kthi%C9%94%CC%88l"
                        title="Dökthiɔ̈l – Dinka"
                        lang="din"
                        hrefLang="din"
                        className="interlanguage-link-target"
                      >
                        <span>Thuɔŋjäŋ</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-tg mw-list-item">
                      <a
                        href="https://tg.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Tajik"
                        lang="tg"
                        hrefLang="tg"
                        className="interlanguage-link-target"
                      >
                        <span>Тоҷикӣ</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-chy mw-list-item">
                      <a
                        href="https://chy.wikipedia.org/wiki/Hohtsemo"
                        title="Hohtsemo – Cheyenne"
                        lang="chy"
                        hrefLang="chy"
                        className="interlanguage-link-target"
                      >
                        <span>Tsetsêhestâhese</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-tcy mw-list-item">
                      <a
                        href="https://tcy.wikipedia.org/wiki/%E0%B2%AC%E0%B2%BE%E0%B2%B8%E0%B3%8D%E0%B2%95%E0%B3%86%E0%B2%9F%E0%B3%8D_%E0%B2%AC%E0%B2%BE%E0%B2%B2%E0%B3%8D"
                        title="ಬಾಸ್ಕೆಟ್ ಬಾಲ್ – Tulu"
                        lang="tcy"
                        hrefLang="tcy"
                        className="interlanguage-link-target"
                      >
                        <span>ತುಳು</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-tr mw-list-item">
                      <a
                        href="https://tr.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Turkish"
                        lang="tr"
                        hrefLang="tr"
                        className="interlanguage-link-target"
                      >
                        <span>Türkçe</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-tk mw-list-item">
                      <a
                        href="https://tk.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Turkmen"
                        lang="tk"
                        hrefLang="tk"
                        className="interlanguage-link-target"
                      >
                        <span>Türkmençe</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-uk mw-list-item">
                      <a
                        href="https://uk.wikipedia.org/wiki/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB"
                        title="Баскетбол – Ukrainian"
                        lang="uk"
                        hrefLang="uk"
                        className="interlanguage-link-target"
                      >
                        <span>Українська</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ur mw-list-item">
                      <a
                        href="https://ur.wikipedia.org/wiki/%D8%A8%D8%A7%D8%B3%DA%A9%D9%B9_%D8%A8%D8%A7%D9%84"
                        title="باسکٹ بال – Urdu"
                        lang="ur"
                        hrefLang="ur"
                        className="interlanguage-link-target"
                      >
                        <span>اردو</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-ug mw-list-item">
                      <a
                        href="https://ug.wikipedia.org/wiki/%DB%8B%D8%A7%D8%B3%D9%83%DB%90%D8%AA%D8%A8%D9%88%D9%84"
                        title="ۋاسكېتبول – Uyghur"
                        lang="ug"
                        hrefLang="ug"
                        className="interlanguage-link-target"
                      >
                        <span>ئۇيغۇرچە / Uyghurche</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-za mw-list-item">
                      <a
                        href="https://za.wikipedia.org/wiki/Lanzgiuz"
                        title="Lanzgiuz – Zhuang"
                        lang="za"
                        hrefLang="za"
                        className="interlanguage-link-target"
                      >
                        <span>Vahcuengh</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-vec mw-list-item">
                      <a
                        href="https://vec.wikipedia.org/wiki/Ba%C5%82acanestro"
                        title="Bałacanestro – Venetian"
                        lang="vec"
                        hrefLang="vec"
                        className="interlanguage-link-target"
                      >
                        <span>Vèneto</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-vep mw-list-item">
                      <a
                        href="https://vep.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Veps"
                        lang="vep"
                        hrefLang="vep"
                        className="interlanguage-link-target"
                      >
                        <span>Vepsän kel’</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-vi mw-list-item">
                      <a
                        href="https://vi.wikipedia.org/wiki/B%C3%B3ng_r%E1%BB%95"
                        title="Bóng rổ – Vietnamese"
                        lang="vi"
                        hrefLang="vi"
                        className="interlanguage-link-target"
                      >
                        <span>Tiếng Việt</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-fiu-vro mw-list-item">
                      <a
                        href="https://fiu-vro.wikipedia.org/wiki/Korvpall"
                        title="Korvpall – Võro"
                        lang="vro"
                        hrefLang="vro"
                        className="interlanguage-link-target"
                      >
                        <span>Võro</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-wa mw-list-item">
                      <a
                        href="https://wa.wikipedia.org/wiki/Baskete_(sp%C3%B4rt)"
                        title="Baskete (spôrt) – Walloon"
                        lang="wa"
                        hrefLang="wa"
                        className="interlanguage-link-target"
                      >
                        <span>Walon</span>
                      </a>
                    </li>
                    <li
                      className="interlanguage-link interwiki-vls badge-Q17437796 badge-featuredarticle mw-list-item"
                      title="featured article badge"
                    >
                      <a
                        href="https://vls.wikipedia.org/wiki/Basket"
                        title="Basket – West Flemish"
                        lang="vls"
                        hrefLang="vls"
                        className="interlanguage-link-target"
                      >
                        <span>West-Vlams</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-war mw-list-item">
                      <a
                        href="https://war.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Waray"
                        lang="war"
                        hrefLang="war"
                        className="interlanguage-link-target"
                      >
                        <span>Winaray</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-wuu mw-list-item">
                      <a
                        href="https://wuu.wikipedia.org/wiki/%E7%AF%AE%E7%90%83"
                        title="篮球 – Wu"
                        lang="wuu"
                        hrefLang="wuu"
                        className="interlanguage-link-target"
                      >
                        <span>吴语</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-yi mw-list-item">
                      <a
                        href="https://yi.wikipedia.org/wiki/%D7%A7%D7%95%D7%99%D7%A9%D7%91%D7%90%D7%9C"
                        title="קוישבאל – Yiddish"
                        lang="yi"
                        hrefLang="yi"
                        className="interlanguage-link-target"
                      >
                        <span>ייִדיש</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-yo mw-list-item">
                      <a
                        href="https://yo.wikipedia.org/wiki/B%E1%BB%8D%CC%81%E1%BB%8D%CC%80l%C3%B9-al%C3%A1p%E1%BA%B9%CC%80r%E1%BA%B9%CC%80"
                        title="Bọ́ọ̀lù-alápẹ̀rẹ̀ – Yoruba"
                        lang="yo"
                        hrefLang="yo"
                        className="interlanguage-link-target"
                      >
                        <span>Yorùbá</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-zh-yue mw-list-item">
                      <a
                        href="https://zh-yue.wikipedia.org/wiki/%E7%B1%83%E7%90%83"
                        title="籃球 – Cantonese"
                        lang="yue"
                        hrefLang="yue"
                        className="interlanguage-link-target"
                      >
                        <span>粵語</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-diq mw-list-item">
                      <a
                        href="https://diq.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Zazaki"
                        lang="diq"
                        hrefLang="diq"
                        className="interlanguage-link-target"
                      >
                        <span>Zazaki</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-bat-smg mw-list-item">
                      <a
                        href="https://bat-smg.wikipedia.org/wiki/Krep%C5%A1%C4%97nis"
                        title="Krepšėnis – Samogitian"
                        lang="sgs"
                        hrefLang="sgs"
                        className="interlanguage-link-target"
                      >
                        <span>Žemaitėška</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-zh mw-list-item">
                      <a
                        href="https://zh.wikipedia.org/wiki/%E7%AF%AE%E7%90%83"
                        title="篮球 – Chinese"
                        lang="zh"
                        hrefLang="zh"
                        className="interlanguage-link-target"
                      >
                        <span>中文</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-btm mw-list-item">
                      <a
                        href="https://btm.wikipedia.org/wiki/Marbasket"
                        title="Marbasket – Batak Mandailing"
                        lang="btm"
                        hrefLang="btm"
                        className="interlanguage-link-target"
                      >
                        <span>Batak Mandailing</span>
                      </a>
                    </li>
                    <li className="interlanguage-link interwiki-tly mw-list-item">
                      <a
                        href="https://tly.wikipedia.org/wiki/Basketbol"
                        title="Basketbol – Talysh"
                        lang="tly"
                        hrefLang="tly"
                        className="interlanguage-link-target"
                      >
                        <span>Tolışi</span>
                      </a>
                    </li>
                  </ul>
                  <div className="after-portlet after-portlet-lang">
                    <span className="wb-langlinks-edit wb-langlinks-link">
                      <a
                        href="https://www.wikidata.org/wiki/Special:EntityPage/Q5372#sitelinks-wikipedia"
                        title="Edit interlanguage links"
                        className="wbc-editpage"
                      >
                        Edit links
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="vector-page-toolbar">
            <div className="vector-page-toolbar-container">
              <div id="left-navigation">
                <nav aria-label="Namespaces">
                  <div
                    id="p-associated-pages"
                    className="vector-menu vector-menu-tabs mw-portlet mw-portlet-associated-pages"
                  >
                    <div className="vector-menu-content">
                      <ul className="vector-menu-content-list">
                        <li
                          id="ca-nstab-main"
                          className="selected vector-tab-noicon mw-list-item"
                        >
                          <a
                            href="/wiki/Basketball"
                            title="View the content page [c]"
                            accessKey="c"
                          >
                            <span>Article</span>
                          </a>
                        </li>
                        <li
                          id="ca-talk"
                          className="vector-tab-noicon mw-list-item"
                        >
                          <a
                            href="/wiki/Talk:Basketball"
                            rel="discussion"
                            title="Discuss improvements to the content page [t]"
                            accessKey="t"
                          >
                            <span>Talk</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    id="vector-variants-dropdown"
                    className="vector-dropdown emptyPortlet"
                  >
                    <input
                      type="checkbox"
                      id="vector-variants-dropdown-checkbox"
                      role="button"
                      aria-haspopup="true"
                      data-event-name="ui.dropdown-vector-variants-dropdown"
                      className="vector-dropdown-checkbox "
                      aria-label="Change language variant"
                    />
                    <label
                      id="vector-variants-dropdown-label"
                      htmlFor="vector-variants-dropdown-checkbox"
                      className="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet"
                      aria-hidden="true"
                    >
                      <span className="vector-dropdown-label-text">
                        English
                      </span>
                    </label>
                    <div className="vector-dropdown-content">
                      <div
                        id="p-variants"
                        className="vector-menu mw-portlet mw-portlet-variants emptyPortlet"
                      >
                        <div className="vector-menu-content">
                          <ul className="vector-menu-content-list"></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div id="right-navigation" className="vector-collapsible">
                <nav aria-label="Views">
                  <div
                    id="p-views"
                    className="vector-menu vector-menu-tabs mw-portlet mw-portlet-views"
                  >
                    <div className="vector-menu-content">
                      <ul className="vector-menu-content-list">
                        <li
                          id="ca-view"
                          className="selected vector-tab-noicon mw-list-item"
                        >
                          <a href="/wiki/Basketball">
                            <span>Read</span>
                          </a>
                        </li>
                        <li
                          id="ca-viewsource"
                          className="vector-tab-noicon mw-list-item"
                        >
                          <a
                            href="/w/index.php?title=Basketball&action=edit"
                            title="This page is protected.
You can view its source [e]"
                            accessKey="e"
                          >
                            <span>View source</span>
                          </a>
                        </li>
                        <li
                          id="ca-history"
                          className="vector-tab-noicon mw-list-item"
                        >
                          <a
                            href="/w/index.php?title=Basketball&action=history"
                            title="Past revisions of this page [h]"
                            accessKey="h"
                          >
                            <span>View history</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <nav
                  className="vector-page-tools-landmark"
                  aria-label="Page tools"
                >
                  <div
                    id="vector-page-tools-dropdown"
                    className="vector-dropdown vector-page-tools-dropdown"
                  >
                    <input
                      type="checkbox"
                      id="vector-page-tools-dropdown-checkbox"
                      role="button"
                      aria-haspopup="true"
                      data-event-name="ui.dropdown-vector-page-tools-dropdown"
                      className="vector-dropdown-checkbox "
                      aria-label="Tools"
                    />
                    <label
                      id="vector-page-tools-dropdown-label"
                      htmlFor="vector-page-tools-dropdown-checkbox"
                      className="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet"
                      aria-hidden="true"
                    >
                      <span className="vector-dropdown-label-text">Tools</span>
                    </label>
                    <div className="vector-dropdown-content">
                      <div
                        id="vector-page-tools-unpinned-container"
                        className="vector-unpinned-container"
                      >
                        <div
                          id="vector-page-tools"
                          className="vector-page-tools vector-pinnable-element"
                        >
                          <div
                            className="vector-pinnable-header vector-page-tools-pinnable-header vector-pinnable-header-unpinned"
                            data-feature-name="page-tools-pinned"
                            data-pinnable-element-id="vector-page-tools"
                            data-pinned-container-id="vector-page-tools-pinned-container"
                            data-unpinned-container-id="vector-page-tools-unpinned-container"
                          >
                            <div className="vector-pinnable-header-label">
                              Tools
                            </div>
                            <button
                              className="vector-pinnable-header-toggle-button vector-pinnable-header-pin-button"
                              data-event-name="pinnable-header.vector-page-tools.pin"
                            >
                              move to sidebar
                            </button>
                            <button
                              className="vector-pinnable-header-toggle-button vector-pinnable-header-unpin-button"
                              data-event-name="pinnable-header.vector-page-tools.unpin"
                            >
                              hide
                            </button>
                          </div>
                          <div
                            id="p-cactions"
                            className="vector-menu mw-portlet mw-portlet-cactions emptyPortlet vector-has-collapsible-items"
                            title="More options"
                          >
                            <div className="vector-menu-heading">Actions</div>
                            <div className="vector-menu-content">
                              <ul className="vector-menu-content-list">
                                <li
                                  id="ca-more-view"
                                  className="selected vector-more-collapsible-item mw-list-item"
                                >
                                  <a href="/wiki/Basketball">
                                    <span>Read</span>
                                  </a>
                                </li>
                                <li
                                  id="ca-more-viewsource"
                                  className="vector-more-collapsible-item mw-list-item"
                                >
                                  <a href="/w/index.php?title=Basketball&action=edit">
                                    <span>View source</span>
                                  </a>
                                </li>
                                <li
                                  id="ca-more-history"
                                  className="vector-more-collapsible-item mw-list-item"
                                >
                                  <a href="/w/index.php?title=Basketball&action=history">
                                    <span>View history</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            id="p-tb"
                            className="vector-menu mw-portlet mw-portlet-tb"
                          >
                            <div className="vector-menu-heading">General</div>
                            <div className="vector-menu-content">
                              <ul className="vector-menu-content-list">
                                <li
                                  id="t-whatlinkshere"
                                  className="mw-list-item"
                                >
                                  <a
                                    href="/wiki/Special:WhatLinksHere/Basketball"
                                    title="List of all English Wikipedia pages containing links to this page [j]"
                                    accessKey="j"
                                  >
                                    <span>What links here</span>
                                  </a>
                                </li>
                                <li
                                  id="t-recentchangeslinked"
                                  className="mw-list-item"
                                >
                                  <a
                                    href="/wiki/Special:RecentChangesLinked/Basketball"
                                    rel="nofollow"
                                    title="Recent changes in pages linked from this page [k]"
                                    accessKey="k"
                                  >
                                    <span>Related changes</span>
                                  </a>
                                </li>
                                <li id="t-upload" className="mw-list-item">
                                  <a
                                    href="/wiki/Wikipedia:File_Upload_Wizard"
                                    title="Upload files [u]"
                                    accessKey="u"
                                  >
                                    <span>Upload file</span>
                                  </a>
                                </li>
                                <li
                                  id="t-specialpages"
                                  className="mw-list-item"
                                >
                                  <a
                                    href="/wiki/Special:SpecialPages"
                                    title="A list of all special pages [q]"
                                    accessKey="q"
                                  >
                                    <span>Special pages</span>
                                  </a>
                                </li>
                                <li id="t-permalink" className="mw-list-item">
                                  <a
                                    href="/w/index.php?title=Basketball&oldid=1230159810"
                                    title="Permanent link to this revision of this page"
                                  >
                                    <span>Permanent link</span>
                                  </a>
                                </li>
                                <li id="t-info" className="mw-list-item">
                                  <a
                                    href="/w/index.php?title=Basketball&action=info"
                                    title="More information about this page"
                                  >
                                    <span>Page information</span>
                                  </a>
                                </li>
                                <li id="t-cite" className="mw-list-item">
                                  <a
                                    href="/w/index.php?title=Special:CiteThisPage&page=Basketball&id=1230159810&wpFormIdentifier=titleform"
                                    title="Information on how to cite this page"
                                  >
                                    <span>Cite this page</span>
                                  </a>
                                </li>
                                <li
                                  id="t-urlshortener"
                                  className="mw-list-item"
                                >
                                  <a href="/w/index.php?title=Special:UrlShortener&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBasketball">
                                    <span>Get shortened URL</span>
                                  </a>
                                </li>
                                <li
                                  id="t-urlshortener-qrcode"
                                  className="mw-list-item"
                                >
                                  <a href="/w/index.php?title=Special:QrCode&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBasketball">
                                    <span>Download QR code</span>
                                  </a>
                                </li>
                                <li id="t-wikibase" className="mw-list-item">
                                  <a
                                    href="https://www.wikidata.org/wiki/Special:EntityPage/Q5372"
                                    title="Structured data on this page hosted by Wikidata [g]"
                                    accessKey="g"
                                  >
                                    <span>Wikidata item</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            id="p-coll-print_export"
                            className="vector-menu mw-portlet mw-portlet-coll-print_export"
                          >
                            <div className="vector-menu-heading">
                              Print/export
                            </div>
                            <div className="vector-menu-content">
                              <ul className="vector-menu-content-list">
                                <li
                                  id="coll-download-as-rl"
                                  className="mw-list-item"
                                >
                                  <a
                                    href="/w/index.php?title=Special:DownloadAsPdf&page=Basketball&action=show-download-screen"
                                    title="Download this page as a PDF file"
                                  >
                                    <span>Download as PDF</span>
                                  </a>
                                </li>
                                <li id="t-print" className="mw-list-item">
                                  <a
                                    href="/w/index.php?title=Basketball&printable=yes"
                                    title="Printable version of this page [p]"
                                    accessKey="p"
                                  >
                                    <span>Printable version</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            id="p-wikibase-otherprojects"
                            className="vector-menu mw-portlet mw-portlet-wikibase-otherprojects"
                          >
                            <div className="vector-menu-heading">
                              In other projects
                            </div>
                            <div className="vector-menu-content">
                              <ul className="vector-menu-content-list">
                                <li className="wb-otherproject-link wb-otherproject-commons mw-list-item">
                                  <a
                                    href="https://commons.wikimedia.org/wiki/Basketball"
                                    hrefLang="en"
                                  >
                                    <span>Wikimedia Commons</span>
                                  </a>
                                </li>
                                <li className="wb-otherproject-link wb-otherproject-wikibooks mw-list-item">
                                  <a
                                    href="https://en.wikibooks.org/wiki/Basketball"
                                    hrefLang="en"
                                  >
                                    <span>Wikibooks</span>
                                  </a>
                                </li>
                                <li className="wb-otherproject-link wb-otherproject-wikinews mw-list-item">
                                  <a
                                    href="https://en.wikinews.org/wiki/Category:Basketball"
                                    hrefLang="en"
                                  >
                                    <span>Wikinews</span>
                                  </a>
                                </li>
                                <li className="wb-otherproject-link wb-otherproject-wikiquote mw-list-item">
                                  <a
                                    href="https://en.wikiquote.org/wiki/Basketball"
                                    hrefLang="en"
                                  >
                                    <span>Wikiquote</span>
                                  </a>
                                </li>
                                <li className="wb-otherproject-link wb-otherproject-wikivoyage mw-list-item">
                                  <a
                                    href="https://en.wikivoyage.org/wiki/Basketball_in_North_America"
                                    hrefLang="en"
                                  >
                                    <span>Wikivoyage</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="vector-column-end">
            <div className="vector-sticky-pinned-container">
              <nav
                className="vector-page-tools-landmark"
                aria-label="Page tools"
              >
                <div
                  id="vector-page-tools-pinned-container"
                  className="vector-pinned-container"
                ></div>
              </nav>
              <nav
                className="vector-appearance-landmark"
                aria-label="Appearance"
              >
                <div
                  id="vector-appearance-pinned-container"
                  className="vector-pinned-container"
                >
                  <div
                    id="vector-appearance"
                    className="vector-appearance vector-pinnable-element"
                  >
                    <div
                      className="vector-pinnable-header vector-appearance-pinnable-header vector-pinnable-header-pinned"
                      data-feature-name="appearance-pinned"
                      data-pinnable-element-id="vector-appearance"
                      data-pinned-container-id="vector-appearance-pinned-container"
                      data-unpinned-container-id="vector-appearance-unpinned-container"
                    >
                      <div className="vector-pinnable-header-label">
                        Appearance
                      </div>
                      <button
                        className="vector-pinnable-header-toggle-button vector-pinnable-header-pin-button"
                        data-event-name="pinnable-header.vector-appearance.pin"
                      >
                        move to sidebar
                      </button>
                      <button
                        className="vector-pinnable-header-toggle-button vector-pinnable-header-unpin-button"
                        data-event-name="pinnable-header.vector-appearance.unpin"
                      >
                        hide
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div
            id="bodyContent"
            className="vector-body"
            aria-labelledby="firstHeading"
            data-mw-ve-target-container=""
          >
            <div className="vector-body-before-content">
              <div className="mw-indicators">
                <div id="mw-indicator-pp-default" className="mw-indicator">
                  <div className="mw-parser-output">
                    <span typeof="mw:File">
                      <a
                        href="/wiki/Wikipedia:Protection_policy#semi"
                        title="This article is semi-protected."
                      >
                        <img
                          alt="Page semi-protected"
                          src="//upload.wikimedia.org/wikipedia/en/thumb/1/1b/Semi-protection-shackle.svg/20px-Semi-protection-shackle.svg.png"
                          decoding="async"
                          width={20}
                          height={20}
                          className="mw-file-element"
                          srcSet="//upload.wikimedia.org/wikipedia/en/thumb/1/1b/Semi-protection-shackle.svg/30px-Semi-protection-shackle.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/1/1b/Semi-protection-shackle.svg/40px-Semi-protection-shackle.svg.png 2x"
                          data-file-width={512}
                          data-file-height={512}
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div id="siteSub" className="noprint">
                From Wikipedia, the free encyclopedia
              </div>
            </div>
            <div id="contentSub">
              <div id="mw-content-subtitle" />
            </div>
            <div id="mw-content-text" className="mw-body-content">
              <div
                className="mw-content-ltr mw-parser-output"
                lang="en"
                dir="ltr"
              >
                <div
                  className="shortdescription nomobile noexcerpt noprint searchaux"
                  style={{ display: "none" }}
                >
                  Team sport
                </div>
                <style
                  data-mw-deduplicate="TemplateStyles:r1033289096"
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mw-parser-output .hatnote{font-style:italic}.mw-parser-output div.hatnote{padding-left:1.6em;margin-bottom:0.5em}.mw-parser-output .hatnote i{font-style:normal}.mw-parser-output .hatnote+link+.hatnote{margin-top:-0.5em}"
                  }}
                />
                <div role="note" className="hatnote navigation-not-searchable">
                  This article is about {searchQuery}. It is completely AI-generated.
                  
                </div>
                <p className="mw-empty-elt"></p>
                <style
                  data-mw-deduplicate="TemplateStyles:r1229112069"
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mw-parser-output .infobox-subbox{padding:0;border:none;margin:-3px;width:auto;min-width:100%;font-size:100%;clear:none;float:none;background-color:transparent}.mw-parser-output .infobox-3cols-child{margin:auto}.mw-parser-output .infobox .navbar{font-size:100%}body.skin-minerva .mw-parser-output .infobox-header,body.skin-minerva .mw-parser-output .infobox-subheader,body.skin-minerva .mw-parser-output .infobox-above,body.skin-minerva .mw-parser-output .infobox-title,body.skin-minerva .mw-parser-output .infobox-image,body.skin-minerva .mw-parser-output .infobox-full-data,body.skin-minerva .mw-parser-output .infobox-below{text-align:center}html.skin-theme-clientpref-night .mw-parser-output .infobox-full-data:not(.notheme)>div:not(.notheme)[style]{background:#1f1f23!important;color:#f8f9fa}@media(prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .infobox-full-data:not(.notheme) div:not(.notheme){background:#1f1f23!important;color:#f8f9fa}}@media(min-width:640px){body.skin--responsive .mw-parser-output .infobox-table{display:table!important}body.skin--responsive .mw-parser-output .infobox-table>caption{display:table-caption!important}body.skin--responsive .mw-parser-output .infobox-table>tbody{display:table-row-group}body.skin--responsive .mw-parser-output .infobox-table tr{display:table-row!important}body.skin--responsive .mw-parser-output .infobox-table th,body.skin--responsive .mw-parser-output .infobox-table td{padding-left:inherit;padding-right:inherit}}"
                  }}
                />
                
                <figure className="mw-default-size" typeof="mw:File/Thumb">
                  <a
                    href="/wiki/File:Basketball_pictogram.svg"
                    className="mw-file-description"
                  >
                    <img
                        src={introImg}
                        decoding="async"
                        width={220}
                        height={220}
                        className="mw-file-element"
                        alt="Generated topic illustration"
                    />
                  </a>
                  <figcaption>{tagline1}</figcaption>
                </figure>
                {/* <p> */}
                {parsedContent}                    
                  
                <meta property="mw:PageProp/toc" />
                <div className="article-content">
                {outline.map((section) => (
                <div key={section.title}>
                    <h2>{section.title}</h2>
                    {section.subsections.map((subsection) => (
                    <div key={subsection.id}>
                        <h3 id={subsection.id}>{subsection.title}</h3>
                        {subsection.content && (
                        <div>
                            {/* <figure> */}
                            <figure typeof="mw:File/Thumb">
                        <a
                            href={introImg}
                            className="mw-file-description"
                        >
                            <img
                            src={subsection.content.imageUrl}
                            decoding="async"
                            width={165}
                            height={204}
                            className="mw-file-element"
                            // srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/2/20/James_Naismith_at_Springfield_College_circa_1920.jpg/248px-James_Naismith_at_Springfield_College_circa_1920.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/2/20/James_Naismith_at_Springfield_College_circa_1920.jpg/330px-James_Naismith_at_Springfield_College_circa_1920.jpg 2x"
                            data-file-width={1080}
                            data-file-height={1334}
                            />
                        </a>
                        <figcaption>
                            <a href="/wiki/James_Naismith" title="James Naismith">
                            {subsection.title}
                            </a>{" "}
                            {/* <abbr title="circa">c.</abbr>
                            <span style={{ whiteSpace: "nowrap" }}> 1920</span> */}
                        </figcaption>
                        </figure>
                            
                            {/* <p>{subsection.content.paragraph}</p> */}
                            {subsection.content.paragraph.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            </div>
                            )}
                        </div>
                        ))}
                    </div>
                    ))}
                    </div>
                
                <h2>
                  <span className="mw-headline" id="References">
                    References
                  </span>
                </h2>
                <h3>
                  <span className="mw-headline" id="Citations">
                    Citations
                  </span>
                </h3>
                 <div className="reflist">
                    <div className="mw-references-wrap mw-references-columns">
                    <ol className="references">
                        {references.map((reference) => (
                        <li id={reference.id} key={reference.id}>
                            <span className="mw-cite-backlink">
                            <b>
                                <a href={`#${reference.id.replace('cite_note-', 'cite_ref-')}`}>^</a>
                            </b>
                            </span>{" "}
                            <span className="reference-text">
                            <cite className="citation news cs1">
                                {reference.author} ({reference.date}).{" "}
                                <a rel="nofollow" className="external text" href={reference.url}>
                                {reference.title}
                                </a>. <i>{reference.publisher}</i>.{" "}
                                <a rel="nofollow" className="external text" href={reference.archiveUrl}>
                                Archived
                                </a>{" "}
                                from the original on {reference.archiveDate}.
                                {reference.accessDate && (
                                <span className="reference-accessdate"> Retrieved {reference.accessDate}.</span>
                                )}
                            </cite>
                            </span>
                        </li>
                        ))}
                    </ol>
                    </div>
                </div>

                
                
            
                <link
                  rel="mw-deduplicated-inline-style"
                  href="mw-data:TemplateStyles:r1217611005"
                />
                
                <div className="navbox-styles">
                  <link
                    rel="mw-deduplicated-inline-style"
                    href="mw-data:TemplateStyles:r1228936124"
                  />
                </div>
                <div
                  role="navigation"
                  className="navbox"
                  aria-labelledby="Articles_related_to_basketball"
                  style={{ padding: 3 }}
                >
                  
                </div>
                
                
                {/* Saved in parser cache with key enwiki:pcache:idhash:3921-0!canonical and timestamp 20240703064159 and revision id 1230159810. Rendering was triggered because: page-view
                 */}
              </div>
              {/*esi <esi:include src="/esitest-fa8a495983347898/content" /> */}
              <noscript>
                &lt;img
                src="https://login.wikimedia.org/wiki/Special:CentralAutoLogin/start?type=1x1"
                alt="" width="1" height="1" style="border: none; position:
                absolute;"&gt;
              </noscript>
              
            
            </div>
          </div>
        </main>
      </div>
      <div className="mw-footer-container">
        <footer id="footer" className="mw-footer">
          <ul id="footer-info">
            <li id="footer-info-lastmod">
              {" "}
              This page was last edited on 21 June 2024, at 01:30
              <span className="anonymous-show">&nbsp;(UTC)</span>.
            </li>
            <li id="footer-info-copyright">
              Text is available under the{" "}
              <a
                rel="license"
                href="//en.wikipedia.org/wiki/Wikipedia:Text_of_the_Creative_Commons_Attribution-ShareAlike_4.0_International_License"
              >
                Creative Commons Attribution-ShareAlike License 4.0
              </a>
              <a
                rel="license"
                href="//en.wikipedia.org/wiki/Wikipedia:Text_of_the_Creative_Commons_Attribution-ShareAlike_4.0_International_License"
                style={{ display: "none" }}
              />
              ; additional terms may apply. By using this site, you agree to the{" "}
              <a href="//foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Terms_of_Use">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="//foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Privacy_policy">
                Privacy Policy
              </a>
              . Wikipedia® is a registered trademark of the{" "}
              <a href="//www.wikimediafoundation.org/">
                Wikimedia Foundation, Inc.
              </a>
              , a non-profit organization.
            </li>
          </ul>
          <ul id="footer-places">
            <li id="footer-places-privacy">
              <a href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Privacy_policy">
                Privacy policy
              </a>
            </li>
            <li id="footer-places-about">
              <a href="/wiki/Wikipedia:About">About Wikipedia</a>
            </li>
            <li id="footer-places-disclaimers">
              <a href="/wiki/Wikipedia:General_disclaimer">Disclaimers</a>
            </li>
            <li id="footer-places-contact">
              <a href="//en.wikipedia.org/wiki/Wikipedia:Contact_us">
                Contact Wikipedia
              </a>
            </li>
            <li id="footer-places-wm-codeofconduct">
              <a href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Universal_Code_of_Conduct">
                Code of Conduct
              </a>
            </li>
            <li id="footer-places-developers">
              <a href="https://developer.wikimedia.org">Developers</a>
            </li>
            <li id="footer-places-statslink">
              <a href="https://stats.wikimedia.org/#/en.wikipedia.org">
                Statistics
              </a>
            </li>
            <li id="footer-places-cookiestatement">
              <a href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Cookie_statement">
                Cookie statement
              </a>
            </li>
            <li id="footer-places-mobileview">
              <a
                href="//en.m.wikipedia.org/w/index.php?title=Basketball&mobileaction=toggle_view_mobile"
                className="noprint stopMobileRedirectToggle"
              >
                Mobile view
              </a>
            </li>
          </ul>
          <ul id="footer-icons" className="noprint">
            <li id="footer-copyrightico">
              <a
                className="cdx-button cdx-button--fake-button cdx-button--size-large cdx-button--fake-button--enabled"
                style={{ paddingLeft: 8, paddingRight: 8 }}
                href="https://wikimediafoundation.org/"
                target="https://wikimediafoundation.org/"
              >
                <img
                  src="/static/images/footer/wikimedia-button.svg"
                  width={84}
                  height={29}
                  alt="Wikimedia Foundation"
                />
              </a>
            </li>
            <li id="footer-poweredbyico">
              <a
                className="cdx-button cdx-button--fake-button cdx-button--size-large cdx-button--fake-button--enabled"
                style={{ paddingLeft: 8, paddingRight: 8 }}
                href="https://www.mediawiki.org"
                target="https://www.mediawiki.org"
              >
                <img
                  src="/static/images/footer/poweredby_mediawiki.svg"
                  width={84}
                  height={29}
                  alt="Powered by MediaWiki"
                />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
  <div className="vector-settings" id="p-dock-bottom">
    <ul>
      <li></li>
    </ul>
  </div>
</>
    );
};

export default Response;