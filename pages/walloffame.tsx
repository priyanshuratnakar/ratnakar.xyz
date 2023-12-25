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
                Wall of fame 
              </Text> 
              <Text opacity={"75%"}>
                I dont set out to win awards. I dont think any entrepreneurs does, but when you receive an award, 
                it&apos;s an affirmation: it means that people appreciate what you do. 
                Every award I have received is a confirmation of something I have done, and that motivates me to push a little harder. 🥂
              </Text>
              <Divider borderColor={"black"} />

            <Flex flexDir={"column"} gap={"30px"}>
                <Image
                  src={"awards.JPG"}
                  borderRadius={"7px"}
                  objectFit={"cover"}
                  alt="image of awards recived by priyanshu ratnakar"
                />
            </Flex>

            <Flex gap={"30px"} flexDir={"column"}>
              <Text
                  fontSize={["21px", "21px", "24px"]}
                  lineHeight={"28px"}
                  fontWeight={"500"}
                  opacity={"100%"}
              >
              Awards
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
                  <ul>
                  <li>Pradhan Mantri Bal Shakti Purushkar (nominated) - 2021</li>
                  <li>CogX Voice of GenZ (semifinalist) - 2020</li>
                  <li>Male Entrepreneur of The year - 2019</li>
                  <li>Prestigious Indian of The Year - 2019</li>
                  <li>Incredible Indian Icon Award - 2019</li>
                  <li>India Star Passion Award - 2019</li>
                  <li>Kalam Youth Leadership Award - 2019</li>
                  <li>Think Mobile with Google - 2018</li>
                  <li>Doodle for Google (semifinalist)- 2016</li>
                </ul>
              </Text>
              </Flex>

              <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
              opacity={"100%"}
            >
            Talks 
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
            <Text>
              <a 
                className={"project"}
                href={"https://www.instagram.com/p/C0QhoaGSyr1/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Impact of AI & innovation, Panel Discussion - Y20 Hindu, DU
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.instagram.com/p/C0BCz-SyYGB/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Safety in the Age of AI - CVS, DU
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"#"}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Innovation and Start-up Ecosystem, Panel Discussion - Ramanujan, DU
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.instagram.com/p/CuCjcVry_QJ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Safety in the Age of AI - IIT, Delhi
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.instagram.com/p/Co9bGY3Stfl/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Safety - Dwarka International
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.instagram.com/p/CopShD2BfZC/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Security Challenges and Emerging Trends - Jesus and Mary, DU
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://youtu.be/wvBYthych74?si=GHmSjw-vzlZRRskY"}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Safety in the Age of AI - IIT, Patna
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.instagram.com/p/CoueR-hNK8G/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Blockchain & Smart Contract Security - Integral University, Lucknow
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.instagram.com/p/CfWLePbjzQf/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Security and Safety - SGTB Khalsa, DU
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.instagram.com/p/CcYlKD3hdQ9/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Media & Information Literacy - UNESCO
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.instagram.com/p/CcVuNCbhuHw/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Security & Hackathon - CrossKnot
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.youtube.com/watch?v=rhWyt68yuI0"}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Security & AI - TeensInAI, Fiji
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.instagram.com/p/CIQz_AJsccq/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Security & Safety - MacSecuritySolution
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.youtube.com/watch?v=NqvNFwa0hQc&t=1s"}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Security & AI - Bsides, Maharashtra
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.facebook.com/Priyanshuratnakarofficial/posts/pfbid0tq4aefmTjS4DpuXfHjZSCXhfGfTTY5pBYdoPkh9Miw73KqX2Mw71bN8qGn7Lbbnbl"}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Security, Startups & Entrepreneurship - Leo club
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.youtube.com/watch?v=R22-7xCjIRE"}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • IOT Security & the Future of Cyber Security - HacSecurity
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.youtube.com/watch?v=igd_BRgBdKQ"}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Security & Startups - RestCon
              </a>
            </Text>

            <Text>
              <a 
                className={"project"}
                href={"https://www.instagram.com/p/B2TpTxWHRQo/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="}
                target={"_blank"}
                rel={"noreferrer"}
                >
                • Cyber Security, Startups & Entrepreneurship - Gurugram Achievers Award
              </a>
            </Text>
            </Text>
            </Flex>
            </Flex>
              <Flex gap={"30px"} flexDir={"column"}>

                <Text
                  fontSize={["21px", "21px", "24px"]}
                  lineHeight={"28px"}
                  fontWeight={"500"}
                  opacity={"100%"}
                >
                Press and Media
                </Text>
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
                      href={"https://yourstory.com/hindi/top-five-youngest-entrepreneurs-india-2020-tilak-mehta-advait-thakur-priyanshu-ratnakar-akhilendra-sahu-rohit-kashyap"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      मिलिए भारत के 2020 के टॉप 5 सबसे युवा उद्यमियों से, 13 साल की उम्र में ही शुरू कर दी उद्यमशीलता की यात्रा
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://haryanawale.com/2535/bihar-priyanshu-17-yr-old-techie-apps-jabong-myntra/"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      मात्र 17 साल की उम्र में ही बना डाले ढेरों एप्स बड़ी बड़ी कंपनियों के साथ कर चुके है काम
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://theinnerdetail.com/top-10-young-entrepreneurs-in-india/"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      Top 10 Young Entrepreneurs in India
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://yourstory.com/mystory/top-five-youngest-entrepreneurs-india-2020"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      TOP 5 YOUNGEST ENTREPRENEURS OF INDIA 2020
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://www.tumblr.com/deepakverma123/668545688926289920/priyanshu-ratnakar-one-of-the-youngest"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      Young Enterprenuer - Tumblr
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://hindi.badabusiness.com/motivational/priyanshu-ratnakar-a-boy-aiming-to-secure-the-cyber-security-world-through-his-skill-set-6011.html"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      प्रियांशु रत्नाकर Motivational Story: 17 साल की उम्र में बिहार का ये लड़का बना भारत का टॉप बिज़नेसमैन
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://bihar.express/priyanshu-ratnakar-a-17-year-old-boy-from-bihar/"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      टॉप युवा उद्यमियों में शामिल है बिहार का ये 17 साल का लड़का, जानें बिहार के असली हीरो की कहानी
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://thelogically.in/priyanshu-ratnakar-from-bihar/"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      बिहार के प्रियांशु ने मात्र 17 साल की उम्र में बनाये अनेकों ऐप्स, बड़े-बड़े कम्पनियों के साथ बिज़नेस करते हैं
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://youtu.be/Juvo-y9XP9Q?si=A874o9rvOl3iL04p"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      Priyanshu Ratnakar: A 17-year-old entrepreneur creating cyber-attack free world
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://www.vtvindia.com/priyanshu-ratnakar-boy-who-seeks-to-protect-the-cyber-world-with-his-skills"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      Priyanshu Ratnakar - Boy Who Seeks To Protect The Cyber World With His Skills!
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://thebiharians.com/top-yuva-udhmiyon-me-shamil-hai-muzaffarpur-ka-ye-17-saal-ka-ladka/"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      टॉप युवा उद्यमियों में शामिल है मुजफ्फरपुर का ये 17 साल का लड़का, जानें इस असली हीरो की कहान
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://www.patrika.com/work-life/ummeed-2021-last-year-these-youth-of-the-country-did-wonders-6586602/"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      flash back- 2020 - बीते साल देश के इन युवाओं ने किया कमाल
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://biharivoice.com/many-apps-made-at-the-age-of-just-17/"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      मात्र 17 साल की उम्र में बना डाले अनेकों ऐप्स, है कई बड़े कम्पनियों के साथ बिज़नेस
                    </a>
                  </Text>

                  <Text>
                    <a 
                      className={"project"}
                      href={"https://www.youtube.com/watch?v=Juvo-y9XP9Q&list=PLbstBO6w7ALahz_IfYcpjN61ZQ37FQfFo&pp=iAQB"}
                      target={"_blank"}
                      rel={"noreferrer"}
                      >
                      YouTube Features
                    </a>
                  </Text>


                </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
