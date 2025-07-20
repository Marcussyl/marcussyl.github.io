const TechStackItem = ({ imgPath, imgAlt }) => {
  return (
    <div className="h-25 w-25 p-7">
      <img src={imgPath} alt={imgAlt} className="rounded-sm" />
    </div>
  );
};

export default TechStackItem;
