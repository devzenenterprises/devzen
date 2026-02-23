export const Clients = () => {
  const logos = [
    { src: "blistex.jpg", alt: "Blistex" },
    { src: "jw.jpg", alt: "JW" },
    { src: "sellmark.jpg", alt: "Sellmark" },
    { src: "vs.png", alt: "VS" },
    { src: "ets.png", alt: "ETS" },
    { src: "ps.png", alt: "PS" },
  ];

  return (
    <section className="py-20 px-4 border-y border-border relative overflow-hidden bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-gray-400 mb-16 tracking-wider">
          Our Clients
        </h2>

        <div className="marquee">
          <div className="marquee-track">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <img key={`logo-1-${index}`} src={logo.src} alt={logo.alt} />
            ))}
            {/* Second set of logos for seamless loop */}
            {logos.map((logo, index) => (
              <img key={`logo-2-${index}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
