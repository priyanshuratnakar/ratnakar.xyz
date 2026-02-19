import { Flex, Text, Divider, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

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
              I&apos;m <Link 
                  href={"/about"}
                  style={{ color: "#005B99" }}>Priyanshu Ratnakar</Link> and welcome to my little corner on the Internet.
              </Text>
              <Text>
                over the years i have worn many hats — founder, writer, researcher, speaker, filmmaker. still figuring out which one fits best.
              </Text>

              <Text>
                my journey with tech started at 12, in cyber cafés and on a borrowed pc that changed everything. since then, i have gone from freelancing in my bedroom to running my own agency, working with law enforcement, and building in the web3.
              </Text>

              <Text> 
              I&apos;m in the arena trying stuff. some will work, some wont. but always learning. IYKYK
              </Text>
              <Text>
              <a href="https://twitter.com/priynshuratnakr" style={{ color: "#005B99" }} target={"_blank"} rel={"noreferrer"}>Twitter</a> is my digital playground,<br></br> 
              for more in-depth conversations, shoot ✉️ <a href="mailto:0xpriyanshu@gmail.com" style={{ color: "#005B99" }}>0xpriyanshu@gmail.com</a>
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
              <Link
              href="/projects"
              >Projects</Link>
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
              <Link href="/reads"> 
                Reads
              </Link>
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
                  href={"https://www.amazon.in/Read-Write-Own-Building-Internet/dp/1529925622/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.xX1EuOKNs6xI_9rZ3lWqlpw9oNbqWnjKVsD1Ia2mjkVmG7WV7LATfkcS3vEUyXjsmIFc7T4Up7cvTeXGgKWE30TPUCQfkl2t0HYCdZKFtDVqfmjeykptC9Mos7URilUwFPHk7PGdwnYzKLmJAW_bbhBFFNua0kZIYaSIJOcr3fupKWGiiwTlI6dSETTwZ-dKPeHHDgbaRQ9sAuO6UjjZ8vWZZiOx3dFYhXju3IarWgE.AwM864gniLpfEjqzZgK4-wBATFukp7bUqrOw1X81ORE&qid=1724532172&sr=8-1"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  Read Write Own
                </a>{" "}
                — by Chris Dixon.
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
              <Link
              href="/thoughts"
              >Thoughts</Link>
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              {/* <Text>
                ✍️{" "}
                <a
                  className={"project"}
                  href={"/blogs/that-undelivered-letter"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  that undelivered letter
                </a>
              </Text> */}
              <Text>
              <a
                  className={"project"}
                  href={"/blogs/i-gifted-my-father-his-dream-bike"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  i gifted my father his dream bike
                </a>
              </Text>
              <Text>
                {" "}
                <a
                  className={"project"}
                  href={"/blogs/the-indian-gaming-thesis"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  the indian gaming thesis
                </a>
              </Text>
            </Flex>
            </Flex>
            <Divider borderColor={"black"} />
            {/* footer */}
            <Text>
              <Link href="/">home </Link> /
              <Link href="/about"> about </Link>  /
              <Link href="/bucketlist"> bucketlist </Link> /
              <Link href="/wall-of-wins"> wall of wins </Link> /
              <a href="https://www.buymeacoffee.com/priyanshuratnakar" target={"_blank"} rel="noreferrer"> support </a>
            </Text>


          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
