import { Flex, Text, Divider, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
          <Flex flexDir={"column"} gap={"20px"}>
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
              lineHeight={"5px"}
              fontWeight={"500"}
              opacity={"100%"}>
                Reads
              </Text> 
              <Text opacity={"75%"}>curated gems for the curious minds, handpicked over the years. 🗂️</Text>
            </Flex>
            <Divider borderColor={"black"} />
          </Flex>
          <Flex gap={"30px"} flexDir={"column"}>
            <Flex
              flexDir={"column"}
              gap={"5px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text>
                <a 
                  className={"project"}
                  href={"reads/bookshelf"}
                  style={{fontWeight: "500" }}>
                  bookshelf
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"reads/reading-list"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  reading list
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"reads/resources"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  resources
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  movie and documentries
                </a>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
