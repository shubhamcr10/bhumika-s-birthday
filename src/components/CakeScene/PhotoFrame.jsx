export default function PhotoFrame({ src, rotate = 0 }) {
  return (
    <div
      style={{
        width: "120px",
        height: "160px",
        background: "white",
        padding: "8px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
        transform: `rotate(${rotate}deg)`
      }}
    >
      <img
        src={src}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block"
        }}
      />
    </div>
  );
}
