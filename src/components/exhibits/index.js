import React, { useRef, useState, Fragment } from "react";
import { Text } from "@react-three/drei";



function Exhibit(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  console.log(props.position)
  return (
    <Fragment>
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.1 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxGeometry args={[1.2, 2, 0.2]} />
      <meshStandardMaterial
        opacity={hovered ? 0.9 : 0.6}
        color={hovered ? "red" : "green"}
      />
    </mesh>
    <Text
      
      position={[props.position[0],props.position[1]-2, props.position[2]]}
      color="white"
      fontSize={0.5}
      anchorX="center"
      anchorY="middle"
    >
      {`${props.text}`}
    </Text>
    </Fragment>

  );
}

export default Exhibit;
