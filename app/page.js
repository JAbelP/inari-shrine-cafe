"use client
import { useEffect } from 'react';

const YourComponent = () => {
  useEffect(() => {
    // Replace 'https://example.com' with the URL you want to redirect to
    window.location.replace('https://example.com');
  }, []);

  return (
   <></>
  );
};

export default YourComponent;