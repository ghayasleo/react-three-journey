import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from "@react-three/fiber"
import Experience from "./experience"
import { StrictMode } from "react"
import { Leva } from "leva"

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <StrictMode>
    <Leva />
    <Canvas shadows={false} camera={{ fov: 45, position: [- 4, 3, 6] }}>
      <color args={["#111111"]} attach="background"/>
      <Experience />
    </Canvas>
  </StrictMode>
)