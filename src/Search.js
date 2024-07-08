import React, { useState } from 'react';
import axios from 'axios';

import OPENAI_API_KEY from './key';
import { useNavigate } from 'react-router-dom';

const generateCaption = (prompt) => {
    return GPT4TurboGeneration(`Generate a brief, engaging caption for an image about ${prompt}. The caption should be no more than 15 words.`);
};

const GPT4TurboGeneration = (prompt) => {
    return axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
            model: 'gpt-4o',
            messages: [{ role: 'user', content: prompt }],
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
        }
    ).catch(error => {
        if (error.response) {
            console.error('Error response:', error.response.data);
            console.error('Error status:', error.response.status);
            console.error('Error headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
        throw error;
    });
}; 

const generateDalleImage = (myprompt) => {
    return axios.post(
        'https://api.openai.com/v1/images/generations',
        {
            model: 'dall-e-3',
            prompt: myprompt,
            size: '1024x1024',
            n: 1,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
        }
    ).catch(error => {
        if (error.response) {
            console.error('Error response:', error.response.data);
            console.error('Error status:', error.response.status);
            console.error('Error headers:', error.response.headers);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
        throw error;
    });
};


const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();

        try {

            const DallEIntroPromise = generateDalleImage(`Generate an image to capture the following topic: ${searchQuery}.`)

            const gpt4OReferencesPromise = GPT4TurboGeneration(`Generate a set of around 10 fake references on this topic: ${searchQuery}. 
                                      PLEASE ONLY FOLLOW THIS TEMPLATE TO GENERATE THE REFERENCES - ONLY MAKE IN ARRAY FORMAT - THIS INSTRUCTION IS VERY IMPORTANT:::
                                      [
                                        {
                                          "id": "cite_note-1",
                                          "author": "Griffiths, Sian",
                                          "date": "September 20, 2010",
                                          "title": "The Canadian who invented basketball",
                                          "publisher": "BBC News",
                                          "url": "https://www.bbc.co.uk/news/world-us-canada-11348053",
                                          "archiveUrl": "https://web.archive.org/web/20120425025454/http://www.bbc.co.uk/news/world-us-canada-11348053",
                                          "accessDate": "September 14, 2011"
                                        },
                                        {
                                          "id": "cite_note-2",
                                          "author": "Maria",
                                          "date": "January 3, 2023",
                                          "title": "Ranking The Top 10 Most Popular Sports In The World in 2023",
                                          "publisher": "Sports Virsa",
                                          "url": "https://sportsvirsa.com/most-popular-sports/",
                                          "archiveUrl": "https://web.archive.org/web/20230925040942/https://sportsvirsa.com/most-popular-sports/"
                                        }
                                        // Other references
                                      ]`);

            const gpt4OutlinePromise = GPT4TurboGeneration(`Generate an outline about this topic in this array format, including a detailed paragraph and an image URL for each subsection: ${searchQuery} 
                                      PLEASE ONLY FOLLOW THIS TEMPLATE TO GENERATE THE SECTIONS - ONLY MAKE IN ARRAY FORMAT - THIS INSTRUCTION IS VERY IMPORTANT:::
                                      HAVE AROUND 4-5 SECTIONS, and the "paragraph" within each section make around 2-3 paragraphs broken apart <- this is important
                                      [
                                          {
                                            "title": "History",
                                            "subsections": [
                                              { 
                                                "title": "Early history", 
                                                "id": "Early_history",
                                                "content": {
                                                  "paragraph": "Early history detailed content...", // THIS SHOULD BE AT LEAST 2 PARAGRAPHS - VARY THE LENGTH OF THE PARAGRAPH - BETWEEN 2-3 PARAGRAPH - THIS IS IMPORTANT
                                                }
                                              },
                                              { 
                                                "title": "Creation", 
                                                "id": "Creation",
                                                "content": {
                                                  "paragraph": "Creation detailed content...", // THIS SHOULD BE AT LEAST 2 PARAGRAPHS - VARY THE LENGTH OF THE PARAGRAPH - BETWEEN 2-3 PARAGRAPH - THIS IS IMPORTANT2
                                                }
                                              }
                                              // Other subsections
                                            ]
                                          },
                                          {
                                            "title": "Professional basketball",
                                            "subsections": [
                                              { 
                                                "title": "College basketball", 
                                                "id": "College_basketball",
                                                "content": {
                                                  "paragraph": "College basketball detailed content...",
                                                }
                                              },
                                              { 
                                                "title": "High school basketball", 
                                                "id": "High_school_basketball",
                                                "content": {
                                                  "paragraph": "High school basketball detailed content...",
                                                }
                                              }
                                              // Other subsections
                                            ]
                                          }
                                          // Other sections generate in the above format
                                        ]`);

            const gpt4TaglineImg1Promise = GPT4TurboGeneration(`Generate a short 5-7 word tagline for the image about the following topic; NO QUOTATION MARKS: ${searchQuery}`)
            const gpt4IntroPromise = GPT4TurboGeneration(`Generate a Wikipedia style introduction on the following topic: ${searchQuery}. Please use the following formatting to generate the text, THIS SHOULD BE A FEW PARAGRAPHS: 
            IMPORTANT IMPORTANT, PLEASE ONLY FOLLOW THIS TEMPLATE TO GENERATE THE TEXT - THIS INSTRUCTION IS VERY IMPORTANT BUT DO NOT INCLUDE {" "}           ::: 
            <a href="/wiki/Team_sport" title="Team sport">
                team sport
            </a>{" "}
            {" "}
            <a href="/wiki/Basketball_court" title="Basketball court">
                court
            </a>
            , compete with the primary objective of{" "}
            <a href="#Shooting">shooting</a> a{" "}
            <a href="/wiki/Basketball_(ball)" title="Basketball (ball)">
                basketball
            </a>{" "}
            (approximately 9.4 inches (24&nbsp;cm) in diameter) through
            the defender's{" "}
            <a
                href="/wiki/Basket_(basketball)"
                title="Basket (basketball)"
            >
                hoop
            </a>{" "}
            (a basket 18 inches (46&nbsp;cm) in diameter mounted 10 feet
            (3.048&nbsp;m) high to a{" "}
            <a
                href="/wiki/Backboard_(basketball)"
                title="Backboard (basketball)"
            >
                backboard
            </a>{" "}
            at each end of the court), while preventing the opposing team
            from shooting through their own hoop. A{" "}
            <a
                href="/wiki/Field_goal_(basketball)"
                title="Field goal (basketball)"
            >
                field goal
            </a>{" "}
            is worth two points, unless made from behind the{" "}
            <a
                href="/wiki/3_point_line"
                className="mw-redirect"
                title="3 point line"
            >
                three-point line
            </a>
            , when it is worth three. After a foul, timed play stops and
            the player fouled or designated to shoot a{" "}
            <a href="/wiki/Technical_foul" title="Technical foul">
                technical foul
            </a>{" "}
            is given one, two or three one-point{" "}
            <a href="/wiki/Free_throw" title="Free throw">
                free throws
            </a>
            . The team with the most points at the end of the game wins,
            but if regulation play expires with the score tied, an
            additional period of play (
            <a href="/wiki/Overtime_(sports)" title="Overtime (sports)">
                overtime
            </a>
            ) is mandated.
            </p>
            <p>
            Players advance the ball by bouncing it while walking or
            running (dribbling) or by passing it to a teammate, both of
            which require considerable skill. On offense, players may use
            a variety of shots&nbsp;– the{" "}
            <a href="/wiki/Layup" title="Layup">
                layup
            </a>
            , the{" "}
            <a
                href="/wiki/Jump_shot_(basketball)"
                title="Jump shot (basketball)"
            >
                jump shot
            </a>
            , or a{" "}
            <a href="/wiki/Slam_dunk" title="Slam dunk">
                dunk
            </a>
            ; on defense, they may{" "}
            <a href="/wiki/Steal_(basketball)" title="Steal (basketball)">
                steal
            </a>{" "}
            the ball from a dribbler, intercept passes, or{" "}
            <a href="/wiki/Block_(basketball)" title="Block (basketball)">
                block
            </a>{" "}
            shots; either offense or defense may collect a{" "}
            <a
                href="/wiki/Rebound_(basketball)"
                title="Rebound (basketball)"
            >
                rebound
            </a>
            , that is, a missed shot that bounces from rim or backboard.
            It is a violation to{" "}
            <a
                href="/wiki/Traveling_(basketball)"
                title="Traveling (basketball)"
            >
                lift or drag one's pivot foot without dribbling the ball
            </a>
            , to{" "}
            <a
                href="/wiki/Carrying_(basketball)"
                title="Carrying (basketball)"
            >
                carry
            </a>{" "}
            it, or to{" "}
            <a href="/wiki/Double_dribble" title="Double dribble">
                hold the ball with both hands then resume dribbling
            </a>
            .
            </p>
            <p>
            The five players on each side fall into five{" "}
            <a
                href="/wiki/Basketball_positions"
                title="Basketball positions"
            >
                playing positions
            </a>
            . The tallest player is usually the{" "}
            <a
                href="/wiki/Center_(basketball)"
                title="Center (basketball)"
            >
                center
            </a>
            , the second-tallest and strongest is the{" "}
            <a href="/wiki/Power_forward" title="Power forward">
                power forward
            </a>
            , a slightly shorter but more agile player is the{" "}
            <a href="/wiki/Small_forward" title="Small forward">
                small forward
            </a>
            , and the shortest players or the best ball handlers are the{" "}
            <a href="/wiki/Shooting_guard" title="Shooting guard">
                shooting guard
            </a>{" "}
            and the{" "}
            <a href="/wiki/Point_guard" title="Point guard">
                point guard
            </a>
            , who implement the coach's game plan by managing the
            execution of offensive and defensive plays (player
            positioning). Informally, players may play three-on-three,
            two-on-two, and one-on-one.
            </p>
            <p>
            Invented in 1891 by Canadian-American gym teacher{" "}
            <a href="/wiki/James_Naismith" title="James Naismith">
                James Naismith
            </a>{" "}
            in{" "}
            <a
                href="/wiki/Springfield,_Massachusetts"
                title="Springfield, Massachusetts"
            >
                Springfield, Massachusetts
            </a>
            , in the United States, basketball has evolved to become one
            of the world's most popular and widely viewed sports.
            <sup id="cite_ref-1" className="reference">
                <a href="#cite_note-1">[1]</a>
            </sup>
            <sup id="cite_ref-2" className="reference">
                <a href="#cite_note-2">[2]</a>
            </sup>{" "}
            The{" "}
            <a
                href="/wiki/National_Basketball_Association"
                title="National Basketball Association"
            >
                National Basketball Association
            </a>{" "}
            (NBA) is the most significant{" "}
            <a
                href="/wiki/Professional_basketball"
                className="mw-redirect"
                title="Professional basketball"
            >
                professional basketball
            </a>{" "}
            league in the world in terms of popularity, salaries, talent,
            and level of competition
            <sup id="cite_ref-3" className="reference">
                <a href="#cite_note-3">[3]</a>
            </sup>
            <sup id="cite_ref-4" className="reference">
                <a href="#cite_note-4">[4]</a>
            </sup>{" "}
            (drawing most of its talent from U.S.{" "}
            <a href="/wiki/College_basketball" title="College basketball">
                college basketball
            </a>
            ). Outside North America, the top clubs from national leagues
            qualify to continental championships such as the{" "}
            <a href="/wiki/EuroLeague" title="EuroLeague">
                EuroLeague
            </a>{" "}
            and the{" "}
            <a
                href="/wiki/Basketball_Champions_League_Americas"
                title="Basketball Champions League Americas"
            >
                Basketball Champions League Americas
            </a>
            . The{" "}
            <a
                href="/wiki/FIBA_Basketball_World_Cup"
                title="FIBA Basketball World Cup"
            >
                FIBA Basketball World Cup
            </a>{" "}
            and{" "}
            <a
                href="/wiki/Basketball_at_the_Summer_Olympics#Men's_tournament"
                title="Basketball at the Summer Olympics"
            >
                Men's Olympic Basketball Tournament
            </a>{" "}
            are the major international events of the sport and attract
            top national teams from around the world. Each continent hosts
            regional competitions for national teams, like{" "}
            <a href="/wiki/EuroBasket" title="EuroBasket">
                EuroBasket
            </a>{" "}
            and{" "}
            <a href="/wiki/FIBA_AmeriCup" title="FIBA AmeriCup">
                FIBA AmeriCup
            </a>
            .
            </p>
            <p>
            The{" "}
            <a
                href="/wiki/FIBA_Women%27s_Basketball_World_Cup"
                title="FIBA Women's Basketball World Cup"
            >
                FIBA Women's Basketball World Cup
            </a>{" "}
            and{" "}
            <a
                href="/wiki/Basketball_at_the_Summer_Olympics#Women's_tournament"
                title="Basketball at the Summer Olympics"
            >
                Women's Olympic Basketball Tournament
            </a>{" "}
            feature top national teams from continental championships. The
            main North American league is the{" "}
            <a href="/wiki/WNBA" className="mw-redirect" title="WNBA">
                WNBA
            </a>{" "}
            (
            <a
                href="/wiki/NCAA_Women%27s_Division_I_Basketball_Championship"
                className="mw-redirect"
                title="NCAA Women's Division I Basketball Championship"
            >
                NCAA Women's Division I Basketball Championship
            </a>{" "}
            is also popular), whereas the strongest European clubs
            participate in the{" "}
            <a href="/wiki/EuroLeague_Women" title="EuroLeague Women">
                EuroLeague Women
            </a>
            .`);

            const [gpt4OReferencesResponse, gpt4OutlineResponse, gpt4TaglineImg1Response, gpt4IntroResponse, DallEIntroResponse] = await Promise.all([
                gpt4OReferencesPromise,
                gpt4OutlinePromise,
                gpt4TaglineImg1Promise,
                gpt4IntroPromise,
                DallEIntroPromise
            ]);
            
            const gpt4References = gpt4OReferencesResponse.data.choices[0].message.content;
            let gpt4Outline = gpt4OutlineResponse.data.choices[0].message.content;
            const gpt4Img1 = gpt4TaglineImg1Response.data.choices[0].message.content;
            const gpt4Intro = gpt4IntroResponse.data.choices[0].message.content;
            const DallEIntro = DallEIntroResponse.data.data[0].url;

            // Generate DALL-E images for each subsection
            gpt4Outline = gpt4Outline.replace(/\n/g, ' ')
                         .replace(/:\s*"(.+?)"/g, function(match, p1) {
                             return ': "' + p1.replace(/"/g, "'") + '"';
                         });
            console.log('OUTLINE:::::', gpt4Outline)        
            gpt4Outline = JSON.parse(gpt4Outline)

            const outlineWithImages = await Promise.all(gpt4Outline.map(async (section) => {
                const sectionWithImages = await Promise.all(section.subsections.map(async (subsection) => {
                    const imagePrompt = `${searchQuery} related to ${subsection.title}`;
                    const [imageResponse, captionResponse] = await Promise.all([
                        generateDalleImage(imagePrompt),
                        generateCaption(imagePrompt)
                    ]);
                    return {
                        ...subsection,
                        content: {
                            ...subsection.content,
                            imageUrl: imageResponse.data.data[0].url,
                            imageCaption: captionResponse.data.choices[0].message.content
                        }
                    };
                }));
                return { ...section, subsections: sectionWithImages };
            }));    

            navigate('/article', { state: { articles: {
                references: gpt4References, 
                outline: outlineWithImages, 
                tagline1: gpt4Img1,
                intro: gpt4Intro,
                introImg: DallEIntro
            }, searchQuery } });

        } catch (error) {
            console.error('Error generating response:', error);
        }
    };

    return (
        <div role="search" className="search-container">
        <form
            className="pure-form"
            id="search-form"
            onSubmit={handleSearch} 
            // action="//www.wikipedia.org/search-redirect.php"
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                {/* <ResponseDisplay responseContent={responseContent} /> */}
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
                onClick={() => console.log(searchQuery)}
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
        )
}

export default SearchComponent;