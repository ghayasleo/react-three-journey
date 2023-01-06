import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from "@react-three/fiber"
import Experience from "./experience"

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <Canvas camera={{ fov: 45, position: [- 4, 3, 6] }}>
    <Experience />
  </Canvas>
)