import { Flex, Text, Divider, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const SITE_URL = "https://www.ratnakar.xyz";

export default function Superteam() {
  return (
    <>
      <Head>
        <title>priyanshu × superteam</title>
        <meta name="description" content="why priyanshu ratnakar for superteam" />
        <meta property="og:title" content="priyanshu × superteam" />
        <meta property="og:description" content="gm, i&apos;m priyanshu ratnakar — i&apos;ve already been doing this job, just not for superteam [yet]" />
        <meta property="og:image" content={`${SITE_URL}/superteam-cover.png`} />
        <meta property="og:url" content={`${SITE_URL}/superteam`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}/superteam-cover.png`} />
      </Head>
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
            <Image
              src={"/superteam-cover.png"}
              alt={"superteam cover"}
              h={["130px", "130px", "196px"]}
              borderRadius={"7px"}
              objectFit={"cover"}
              w={"100%"}
            />

            {/* Header */}
            <Flex flexDir={"column"} gap={"20px"}>
              <Text
                fontFamily={"Outfit"}
                color={"black"}
                fontWeight={"600"}
                fontSize={["22px", "22px", "26px"]}
              >
                gm, i&apos;m priyanshu ratnakar
              </Text>
              <Text fontSize={"16px"} opacity={"90%"}>
                📍bangalore | builder + operator + storyteller
              </Text>
              <Text
                fontSize={["14px", "14px", "16px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
                opacity={"90%"}
              >
                tl;dr: i&apos;ve already been doing this job — just not for superteam [yet]
              </Text>
              <Text
                fontSize={["14px", "14px", "15px"]}
                lineHeight={"28px"}
                opacity={"90%"}
              >
                i&apos;ve been playing onchain since my teens, built couple of side projects. grew india&apos;s multiple builder communities to thousands of members. ran ops @ multiple startups, shipped content that&apos;s crossed millions+ views and have written content for at least one of your fav. twt profile. i thrive in chaos, ship fast, and care deeply about the culture + community.
              </Text>
              <Text fontSize={"15px"}>
                <a
                  href="https://twitter.com/0xratnakar"
                  style={{ color: "#005B99" }}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  twitter
                </a>{" "}
                /{" "}
                <Link href="/work" style={{ color: "#005B99" }}>
                  work
                </Link>
              </Text>
            </Flex>

            <Divider borderColor={"black"} />

            {/* Proof section */}
            <Flex flexDir={"column"} gap={"30px"}>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
              >
                proof i can do everything you need
              </Text>

              {/* Design */}
              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  decks, content & storylines
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                  playing with photoshop since i was 12. figma, ps, canva, whatever gets the job done. designed products, creatives, and brand stuff pretty much everywhere i&apos;ve worked.{" "}
                  <a
                    href="https://www.figma.com/design/AVe713AmlJCfYD91DCLJhl/Priyanshu-s-Design-Work?node-id=1-749&t=lhMPTPHKYlVc72Ap-1"
                    style={{ color: "#005B99" }}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    design work →
                  </a>
                </Text>
              </Flex>

              {/* Video */}
              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  videos — scripting, producing, ops
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                  love telling stories which build strong narrative. content mentor at ibw + sui + base fellowship.{" "}
                  <a
                    href="https://priyanshuratnakar.notion.site/Priyanshu-s-video-work-2df7f20f297980169812fd4e0f29fe53?source=copy_link"
                    style={{ color: "#005B99" }}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    video work →
                  </a>
                </Text>
              </Flex>

              {/* Writing */}
              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  writing — playbooks, docs, guides
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                  built the playbooks that fbi/base india still uses today. ghostwritten for top 1% x accounts, high chances you&apos;ve read my content and never realised. know how to write for builders + the internet.{" "}
                  <span style={{ fontWeight: "500" }}>
                    my recent article hit #3 most read worldwide on x.
                  </span>
                </Text>
              </Flex>

              {/* Ops */}
              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  airtable, ops & operations
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                  ran day-to-day ops, project and client management at almost all the places i&apos;ve worked at. had my own agency actually. grants? used to work at a grant management platform.
                </Text>
              </Flex>

              {/* Technical */}
              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  technical + claude code
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                  i&apos;m a builder at heart, you will find me vibe coding at nights, shipping some random side projects on weekends.{" "}
                  <a
                    href="https://www.ratnakar.xyz/projects"
                    style={{ color: "#005B99" }}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    fun projects →
                  </a>
                </Text>
              </Flex>

              {/* Community */}
              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  community comms
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                  organized india-wide events, bootcamps, fellowships. delivered talks @ top colleges — IITs, DUs etc. love talking to builders.
                </Text>
              </Flex>

              {/* IRL */}
              <Flex flexDir={"column"} gap={"8px"}>
                <Text fontWeight={"500"} fontSize={"16px"}>
                  irl activation
                </Text>
                <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                  started{" "}
                  <a
                    href="https://x.com/0xratnakar/status/2017479770259488935?s=20"
                    style={{ color: "#005B99" }}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    ai & weekends
                  </a>{" "}
                  — a fun weekend builder scene in bangalore. first meet:{" "}
                  <span style={{ fontWeight: "500" }}>
                    20+ builders shipped 10+ ideas in hours.
                  </span>{" "}
                  i know how to get people in a room and make magic happen.
                </Text>
              </Flex>

              <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"} fontStyle={"italic"}>
                i&apos;m 100% sure whatever&apos;s mentioned on the jd — that&apos;s tuesday for me.
              </Text>
            </Flex>

            <Divider borderColor={"black"} />

            {/* If I start tomorrow */}
            <Flex flexDir={"column"} gap={"30px"}>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
              >
                if i start tomorrow
              </Text>
              <Flex flexDir={"column"} gap={"16px"} fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                <Text>
                  takeover whatever paarug got on his plate so he can focus on better and more important things. run experiments. revive old initiatives which died because of no help. retain + push builders to ship moar.
                </Text>
              </Flex>

              {/* Bridge diagram image */}
              <Image
                src={"/superteam-bridge.png"}
                alt={"the bridge — TOFU / MOFU / BOFU"}
                borderRadius={"12px"}
                w={"100%"}
                maxW={"100%"}
                objectFit={"cover"}
              />
               <Text>
                  be the bridge between whole team @ superteam + builders.
                </Text>

              <Flex flexDir={"column"} gap={"16px"} fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                <Text>
                  north star:{" "}
                  <span style={{ fontWeight: "500", color: "#005B99" }}>
                     getting more high-quality + committed builders.
                  </span>{" "}
                  most ecosystems approach india as a builder farm — competing for lower-quality developers who don&apos;t move the needle. what actually matters is helping top-tier builders build real companies with global distribution. everything else flows from that.
                </Text>
              </Flex>
            </Flex>


            <Divider borderColor={"black"} />

            {/* Comp */}
            <Flex flexDir={"column"} gap={"20px"}>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
              >
                comp expectations
              </Text>
              <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                looking for something in the range of{" "}
                <span style={{ fontWeight: "500" }}>$60k — $80k / year</span>,
                happy to discuss.
              </Text>
            </Flex>

            <Divider borderColor={"black"} />

            {/* Footer */}
            <Flex flexDir={"column"} gap={"12px"}>
              <Text fontSize={"14px"} opacity={"80%"}>
                learn more:{" "}
                <a
                  href="https://www.ratnakar.xyz/work"
                  style={{ color: "#005B99" }}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  work
                </a>{" "}
                /{" "}
                <a
                  href="https://www.ratnakar.xyz/projects"
                  style={{ color: "#005B99" }}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  projects
                </a>{" "}
                /{" "}
                <a
                  href="https://www.ratnakar.xyz/about"
                  style={{ color: "#005B99" }}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  about
                </a>{" "}
                /{" "}
                <a
                  href="https://www.ratnakar.xyz/wall-of-wins"
                  style={{ color: "#005B99" }}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  wall of wins
                </a>
              </Text>
            </Flex>
          </Flex>
        </motion.div>
      </Flex>
    </>
  );
}
