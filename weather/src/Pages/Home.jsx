import React from "react";
import { Link } from "react-router-dom";
import { TiArrowRight, TiWorldOutline } from "react-icons/ti";
import { TbBrandGithub } from "react-icons/tb";
import Footer from "../Components/Information/Footer";
const Home = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center flex-col">
      {/* <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 "> */}
      <div className="logo flex justify-center items-center">
        <div className="">
          <img className="" src="../../Emojis/cloud.png" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-4 p-6 rounded-3xl ">
        <div className="flex flex-col justify-center items-center">
          <h1>Weather</h1>
          <h1 className="font-bold text-lg">APP</h1>
        </div>
        <div className=" w-36">
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            neque eius voluptatum tenetur aliquam officiis, nemo nostrum
            repellat architecto, fugiat soluta eveniet!
          </p> */}
        </div>
        <div className="flex flex-col items-center justify-center gap-y-1">
          <Link to="/weather">
            <div className="buttonIcon">
              <button type="text">Let's go</button>
              <TiArrowRight size={25} color="white" />
            </div>
          </Link>
          <p>or</p>
          <a href="https://github.com/DaivyMorales">
            <div className="buttonSecondary">
              <button type="text">Repository</button>
              <TbBrandGithub size={25} color="gray" />
            </div>
          </a>
        </div>
      </div>

      {/* </div> */}

      <Footer />
    </div>
  );
};

export default Home;
