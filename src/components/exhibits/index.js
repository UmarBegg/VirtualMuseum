import React, { useRef, useState, Fragment } from "react";
import { Text } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
// import mona from "../../objects/mona.jpg"

function Exhibit(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const imgTexture = useTexture(props.image);
  return (
    <Fragment>
      <mesh
        {...props}
        ref={mesh}
        scale={hovered ? 1.1 : 1}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <planeBufferGeometry attach="geometry" args={props.size} />
        <meshStandardMaterial
          opacity={hovered ? 1 : 0.95}
          attach="material"
          map={imgTexture}
        />
      </mesh>

      <Text
        rotation = {props.rotation}
        position={[props.position[0],props.position[1]-3, props.position[2]]}
        color={"white"}
        opacity={hovered ? 1 : 0}
        fontSize={hovered ? 0.25 : 0.2}
        anchorX="center"
        anchorY="middle"
      >
        {`${props.text}`}
      </Text>
    </Fragment>

  );
}

export default Exhibit;
