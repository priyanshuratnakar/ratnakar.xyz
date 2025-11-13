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
        initial={{ y: "0%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
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
                <a
                  className={"project"}
                  href={"https://google.com"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  Founder&apos;s Office at Docklabs
                </a>{" "}
                — mar 2025 to oct 2025
                <br />
                Led day-to-day operations, project and client management. worked on
                <a href="https://www.tryemerge.xyz/">Emerge,</a> <a href="https://propaganda.now/">Propaganda</a>, Haberdashery, Atlas, ANiMA and more.
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://playdigits.fun/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  Co-founder at Digits
                </a>{" "}
                — 2025
                <br />
                built a farcaster-native fun maths mini app on base. led growth and
                marketing from 0-1. ran multiple video campaigns. 500k+ peak mkt cap,
                10k+ games, 3k+ users and won a base builder grant.
              </Text>

              <Text>
                <a
                  className={"project"}
                  style={{ fontWeight: "500" }}
                >
                  Independent Agent
                </a>{" "}
                — sep 2024 to feb 2025
                <br />
                consulted projects like metadao, baseapp, gasyard, bitmor and more.
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://x.com/callusfbi"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  Founder&apos;s office at FBI [Farcaster Builders International]
                </a>{" "}
                — mar 2024 to aug 2024
                <br />
                Led operations, growth, marketing &amp; community. grew their community
                to 1000+ builders. organized and hosted india-wide events, bootcamps and
                fellowships.
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://questbook.app/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  Growth Lead at Questbook
                </a>{" "}
                — jan 2024 to mar 2024
                <br />
                closed partnerships. worked as growth pm. shipped features that brought
                5k+ builders to product, socials &amp; community.
              </Text>

              <Text>
                <a
                  className={"project"}
                  style={{ fontWeight: "500" }}
                >
                  Freelance
                </a>{" "}
                — sep 2023 to jan 2024
                <br />
                helped founders like andrew gazdeki, lenny rachitsky, tibo and more with
                research &amp; content. built fun projects.
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://solidityscan.com/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  Community &amp; Marketing Manager at SolidityScan
                </a>{" "}
                — jan 2023 to aug 2023
                <br />
                built twitter from 2000 to 100k+ insights and 2000+ followers in 3 months.
                started community from 0 to 1000+ active hackers. partnerships and offline
                events.
              </Text>

              <Text>
                <a
                  className={"project"}
                  href={"https://credshields.com/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  Growth at Credshields
                </a>{" "}
                — jan 2022 to aug 2023
                <br />
                led growth &amp; partnerships, managed socials, planned &amp; executed
                online and offline events.
              </Text>

              <Text>
                <a
                  className={"project"}
                  style={{ fontWeight: "500" }}
                >
                  Founder at Protocol X
                </a>{" "}
                — jan 2018 to jan 2022
                <br />
                first startup, an all-in-one agency that provided startup tech +
                marketing solutions. helped early-stage companies build infra and scale.
              </Text>

              <Text>
                <a
                  className={"project"}
                  style={{ fontWeight: "500" }}
                >
                  Security Researcher at Gurugram Police
                </a>{" "}
                — jun 2020 to oct 2020
                <br />
                cyber security internship under indian law enforcement. research on
                online crimes against women &amp; children. built a url legitimacy
                detector.
              </Text>

              <Text>
                <a
                  className={"project"}
                  style={{ fontWeight: "500" }}
                >
                  Android Developer at Accelvis
                </a>{" "}
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
