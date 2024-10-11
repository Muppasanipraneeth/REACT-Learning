import { useEffect, useState } from "react";

const Quote = () => {
  const [data, setData] = useState(null); // Initialize as null for clear loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const json = await fetch("https://api.quotable.io/random");
        const response = await json.json();
        setData(response);
      } catch (err) {
        console.log("Error fetching quote:", err);
      }
    }

    fetchData();
  }, []);
  const preventCopy=(e)=>{
e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {data ? (
        <div className="p-4 bg-gray-100 rounded-md shadow-md no-select"  onContextMenu={preventCopy} >
          <p className="text-xl font-semibold text-gray-800">{data.content}</p>
          <p className="text-right mt-2 text-gray-600">— {data.author}</p>
        </div>
      ) : (
        <div className="w-12 h-12 border-4 border-dotted rounded-full animate-spin border-blue-500"></div>
      )}
    </div>
  );
};

export default Quote;
