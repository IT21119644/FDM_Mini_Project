import { Link } from "react-router-dom";
import "./startup.css";
import Card from "../../common/Card";

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
];

function Startup() {
  document.title = "FDM | Startup";

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {cards.map(({ title, image, url, id }) => (
            <div className="col-md-4" key={id}>
              <Card imageSource={image} title={title} url={url} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Startup;
