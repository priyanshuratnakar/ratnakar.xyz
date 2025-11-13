import { Flex, Text, Divider, Link } from "@chakra-ui/react";
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
      px={4}
    >
      <motion.div
        initial={{ y: "0%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <Flex
          mt={"70px"}
          mb={"70px"}
          w={["300px", "420px", "720px"]}
          gap={"40px"}
          flexDir={"column"}
        >
          <Flex flexDir={"column"} gap={"20px"}>
            <Text
              color={"black"}
              fontSize={["20px", "22px", "26px"]}
              lineHeight={"30px"}
              fontWeight={600}
              textTransform={"lowercase"}
            >
              work experience
            </Text>
            <Divider borderColor={"black"} />
          </Flex>

          <Flex gap={"24px"} flexDir={"column"}>
            <Flex
              flexDir={"column"}
              gap={"14px"}
              fontSize={["13px", "14px", "15px"]}
              lineHeight={"24px"}
              fontWeight={400}
              opacity={0.95}
            >
              <Text textTransform={"lowercase"}>
                <Text as="span" fontWeight={600}>
                  founder’s office at docklabs
                </Text>{" "}
                — mar 2025 to oct 2025
                <br />
                led day-to-day operations, projects and client management. shipped
                and supported products like emerge, propaganda, haberdashery, atlas,
                anima and more.
              </Text>

              <Text textTransform={"lowercase"}>
                <Text as="span" fontWeight={600}>
                  co-founder at digits
                </Text>{" "}
                — 2025
                <br />
                built a farcaster-native fun maths mini-app on base. owned growth
                and marketing from 0 to 1: ran video campaigns, reached 10k+ games,
                3k+ active users and won a base builder grant (peak mkt cap ~500k).
              </Text>

              <Text textTransform={"lowercase"}>
                <Text as="span" fontWeight={600}>
                  independent agent
                </Text>{" "}
                — sep 2024 to feb 2025
                <br />
                growth consultant for metadao, baseapp, gasyard and bitmor — strategy,
                campaign execution and creator ops.
              </Text>

              <Text textTransform={"lowercase"}>
                <Link
                  href={"https://shorturl.at/iuM05"}
                  isExternal
                  fontWeight={600}
                  textDecoration={"underline"}
                >
                  founder’s office at fbi [farcaster builders international]
                </Link>{" "}
                — mar 2024 to aug 2024
                <br />
                generalist role: operations, growth, marketing and community. grew a
                builders network to 1k+ and ran india-wide events, bootcamps and
                fellowships.
              </Text>

              <Text textTransform={"lowercase"}>
                <Link
                  href={"https://www.ratnakar.xyz/resume"}
                  isExternal
                  fontWeight={600}
                  textDecoration={"underline"}
                >
                  growth lead at questbook
                </Link>{" "}
                — jan 2024 to mar 2024
                <br />
                closed partnerships and shipped product features as growth-pm that
                brought 5k+ builders onto the platform.
              </Text>

              <Text textTransform={"lowercase"}>
                <Text as="span" fontWeight={600}>
                  freelance
                </Text>{" "}
                — sep 2023 to jan 2024
                <br />
                research and content for founders like andrew gazdeki, lenny
                rachitsky and tibo; built experimental projects and short form assets.
              </Text>

              <Text textTransform={"lowercase"}>
                <Link
                  href={"https://www.ratnakar.xyz/resume"}
                  isExternal
                  fontWeight={600}
                  textDecoration={"underline"}
                >
                  community and marketing manager at solidityscan
                </Link>{" "}
                — jan 2023 to aug 2023
                <br />
                scaled twitter and community: grew social signals and activated a
                1k+ discord hacker community; led content and offline events.
              </Text>

              <Text textTransform={"lowercase"}>
                <Link
                  href={"https://www.ratnakar.xyz/resume"}
                  isExternal
                  fontWeight={600}
                  textDecoration={"underline"}
                >
                  growth at credshields
                </Link>{" "}
                — jan 2022 to aug 2023
                <br />
                owned growth and partnerships, ran campaigns and events to drive user
                acquisition and brand partnerships.
              </Text>

              <Text textTransform={"lowercase"}>
                <Link
                  href={"https://www.ratnakar.xyz/resume"}
                  isExternal
                  fontWeight={600}
                  textDecoration={"underline"}
                >
                  founder at protocol x
                </Link>{" "}
                — jan 2018 to jan 2022
                <br />
                built an all-in-one agency: product, engineering and growth for early
                stage startups.
              </Text>

              <Text textTransform={"lowercase"}>
                <Text as="span" fontWeight={600}>
                  security researcher at gurugram police
                </Text>{" "}
                — jun 2020 to oct 2020
                <br />
                cyber security internship with indian law enforcement: research on
                online crimes against women and children; built a url legitimacy
                detector.
              </Text>

              <Text textTransform={"lowercase"}>
                <Text as="span" fontWeight={600}>
                  android developer at accelvis
                </Text>{" "}
                — 2018
                <br />
                android development and product support.
              </Text>
            </Flex>
          </Flex>

          {/* projects */}
          <Flex flexDir={"column"} gap={"12px"}>
            <Text
              color={"black"}
              fontSize={["18px", "20px", "22px"]}
              lineHeight={"28px"}
              fontWeight={600}
              textTransform={"lowercase"}
            >
              selected projects
            </Text>
            <Divider borderColor={"black"} />
            <Flex flexDir={"column"} gap={"10px"}>
              <Text textTransform={"lowercase"}>
                <Text as="span" fontWeight={600}>
                  digits — math mini-app
                </Text>
                {" — "}
                farcaster-native mini-game on base with 10k+ games and 3k+ users;
                winner of a base builder grant.
              </Text>

              <Text textTransform={"lowercase"}>
                <Text as="span" fontWeight={600}>
                  emerge / propaganda / haberdashery / atlas / anima
                </Text>
                {" — "}
                design and go-to-market support while operating from docklabs' founder’s
                office.
              </Text>

              <Text textTransform={"lowercase"}>
                <Text as="span" fontWeight={600}>
                  solidityscan growth playbook
                </Text>
                {" — "}
                content, community and outreach that scaled social signals and built
                active discord cohorts.
              </Text>
            </Flex>
          </Flex>

          {/* skills */}
          <Flex flexDir={"column"} gap={"12px"}>
            <Text
              color={"black"}
              fontSize={["18px", "20px", "22px"]}
              lineHeight={"28px"}
              fontWeight={600}
              textTransform={"lowercase"}
            >
              skills
            </Text>
            <Divider borderColor={"black"} />
            <Flex gap={"8px"} flexWrap={"wrap"}>
              <Text textTransform={"lowercase"}>growth strategy</Text>
              <Text textTransform={"lowercase"}>creator campaigns</Text>
              <Text textTransform={"lowercase"}>community building</Text>
              <Text textTransform={"lowercase"}>product growth (pm)</Text>
              <Text textTransform={"lowercase"}>content & short-form video</Text>
              <Text textTransform={"lowercase"}>partnerships</Text>
              <Text textTransform={"lowercase"}>research & content</Text>
              <Text textTransform={"lowercase"}>basic android dev</Text>
              <Text textTransform={"lowercase"}>security research</Text>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
```
