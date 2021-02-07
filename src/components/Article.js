import React from 'react';
const Article = ({ title, author, text }) => {

  const styles = {
    marginTop: '40px'
  }


  return (
    <article style={styles}>
      <h2 style={{ marginBottom: '20px', textTransform: "uppercase" }}>tytuł: {title}</h2>
      <p>author: {author}</p>
      <p>text:</p>
      <p>{text}</p>
    </article >
  );
}

export default Article;
