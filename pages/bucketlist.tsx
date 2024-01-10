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
                Bucket List
              </Text> 
              <Text opacity={"75%"}>inspired by <a href="https://huyenchip.com/list-100/" target={"_blank"} rel="noreferrer" style={{ color: "#005B99", fontWeight: "500" }}>Chip Huyen </a>
              this is a list of things I want to do before I die. 🫰✨
              </Text>
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
                1. publish a bestseller book <br></br>
                2. have my own personal library  <br></br>
                3. read 1000 great books (<a className={"project"} href={"bookshelf.tsx"} style={{ color: "#21822A", fontWeight: "500" }}>2% done</a>)<br></br>
                4. India tour <a style={{ color: "#21822A", fontWeight: "500" }}>(22% done)</a><br></br>
                5. start my own company <br></br>
                6. publish a research paper <br></br>
                7. 100+ talks/sessions (<a className={"project"} href={"wall-of-fame.tsx"} style={{ color: "#21822A", fontWeight: "500" }}>20% done</a>)<br></br>
                8. fly a plane <br></br>
                9. skydiving <br></br>
                10. scubadiving <br></br>
                11. <a className={"project"} href={"https://play.google.com/store/apps/details?id=com.protocolx.rudra&hl=en&gl=US"} style={{ color: "#21822A", fontWeight: "500" }}>publish a game </a><br></br>
                12. start a non-profit <br></br>
                13. start a fund on my name <br></br>
                14. own a farmhouse in mountains <br></br>
                15. speak at ted <br></br>
                16. do a standup <br></br>
                17. feel zero gravity <br></br>
                18. learn to play atleast one muisc instrument <br></br>
                19. build a lean physique <br></br>
                20. hot-air ballon ride <br></br>
                21. take my family on a foreign trip<br></br>
                22. <a className={"project"} href={"./blogs/i-gifted-my-father-his-dream-bike"} style={{ color: "#21822A", fontWeight: "500" }}>gift my father his dream bike</a> <br></br>
                23. see the northern lights<br></br>
                24. do a movie (cameo works, actually been in a music video before xD) <br></br>
                25. get my own house<br></br>
                26. own a cafe <br></br>
                27. see the seven wonders of the world <br></br>
                28. go to space <br></br>
                29. travel 7 continents
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
