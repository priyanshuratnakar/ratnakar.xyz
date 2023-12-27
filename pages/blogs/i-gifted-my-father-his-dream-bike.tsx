import { Flex, Text, Divider, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SignUpFormReact from "../newsletter";
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
                I gifted my father his dream bike 
              </Text> 
              <Text opacity={"75%"}>
                published on dec 25, 2023
              </Text>
              <Divider borderColor={"black"} />
              <Text>
                When I was 3, I got jaundice. It was a tough time for my family, especially my father, who ended up selling his beloved Bajaj scooter to foot the bill for my hospital stay. 
              </Text>
              <Flex flexDir={"column"} gap={"30px"}>
                <Image
                  src={"../blogs/vespa.jpg"}
                  borderRadius={"7px"}
                  objectFit={"cover"}
                  alt="Priyanshu on LML Vespa"
                />
              </Flex>
              <Text>
                I can still vividly recall those early memories, how he bought a cycle and added a small seat for me on the rod&ndash;frame. How he peddled me to school 
                &ndash; a quirky ride that invited teasing from classmates, who couldn&apos;t quite grasp the lengths a parent would go for their child.
              </Text>
              <Text>
                As the years rolled by, we eventually welcomed a Bajaj Platina into our lives &ndash; papa&apos;s first real bike. 
                It became a reliable companion, accompanying us through the twists and turns of life. 
                But, like the pages of a well&ndash;loved book, it started showing its age after over 15+ years of faithful service.  
                Recently I got a call from my mumma mentioning how our old Platina is and wasn&apos;t doing so well anymore. It started showing its age. 
              </Text>
              <Text>
                and then it hit me &ndash; a profound realisation, and I knew what I had to do. 
              </Text>
              <Text>
                Today, I might have made a bad financial decision, but it just felt right. I bought my dad his dream bike. 
                Seeing the happiness in his eyes made it all worth it. The look of sheer joy and pride on his face was priceless.
                The happiness and emotions of our family are the true currencies of life, rendering every financial sacrifice inconsequential in comparison.
              </Text>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
                opacity={"100%"}
              >
               But you know what hurts?
              </Text>
              <Text>
                Seeing him age, watching his hands shivering as he maneuvered the road, tugged at my heartstrings. 
                I couldn&apos;t help but wish I could&apos;ve handed him the keys to his dream ride a bit earlier, giving him the chance for a road trip or a breezy long drive when he was a bit younger.
              </Text>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
                opacity={"100%"}
              >
               And this is why
              </Text>
              <Text>
                You should do it! I should do it! We should do it. Whether it&apos;s that long&ndash;delayed Goa trip, the guitar you&apos;ve been eyeing, 
                the book on your wishlist, or a thoughtful gift waiting to find its moment &ndash; that moment is now.
              </Text>
              <Text>
                This whole experience slapped me with a truth we often forget &ndash; life is about making memories, especially with the people we love.
              </Text>
              <Text>
                Sometimes, in the symphony of life, you&apos;ve got to prioritise the emotions and joy of your family and loved ones over making the most sensible financial choices.
              </Text>
              <Text>
                In the grand scheme of things, sometimes it&apos;s the most seemingly impractical choices that hold the most sentimental value.
                After all, whom do we strive for if not the ones who have shaped our existence? 
              </Text>
              <Text>
                We&apos;re not just hustling for ourselves; we&apos;re working to create moments of happiness and connection for those we hold dear. 
                It&apos;s in these moments, fueled by love and shared dreams, that the true richness of life unfolds. 
              </Text>
              <Text>
                I&apos;m happy that before his birthday, he will finally ride his dream bike with a heart full of pride. This journey, not just on the asphalt but through the tapestry of our shared memories, is a gift that goes beyond mere of any note and cents.
              </Text>
              <Flex flexDir={"column"} gap={"30px"}>
                <Image
                src={"../blogs/bullet.jpg"}
                borderRadius={"7px"}
                objectFit={"cover"}
                alt="royal enfield bullet 350"
               />
              </Flex>
              <Text>Originally published on my <a href="https://x.com/priynshuratnakr/status/1733219090385571951?s=20" style={{ color: "#005B99" }} target={"_blank"} rel="noreferrer">twitter</a> first.</Text>
            </Flex>
            <SignUpFormReact></SignUpFormReact>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
