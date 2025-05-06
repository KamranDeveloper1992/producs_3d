import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/uploads_files_5132423_project+14.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[0, 1, 0]}
      scale={0.2}
      rotation={[0, Math.PI, 0.2]}
    />
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="sunset" />
        <Model />
        <OrbitControls
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
      </Canvas>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            padding: isMobile ? "20px" : "32px",
            borderRadius: "24px",
            width: isMobile ? "90%" : "350px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "#fff",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            transition: "transform 0.3s ease",
            pointerEvents: "auto",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "22px" : "26px",
              fontWeight: "700",
              marginBottom: "8px",
              color: "#ffffff",
            }}
          >
            Product Price Nike shoes
          </h2>
          <h3
            style={{
              fontSize: isMobile ? "28px" : "34px",
              color: "#90EE90",
              marginBottom: "18px",
              fontWeight: "bold",
            }}
          >
            $14
          </h3>
          <p
            style={{
              fontSize: isMobile ? "14px" : "15px",
              color: "#eee",
              marginBottom: "28px",
              lineHeight: "1.6",
            }}
          >
            Discover premium quality shoes with cutting-edge design and comfort.
            Step into style today with our latest collection.
          </p>

          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: isMobile ? "12px 20px" : "14px 28px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
