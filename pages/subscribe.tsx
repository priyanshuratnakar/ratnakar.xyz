import { Flex, Text, Divider, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SignUpFormReact from "./newsletter";
export default function Home() {
  return (
    <Flex
      flexDir={"column"}
      minH={"100vh"}
      w={"100%"}
      bg={"#FAFAF8"}
      align={"center"}
      cursor={"default"}
      color={"#2E353F"}
      fontFamily={"Outfit, Roboto Mono"}
    >
      <motion.div
        initial={{ y: "0%", opacity: "0" }}
        animate={{ y: "0", opacity: "100%" }}
        transition={{ delay: 0.15 }}
      >
        <Flex
          mt={"70px"}
          mb={"70px"}
          w={["300px", "300px", "630px"]}
          gap={"45px"}
          flexDir={"column"}
        >
          <Flex flexDir={"column"} gap={"30px"}>
            <Image
              src={"meme.jpg"}
              alt={"hero"}
              
              borderRadius={"7px"}
              objectFit={"cover"}
            />
          <Flex flexDir={"column"} gap={"30px"}>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text
              color={"black"}
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}>
                you're invited ✨
              </Text> 
              <Divider borderColor={"black"} />
              <Text>
                subscribe below, and let's turn your inbox into a cozy corner for my write-ups, curated reading lists, book gems, resources, and more. spoiler alert - it's gonna be fun. 📚✉️
              </Text>
            </Flex>
            </Flex>
            <SignUpFormReact></SignUpFormReact>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}