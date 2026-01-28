import React from 'react'

const Skills = () => {
  const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Bootstrap", level: 80 },
  { name: "Tailwind", level: 80 },
  { name: "React", level: 70 },
  { name: "MYSQL", level: 80 },
];
  return (
   <>
    <section id="skills" className="py-14 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Skills
        </h2>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   
   </>
  )
}

export default Skills