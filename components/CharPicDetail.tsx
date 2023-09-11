import useCharacter from "@/libs/client/useCharacter";
import { Image, Spinner } from "@chakra-ui/react";

interface Props {
  name: string;
}
export default function CharPicDetail(props: Props) {
  const { profile, equipment } = useCharacter(props.name);
  const imgsrc = profile?.CharacterImage;
  return (
    <div>
      <div className="w-32 h-32 flex overflow-hidden relative rounded-md">
        {profile ? (
          <Image
            src={imgsrc}
            className="object-cover scale-180 absolute top-12"
          />
        ) : null}
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="text-sm">{profile?.CharacterName}</div>
        <div>{profile?.ItemMaxLevel}</div>
      </div>
    </div>
  );
}
