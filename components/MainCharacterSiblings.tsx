import { Button, Input, Stack } from "@chakra-ui/react";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import CharPic from "./charpic";

export default function MainCharacterSiblings() {
  const [charName, setCharName] = useState<string>("");
  const [nameList, setNameList] = useState<string[]>([]);
  const [mainChar, setMainChar] = useState<string>("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const onSubmitHandle = (e: React.FormEvent) => {
    if (state === "initial") {
      setState("submitting");
      e.preventDefault();
      setNameList((cur) => {
        const oldnameList = nameList;
        const newname = charName;
        cur = [...oldnameList, newname];
        return cur;
      });
      setMainChar((cur) => {
        const newname = charName;
        cur = newname;
        return cur;
      });
      setState("success");
    } else {
      e.preventDefault();
    }
  };
  return (
    <div>
      <Stack
        as="form"
        direction="row"
        onSubmit={onSubmitHandle}
        spacing="12px"
        width="400px"
      >
        <Input
          placeholder="대표캐릭터 이름"
          value={charName}
          onChange={(e) => setCharName(e.target.value)}
          type="text"
          variant={"solid"}
          borderWidth={2}
          borderColor="blue.400"
          color={"gray.800"}
          _placeholder={{
            color: "gray.400",
          }}
          width="200px"
          isDisabled={state === "success"}
        />
        <Button
          colorScheme={state === "success" ? "green" : "blue"}
          isLoading={state === "submitting"}
          w="100px"
          type={state === "success" ? "button" : "submit"}
        >
          {state === "success" ? <CheckIcon /> : "설정"}
        </Button>
        {state === "success" ? (
          <Button
            w="100px"
            type="button"
            colorScheme="blue"
            onClick={() => setState("initial")}
          >
            재설정
          </Button>
        ) : (
          <Button
            w="100px"
            type="button"
            className="bg-slate-200 pointer-events-none"
          ></Button>
        )}
      </Stack>
      <div className="py-5">
        {mainChar ? <CharPic name={mainChar} key={mainChar} /> : null}
      </div>
    </div>
  );
}
