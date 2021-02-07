import React from 'react';
import Article from '../components/Article';

const Articles = [
  {
    id: 1,
    title: 'czym jest teoria strun?',
    author: 'stephen hawking',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 2,
    title: 'Czy jestesmy sami we wszechświecie?',
    author: 'Lary kingston',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },

  {
    id: 3,
    title: 'Co w trawie szumi',
    author: 'Autor nieznany',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
]


const HomePage = () => {

  const ArticlesList = Articles.map((article, articleIndex) => (
    <Article
      key={articleIndex}
      {...article}
    />

  ))

  return (
    <>
      <div>home Page</div>
      { ArticlesList}
    </>
  );
}

export default HomePage;
