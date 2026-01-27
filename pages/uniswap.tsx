import { Flex, Text, Divider, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Uniswap() {
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
          <Flex w={"100%"} justify={"center"}>
            <Image
              src={"/cover-uniswap.png"}
              alt={"Cover image"}
              borderRadius={"12px"}
              w={"100%"}
              maxW={"100%"}
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
                gm, i&apos;m priyanshu ratnakar
              </Text>
              <Text fontSize={"16px"} opacity={"90%"}>
                📍bangalore | storyteller + community builder
              </Text>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          <Flex flexDir={"column"} gap={"20px"}>
            <Text>
              <span style={{ fontWeight: "500" }}>the tl;dr:</span> i&apos;m
              exactly who you&apos;re looking for.
            </Text>
            <Text>
              i&apos;ve been playing onchain since my teens, built couple of
              side projects. co-founded a farcaster app that hit 500k+ market
              cap with 5k dau, grew india&apos;s multiple builder communities
              to 2k+, scaled social accounts to 100k+ followers, and spoke at
              top institutions from IITs to UNESCO and i can help uniswap
              activate the india scene.
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
              </a>{" "}
              /{" "}
              <a
                href="https://www.ratnakar.xyz"
                style={{ color: "#005B99" }}
                target={"_blank"}
                rel={"noreferrer"}
              >
                portfolio
              </a>
            </Text>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Crypto Native Credentials */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              crypto native credentials
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
                    href="https://playdigits.fun/"
                    style={{ color: "#005B99" }}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    digits
                  </a>{" "}
                  (co-founder)
                </Text>
                <Text fontSize={"14px"} opacity={"80%"} fontStyle={"italic"}>
                  2025
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  farcaster-native math game built on base.{" "}
                  <span style={{ fontWeight: "500", color: "#005B99" }}>
                    500k+ peak market cap, 10k+ games played, 5k+ users.
                  </span>{" "}
                  led growth & marketing 0→1, ran video campaigns. won base
                  builder grant.
                </Text>
              </Flex>

              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  base india / fbi
                </Text>
                <Text fontSize={"14px"} opacity={"80%"} fontStyle={"italic"}>
                  2024
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  <span style={{ fontWeight: "500", color: "#005B99" }}>
                    grew community from 0 to 2000+ builders across india.
                  </span>{" "}
                  led operations, growth, marketing & community. organized
                  india-wide events, bootcamps, fellowships. transformed fbi
                  which is now the backbone of base india.
                </Text>
              </Flex>

              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  web3 consulting
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  consulted projects: metadao, baseapp, gasyard, bitmor + many
                  more. growth strategy, community building, gtm.
                </Text>
              </Flex>
            </Flex>
            <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
              <Link href="/work" style={{ color: "#005B99" }}>
                resume
              </Link>
            </Text>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Natural Storyteller */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              natural storyteller with strong voice
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                i&apos;ve been creating content from last 10 years.
              </Text>

              <Flex flexDir={"column"} gap={"12px"}>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  • i&apos;ve written content for at least one of your favorite
                  twitter/x profiles
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  • make{" "}
                  <a
                    href="https://priyanshuratnakar.notion.site/Priyanshu-s-video-work-2df7f20f297980169812fd4e0f29fe53?source=copy_link"
                    style={{ color: "#005B99" }}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    videos
                  </a>{" "}
                  which build narrative [mentor at ibw + sui + base fellowship]
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  • worked with brands like base india, alliance dao, coop
                  records + more
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  • recent articles have hit over{" "}
                  <span style={{ fontWeight: "500", color: "#005B99" }}>
                    1.5m+ views
                  </span>
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  • strong personal brand + authority in indian crypto space with{" "}
                  <span style={{ fontWeight: "500", color: "#005B99" }}>
                    5.7k+ followers
                  </span>{" "}
                  [followed by all indian communities superteam india, base
                  india, aptos india, wormhole india and more.]
                </Text>
              </Flex>
              <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                <a
                  href="https://priyanshuratnakar.notion.site/Priyanshu-s-video-work-2df7f20f297980169812fd4e0f29fe53?source=copy_link"
                  style={{ color: "#005B99" }}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  watch here
                </a>
              </Text>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Public Speaking */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              public speaking before i turned 18
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                spoke at top institutions in india including{" "}
                <span style={{ fontWeight: "500" }}>
                  IITs, delhi university & UNESCO.
                </span>
              </Text>
              <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                <span style={{ fontWeight: "500", color: "#005B99" }}>
                  20+ talks delivered.
                </span>{" "}
                well connected with student bodies across india.
              </Text>
            </Flex>
          </Flex>

          {/* Speaker Image */}
          <Flex w={"100%"} justify={"center"}>
            <Image
              src={"/speaker-uniswap.png"}
              alt={"Speaker events and engagements"}
              borderRadius={"12px"}
              w={"100%"}
              maxW={"100%"}
              objectFit={"cover"}
            />
          </Flex>

          <Divider borderColor={"black"} />

          {/* Proof of 0→1 */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              proof i can build 0→1
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
                    href="https://x.com/0xratnakar/status/2014681406098792801?s=20"
                    style={{ color: "#005B99" }}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    ai & weekends
                  </a>{" "}
                  (recent example)
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  started a fun weekend builder scene in bangalore. first meet:{" "}
                  <a
                    href="https://x.com/aiweekendsxyz/status/2015399790478258279?s=20"
                    style={{ fontWeight: "500", color: "#005B99" }}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    20+ builders + creatives who shipped 10+ ideas in just a
                    couple of hours.
                  </a>
                </Text>
              </Flex>

              <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                i know what it takes to pull off what you&apos;re planning — and
                think from a brand building and awareness lens for max impact.
              </Text>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* My Approach */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              my approach for uniswap india
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                if we want to empower + educate + build uniswap&apos;s presence
                in india, we need to focus on a single north star:{" "}
                <span style={{ fontWeight: "500", color: "#005B99" }}>
                  getting more high-quality, committed builders.
                </span>
              </Text>

              <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                a lot of initiatives create the illusion of progress, but if
                they don&apos;t directly contribute to long-term ecosystem
                growth, they aren&apos;t truly valuable. structurally, this
                means prioritizing a core team + a volunteer-driven network
                rather than having the core team manage everything.
              </Text>

              <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                <span style={{ fontWeight: "500" }}>
                  most ecosystems approach india as a builder farm
                </span>{" "}
                — competing for a pool of lower-quality developers who don&apos;t
                move the needle. what actually matters is helping top-tier
                builders build applications that attract users. everything else
                flows from that.
              </Text>

              <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                these developers aren&apos;t drawn by grants and incentives —
                they care about building real companies and accessing global
                distribution.{" "}
                <span style={{ fontWeight: "500", color: "#005B99" }}>
                  uniswap needs to align with those priorities.
                </span>
              </Text>

              <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                i&apos;ve built playbooks for existing communities in india
                which they are still using.
              </Text>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Why Me */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
              the skills, connections and energy i bring are unmatched
            </Text>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Flex flexDir={"column"} gap={"12px"}>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  •{" "}
                  <span style={{ fontWeight: "500" }}>content:</span> 100M+
                  impressions, 100k follower in a few months growth track record
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  •{" "}
                  <span style={{ fontWeight: "500" }}>community:</span> 2000+
                  builders base india, 1000+ hackers solidityscan + more.
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  •{" "}
                  <span style={{ fontWeight: "500" }}>credibility:</span> spoke
                  at IITs, UNESCO, worked with top founders
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  •{" "}
                  <span style={{ fontWeight: "500" }}>execution:</span>{" "}
                  co-founded & built real projects, ran agency 3+ years
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"95%"}>
                  •{" "}
                  <span style={{ fontWeight: "500" }}>network:</span> well
                  connected in indian web3 space + college bodies.
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Footer */}
          <Flex flexDir={"column"} gap={"20px"}>
            <Text fontSize={"14px"} opacity={"80%"}>
              happy to chat and see how we can make this real!
              <br />
              <br />
              <span style={{ fontWeight: "500" }}>let&apos;s chat:</span>{" "}
              <a
                href="https://twitter.com/0xratnakar"
                target={"_blank"}
                rel={"noreferrer"}
                style={{ color: "#005B99" }}
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
              <br />
              <br />
              learn more:{" "}
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
                href="https://www.ratnakar.xyz/work"
                target={"_blank"}
                rel={"noreferrer"}
                style={{ color: "#005B99" }}
              >
                work history
              </a>{" "}
              /{" "}
              <a
                href="https://www.ratnakar.xyz/projects"
                target={"_blank"}
                rel={"noreferrer"}
                style={{ color: "#005B99" }}
              >
                projects
              </a>
            </Text>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
