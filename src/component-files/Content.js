import React from "react";
import Card from "./Card";
import "../styles/content.css";
import family from "../resource/family.jpg";
import constitutional from "../resource/constitutional.jpg";
import criminal from "../resource/criminal.jpg";
import business from "../resource/business.jpg";

const Content = () => {
  let our_practices = [
    {
      index: 1,
      heading: "Criminal Defense",
      image: criminal,
      content:
        "Criminal defense law consists of the legal protections afforded to people who have been accused of committing a crime.",
    },
    {
      index: 2,
      heading: "Constitutional Law",
      image: constitutional,
      content:
        "It is a body of law which defines the role, powers, and structure of different entities within a state, namely, the executive, the parliament or legislature, as well as the basic rights of citizens.",
    },
    {
      index: 3,
      heading: "Business Law",
      image: business,
      content:
        "Business law includes contract laws, manufacturing and sales laws, and also hiring practices and ethics. It is the legal laws of business and commerce in the public as well as the private sector.",
    },
    {
      index: 4,
      image:family,
      heading: "Family Law",
      content:
        "Family law, body of law regulating family relationships, including marriage and divorce, the treatment of children, and related economic matters.",
    },
  ];

  return (
    <div className="h1">
      <h1>Where we can Support</h1>
      <div className="styles">
        {our_practices.map((Prac) => (
          <Card
            image={Prac.image}
            key={Prac.index}
            heading={Prac.heading}
            content={Prac.content}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Content;
