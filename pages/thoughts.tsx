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
              opacity={"95%"}>
                Thoughts
              </Text> 
              <Text opacity={"75%"}>crafted in ink, woven as threads. a corner where pen meets pixels. ✨</Text>
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
                  href={"blogs/that-undelivered-letter"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}>
                  that undelivered letter
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"blogs/gaming"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}>
                  gaming
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"blogs/i-gifted-my-father-his-dream-bike"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}>
                  i gifted my father his dream bike
                </a>
              </Text>
              {/* <Text>
                <a 
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  why colleges are important
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  Why 75% attendance is important
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  why colleges are important
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  Generation of Early Quitters
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  CBC VS Recorded lectures
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  The era of community 
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  Why reading fiction is important
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  Be like a lion
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  Delegating work, smart or lazy ?
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  starting early
                </a>
              </Text>
              <Text>
                <a 
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{fontWeight: "500" }}>
                  working 70 hours a week
                </a>
              </Text> */}
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
