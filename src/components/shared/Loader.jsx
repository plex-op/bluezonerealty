const Loader = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-slate-200">
      <div className="relative w-24 h-24 rotate-45">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className={`absolute top-0 left-0 w-7 h-7 m-[2px] bg-rose-500 animate-square`}
            style={{
              animationDelay: `${-i * (10 / 7)}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Loader;
