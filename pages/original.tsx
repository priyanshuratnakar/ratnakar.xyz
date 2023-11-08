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
      // backgroundColor={"#FAFAF8"}
      // backgroundRepeat={"no-repeat"}
      // backgroundSize={"cover"}
      // backgroundPosition={"center"}
      // backgroundAttachment={"fixed"}
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
              src={"cover.png"}
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
                <strong>Hello there 👋 <br></br>Im Priyanshu Ratnakar </strong>
              </Text>
              <Text>
                currently, i&apos;m working @{" "}s
                <a
                  href={"https://findsignal.studio/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99" }}
                >
                  find signal
                </a>{" "}
                where i&apos;m tinkering with LLM&apos;s to execute on-chain
                activity. i try to mess around on the intersection of bio + ai
                in my free time. just some while ago I was a part of{" "}
                <a
                  href={"https://eif3.devfolio.co/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99" }}
                >
                  eth india fellowship
                </a>{" "}
                and grant.
              </Text>
              <Text>
                wanna talk around ideas, work on cool things maybe or just vibe?
                find me on{" "}
                <a
                  href={"https://twitter.com/0xahzam"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99" }}
                >
                  twitter
                </a>{" "}
                :) i&apos;m big on meeting new ppl.{" "}
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
              projects
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
                🧬{" "}
                <a
                  className={"project"}
                  href={"https://huggingface.co/0xahzam/biodiffusion"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  biodiffusion
                </a>{" "}
                — i fine-tuned stable diffusion to replicate{" "}
                <a
                  href={"https://twitter.com/dsgoodsell"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99" }}
                >
                  david goodsell&apos;s
                </a>{" "}
                work (bioart) and it got{" "}
                <a
                  href={
                    "https://twitter.com/0xahzam/status/1648386857967951877"
                  }
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99" }}
                >
                  twitter approved
                </a>
                .
              </Text>

              <Text>
                🖼️{" "}
                <a
                  className={"project"}
                  href={"https://www.aimint.fun/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  aimint.fun
                </a>{" "}
                — generate art and own it as nfts. part of eth india grant & won
                best NFT project at Eth-For-All.
              </Text>
              <Text>
                🐚{" "}
                <a
                  className={"project"}
                  href={"https://devfolio.co/projects/helixplorer-2666"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  helixplorer
                </a>{" "}
                — visually pleasing gpt powered mini protein wiki
              </Text>
              <Text>
                👾{" "}
                <a
                  className={"project"}
                  href={"https://github.com/0xahzam/fromthedna/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  fromthedna
                </a>{" "}
                — reverse engineering HIV&apos;s genome sequence to teach myself
                implementation of molecular bio&apos;s central dogma but in
                code.
              </Text>
              <Text>
                🔐{" "}
                <a
                  className={"project"}
                  href={"https://tinyhack.vercel.app/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  tinyhack
                </a>{" "}
                — prototype leetcode like platform but specifically for solidity
                with a focus on contract security.
              </Text>
              <Text>
                🔖{" "}
                <a
                  className={"project"}
                  href={"https://www.declutr.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  declutr
                </a>{" "}
                — a social bookmarking experience for people who like to share
                knowledge.
              </Text>
              <Text>
                ✏️️{" "}
                <a
                  className={"project"}
                  href={"https://text2cron.vercel.app/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  text2cron
                </a>{" "}
                — vercel released cron jobs recently so we built this small tool
                to help fellow devs automate the process of creating cron
                expressions using GPT-3.5.
              </Text>
              <Text>
                📷{" "}
                <a
                  className={"project"}
                  href={"https://github.com/0xahzam/Image-Classifier"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  imgclassifier
                </a>{" "}
                — a small py script to classify images containing a certain
                object from a folder of random images using openai/clip.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
