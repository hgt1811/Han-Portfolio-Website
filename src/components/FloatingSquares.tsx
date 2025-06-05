export default function FloatingSquares() {
  const squares = [
    { size: "w-6 h-6", color: "bg-[#e2b9bd]", position: "top-10 left-10" },
    { size: "w-8 h-8", color: "bg-[#B3A1E6]", position: "bottom-20 right-10" },
    { size: "w-5 h-5", color: "bg-[#E9A7B3]", position: "top-1/2 left-1/4" },
    { size: "w-7 h-7", color: "bg-[#D4C7F2]", position: "bottom-1/4 right-1/4" },
    { size: "w-11 h-11", color: "bg-[#CE7E9E]", position: "top-1/4 right-1/5" },
    { size: "w-9 h-9", color: "bg-[#A480CF]", position: "bottom-3/4 left-1/6" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {squares.map((square, index) => (
        <div
          key={index}
          className={`absolute ${square.size} ${square.color} opacity-50 rounded-md ${square.position} animate-float-slow`}
        ></div>
      ))}
    </div>
  );
}
