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
                  href={"https://shorturl.at/iuM05"}
                  target={"_blank"}
                  rel={"noreferrer"}
                  style={{ fontWeight: "500" }}
                >
                  Founder's office at FBI [Farcaster Builders International]
                </a>{" "}
                — mar'24 to aug'24
                <br></br>Global founders and builders painting the next wave of consumer crypto on Farcaster. Heard of Superteam? We are Superteam for base. {" "}
              </Text>

              <Text>
  <a
    className=""
    href=""
    target="_blank"
    rel="noreferrer"
    style={{ fontWeight: "500" }}
  >
    Growth Lead at Questbook
  </a>{" "}
  — 2024 to 2024
  <br></br>Questbook is building tools and infrastructure for enabling the future of pseudonymous, permissionless work. {" "}
</Text>

<Text>
  <a
    className=""
    href=""
    target="_blank"
    rel="noreferrer"
    style={{ fontWeight: "500" }}
  >
    Community & Marketing Manager at SolidityScan
  </a>{" "}
  — 2023 to 2023
  <br></br>Smart-contract scanning tool built to discover vulnerabilities & mitigate risks in the code by CredShields {" "}
</Text>

<Text>
  <a
    className=""
    href=""
    target="_blank"
    rel="noreferrer"
    style={{ fontWeight: "500" }}
  >
    Growth at Credshields
  </a>{" "}
  — 2022 to 2023
  <br></br>Leading web3 security company doing smart contract auditing. {" "}
</Text>

<Text>
  <a
    className=""
    href=""
    target="_blank"
    rel="noreferrer"
    style={{ fontWeight: "500" }}
  >
    Founder at Protocol X
  </a>{" "}
  — 2018 to 2022
  <br></br>My first startup, an all-in-one agency that provided end-to-end solutions for startups, covering everything from technical support to growth through targeted marketing strategies. We specialized in helping early-stage companies build and scale their tech infrastructure while driving their growth through innovative marketing efforts. {" "}
</Text>

<Text>
  <a
    className=""
    href=""
    target="_blank"
    rel="noreferrer"
    style={{ fontWeight: "500" }}
  >
    Community Moderator at Gurugram Police
  </a>{" "}
  — 2021 to 2021
  <br></br>Managed the community for Gurugram Police's annual cyber security summer internship. {" "}
</Text>

<Text>
  <a
    className=""
    href=""
    target="_blank"
    rel="noreferrer"
    style={{ fontWeight: "500" }}
  >
    Security Researcher at Rakshit Tandon - Hackdev Technology Pvt. Ltd
  </a>{" "}
  — 2020 to 2020
  <br></br>Worked under Rakshit Tandon, India's one of the most well known person in Cyber Security & Safety for Research and Analysis on various online crimes against Women and Children in neighbouring countries. {" "}
</Text>

<Text>
  <a
    className=""
    href=""
    target="_blank"
    rel="noreferrer"
    style={{ fontWeight: "500" }}
  >
    Cyber Security Intern at Gurugram Police
  </a>{" "}
  — 2020 to 2020
  <br></br>Cyber Security Summer Intern under Gurugram Police, Indian LEA. {" "}
</Text>

<Text>
  <a
    className=""
    href=""
    target="_blank"
    rel="noreferrer"
    style={{ fontWeight: "500" }}
  >
    Android Developer at Accelvis
  </a>{" "}
  — 2018 to 2018
  <br></br>Android Developer at Accelvis {" "}
</Text>

              
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
