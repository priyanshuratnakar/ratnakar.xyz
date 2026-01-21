import { Flex, Text, Divider, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function EF() {
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
          {/* Cover Image */}
          <Flex flexDir={"column"}>
            <Image
              src={"/ef.png"}
              alt={"priyanshu ratnakar - banger.idea"}
              borderRadius={"7px"}
              objectFit={"cover"}
            />
          </Flex>

          {/* Header */}
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
                fontFamily={"Outfit"}
                color={"black"}
                fontWeight={"600"}
                fontSize={"24px"}
              >
                hi, i&apos;m priyanshu ratnakar
              </Text>
              <Text>
                i don&apos;t like boxing myself into keywords, but if i had to
                describe my journey—i&apos;ve always been a builder at heart, a
                founder-first person who thrives on solving problems and
                creating things that matter.
              </Text>
              <Text>
                <a
                  href="https://twitter.com/0xratnakar"
                  style={{ color: "#005B99" }}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  twitter
                </a>{" "}
                /{" "}
                <a
                  href="mailto:0xpriyanshu@gmail.com"
                  style={{ color: "#005B99" }}
                >
                  email
                </a>
              </Text>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Current */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              current
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  ai & weekends
                </Text>
                <Text fontSize={"14px"} opacity={"80%"} fontStyle={"italic"}>
                  2025 — pilot
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  getting ai-curious people (mostly non-technical) to gather
                  and cowork/cobuild something cool. followed by sessions with
                  good mentors and seasoned players. goal is to help non-tech
                  people vibe code and ship ideas. think buildspace but irl.
                  still ideating, currently running pilot.
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Entrepreneurship */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              entrepreneurship
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  co-founder at{" "}
                  <a
                    href="https://playdigits.fun/"
                    style={{ color: "#005B99" }}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    digits
                  </a>
                </Text>
                <Text fontSize={"14px"} opacity={"80%"} fontStyle={"italic"}>
                  2025
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  built a farcaster-native fun maths mini app on base. led
                  growth and marketing from 0-1. ran multiple video campaigns.{" "}
                  <span style={{ fontWeight: "500", color: "#005B99" }}>
                    500k+ peak market cap, 10k+ games, 5k+ users
                  </span>{" "}
                  and won a base builder grant.
                </Text>
              </Flex>

              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  founder at protocol x
                </Text>
                <Text fontSize={"14px"} opacity={"80%"} fontStyle={"italic"}>
                  jan 2018 to jan 2022
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  first startup at 15, an all-in-one agency that provided
                  startup tech + marketing solutions. helped early-stage
                  companies build infra and scale. ran for 3+ years.
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Growth & Community */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              growth & community
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  founder&apos;s office at base india (formerly fbi)
                </Text>
                <Text fontSize={"14px"} opacity={"80%"} fontStyle={"italic"}>
                  mar 2024 to aug 2024
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  led operations, growth, marketing & community at farcaster
                  builders international (now base india).{" "}
                  <span style={{ fontWeight: "500", color: "#005B99" }}>
                    grew their community to 1000+ builders.
                  </span>{" "}
                  organized and hosted india-wide events, bootcamps and
                  fellowships.
                </Text>
              </Flex>

              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  growth lead at questbook
                </Text>
                <Text fontSize={"14px"} opacity={"80%"} fontStyle={"italic"}>
                  jan 2024 to mar 2024
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  closed partnerships. worked as growth pm. shipped features
                  that{" "}
                  <span style={{ fontWeight: "500", color: "#005B99" }}>
                    brought 5k+ builders
                  </span>{" "}
                  to product, socials & community.
                </Text>
              </Flex>

              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  community & marketing at solidityscan + credshields
                </Text>
                <Text fontSize={"14px"} opacity={"80%"} fontStyle={"italic"}>
                  jan 2022 to aug 2023
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  at solidityscan: built twitter from{" "}
                  <span style={{ fontWeight: "500", color: "#005B99" }}>
                    2000 to 100k+ insights and 2000+ followers in 3 months.
                  </span>{" "}
                  started community from 0 to 1000+ active hackers. at
                  credshields: led growth & partnerships, managed socials,
                  planned & executed online and offline events.
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Projects */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              selected projects
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  <a
                    href="https://www.quickplayer.xyz"
                    style={{ color: "#005B99" }}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    quickplayer
                  </a>
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  ott platform that helps you play random content of selected
                  genre.{" "}
                  <a
                    href="https://www.producthunt.com/posts/quick-player"
                    target={"_blank"}
                    rel={"noreferrer"}
                    style={{ color: "#005B99" }}
                  >
                    product of the day #4
                  </a>
                  ,{" "}
                  <span style={{ fontWeight: "500", color: "#005B99" }}>
                    10k+ total users.
                  </span>
                </Text>
              </Flex>

              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  <a
                    href="https://x.com/declutrHQ"
                    style={{ color: "#005B99" }}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    declutr
                  </a>
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  a social bookmarking experience for people who like to share
                  knowledge.{" "}
                  <span style={{ fontWeight: "500", color: "#005B99" }}>
                    200+ active users
                  </span>{" "}
                  at a point.
                </Text>
              </Flex>

              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  <a
                    href="https://shorturl.at/iuM05"
                    style={{ color: "#005B99" }}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    storybook.ai
                  </a>
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  app for parents where users can generate bedtime stories for
                  kids using ai.
                </Text>
              </Flex>

              <Flex mt={"10px"}>
                <Text fontSize={"14px"} opacity={"80%"}>
                  <a
                    href="https://www.ratnakar.xyz/projects"
                    target={"_blank"}
                    rel={"noreferrer"}
                    style={{ color: "#005B99" }}
                  >
                    view all projects →
                  </a>
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Other Experience */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              other experience
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  independent agent
                </Text>
                <Text fontSize={"14px"} opacity={"80%"} fontStyle={"italic"}>
                  sep 2024 to feb 2025
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  consulted projects like metadao, baseapp, gasyard, bitmor and
                  more.
                </Text>
              </Flex>

              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  freelance
                </Text>
                <Text fontSize={"14px"} opacity={"80%"} fontStyle={"italic"}>
                  sep 2023 to jan 2024
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  helped founders like andrew gazdeki, lenny rachitsky, tibo
                  and more with research & content. built fun projects.
                </Text>
              </Flex>

              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  security researcher at gurugram police
                </Text>
                <Text fontSize={"14px"} opacity={"80%"} fontStyle={"italic"}>
                  jun 2020 to oct 2020
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  cyber security internship under indian law enforcement.
                  research on online crimes against women & children. built a
                  url legitimacy detector.
                </Text>
              </Flex>

              <Flex mt={"10px"}>
                <Text fontSize={"14px"} opacity={"80%"}>
                  <a
                    href="https://www.ratnakar.xyz/work"
                    target={"_blank"}
                    rel={"noreferrer"}
                    style={{ color: "#005B99" }}
                  >
                    view full work history →
                  </a>
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Footer */}
          <Flex flexDir={"column"} gap={"20px"}>
            <Text fontSize={"14px"} opacity={"80%"}>
              no formal degree. learned by doing. started at 12, building ever
              since.
              <br />
              <br />
              explore more:{" "}
              <a
                href="https://www.ratnakar.xyz/about"
                target={"_blank"}
                rel={"noreferrer"}
                style={{ color: "#005B99" }}
              >
                about
              </a>{" "}
              /{" "}
              <a
                href="https://www.ratnakar.xyz/wall-of-wins"
                target={"_blank"}
                rel={"noreferrer"}
                style={{ color: "#005B99" }}
              >
                wall of wins
              </a>{" "}
              /{" "}
              <a
                href="https://www.ratnakar.xyz"
                target={"_blank"}
                rel={"noreferrer"}
                style={{ color: "#005B99" }}
              >
                website
              </a>
            </Text>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
