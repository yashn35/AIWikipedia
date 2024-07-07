import React from 'react';
import { useLocation } from 'react-router-dom';
import Response from './Response';

function GenerateArticle() {
  const location = useLocation();
  const { article } = location.state;

  return (
    <div>
      {/* <h1>AI Generated Wikipedia Article</h1> */}
      <Response responseContent={article} />
    </div>
  );
}

export default GenerateArticle;