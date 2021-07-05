import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
 import { PointerLockControls, Stars, FlyControls, OrbitControls } from "@react-three/drei";
import Museum from "./components/museum";
import Exhibit from "./components/exhibits";
import Floor from "./components/floor";

import mona from "./objects/mona.jpg"
import boromir from "./objects/boromir.jpg"
import godzilla from "./objects/van_gough.jpg"
import squid from "./objects/squid.png"

import "./App.css";

const MUS_WIDTH = 50;
const MUS_HEIGHT = 12;
const MUS_POSITION = [0,0,0]
const FLOOR_SIZE = 10;
const EXHIBITS = [mona, boromir, godzilla, squid]
const EXHIBIT_PROPS = [
  [mona,{size:[3.5,5],text:"Mona Lisa | 300 BC"}],
  [boromir,{size:[8,5],text:"Boromir's Sorrow | 903 AD"}],
  [godzilla,{size:[7,5],text:"Starry Night | 123 AD"}],
  [squid,{size:[5,5],text:"S. Ward | Unknown"}]
];

function App() {

  const exhibitItems = []
  for (let i = 0, j = -MUS_WIDTH/2; i < EXHIBITS.length; i++, j+= (MUS_WIDTH/(EXHIBITS.length-1))){
    exhibitItems.push(
      <Exhibit 
          position={[j, 1, 0.1]} 
          rotation={[0,0,0]} 
          size={EXHIBIT_PROPS[i][1].size} 
          text={EXHIBIT_PROPS[i][1].text}
          image={EXHIBIT_PROPS[i][0]}
      />
    );
  }

  return (
    <>
    
    <Canvas 
      style={{height:"100vh", width:"100vw"}}
      dpr={Math.max(window.devicePixelRatio, 2)} 
      resize={{scroll: false}} 
      camera={{position:[MUS_POSITION[0],MUS_POSITION[1],FLOOR_SIZE+5],fov:75}}
      >
      <Suspense fallback={null}>

        <ambientLight intensity={0.9} />

        <Museum position={MUS_POSITION} width={MUS_WIDTH} height={MUS_HEIGHT} floorSize={FLOOR_SIZE}/>
        <Floor position={MUS_POSITION} width={MUS_WIDTH} height={MUS_HEIGHT} floorSize={FLOOR_SIZE}/>
  
        {exhibitItems}

        {/* <FlyControls 
          movementSpeed={10}
          rollSpeed={0.8}
          dragToLook={true}
        /> */}
        <OrbitControls />
        {/* <PointerLockControls /> */}
        <Stars />

      </Suspense>
    </Canvas>
    
    </>
  );
}

export default App;
