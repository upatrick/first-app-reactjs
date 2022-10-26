import React from "react";
import { Link } from "react-router-dom";
import TitlePage from "../components/TitlePage";

const Home: React.FC = () => {
  const title: string = "Home";
  const subTitle: string =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi inventore voluptatem voluptatum cum porro consequatur quis harum deleniti! Ipsum dolorem repellendus exercitationem dicta facere qui, doloribus quibusdam veritatis reprehenderit?";

  return (
    <div style={{ maxWidth: "800px" }}>
      <TitlePage title={title} subTitle={subTitle} />
      <Link to={"/about"}>About</Link>
    </div>
  );
};

export default Home;
