import { Flex, Text, Divider, Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SignUpFormReact from "../newsletter";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            {/* ... (previous content remains the same) ... */}
            
            <Text>Originally published on my <a href="https://x.com/priynshuratnakr/status/1733219090385571951?s=20" style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer">twitter</a> first.</Text>
            
            {/* Embedded Tweet */}
            <Box>
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  amazing NYC pizza!!! <a href="https://t.co/LcANwFwyxr">pic.twitter.com/LcANwFwyxr</a>
                </p>
                &mdash; Dhravya Shah (@DhravyaShah) <a href="https://twitter.com/DhravyaShah/status/1827094474394112352?ref_src=twsrc%5Etfw">August 23, 2024</a>
              </blockquote>
            </Box>

            <Divider borderColor={"black"} />
            <Text>subscribe to get my write-ups, curated reading lists, book gems, resources, and more.</Text>
            <SignUpFormReact></SignUpFormReact>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}