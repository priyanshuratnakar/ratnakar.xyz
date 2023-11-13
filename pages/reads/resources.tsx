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
                Resources
              </Text> 
              <Text opacity={"75%"}>underdevelopment 🛠️</Text>
            </Flex>
            <Divider borderColor={"black"} />
          </Flex>
          {/* <Flex gap={"30px"} flexDir={"column"}>
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
                  href={"https://amzn.to/47osg5t"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#21822A", fontWeight: "500" }}
                >
                 stay dead
                </a>{" "}
                — jessie keane{" "}
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://amzn.to/3uguLbC"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#21822A", fontWeight: "500" }}
                >
                 frankenstein
                </a>{" "}
                — marry shelly{" "}
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://www.declutr.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{color: "#005B99", fontWeight: "500" }}
                >
                  stalking fiona
                </a>{" "}
                — nigel williams
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://www.declutr.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{color: "#005B99", fontWeight: "500" }}
                >
                  ruthless
                </a>{" "}
                — jessie keane
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://www.declutr.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{color: "#005B99",  fontWeight: "500" }}
                >
                  the defining decade ⭐️
                </a>{" "}
                — meg jay
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://www.declutr.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{color: "#005B99",  fontWeight: "500" }}
                >
                  do epic shit
                </a>{" "}
                — ankur warikoo
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://www.declutr.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  booming digital stars
                </a>{" "}
                — harsh pamani and manish pandey
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://www.declutr.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{color: "#005B99",  fontWeight: "500" }}
                >
                  cyber armageddon
                </a>{" "}
                — jag vaman
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://www.declutr.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{color: "#005B99",  fontWeight: "500" }}
                >
                  students treasure
                </a>{" "}
                — purushottamananda
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://www.declutr.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  ghost in the wire
                </a>{" "}
                — kevin d. mitnick
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://www.declutr.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  hidden files
                </a>{" "}
                — triveni singh
              </Text>             
            </Flex>
          </Flex> */}
        </Flex>
      </motion.div>
    </Flex>
  );
}
