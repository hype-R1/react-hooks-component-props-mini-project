import React from "react";

// const emojiFromMinutes = (minutes)  => {
//     let interval = 5;
//     let emoji = "☕️";
//     let emojis = "";
  
//     if (minutes >= 30) {
//       interval = 10;
//       emoji = "🍱";
//     }
  
//     for (let i = 0; i < minutes; i += interval) {
//       emojis += emoji;
//     }
  
    // return emojis;
//   }
  
  const Article =({ minutes, title, date = "January 1, 1970", preview }) => {
    return (
      <article>
        <h3>{title}</h3>
        <small>
          {date}
        </small>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;