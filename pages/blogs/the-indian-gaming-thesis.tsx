import { Flex, Text, Divider, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SignUpFormReact from "../newsletter";

export default function GamingThesis() {
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
            <Image
              src={"https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-fa70-61f7-8ded-063c1080335c/raw?se=2025-04-15T13%3A53%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=aabaca27-db43-5642-bdf8-1961d90bf11f&skoid=dfdaf859-26f6-4fed-affc-1befb5ac1ac2&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-14T22%3A43%3A38Z&ske=2025-04-15T22%3A43%3A38Z&sks=b&skv=2024-08-04&sig=vLnHHl0pSXtFHvuKlqs8EV66ywwfZye0gacMOkFtaWY%3D"}
              alt={"hero"}
              h={["130px", "130px", "196px"]}
              borderRadius={"7px"}
              objectFit={"cover"}
            />
              <Text
                color={"black"}
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
                opacity={"100%"}
              >
                The Indian Gaming Thesis: Why Now is the Time
              </Text>
              <Text opacity={"75%"}>
                published on Apr 15, 2025
              </Text>
              <Divider borderColor={"black"} />
              <Text>
                <a href="https://x.com/waitin4agi_" style={{ color: '#005B99' }}>Varun Mayya</a> just announced his <a href="https://x.com/Project_11A" style={{ color: '#005B99' }}>Project 11A</a>, a AAA-quality game built from scratch in India. It's visually stunning, technically ambitious, and narratively rooted in Indian landscapes. From scanning assets on the ground to crafting immersive worlds, it's a rare full-stack attempt at a truly Indian game.
              </Text>
              <Text>
                But here's the thing - it's not the first time we've built something beautiful.
              </Text>
              <Text>
                We had <a href="https://rajithegame.com/" style={{ color: '#005B99' }}>Raji: An Ancient Epic</a>, a mythology inspired adventure that was nominated for best debut game at <a href="https://en.wikipedia.org/wiki/The_Game_Awards_2020" style={{ color: '#005B99' }}>The Game Awards 2020</a> but lost to <a href="https://store.steampowered.com/app/739630/Phasmophobia/" style={{ color: '#005B99' }}>Phasmophobia</a> and this was the first time that an Indian game had been nominated for an award at that show. Studios like <a href="https://en.wikipedia.org/wiki/Dhruva_Interactive" style={{ color: '#005B99' }}>Dhruva Intractive</a> (acquired by Rockstar), <a href="https://99games.in/" style={{ color: '#005B99' }}>99Games</a>, and <a href="https://www.nazara.com/" style={{ color: '#005B99' }}>Nazara Technologies</a> have existed for years.
              </Text>
              <Text>
                So what makes Project 11A different?
              </Text>
              <Text>
                It's not just what they built - it's how they built it. with vision, with intent, and with a playbook India hasn't seen much of before.
              </Text>

              <Text fontSize={["21px", "21px", "24px"]} fontWeight={"500"}>
                Inspiration from the East
              </Text>
              <Text>
                I wouldn't be surprised if <a href="https://en.wikipedia.org/wiki/Black_Myth:_Wukong" style={{ color: '#005B99' }}>Black Myth: Wukong</a> was one of Varun's inspirations. That game is a love letter to Chinese mythology with next gen graphics and storytelling, built by a Chinese indie studio. If China can mythologize the Journey to the West in <a href="https://www.unrealengine.com/en-US/unreal-engine-5" style={{ color: '#005B99'}}>Unreal Engine 5</a>, why can't India do the same with the <a href="https://en.wikipedia.org/wiki/Mahabharata" style={{ color: '#005B99' }}>Mahabharata</a>?
              </Text>
              <Text>
                The best part? We don’t need to invent fictional worlds. Our myths and epics are rich, layered, and expansive. <a href="https://en.wikipedia.org/wiki/Ramayana" style={{ color: '#005B99' }}>Ramayan</a>, <a href="https://en.wikipedia.org/wiki/Mahabharata" style={{ color: '#005B99' }}>Mahabharata</a>, <a href="https://en.wikipedia.org/wiki/Shiva_Purana"style={{ color: '#005B99'}}>Shiv Puran</a>, <a href="https://en.wikipedia.org/wiki/Tenali_Rama" style={{ color: '#005B99'}}>Tenali Rama</a> theres centuries of content waiting to be visualized in pixels.
              </Text>
              <Text>
                And if we do mix fantasy with fiction? That’s a winning combo. Think of what Marvel did with Norse mythology. Why can't India build its own gaming multiverse?
              </Text>

              <Text fontSize={["21px", "21px", "24px"]} fontWeight={"500"}>
                An idea
              </Text>
              <Text>
                Imagine a game called <b>Call of Devta</b> - an epic inspired action RPG where each god is a superhero. Every character has a weapon and power unique to their story:
              </Text>
              <Text>
                • Lord Shiva with his Trishula and his third eye<br />
                • Lord Vishnu with the Sudarshana Chakra<br />
                • Hanuman Ji with his Gada and insane agility
              </Text>
              <Text>
                Pick your Devta. Unlock their power. Defeat Ashuras. Choose your strategies. Form your divine squad. This is not just fan fiction. This could genuinely be a compelling, global IP if done right.
              </Text>
              <Text>
                Japan gave us anime. South Korea gave us K-pop. Why can't India do the same with games?
              </Text>
              <Text>
                At one point, the US and Japan were enemies. Fast forward to today, and global youth proudly wear <a href="https://en.wikipedia.org/wiki/Naruto_(TV_series)" style={{ color: '#005B99' }}>Naruto merch </a>and worship <a href="https://en.wikipedia.org/wiki/Hayao_Miyazaki" style={{ color: '#005B99' }}>Miyazaki</a> films . Culture transcends borders if the medium is strong enough.
              </Text>

              <Text fontSize={["21px", "21px", "24px"]} fontWeight={"500"}>
                But It Can Backfire
              </Text>
              <Text>
                India is a deeply emotional and politically sensitive country.
              </Text>
              <Text>
                If someone builds a mythology-based game, one small error - a wrong depiction, an over exaggeration, a misunderstood mechanic can lead to political outrage, bans, or worse. Studios could be shut down over an artistic interpretation.
              </Text>
              <Text>
                So the approach here has to be: respect + creativity. Get the historians, the mythologists, the storytellers involved. Build responsibly.
              </Text>

              <Text fontSize={["21px", "21px", "24px"]} fontWeight={"500"}>
                The current playstate
              </Text>
              <Text>
                I grew up pirating games. Burned CDs from nearby shop, cracked versions of <a href="https://en.wikipedia.org/wiki/Max_Payne" style={{ color: '#005B99' }}>Max Payne</a>, and torrents of <a href="https://en.wikipedia.org/wiki/Counter-Strike" style={{ color: '#005B99' }}>Counter-Strike</a>. Not because I wanted to, but because I had no access.
              </Text>
              <Text>
                Now? I have a full PS collection. I've spent thousands on games. I buy them proudly digitally, collect discs which I like. I want developers to win.
              </Text>
              <Flex flexDir={"column"} gap={"30px"}>
              <Image
                src="https://i.imgur.com/jFmUzC0.png"
                borderRadius="7px"
                objectFit="cover"
                alt="playstation 5 and games"
                width="600px"
                height="400px"
              />
              </Flex>
              <Text>
                Piracy will still exist, but it’s nowhere near what it used to be.
              </Text>
              <Text>
                Fast forward to today:
              </Text>
              <Text>
                • Kids from Tier-2 and Tier-3 towns are buying <a href="https://en.wikipedia.org/wiki/PUBG:_Battlegrounds" style={{ color: '#005B99' }}>PUBG skins</a> with UPI.<br />
                • Smartphones are in nearly every hand.<br />
                • India has over <strong>480 million</strong> mobile gamers.<br />
                • The average Indian mobile gamer plays <strong>20+ hours a month</strong>.<br />
                • Platforms like Steam, Xbox, and PlayStation are now common knowledge.
              </Text>
              <Text>
                Gaming is no longer a luxury hobby. It’s a cultural layer.
              </Text>

              <Text fontSize={["21px", "21px", "24px"]} fontWeight={"500"}>
                Lockdown Was Gaming’s Catalyst
              </Text>
              <Text>
                The COVID-19 lockdown was a turning point. People were stuck at home — and gaming filled the void.
              </Text>
              <Text>
                This was the PUBG arc. Every teenager wanted to be a streamer. We saw the meteoric rise of creators like: Mortal, Scout, BeastBoyShub and more.
              </Text>
              <Text>
                Streaming made gaming aspirational. The phone became a console. And mobile gaming became a lifestyle. Between 2017–2020. By 2025, we’re projected to have over 650M gamers in India.
              </Text>

              <Image
                src="https://files09.oaiusercontent.com/file-D7MzbxPPdLZ6rXSc5NGu32?se=2025-04-15T13%3A28%3A00Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Doutput.png&sig=ZMLgsdscZ8pguOzx11T5GNRkAaQPylSIYskx6VRxy/I%3D"
                borderRadius="7px"
                objectFit="cover"
                alt="gamer's data"
              />

              <Text fontSize={["21px", "21px", "24px"]} fontWeight={"500"}>
                The VC Thesis for Indian Gaming
              </Text>
              <Text>
                If I were a VC in India, I'd stop sleeping on this space. India saw over 250+ gaming companies launched.
              </Text>
              <Image
                src="https://files09.oaiusercontent.com/file-HYgC8GmpP7pFJXPjrnSrYA?se=2025-04-15T13%3A43%3A43Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D8cffcfb9-44cf-45da-b6a2-12cd502f8744&sig=hUJMt0rcs8aX6v2zyuiEDJ7Wnr4zAtoidc122OFFiQU%3D"
                borderRadius="7px"
                objectFit="cover"
                alt="game company data"
              />
              <Text>
                India will produce globally successful, culturally rooted, genre-defining games. Studios that blend mythology, design, and ambition will emerge as category creators.
              </Text>
              <Text>
                Here's what I'd do today:
              </Text>
              <Text>
                • Earmark a $5–10M gaming seed fund<br />
                • Launch a gaming-first accelerator with global mentors<br />
                • Partner with Unreal, Unity, and YouTube Gaming<br />
                • Back full-stack builders, not just hypercasual devs<br />
                • Push original IPs and long-form development cycles
              </Text>
              <Text>
                And above all: <strong>think long-term</strong>. Building a game is not a 6-month sprint, it's a 3–5 year journey.
              </Text>

              <Text fontSize={["21px", "21px", "24px"]} fontWeight={"500"}>
                What India Needs Now
              </Text>
              <Text>
                If you had told me in 2010 that India would lead the world in digital payments by 2025, I'd have laughed. But here we are. UPI is embedded into our lives. We can order groceries in 10 minutes. Tech adoption is not our issue.
              </Text>
              <Text>
                The issue is <em>fun money</em>. The issue is <em>support</em>. The issue is <em>belief</em>.
              </Text>
              <Text>
                We don’t lack talent. We lack conviction from the people who hold capital.
              </Text>
              <Text>
                Here’s what India needs now:
              </Text>
              <Text>
                • <strong>Conviction</strong> : from both founders and investors.<br />
                • <strong>Infrastructure</strong> : cloud, tooling, and education.<br />
                • <strong>Protection</strong> : against premature outrage and cultural bans.<br />
                • <strong>Patience</strong> : because the best games take time.
              </Text>
              <Text>
                let’s not let it fizzle out. let’s back more studios. let’s tell our stories. let’s build India’s <a href="https://www.blizzard.com/en-gb/" style={{ color: '#005B99' }}>Blizzard</a>, <a href="https://www.fromsoftware.jp/ww/" style={{ color: '#005B99' }}>FromSoftware</a>, or <a href="https://www.naughtydog.com/" style={{ color: '#005B99' }}>Naughty Dog</a>.
              </Text>
            </Flex>
            <Divider borderColor={"black"} />
            <Text>
              subscribe to get my write-ups, curated reading lists, book gems, resources, and more.
            </Text>
            <SignUpFormReact />
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
