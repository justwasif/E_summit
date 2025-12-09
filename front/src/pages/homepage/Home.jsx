import bgImage from "../../assets/bg/homeBgMain.png";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on top */}
      <div className="relative z-10 text-white text-center px-4">
        <h1 className="text-5xl font-bold drop-shadow-lg">
          Welcome to E-CELL
        </h1>
        <p className="mt-4 text-xl opacity-90">
          Innovation rises from the spark within.
        </p>
      </div>
    </div>
  );
}
