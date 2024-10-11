import { useState, useEffect } from 'react';

function Count() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center ">
          <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-bounce"></div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold">Content Loaded</h1>
          <p>This is the content of the component.</p>
        </div>
      )}
    </div>
  );
}

export default Count;
