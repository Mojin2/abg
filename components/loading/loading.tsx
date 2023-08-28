import { Center, Spinner, useMediaQuery } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Center w="100vw" h="100vh" zIndex={"99"} position={"fixed"}>
        <Center
          pos={"absolute"}
          bottom={10}
          right={10}
          padding={3}
          rounded={10}
        >
          <Spinner top={10} right={10} size={"md"} color="white" />
        </Center>
      </Center>
    </>
  );
}
