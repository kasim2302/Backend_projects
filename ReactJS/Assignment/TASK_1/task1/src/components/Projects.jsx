const Projects = () => {
  const projects = [
    {
      title: "User Profile Management System",
      desc: "User authentication, profile update, and database handling.",
    },
    {
      title: "E-commerce Web Application",
      desc: "Product listing, cart, and order management system.",
    },
    {
      title: "Email Validation System",
      desc: "Bulk email validation and email sending using CSV files.",
    },
  ];

  return (
    <section
      id="project"
      className="py-14 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
