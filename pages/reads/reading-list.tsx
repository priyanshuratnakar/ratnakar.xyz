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
                Reading list 
              </Text> 
              <Text opacity={"75%"}>explore my personal haven of evergreen all time favorites 📚✨</Text>
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
                  href={"https://perell.com/note/note-taking-is-time-travel/?ref=melvinraj.com"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{color: "#005B99", fontWeight: "500" }}
                >
                 note-taking is time travel
                </a>{" "}
                — david perell{" "}
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://aliabdaal.com/how-to-stay-focused/?ref=melvinraj.com"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{color: "#005B99", fontWeight: "500" }}
                >
                 how to stay focused
                </a>{" "}
                — ali abdaal{" "}
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://www.declutr.xyz/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{color: "#005B99", fontWeight: "500" }}
                >
                  zenshin
                </a>{" "}
                — james cleaar
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://aliabdaal.com/how-to-stay-focused/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  how to stay focused
                </a>{" "}
                — ali abdaal{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://jamesclear.com/zanshin"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  Zenshin
                </a>{" "}
                — James Clear{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://manassaloi.com/2021/10/01/simplest-narrative.html"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  The Simplest Narrative
                </a>{" "}
                — Manas Saloi{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://www.melvinraj.com/curated-readings/Video%20Games%20are%20the%20Future%20of%20Education"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  Video Games are the Future of Education
                </a>{" "}
                — Nabeel Qureshi{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://www.melvinraj.com/curated-readings/Building%20the%20Middle%20Class%20of%20the%20Creator%20Economy"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  Building the Middle Class of the Creator Economy
                </a>{" "}
                — Li Jin{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://perell.com/essay/the-ultimate-guide-to-writing-online/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  Ultimate guide to writing online
                </a>{" "}
                — David Perell{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://jamesclear.com/read-more"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  How to read more
                </a>{" "}
                — James Clear{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://invertedpassion.com/twitter-threads/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  Tweet Threads are a hidden Gem
                </a>{" "}
                — Paras Chopra{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://fortelabs.co/blog/para/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  The PARA Method: A Universal System For Organizing Digital Information
                </a>{" "}
                — Tiago Forte{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://fortelabs.co/blog/basboverview/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  Building A Second Brain
                </a>{" "}
                — Tiago Forte{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://waitbutwhy.com/2013/10/why-procrastinators-procrastinate.html"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  Why Procrastinators Procrastinate
                </a>{" "}
                — Waitbutwhy{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://sahilbloom.substack.com/p/when-mental-models-attack"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  When Mental Models Attack
                </a>{" "}
                — Sahil Bloom{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://www.raptitude.com/2021/08/how-to-recover-from-pandemic-induced-mind-fog/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  How To Recover From Pandemic Induced Mind Fog
                </a>{" "}
                — Raptitude{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://fs.blog/reading/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  Reading Better
                </a>{" "}
                — Farnam Street{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://austinkleon.substack.com/p/how-a-talk-begins?utm_source=url"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  How A Talk Begins
                </a>{" "}
                — Austin Kleon{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://karthis.blog/articulation/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  Articulation
                </a>{" "}
                — Karthi Subbaraman{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://www.ben-evans.com/benedictevans/2021/11/16/notes-on-newsletters"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  Notes On Newsletters
                </a>{" "}
                — Benedict Evans{" "}
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://www.johnnicholas.org/writing-fisherman/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  Fisherman's Guide To Writing
                </a>{" "}
                — John Nicholas{" "}
              </Text>
              <Text>
                <a
                  className={"project"}
                  href={"https://blog.samaltman.com/how-to-be-successful"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ color: "#005B99", fontWeight: "500" }}
                >
                  How to Be Successful
                </a>{" "}
                — Sam Altman{" "}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
