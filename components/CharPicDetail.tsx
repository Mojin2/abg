import useCharacter from "@/libs/client/useCharacter";
import { Image, Spinner } from "@chakra-ui/react";

interface Props {
  name: string;
}
export default function CharPicDetail(props: Props) {
  const { profile, equipment } = useCharacter(props.name);
  const imgsrc = profile?.CharacterImage;
  return (
    <div className="w-32 h-32 flex overflow-hidden relative rounded-md">
      {profile ? (
        <Image src={imgsrc} className="object-cover scale-150 absolute top-8" />
      ) : null}
    </div>
  );
}
