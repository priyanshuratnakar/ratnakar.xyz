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
          <Flex flexDir={"column"} gap={"30px"}>
            <Image
              src={"cover.gif"}
              alt={"hero"}
              h={["130px", "130px", "196px"]}
              borderRadius={"7px"}
              objectFit={"cover"}
            />
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text fontFamily={"Outfit"} color={"black"} size={"50px"}>
                <strong>Hello world 👋 </strong>
              </Text>
              <Text>
              I&apos;m <a 
                  href={"about"}
                  style={{ color: "#005B99" }}>Priyanshu Ratnakar</a> and welcome to my little corner on the Internet.
              </Text>
              <Text>
                Some titles I associate with - founder, author, researcher, speaker and batman.
              </Text>

              <Text>
              Exploring computers from the age of 12, I delved into the world of technology through MS DoS, igniting my passion for the command line. 
              As I explored various tech stacks, I became enamored with the idea of using technology to solve global challenges.
              </Text>

              <Text> 
              I&apos;m in the arena trying stuff. some will work, some wont. but always learning. IYKYK
              </Text>
              <Text>
              <a href="https://twitter.com/priynshuratnakr" style={{ color: "#005B99" }} target={"_blank"} rel={"noreferrer"}>Twitter</a> is my digital playground,<br></br> 
              for more in-depth conversations, shoot ✉️ <a href="mailto:hello@priyanshuratnakar.com" style={{ color: "#005B99" }}>hello@priyanshuratnakar.com</a>
              </Text>
            </Flex>
          </Flex>
          <Divider borderColor={"black"} />
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              <a
              href="projects"
              >Projects</a>
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text>
                🛠️{" "}
                <a
                  className={"project"}
                  href={"https://shorturl.at/iuM05"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  storybook.ai
                </a>{" "}
                — App for parents where users can generate bedtime stories for kids using AI.
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://www.quickplayer.xyz"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  quickplayer
                </a>{" "}
                — OTT platform that helps you play random content of selected genre.{" "}
                <a 
                href={"https://www.producthunt.com/posts/quick-player"}
                target={"_blank"}
                rel={"noreferrer"}
                style={{ color: "#005B99" }}
                >
                Product of the Day #4</a>, and 10k+ total users till now.
              </Text>

              
              <Text>
                {" "}
                <a
                  className={"project"}
                  href={"https://kabir.cybersurakshit.org"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  kabir
                </a>{" "}
                — AI chatbot to help cyber crime victims,
                  100+ lives impacted
              </Text>
            </Flex>
{/* reading list starts here */}
            <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              <a href="reads"> 
                Reads
              </a>
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text>
                📖{" "}
                <a
                  className={"project"}
                  href={"https://amzn.to/47hmEKV"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  stay dead
                </a>{" "}
                — by jessie keane.
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://spark-public.s3.amazonaws.com/startup/lecture_slides/lecture5-market-wireframing-design.pdf"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  the ideal maze
                </a>{" "}
                — by balaji srinivasan.{" "}
              </Text>
              <Text>
                {" "}
                <a
                  className={"project"}
                  href={"https://youtu.be/P1ww1IXRfTA?si=oZIE3n0yju_GrIYO"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  fun to imagine
                </a>{" "}
                — with richard feynman
              </Text>
            </Flex>
            </Flex>
{/* thoughts starts here */}
            <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              <a
              href="thoughts"
              >Thoughts</a>
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text>
                ✍️{" "}
                <a
                  className={"project"}
                  href={"blogs/i-gifted-my-father-his-dream-bike"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  i gifted my father his dream bike
                </a>
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  working 70 hours a day
                </a>
              </Text>
              <Text>
                {" "}
                <a
                  className={"project"}
                  href={"#"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  generation of early quiters
                </a>
              </Text>
            </Flex>
            </Flex>
            <Divider borderColor={"black"} />
            {/* footer */}
            <Text>
              <a href="index">home </a> /
              <a href="about"> about </a>  /
              <a href="bucketlist"> bucketlist </a> /
              <a href="wall-of-wins"> wall of wins </a> /
              <a href="https://www.buymeacoffee.com/priyanshuratnakar" target={"_blank"} rel="noreferrer"> support </a>
            </Text>


          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
