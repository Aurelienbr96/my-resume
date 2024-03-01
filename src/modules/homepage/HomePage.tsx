import me from "../../assets/img/me.jpeg";

export const HomePage = () => (
  <div className="flex justify-between">
    <p className="text-3xl">Hi, I am Aurelien, a senior ReactJS developer</p>
    <img className="rounded-lg" src={me} />
  </div>
);
