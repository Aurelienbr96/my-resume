import useBreakpoints from "../../../common/hooks/useBreakPoints";

export const ImgProject = ({
  img,
  description,
  alt,
  title,
}: {
  img: string;
  alt: string;
  description: string;
  title: string;
}) => {
  const { isXs } = useBreakpoints();
  return (
    <div className="mt-6 md:mt-20 flex flex-col md:flex-row items-center">
      {isXs && (
        <div className="flex flex-col flex-0.2 text-center md:text-left">
          <p className="text-xl dark:text-dark-highlight">{title}</p>
          <p>{description}</p>
        </div>
      )}
      <div className="flex-0.5">
        <img src={img} className="md:min-w-[750px]" alt={alt} />
      </div>
      {!isXs && (
        <div className="flex flex-col flex-0.2 text-center md:text-left">
          <p className="text-xl dark:text-dark-highlight">{title}</p>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};
