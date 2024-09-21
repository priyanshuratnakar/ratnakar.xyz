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
                That Undelivered Letter
              </Text> 
              <Text opacity={"75%"}>
                published on sep 21, 2024
              </Text>
              <Divider borderColor={"black"} />
              <Text>
                The first time I came to Bangalore, I bought a few postcards for her. They&apos;re still with me, in my folder. I wanted to give&apos;em to her on her birthday. Now, I&apos;m sitting here at my desk, looking at this letter, folded neatly. No postage stamp, no address. Just a few heartfelt words that will never be delivered. It's funny how words meant for someone can feel so heavy when they remain unsent.
              </Text>
              <Text>
                I wrote that letter for her during a quiet moment one evening when the weight of everything I felt couldn&apos;t be kept anymore. Our relationship was going through its ebbs and flows, as relationships do, but that evening, I felt it all, deeply. I wanted her to know what she meant to me. Beyond the arguments, beyond the misunderstandings, beyond the long silences that had settled between us.
              </Text>
              <Text>
                That letter was my way of telling her everything I had left unsaid in those fleeting moments we spent together. How her laugh made the world feel a little lighter. How her presence gave me a sense of calm in the storm that was life. How I imagined a future where we&apos;d grow old together, facing whatever the world threw at us.
              </Text>
              <Text>
                But life doesn&apos;t always wait for you to say what needs to be said. Sometimes, it has a way of pulling the rug out from under your feet before you realize how precious each moment really is.
              </Text>
              <Text>
                I paused for a minute after writing that letter. &quot;Tomorrow,&quot; I told myself. &quot;I&apos;ll hand it to her tomorrow when things feel more settled, when there&apos;s no tension, when we&apos;re both calm.&quot; [maybe?] But tomorrow never came the way I thought. Instead, we drifted apart - subtly at first, then all at once. And by the time I thought to give her the letter, it was too late.
              </Text>
              <Text>
                The letter, in its stillness, became a symbol of everything I wish I had said, every moment I wish I had seized. The truth is, we think we have time. We think there&apos;s always going to be another conversation, another chance to mend what&apos;s broken. But life has its own timeline, and it doesn&apos;t always wait for us to catch up.
              </Text>
              <Text>
                That&apos;s the cruel beauty of it all, isn&apos;t it? We take people for granted because we believe they&apos;ll always be there. Until they aren&apos;t. And then, we&apos;re left holding onto pieces of them— memories, unsent letters, things we&apos;ll never get the chance to say
              </Text>
              <Text>
                If there&apos;s one thing I&apos;ve learned through this, it&apos;s &quot;Carpe Diem&quot; - seize the day. We need to stop waiting for the perfect moment to express how we feel. Perfection never comes. There&apos;s no ideal conversation, no perfect timing, no faultless apologies or confessions. What we have is now. And in the now, we have the power to say what needs to be said, to show love, to express gratitude, to be vulnerable. Because in the end, it&apos;s not the words we never said that haunt us—it&apos;s the opportunities we didn&apos;t take, the moments we let slip by.
              </Text>
              <Text>
                Seize the day. Because you never really know when it&apos;s your last chance to tell someone how much they mean to you. And if you&apos;re lucky enough to have that moment, don't let it slip away.
              </Text>
            <Text>
                That letter I wrote? It&apos;ll remain undelivered. I&apos;ll never know how she would have reacted, what it might have changed. But that&apos;s okay. What matters now is that it taught me something I wish I&apos;d learned earlier: when you love, when you care, when things matter, don&apos;t hold back. Don&apos;t let the fear of vulnerability or the illusion of time stop you from living fully in the present.
            </Text>
            <Flex flexDir={"column"} gap={"30px"}>
                <Image
                src={"../blogs/letter.png"}
                borderRadius={"7px"}
                objectFit={"cover"}
                alt="that undelivered letter"
               />
              </Flex>
            </Flex>
            <Divider borderColor={"black"} />
            <Text>subscribe to get my write-ups, curated reading lists, book gems, resources, and more.</Text>
            <SignUpFormReact></SignUpFormReact>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}