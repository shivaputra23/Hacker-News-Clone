import React, { useState, useEffect } from "react";
import axios from "axios";

var stories = [];
function BestStories() {
  const url = `https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`;
  const [bestData, setBestData] = useState([]);
  const [err, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBestData(data);
      } catch (err) {
        setError(err);
      }
    })();
  }, [url, stories]);

  const storyDetail = Promise.all(
    bestData.slice(0, 30).map((id) => {
      return axios
        .get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
        .then((response) => {
          console.log("fetch news", response.data);
          return {
            success: true,
            data: response.data,
          };
        })
        .catch((error) => {
          return {
            success: false,
          };
        });
    })
  ).then((result) => {
    stories = result.map((item) => {
      return item.data;
    });
    console.log(stories);
  });
  return (
    <div>
      <ul style={{ color: "black" }}>
        {stories.map((item) => {
          return (
            <li className="m-1" key={item.id}>
              <a href={item.url} style={{ color: "#013220" }}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BestStories;
