import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Music: [
    {
      name: "Lose Yourself",
      Directer: "by enimen",
      ratestar: "⭐⭐⭐⭐⭐",
      rating: "5/5"
    },
    {
      name: "Naruto",
      Directer: "by kishimoto",
      ratestar: "⭐⭐⭐⭐",
      rating: "4/5"
    },
    {
      name: "Venom",
      Directer: "by eminem",
      ratestar: "⭐⭐⭐⭐",
      rating: "4/5"
    }
  ],

  Games: [
    {
      name: "Valorant",
      Directer: "Riot",
      ratestar: "⭐⭐⭐⭐⭐",
      rating: "5/5"
    },
    {
      name: "Apex Legends",
      Directer: "EA Sports",
      ratestar: "⭐⭐⭐⭐",
      rating: "4/5"
    },
    {
      name: "Among US",
      Directer: "InnerSloth LLC",
      ratestar: "⭐⭐⭐⭐",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Music");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontFamily: "cursive" }}> My Favorites</h1>
      <p style={{ fontFamily: "cursive", fontSize: "13px" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              fontFamily: "cursive",
              fontSize: "18px",
              fontWeight: "500",
              background: "#E5E7EB",
              borderRadius: "12px",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
     <p  style={{background : "black"}}>< hr  /> </p>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div
                style={{
                  fontSize: "larger",
                  padding: "0.5 erm 1erm",
                  fontFamily: "cursive"
                }}
              >
                {" "}
                {book.name}{" "}
              </div>
              <div
                key={book.Directer}
                style={{
                  fontSize: "18px",
                  padding: "0.5 erm 1erm",
                  fontFamily: "cursive"
                }}
              >
                {" "}
                {book.Directer}{" "}
              </div>
              <div
                key={book.ratestar}
                style={{
                  fontSize: "18px",
                  paddingTop: "8px",
                  paddingBottom: "8px"
                }}
              >
                {" "}
                {book.ratestar}{" "}
              </div>
              <div
                key={book.rating}
                style={{
                  fontSize: "smaller",
                  paddingTop: "8px",
                  fontFamily: "cursive"
                }}
              >
                {" "}
                {book.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

