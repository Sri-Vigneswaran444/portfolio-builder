const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#09090B]">
      {/* Blue Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[180px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[180px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg,#27272a 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};

export default Background;