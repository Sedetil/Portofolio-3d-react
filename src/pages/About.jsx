import profile from "../assets/images/foto.jpeg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        <div className="flex-1">
          <h1 className="head-text">
            Hello, I'm{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Alwan
            </span>
          </h1>
          <img
            src={profile}
            alt="Alwan"
            className="block md:hidden mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover ring-4 ring-blue-500 shadow-lg my-4"
          />
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              A student at Politeknik Negeri Lampung with a strong passion for software development. 
              I enjoy building applications, learning through hands-on experience, and turning ideas into innovative digital solutions.
            </p>
          </div>
        </div>
        <img
          src={profile}
          alt="Alwan"
          className="hidden md:block w-24 h-24 md:w-36 md:h-36 rounded-full object-cover ring-4 ring-blue-500 shadow-lg mt-4 md:mt-0"
        />
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={`skill-${index}`} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Education</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've studied at several educational institutions developing strong
            academic foundations and practical skills along the way. Here's my
            education journey:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`experience-${index}`}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, pointIndex) => (
                    <li
                      key={`experience-point-${pointIndex}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
