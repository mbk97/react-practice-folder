import React from "react";

const Card = ({ character }) => {
  return (
    <div className="flex gap-[5px] rounded-[10px] border border-[1px solid white] w-[200px] mb-[10px] ">
      <img
        src={character?.image}
        alt={character?.name}
        width={50}
        loading="lazy"
        style={{
          borderRadius: "10px 0 0px 10px",
        }}
      />
      <p>{character.name}</p>
    </div>
  );
};

export default Card;
