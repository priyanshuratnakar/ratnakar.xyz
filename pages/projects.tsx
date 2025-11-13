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
                Projects 
              </Text> 
              <Text opacity={"75%"}>crafting wonders and bringing ideas to life with a touch of creativity and magic.🪄 <br></br>
              as alan kay once said, &ldquo;The best way to predict the future is to invent it.&ldquo;
              So, here is my digital playground. Buiding the future with one project at a time, mostly for fun.</Text>
            </Flex>
            <Divider borderColor={"black"} />
          </Flex>
          <Flex gap={"30px"} flexDir={"column"}>
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
                  href={"https://playdigits.fun/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  digits
                </a>{" "}
                — a farcaster native fun maths mini app. built on top of base{" "}
              </Text>

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
                — App for parents where users can generate bedtime stories for kids using AI.{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://chromewebstore.google.com/detail/daily-affirmations/mpmpdeogebkmjnamknnallknglocdeek?hl=en-GB&authuser=0"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  Daily Affirmations
                </a>{" "}
                — Displays a daily affirmation on every new tab.
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://x.com/priynshuratnakr/status/1828087064753312087"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  Wall of Lafda
                </a>{" "}
                — A curation of all the lafda on x [twitter]
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://kabir.cybersurakshit.org"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  kabir
                </a>{" "}
                — AI chatbot to help cyber crime victims, 100+ lives impacted.
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://drive.google.com/file/d/1I5PmtqzNDL20KHAftU1Nx39MIBqOUkHN/view?usp=sharing"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  hiring automation with zapier
                </a>{" "}
                — Replicated <a href="https://www.modernloop.io" style={{ color: "#005B99" }}>ModernLoop</a> using no code tools.
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
                  href={"https://cosbuilds.vercel.app"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  cosbuilds
                </a>{" "}
                — Led the projects and 
                <a href="https://twitter.com/cosparivaar" style={{ color: "#005B99" }}> community of hackers </a> 
                & builders to come together and build fun stuff.
              </Text>
              <Text>
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
                <a
                  className={"project"}
                  href={"https://github.com/priyanshuratnakar/memoriesonchain.git"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  memories on chain
                </a>{" "}
                — engrave your memories on blockchain by minting NFTs through streamlined upload, customization, and participant management processes.
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://www.figma.com/file/H9SxwXoVk4TsNIxeimkTPP/frensbook.xyz?type=design&node-id=0%3A1&mode=design&t=U4jBJYvuu5dndvB4-1"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  frensbook
                </a>{" "}
                — A social connection building app.
              </Text>
              <Text>
                <a
                className={"project"}
                href={"https://amzn.to/49nGSnB"}
                target={"_blank"}
                rel={"noreferrer"}
                style={{ fontWeight: "500" }}
                >
                  digital rights in india
                </a>{""}
                - Ebook, sold 150+ copies online.
              </Text>
              <Text>
                🛠️{" "}
                <a
                className={"project"}
                href={"#"}
                target={"_blank"}
                rel={"noreferrer"}
                style={{ fontWeight: "500" }}
                >
                  url legitimacy detector
                </a>{""}
                - App to tackle to phishing links, built during my gurugram police internship. v2 soon.
              </Text>
              <Text>
                <a
                className={"project"}
                href={"https://youtu.be/SQTWaHzz2II?si=Mn2RuJcC1ND2-m4Q"}
                target={"_blank"}
                rel={"noreferrer"}
                style={{ fontWeight: "500" }}
                >
                  moodup
                </a>{""}
                - An AI powered journaling app.
                won 3rd place in the <a href={"https://www.teensinai.com"} style={{ color: "#005B99" }}>TeensInAI</a> Hackathon.
              </Text>
              <Text>
                <a
                className={"project"}
                href={"https://play.google.com/store/apps/details?id=com.protocolx.rudra&pli=1"}
                target={"_blank"}
                rel={"noreferrer"}
                style={{ fontWeight: "500" }}
                >
                  rudra
                </a>{""}
                - Built a fun game with builbox under 48 hours, Got 5K+ downloads.
              </Text>
              <Text>
                <a
                className={"project"}
                href={"#"}
                target={"_blank"}
                rel={"noreferrer"}
                style={{ fontWeight: "500" }}
                >
                  cyber hedge
                </a>{""}
                - Built in Google’s Think Mobile Hackathon. Idea was to help people detect fake forwarded messages and phishing links. Won the Cyber Security track.
              </Text>
              <Text>
                <a
                className={"project"}
                href={"https://m.apkpure.com/dav-public-school-malighat-2-0-official-app/com.protocolX.DAVMalighat"}
                target={"_blank"}
                rel={"noreferrer"}
                style={{ fontWeight: "500" }}
                >
                  dav school app
                </a>{""}
                - Built an android app for my school.
                </Text>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
