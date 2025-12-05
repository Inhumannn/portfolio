import { useTranslation } from "react-i18next";
import {
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaMarkdown,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaTerminal,
  FaWordpress,
} from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";

const iconMap: Record<string, React.ElementType> = {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaWordpress,
  FaPhp,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaTerminal,
  FaDocker,
  IoLogoJavascript,
  FaMarkdown,
  IoLogoVercel,
  GoDatabase,
};

type Skill = {
  icon: string;
  name: string;
};

type Category = {
  category: string;
  skills: Skill[];
};

export function SkillTech() {
  const { t } = useTranslation();
  const data = t('skills', { returnObjects: true }) as Category[];

  return (
    <>
      {data.map((category: Category, index: number) => (
        <article key={index}>
          <h3>{category.category}</h3>
          <div>
            {category.skills.map((skill: Skill, i: number) => {
              const Icon = iconMap[skill.icon];
              return (
                <div key={i}>
                  {Icon && <Icon size={70} className="icone" />}
                  <p>{skill.name}</p>
                </div>
              );
            })}
          </div>
        </article>
      ))}
    </>
  );
}
