import React from 'react';
import { Link } from 'react-router-dom';
import './Articlespage.css';

const ArticlesPage = () => {
  const articles = [
    { id: 1, title: '探索貓狗行為的奧秘：相似與差異', content: '貓狗行為解密：洞察相似與差異' }
  ];

  return (
    <div style = {{marginLeft: '20px', marginTop: '20px'}}>
      <h1>文章主題</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id} style={{listStyleType:"none"}}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;
