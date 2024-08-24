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
                Who am I? 
              </Text> 
              <Text opacity={"75%"}>
                last updated on aug 25, 2024
              </Text>
              <Divider borderColor={"black"} />
              <Text>
                So who am I? you ask. It is a question that accompanies me daily, a constant companion in my moments of introspection. 
                Self-reflection serves as a reassuring guide, reminding me of the journey behind and the path ahead. 
                This question has evolved into a personal ritual, a compass ensuring I stay aligned with the right direction.
              </Text>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
                opacity={"100%"}
              >
               Genesis
              </Text>
              <Text>
                I was born in Muzaffarpur, fourth most populous city in Bihar and world-famous for its <a href="https://en.wikipedia.org/wiki/Lychee" style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer" >lychees.</a>
              </Text>
            
              <Text>
                Born into the ebb and flow of financial strains, my parents taught me a crucial lesson: dreams don&apos;t come with price tags. 
                My father is a voiceover artist and mumma housewife, their guidance became the background score to my passions.
              </Text>
              <Text>
                I liked sketching and art flowed through my veins, being born in artistic family it was undeniable, right ? 
                Despite the artistic pull, life&apos;s practicalities steered me towards academia, where I really struggled with almost every subjects. 
                Yet, a pivotal moment arrived with the introduction of a computer into our home—a silent disruptor, an unexpected catalyst for unforeseen possibilities.
              </Text>
              <Flex flexDir={"column"} gap={"30px"}>
                <Image
                  src={"about/born.jpg"}
                  borderRadius={"7px"}
                  objectFit={"cover"}
                  alt="childhood image"
                />
              </Flex>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
                opacity={"100%"}
              >
               Ignition
              </Text>
              <Text>
                In 2012, the wave of technological change reached the T3 towns. It eventually made its way to our home too, 
                marked by the arrival of a borrowed PC for my father&apos;s recording studio, replacing the archaic <a href="http://ahujapaworld.com/index.php?route=product/product&product_id=137" style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer" >40-40 cassette recorders </a> of yesteryear.
              </Text>
              <Text>
                An initial event fueled my curiosity for computers, when I had the chance to watch <a href="https://youtu.be/XxxAYut8iPg?si=2ZdcNwx23_zqy0tP" style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer" >My friend Ganesha. </a>
                This marked both the beginning and likely end of my interaction with the computer during that year.
              </Text>
              <Text>
                Yet, my fascination with computers persisted, finding a lifeline when I stumbled upon a computer cafe. 
                Witnessing a struggling student, I offered assistance, effortlessly entering the right commands. 
                This small act caught the attention of an instructor, who proposed to teach me computer skills for free. 
                At 12, during summer holidays, I delved into the intricacies of computer programming, from the basics to <a href="https://en.wikipedia.org/wiki/MS-DOS#:~:text=MS%2DDOS%20(%2Fˌ%C9%9B,computers%20mostly%20developed%20by%20Microsoft." style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer" >MS-DOS,</a> <a href="https://en.wikipedia.org/wiki/Logo_(programming_language)" style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer" >LOGO </a>and <a href="https://en.wikipedia.org/wiki/C_(programming_language)" style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer" >C, </a> igniting a fervour for the programming and command line.
              </Text>
              <Text>
                As the years passed, an <a href="https://amzn.to/3u5MIty" style={{ color: "#005B99" }} rel="noreferrer" target={"_blank"}>Airtel 3G modem </a>
                brought the internet into our home, unveiling the vast expanse of the web. despite its limited embrace. 
                It became my portal to the expansive realm of possibilities, thanks to the vast repository of the internet.
              </Text>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
                opacity={"100%"}
              >
               Metamorphosis
              </Text>
               <Text>
                In 8th grade, I ventured into freelancing, a playground that connected me with people across globe.  
                While working with international clients, I realised the struggles they faced in finding top-tier talent. 
              </Text>
              <Text>
                This led to the creation of Protocol X, my very first startup agency. 
                We specialised in transforming ideas into tangible tech solutions, guiding projects from inception to fruition.
              </Text>
              <Text>
               Running Protocol X was an incredible adventure. Over a fulfilling three-year span, we experienced financial success, garnered fame, and soaked in a wealth of invaluable lessons.
              </Text>
              <Flex flexDir={"column"} gap={"30px"}>
                <Image
                src={"about/fame.png"}
                borderRadius={"7px"}
               objectFit={"cover"}
               alt="image of priyanshu ratnakar"
               />
              </Flex>
              <Text>
                Simultaneously, my interests into app development and cybersecurity led me to a hackathon organised by Google and the Indian government. 
                Despite the impending math paper, I embarked on a journey from Bihar to Delhi, showcasing my idea and prototype. 
              </Text>
              <Text>
                The gamble paid off, Judges were impressed. They offered me to move to Delhi and be mentored by Googlers, learning from tech giants, crazy right ? 
              </Text>
              <Text>
                However, fate had other plans it threw unexpected turns, and I returned. Finishing board exams amid the onset of the COVID-19 lockdown.
              </Text>
              <Text>
                During this period, my exploration of cybersecurity reached new heights with an internship at Gurugram Police. 
                The allure of working with law enforcement and navigating terminal, KALI and PARROT became a defining chapter. 
              </Text>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
                opacity={"100%"}
              >
               Odyssey
              </Text>
              <Text>
                Opting to skip college (decision I stand by), I decided to walk on the road less traveled.
              </Text>
              <Text>
                Sep&apos;21 I moved Delhi, to explore better opportunities. A city where, amidst COVID and lockdowns, 
                I mastered the art of survival—cooking, doing dishes, and laundry. The city became a canvas for me, acquiring skills beyond the digital realm.
              </Text>
              <Text>
                Sep&apos;23 it&apos;s time again, to move out and explore even more better opportunities. The unpredictable journey continues, an ongoing experiment, an exploration into the unknown.
              </Text>
              <Text>Feb&apos;24 I moved here in Bangalore. Initally crashed at a friend&apos;s place but now found a cozy place living there, found a job and now exploring what next.</Text>
              <Flex flexDir={"column"} gap={"30px"}>
                <Image
                src={"about/priyanshu.png"}
                borderRadius={"7px"}
               objectFit={"cover"}
               alt="priyanshu in an art museum"
               />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
