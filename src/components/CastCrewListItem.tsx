type Props = {
  imageUrl?: string;
  actorName: string;
  character: string;
};

//--:image found, url is there
//undefined:axios in the process of getting the image
//NO IMAGE FOUND: axios finished but there is no image

function CastCrewListItem({ actorName, character, imageUrl }: Props) {
  return (
    <div className="flex gap-5">
      <img
        src={
          !imageUrl || imageUrl === 'NO IMAGE FOUND'
            ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png'
            : imageUrl
        }
        alt={actorName}
        className="bg-gray-300 w-16 h-16 object-cover"
      />
      <div className="flex flex-col gap-1 justify-center">
        <h2 className="typography-primary text-white">{actorName}</h2>
        <h3 className="typography-description text-white-dimmed">
          {character}
        </h3>
      </div>
    </div>
  );
}

export default CastCrewListItem;
