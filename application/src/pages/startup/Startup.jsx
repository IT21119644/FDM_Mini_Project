import { Link } from "react-router-dom";
import "./startup.css";
import Card from "../../common/Card";
import '../../common/global.css'; // Import the global CSS

import image1 from "../../assets/ph.jpg";
import image2 from "../../assets/water.jpg";
import image3 from "../../assets/water2.jpg";

const cards = [
  {
    id: 1,
    title: "Fazt Web",
    image: image2,
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Fazt Blog",
    image: image2,
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 4,
    title: "Fazt Blog",
    image: image2,
    url: "https://blog.faztweb.com",
  },
  {
    id: 5,
    title: "Fazt Youtube",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 6,
    title: "Fazt Youtube",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 7,
    title: "Fazt Web",
    image: image2,
    url: "https://faztweb.com",
  },
  {
    id: 8,
    title: "Fazt Blog",
    image: image2,
    url: "https://blog.faztweb.com",
  },
  {
    id: 9,
    title: "Fazt Youtube",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 10,
    title: "Fazt Blog",
    image: image2,
    url: "https://blog.faztweb.com",
  },
  {
    id: 11,
    title: "Fazt Youtube",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 12,
    title: "Fazt Youtube",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 13,
    title: "Fazt Web",
    image: image2,
    url: "https://faztweb.com",
  },
  {
    id: 14,
    title: "Fazt Blog",
    image: image2,
    url: "https://blog.faztweb.com",
  },
  {
    id: 15,
    title: "Fazt Youtube",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 16,
    title: "Fazt Blog",
    image: image2,
    url: "https://blog.faztweb.com",
  },
  {
    id: 17,
    title: "Fazt Youtube",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
];

function Startup() {
  document.title = "FDM | Startup";

  // Calculate the number of columns for a 4-card grid
  const numColumns = 4;

  // Split the cards into groups of 4 for each row
  const rows = [];
  for (let i = 0; i < cards.length; i += numColumns) {
    rows.push(cards.slice(i, i + numColumns));
  }

  return (
    <>
      <div className="container">
        {rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map(({ title, image, url, id }) => (
              <div className={`col-md-${12 / numColumns}`} key={id}>
                <Card imageSource={image} title={title} url={url} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Startup;
