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
                who am i? 
              </Text> 
              <Divider borderColor={"black"} />
              <Text>
              So, who am I, you ask? every day, I ask myself this question, finding solace in the introspection it brings. 
              Self-reflection, to me, a reminder of where Ive been and where Im headed. 
              The question have become a bit of a ritual, a way to keep my compass pointed in the right direction.
              </Text>
              <Text>
                I was born in Muzaffarpur, fourth most populous city in Bihar and world-famous for its <a href="https://en.wikipedia.org/wiki/Lychee" style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer" >lychees.</a>
              </Text>
              <Flex flexDir={"column"} gap={"30px"}>
            <Image
              src={"about/born.jpg"}
              borderRadius={"7px"}
              objectFit={"cover"}
              alt="childhood image"
            />
            </Flex>
              <Text>
              I belong to a lower-middle class family, growing up, money was tight, but my parents taught me that dreams dont come with a price tag.
              My father is a voiceover artist and my mumma housewife. The heart of our home, showed me a path that knows no boundaries.
              </Text>
              <Text>
              I enjoyed sketching and had a passion for art. Growing up in an artistic environment, my inclination towards sketching and art was undeniable. 
              However, coming from an artistic family, I was never allowed to make art my livelihood. As a result, I was pushed to pursue studies instead. 
              Unfortunately, I struggled in my subjects and almost failed in all of them.
              </Text>
              <Text>
              My story with technology started in an unexpected way when my father borrowed a PC to start his recording studio, and it changed everything. 
              Before that, we used those old cassette recorders, the <a href="http://ahujapaworld.com/index.php?route=product/product&product_id=137" style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer" >40-40s.</a> 
              </Text>
              <Text>
              Initially, I wasnt allowed to touch it, but one day I got a chance and watched the movie <a href="https://youtu.be/XxxAYut8iPg?si=2ZdcNwx23_zqy0tP" style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer" >My friend Ganesha. </a>
              This was my very first interaction, and probably the last one for that whole year.
              </Text>
              <Text>
              That instructor went home and asked my father if he wants me to learn computers, he will teach me for free. This is how it all started. 
              I was 10 that time, during summer holidays in one month, I knew not just the basics of computer, but <a href="https://en.wikipedia.org/wiki/MS-DOS#:~:text=MS%2DDOS%20(%2Fˌ%C9%9B,computers%20mostly%20developed%20by%20Microsoft." style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer" >MS-DOS,</a> <a href="https://en.wikipedia.org/wiki/Logo_(programming_language)" style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer" >LOGO </a>and basics of <a href="https://en.wikipedia.org/wiki/C_(programming_language)" style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer" >C. </a>
              </Text>
              <Text>
              It ignited my passion for the programming and command line.
              </Text>
              <Text>
              In the next few years, we obtained an internet connection through an <a href="https://amzn.to/3u5MIty" style={{ color: "#005B99" }} rel="noreferrer" target={"_blank"}>Airtel 3G modem.</a> The internet was amazing, even though I had limited data.
              I spent most of my time diving deep into the vast expanse of the web, surfing from one place to another. 
              This experience exposed me to the true power of computers.
              </Text>
              <Text>
              Moving forward, as I continued to explore, I encountered challenges in accessing knowledge, mentors, and resources. 
              However, I became fascinated with the idea of using technology to solve everyday problems, thanks to the internet.
              </Text>
              <Text>
              As soon as I entered 8th grade, I started freelancing. It was fun, cool, and it allowed me to make money. 
              crazy right? I continued freelancing for the next few years.
              </Text>
              <Text>
              While working with international clients, I realized the struggle they faced in finding top-tier talent. 
              To help them, I would refer my online friends whom I had met while freelancing for other gigs.
              </Text>
              <Text>
              One day, an idea struck my mind: why not work together and provide all the necessary services? This led to the creation of Protocol X, my very first startup agency. 
              We specialise in transforming ideas into tangible tech solutions, guiding projects from inception to fruition.
              </Text>
              <Text>
              It was an amazing journey running Protocol X. We had a good three years filled with money, fame, and lots of learning.
              </Text>
              <Flex flexDir={"column"} gap={"30px"}>
            <Image
              src={"about/awards.JPG"}
              borderRadius={"7px"}
              objectFit={"cover"}
              alt="image of awards"
            />
            </Flex>
              <Text>
              During the same time I was exploring other interesting things, app development and cyber security. 
              It led me to participate in a hackathon organised by google & govt of India, where we had to come up with some solutions to tackle fake forwarded messages. 
              I sent my idea and prototype and voila, I got it. 
              </Text>
              <Text>
              I had my maths paper next day and here I was in a bus from Bihar to Delhi. I reached there, completed the DEMO and guess what?
              They were really impressed by the idea. I shared my struggles like how hard it is for me to learn everything by myself in 1GB per month Internet.
              </Text>
              <Text>
              They offered me to move to Delhi and on weekends I can come to Googles office and they will mentor me. 
              Just imagine this, a school kid from bihar getting chance to work with googlers. It was like a dream come true for me. I took it. Moved there. 
              </Text>
              <Text>
              But fate had other plans, some unexpected turns happened I had to come back, stayed there finished board exams. 
              On my last paper, Govt decided lets to lockdown because COVID-19. 
              </Text>
              <Text>
              During that time I explored cybersecurity, and my breakthrough happened when I got an internship with Gurugram Police. 
              Oh boy ! I was actually working with law enforcement. Got all in after that, terminal was my favt anyway, played with KALI, PARROT and what not. 
              </Text>
              <Text>
              Later I opted to skip college and chose instead to tackle larger life challenges head-on, and Im very much happy with my decision. 
              </Text>
              <Text>
              2021 Sep, I decided to move out. So I came here, Delhi. When I moved in I knew nothing, but hey it was still COVID and lockdowns
              so spend time whole time learning cooking, doing dishes, laundry and other survival stuffs. Now I cook really good food. 
              HMU if youre in town sometime. 
              </Text>
              <Text>
              2023 Sep, I decided its time again, to move out to explore better opportunity. 
              </Text>
              <Text>
              2024 - Ill be moving to Banglore. Lets see what happens 
              </Text>
              <Text>
              Im currently navigating the unpredictable journey of entrepreneurship, continuously experimenting and learning.
              Im in the arena trying stuff. Some will work, some wont. But always learning. IYKYK
              </Text>

            </Flex>
          </Flex>
         
        </Flex>
      </motion.div>
    </Flex>
  );
}
