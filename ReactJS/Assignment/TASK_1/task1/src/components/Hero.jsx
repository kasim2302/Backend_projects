const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-50 dark:bg-gray-900 py-14 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* Text Card */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-colors duration-300">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Story
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m Mohamed Kasim from Chennai, India. I completed my B.Tech in
            Information Technology and I’m passionate about building solutions,
            learning new technologies, and solving real-world problems.
          </p>
        </div>

        {/* Image */}
        <img
          src="/img/banner.jpg"
          alt="banner"
          className="rounded-xl shadow-lg transition duration-300 dark:brightness-75"
        />
      </div>
    </section>
  );
};

export default Hero;
