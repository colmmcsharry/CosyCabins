import React from "react";


export default function Quotable() {
  const [data, setData] = React.useState(null);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }

  // Run `updateQuote` once when component mounts
  React.useEffect(() => {
    updateQuote();
  }, []);

  // Do not render until the first quote is loaded
  if (!data) return null;

  return (
    <div className="quotesdiv">
      
         
            <p className="quote">{data.content}</p>
            <p className="author">- {data.author}</p>
          
       
          <button className="quotebutton" onClick={updateQuote}>
            New Quote
          </button>
      
    </div>
  );
}
