import css from '../Assets/SkillsPhotos/css.png';
import html from '../Assets/SkillsPhotos/html5.png';
import firebase from '../Assets/SkillsPhotos/firebase.png';
import node from '../Assets/SkillsPhotos/nodejs.png';
import npm from '../Assets/SkillsPhotos/npm.png';
import express from '../Assets/SkillsPhotos/expressjs.png';
import bootstrap from '../Assets/SkillsPhotos/bootstrap.png';
import github from '../Assets/SkillsPhotos/github.png';
import tailwind from '../Assets/SkillsPhotos/tailwind.png';
import js from '../Assets/SkillsPhotos/js.png';
import mongodb from '../Assets/SkillsPhotos/mongodb.webp';
import netlify from '../Assets/SkillsPhotos/netlify.png';
import react from '../Assets/SkillsPhotos/react.png';

const skillsData = [
  { name: 'CSS', image: css },
  { name: 'HTML5', image: html },
  { name: 'Firebase', image: firebase },
  { name: 'Node.js', image: node },
  { name: 'NPM', image: npm },
  { name: 'Express.js', image: express },
  { name: 'Bootstrap', image: bootstrap },
  { name: 'GitHub', image: github },
  { name: 'Tailwind', image: tailwind },
  { name: 'JavaScript', image: js },
  { name: 'MongoDB', image: mongodb },
  { name: 'Netlify', image: netlify },
  { name: 'React', image: react }
];

const Skills = () => {
  return (
    <div  className=" pb-40">
      <div id="skills" className="md:mx-40 mx-4 my-10 pt-20">
        <div className="text-center mb-">
          <h2 className="text-4xl font-extrabold text-white">MY Skills</h2>
          <h2 className="transform scale-y-[-1] text-4xl mb-10 font-extrabold text-gray-600 opacity-30">
            MY Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-8 grid-cols-3 gap-4 md:gap-4">
          {/* Skill Cards */}
          {skillsData.map((skill, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              className="group relative flex justify-center items-center"
            >
              {/* Skill Card with Image */}
              <div className="w-36 h-32 shadow-md shadow-sky-300 hover:shadow-md transition-shadow rounded-xl flex justify-center items-center border-t-0 border-l-0 border  border-sky-400">
                <img
                  className="rounded-full h-20 w-20 transition-transform duration-300 hover:scale-110 shadow-md hover:shadow-sky-300"
                  src={skill.image}
                  alt={skill.name}
                />
              </div>

              {/* Skill Name (Visible on hover) */}
              <div className="absolute bottom-0 mb-4 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold text-xl px-2 rounded-lg -mt-20 bg-slate-500">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
