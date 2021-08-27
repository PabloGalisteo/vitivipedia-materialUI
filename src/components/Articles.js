import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ElaboracionVinoTinto from '../blog-post/ElaboracionVinoTinto';
import ElaboracionVinoBlanco from '../blog-post/ElaboracionVinoBlanco';

const Article = () => {
  const { page } = useParams();
  const [pageName, setPageName] = useState(null);

  useEffect(() => {
    switch (page) {
      case 'elaboracion-vino-tinto':
        setPageName(<ElaboracionVinoTinto />);
        break;
      case 'elaboracion-vino-blanco':
        setPageName(<ElaboracionVinoBlanco />);
        break;
      default:
        setPageName(<div>No page found</div>);
    }
  }, [page]);

  return <div>{pageName ? pageName : null}</div>;
};

export default Article;
