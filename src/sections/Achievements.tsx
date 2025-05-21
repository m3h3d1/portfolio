import UniversityIcon from "@/assets/icons/university.svg";
import companyIcon from "@/assets/images/company.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const experiences = [
  {
    title: "Bachelor of Science in Information Technology",
    subtitle: "BSc in IT @ Jahangirnagar University",
    duration: "March 2018 - May 2023",
    text: "Gained a strong foundation of computer science fundamentals, including Data Structures, Algorithms, Operating Systems, Database Management Systems and Object-Oriented Programming.",
    icon: UniversityIcon,
  },
  {
    title: "Trainee Software Engineer",
    subtitle: "Trainee Software Engineer @ BJIT Limited",
    duration: "Aug 2023 - December 2023",
    text: "Gained experience in Full Stack Development using Java, Spring Boot, Hibernate, MySQL, HTML, CSS, JavaScript and React.",
    icon: companyIcon,
  },
  {
    title: "Software Engineer",
    subtitle: "Software Engineer @ BJIT Limited",
    duration: "January 2024 - Present",
    text: "Worked as a Software Engineer in the development of a web application for a client using Java, Spring Boot, JavaScript and React.",
    icon: companyIcon,
  }
];

export const AchievementsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Education & Experience"
          title="What I Have Accomplished Till Now"
          description="This section includes my education and work experience I have achieved till now."
        />
        <div className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) =>
              <Fragment key={idx}>
              {experiences.map((exp) => (
                <Card
                  key={exp.title}
                  className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                >
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      {exp.icon === UniversityIcon ? (
                        <UniversityIcon className="size-8" />
                      ) : (
                        <Image
                          src={exp.icon}
                          alt={exp.title}
                          className="max-h-full max-w-8"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex-none text-xs mb-2 font-extrabold tracking-widest bg-gradient-to-r from-emerald-500 to-sky-300 text-transparent bg-clip-text">
                        {exp.duration}
                      </div>
                      <div className="font-semibold">{exp.title}</div>
                      <div className="text-sm text-white/40 mt-2">
                        {exp.subtitle}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">
                    {exp.text}
                  </p>
                </Card>
              ))}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
