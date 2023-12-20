"use client"
import { useEffect } from 'react';

const YourComponent = () => {
  useEffect(() => {
    // Replace 'https://example.com' with the URL you want to redirect to
    window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');
  }, []);

  return (
   <></>
  );
};

export default YourComponent;
