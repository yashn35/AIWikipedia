import React from 'react';
import { useLocation } from 'react-router-dom';
import Response from './Response';

function GenerateArticle() {
  const location = useLocation();
  const { articles, searchQuery } = location.state;

  return (
    <div>
      {/* <h1>AI Generated Wikipedia Article</h1> */}
      <Response responseContent={articles.intro} introImg={articles.introImg} tagline1={articles.tagline1} outline={articles.outline} references={articles.references} searchQuery={searchQuery} />
    </div>
  );
}

export default GenerateArticle;