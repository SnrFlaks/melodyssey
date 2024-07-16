import React from "react";

interface PlayerProps {
  className?: string;
  type: string;
  id: string;
}

const Player: React.FC<PlayerProps> = ({ className, type, id }) => {
  return (
    <div className={className}>
      <iframe
        src={`https://open.spotify.com/embed/${type}/${id}`}
        height="352"
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Player;
