import React, { useState } from 'react';
import axios from 'axios';

import OPENAI_API_KEY from './key';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'user', content: `Generate a Wikipedia style article on the following topic: ${searchQuery}` }
                    ],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    },
                }
            );

            // console.log(response.data.choices[0].message.content);
            const article = response.data.choices[0].message.content;
            navigate('/article', { state: { article } });

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