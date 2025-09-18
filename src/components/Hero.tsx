export default function Hero() {
  return (
    <div className="hero relative z-0 min-h-dvh pt-40">
      <div className="max-w-7xl mx-auto flex">
        <div className="content">
          <h1 className="mb-6 text-6xl font-medium">
            Swift delivery,
            <br /> smart logistics.
          </h1>
          <p className="mb-6 text-2xl font-medium">
            Efficient logistics solutions, ensuring
            <br /> seamless transportation and supply
            <br /> chain management.
          </p>
          <div className="font-semibold">
            <span>In air</span>
            <span>At sea</span>
            <span>On road</span>
          </div>
          <a href="#" className="font-semibold">
            Our Service
          </a>
        </div>
      </div>
      <div className="video-max-w-7xl absolute top-0 left-0 -z-10 h-dvh w-full before:absolute before:left-0 before:h-full before:w-full before:bg-black/40 before:to-0%">
        <video
          src="/hero-background.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          className="h-full w-full object-cover object-center"
          poster="https://framerusercontent.com/images/KSM5xSWcEga3lSTWK61Uk8WBys.jpg"
        ></video>
      </div>
    </div>
  );
}
