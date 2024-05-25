import { Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";


const PhysicsScene = () => {

  const cubeRef = useRef();

  const cubeClickHandler = () => {
    // cubeRef.current.addForce({ x: 0, y: 0, z: 10 });
    // cubeRef.current.applyImpulse({ x: 2, y: 8, z: 0 });
    // cubeRef.current.applyImpulseAtPoint(
    //   { x: 0, y: 8, z: 0 },
    //   { x: 2, y: 0, z: 0 }
    
    // );
    // cubeRef.current.addTorque({ x: 0, y: 3, z: 0 });
    cubeRef.current.applyTorqueImpulse({ x: 0, y: 3, z: 0 });
  }

  const secondCubeRef = useRef();


  const secondCubeClickHandler = () => {
    secondCubeRef.current.applyImpulse({ x: 8, y: 0, z: 0 });
  }


  return (
    <>

      <Physics>
        <RigidBody ref={cubeRef} onClick={cubeClickHandler} >
          <mesh castShadow position={[1.5, 2.5, 0]}>
            <boxGeometry />
            <meshStandardMaterial color="#0083e6" />
          </mesh>
        </RigidBody>

        <RigidBody 
        ref={secondCubeRef}
        onCollisionEnter={() => console.log("Collision Enter")}
        onCollisionExit={() => console.log("Collision Exit")}
        onSleep={() => console.log("Collision Sleeping")}
        onWake={() => console.log("Collision Wake")}
        gravityScale={1}
        restitution={0}
        friction={0}

        >
          <mesh 
          castShadow 
          position={[-1.5, 2.5, 0]}
          onClick={secondCubeClickHandler}
            
          
          >
            <boxGeometry />
            <meshStandardMaterial color="#00439b" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" restitution={1} friction={1} >
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>

    </>
  );
};

export default PhysicsScene;
