import React, { useState } from 'react';

const App = () => {
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [url, setUrl] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentUrl(e.target.value);
  };

  const handleClick = () => {
    if (currentUrl !== '') setUrl(currentUrl);
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto h-full p-10">
        <div className="flex mb-20">
          <input type="text" className="form-input px-4 py-3 w-full rounded-l-xl" onChange={handleChange} />
          <button className="py-2 px-3 bg-pink-500 hover:bg-pink-600 text-white rounded-r-xl transition-all" onClick={handleClick}>
            Convert
          </button>
        </div>
        <iframe
          title="widget"
          id="widgetv2Api"
          src={`https://convert2mp3s.com/api/widgetv2?url=${url ? url : 'https://www.youtube.com/watch?v=pRpeEdMmmQ0'}`}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </section>
  );
};

export default App;
