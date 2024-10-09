/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Cybertruck.glb 
*/


import React, { useRef } from 'react'
import { useSnapshot } from "valtio"

import { Preload, useGLTF } from '@react-three/drei'
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';


export function Cybertruck(props) {
  const { nodes, materials } = useGLTF('models/Cybertruck.glb')
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)

  const canvasRef = useRef(document.createElement("canvas"));
  const textureRef = useRef();
  const context = useRef(canvasRef.current.getContext("2d"));
console.log()

  canvasRef.current.width = 1600;
  canvasRef.current.height = 1600;

  let ctx = context.current;

  ctx.globalCompositeOperation = "hue";

  const img = document.getElementById(`overlay${overlay}`);

  if (img.complete) {
    ctx.drawImage(img, 0, 0);
    if (snap1.base.BaseMtl !== "none") {
      if(overlay!==1){
      ctx.fillStyle = snap1.base.BaseMtl;
      ctx.fillRect(0, 0, 1600, 1600);
      }
    }


    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }

  else {
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      if (snap1.base.BaseMtl !== "none") {
        if(overlay!==1){
        ctx.fillStyle = snap1.base.BaseMtl;
        ctx.fillRect(0, 0, 1600, 1600);
        }
      }
      


      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    }
  }
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 89.972, 307.014]}>
          <mesh geometry={nodes.Body.geometry}>
        <meshStandardMaterial {...materials.BaseMtl} color={overlay==1 || overlay==13 || overlay==34 ? (snap1.base.BaseMtl!=="none" ? snap1.base.BaseMtl : 0xffffff) : 0xffffff}>
          <canvasTexture
            flipY={false}
            wrapS={1000}
            wrapT={1000}
            colorSpace='srgb'
            ref={textureRef}
            attach="map"
            image={canvasRef.current}
          />
        </meshStandardMaterial>
      </mesh>
            <mesh geometry={nodes.Body001.geometry} material={materials.Chrome} />
            
            <mesh geometry={nodes.body_dash_0.geometry} material={materials.dash} />
            <mesh geometry={nodes.body_glass_1_0.geometry} material={materials.glass_1} />
            <mesh geometry={nodes.body_glass_2_0.geometry} material={materials.glass_2} />
            <mesh geometry={nodes.body_glass_3_0.geometry} material={materials.glass_3} />
            <mesh geometry={nodes.body_light2_0.geometry} material={materials.light2} />
            <mesh geometry={nodes.body_light_1_0.geometry} material={materials.light_1} />
            <mesh geometry={nodes.body_metal_2_0.geometry} material={materials.metal_2} />
            <mesh geometry={nodes.body_metal_3_0.geometry} material={materials.metal_3} />
            <mesh geometry={nodes.body_metal_4_0.geometry} material={materials.metal_4} />
            <mesh geometry={nodes.body_plastic_1_0.geometry} material={materials.plastic_1} />
            <mesh geometry={nodes.body_plastic_2_0.geometry} material={materials.plastic_2} />
            <mesh geometry={nodes.body_plastic_4_0.geometry} material={materials.plastic_4} />
            <mesh geometry={nodes.body_plastic_5_0.geometry} material={materials.plastic_5} />
          </group>
          <group position={[0, 89.972, 176.846]}>
            <mesh geometry={nodes.chairs_back001_fabric_1_0.geometry} material={materials.fabric_1} />
            <mesh geometry={nodes.chairs_back001_metal_1_0.geometry} material={materials.metal_1} />
            <mesh geometry={nodes.chairs_back001_plastic_3_0.geometry} material={materials.plastic_3} />
          </group>
          <group position={[0, 89.972, 307.014]}>
            <mesh geometry={nodes.chairs_front_fabric_1_0.geometry} material={materials.fabric_1} />
            <mesh geometry={nodes.chairs_front_metal_1_0.geometry} material={materials.metal_1} />
            <mesh geometry={nodes.chairs_front_plastic_3_0.geometry} material={materials.plastic_3} />
            <mesh geometry={nodes.chairs_front_plastic_4_0.geometry} material={materials.plastic_4} />
          </group>
          <mesh geometry={nodes.body004_plastic_4_0.geometry} material={materials.plastic_4} position={[0, 89.972, 307.014]} />
          <mesh geometry={nodes.body005_screen_1_0.geometry} material={materials.screen_1} position={[0, 89.972, 307.014]} />
          <mesh geometry={nodes.Cube_plastic_4_0.geometry} material={materials.plastic_4} position={[-2.627, 0, 0]} />
          <mesh geometry={nodes.numberplate_numberplate_0.geometry} material={materials.numberplate} position={[0, 85.214, 246.024]} />
          <mesh geometry={nodes.rims_rim_0.geometry} material={materials.material} position={[176.499, 60.632, -268.046]} />
          <mesh geometry={nodes.tires_tire_0.geometry} material={materials.tire} position={[176.499, 60.632, -268.046]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Cybertruck.glb')
