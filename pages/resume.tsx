import { Flex, Text, Divider } from "@chakra-ui/react";
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
                opacity={"100%"}
              >
                Work Experience
              </Text>
              <Text opacity={"75%"}></Text>
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
                <span style={{ fontWeight: "500" }}>
                  Founder’s Office at Docklabs
                </span>{" "}
                — mar 2025 to oct 2025
                <br />
                Led day-to-day operations, project & client management. worked on
                products like Emerge, Propaganda, Haberdashery, Atlas, ANiMA and more.
              </Text>

              <Text>
                <span style={{ fontWeight: "500" }}>Co-founder at Digits</span> — 2025
                <br />
                built a farcaster-native fun maths mini-app on base. led growth &
                marketing from 0→1. ran multiple video campaigns. hit 500k+ peak mkt cap,
                10k+ games, 3k+ users and won a base builder grant.
              </Text>

              <Text>
                <span style={{ fontWeight: "500" }}>Independent Agent</span> — sep 2024 to feb 2025
                <br />
                consulted projects like metadao, baseapp, gasyard, bitmor on growth.
              </Text>

              <Text>
                <a
                  className="project"
                  href="https://shorturl.at/iuM05"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: "500" }}
                >
                  Founder's office at FBI [Farcaster Builders International]
                </a>{" "}
                — mar 2024 to aug 2024
                <br />
                led operations, growth, marketing & community. grew community to 1000+
                based builders. organized & hosted india-wide events, bootcamps &
                fellowships.
              </Text>

              <Text>
                <a
                  href="https://www.ratnakar.xyz/resume"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: "500" }}
                >
                  Growth Lead at Questbook
                </a>{" "}
                — jan 2024 to mar 2024
                <br />
                closed multiple partnerships. worked as growth PM. helped ship features
                that brought 5k+ builders into the product, socials & community.
              </Text>

              <Text>
                <span style={{ fontWeight: "500" }}>Freelance</span> — sep 2023 to jan 2024
                <br />
                helped founders like andrew gazdeki, lenny rachitsky, tibo and more with
                research & content. built fun projects.
              </Text>

              <Text>
                <a
                  href="https://www.ratnakar.xyz/resume"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: "500" }}
                >
                  Community & Marketing Manager at SolidityScan
                </a>{" "}
                — jan 2023 to aug 2023
                <br />
                built twitter from 2k to 100k+ insights & 2k+ followers in 3 months.
                started community from 0→1000+ active hackers. handled partnerships &
                offline events.
              </Text>

              <Text>
                <a
                  href="https://www.ratnakar.xyz/resume"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: "500" }}
                >
                  Growth at Credshields
                </a>{" "}
                — jan 2022 to aug 2023
                <br />
                led growth & partnerships, managed socials, ran online & offline events.
              </Text>

              <Text>
                <a
                  href="https://www.ratnakar.xyz/resume"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: "500" }}
                >
                  Founder at Protocol X
                </a>{" "}
                — jan 2018 to jan 2022
                <br />
                built an all-in-one agency offering tech + growth solutions for early
                stage startups. helped companies build infra & scale through marketing.
              </Text>

              <Text>
                <span style={{ fontWeight: "500" }}>
                  Security Researcher at Gurugram Police
                </span>{" "}
                — jun 2020 to oct 2020
                <br />
                cyber security internship under indian law enforcement. research &
                analysis on online crimes against women & children. built a url
                legitimacy detector.
              </Text>

              <Text>
                <span style={{ fontWeight: "500" }}>Android Developer at Accelvis</span>{" "}
                — 2018
                <br />
                android developer at accelvis.
              </Text>

            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
