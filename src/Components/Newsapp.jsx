// Newsapp.js
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "08d5cda76cb84d149f916a9ae546d706";

  const getData = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      const jsonData = await response.json();

      // Print the full JSON response to check for errors or missing data
      console.log("API Response:", jsonData);

      // Check if the response has a "status" field and if it indicates an error
      if (jsonData.status !== "ok") {
        console.error("API Error:", jsonData.message || "Unknown error");
        setNewsData([]); // Set to empty array to avoid errors in the Card component
        return;
      }

      // Proceed only if jsonData.articles exists and is an array
      if (jsonData.articles && Array.isArray(jsonData.articles)) {
        console.log("Articles found:", jsonData.articles);
        let dt = jsonData.articles.slice(0, 10);
        setNewsData(dt);
      } else {
        console.log("No articles found");
        setNewsData([]); // Set to empty array if articles are not found
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setNewsData([]); // Set to empty array on error
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
    getData(); // Fetch new data based on button click
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul style={{ display: "flex", gap: "11px" }}>
          <a style={{ fontWeight: 600, fontSize: "17px" }}>All News</a>
          <a style={{ fontWeight: 600, fontSize: "17px" }}>Trending</a>
        </ul>
        <div className='searchBar'>
          <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className='head'>Stay Updated with TrendyNews</p>
      </div>
      <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>
      <div>
        {newsData ? <Card data={newsData} /> : null}
      </div>
    </div>
  );
};

export default Newsapp;