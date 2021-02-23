import React from 'react';
import DataLoad from '../DataLoad/DataLoad';
import Header from '../Header/Header';
import './Home.css';
import Particles from "react-tsparticles";

const Home = () => {
    return (
        <div className="bg-gradient">
            {/* <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "none",
            },
          },
          fpsLimit: 600,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ff577f",
              distance: 150,
              enable: true,
              opacity: .5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 55,
            },
          },
          detectRetina: true,
        }}
      /> */}
            <Header></Header>
            <DataLoad></DataLoad>
        </div>
    );
};

export default Home;