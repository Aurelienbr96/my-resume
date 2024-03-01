import me from "../../assets/img/me.jpeg";

export const AboutPage = () => (
  <div className="flex justify-between">
    <div className="flex items-center">
      <p className="w-[800px]">
        Bonjour, spécialisé en Javascript et tout spécialement en ReactJS et
        React Native depuis 2017, je suis à la recherche d'une mission en
        freelance dans ces technologies. Ma formation m'a aussi permis d'avoir
        acquis d'autres compétences en développement dans des technologies assez
        varié, BDD (MySQL, NoSQL), Backend (nodeJS, FeatherJS) aussi en gestion
        de projet. J'ai eu la chance de pouvoir travailler dans des structures
        très variés allant d'une startup à de grands groupes, en France et à
        l'étranger, ce qui me permet d'être très polyvalent dans mon travail.
      </p>
    </div>
    <img className="rounded-lg" src={me} />
  </div>
);
