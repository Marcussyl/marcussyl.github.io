const ProjectCard = ({
  handleCardClick,
  projectId,
  thumbImgs,
  title,
  tags,
}) => {
  return (
    <div
      className="border-main-purple relative w-full cursor-pointer self-stretch rounded-md border-2 border-dashed bg-[rgba(133,78,243,10%)] p-4 text-white transition-all duration-200 ease-out md:w-[45%] lg:w-[25%]"
      data-project-id={projectId}
      onClick={handleCardClick}
    >
      <div className="aspect-video overflow-hidden rounded">
        <img
          src={thumbImgs[0]}
          alt="project thumbnail"
          className="proj-thumb object-cover"
        />
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-between p-2">
          <div>
            <h3 className="proj-title text-sharp-purple font-bold">{title}</h3>
          </div>
          <img
            src="/software-engineer-portfolio/assets/up-right-arrow.png"
            alt="link icon"
            className="round-btn"
          />
        </div>
        <div className="flex flex-wrap gap-2 p-2 md:gap-3">
          {tags.map((tag, index) => (
            <div
              className="border-grayish-white text-grayish-white rounded-[18px] border-1 px-2 py-1 text-xs whitespace-nowrap md:px-[13px] md:text-sm"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
