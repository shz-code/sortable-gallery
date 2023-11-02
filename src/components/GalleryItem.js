import { useState } from "react";

const GalleryItem = ({
  id,
  image,
  index,
  handleDragStart,
  handleDragOver,
  handleDrop,
  handleSelect,
}) => {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    handleSelect(!select,id);
    setSelect(!select);
  };

  return (
    <div key={image.id} className={`gallery-item relative ${
      select && "overlay"
    }`}
    draggable
    onDragStart={(event) => handleDragStart(event, index)}
    onDragOver={(event) => handleDragOver(event, index)}
    onDrop={(event) => handleDrop(event, index)}
    >
      <div className="img-box">
        <img
          src={image.src}
          alt={`${image.id}`}       
        />
      </div>
      <div
        className={`h-8 w-8 absolute top-5 left-5 z-10 cursor-pointer flex justify-center items-center toggleBox ${
          select && "bg-gray-300"
        }`}
        onClick={handleClick}
      >
        {select && <span className="text-2xl">X</span>}
      </div>
    </div>
  );
};
export default GalleryItem;
