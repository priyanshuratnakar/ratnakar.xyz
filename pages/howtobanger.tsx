import { Flex, Text, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function HowtoBanger() {
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
          {/* Header */}
          <Flex flexDir={"column"} gap={"16px"}>
            <Text
              color={"black"}
              fontWeight={"600"}
              fontSize={["24px", "24px", "28px"]}
              lineHeight={"1.2"}
            >
              how to write banger tweets
            </Text>
            <Text
              fontSize={["13px", "13px", "14px"]}
              opacity={"60%"}
              fontStyle={"italic"}
            >
              the complete playbook — hooks, narrative, viral emotions
            </Text>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Intro */}
          <Flex
            flexDir={"column"}
            gap={"20px"}
            fontSize={["14px", "14px", "16px"]}
            lineHeight={"28px"}
            fontWeight={"normal"}
            opacity={"95%"}
          >
            <Text>
              x&apos;s algorithm exists to keep people on the app longer. if
              your content captures attention, holds it, and makes people share
              — x will push it to as many people as possible.
            </Text>
            <Text>
              you&apos;re not fighting the algorithm. you&apos;re working with
              it.
            </Text>
            <Text>every viral thread follows the same formula:</Text>
            <Flex
              bg={"#F0EDE8"}
              borderRadius={"8px"}
              p={"18px 20px"}
              flexDir={"column"}
              gap={"4px"}
            >
              <Text fontWeight={"500"} fontSize={["14px", "14px", "15px"]}>
                scroll-stopping hook + engaging narrative + viral emotion =
                banger
              </Text>
              <Text fontSize={"13px"} opacity={"60%"}>
                nail all three and you have something people can&apos;t scroll
                past
              </Text>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Part 1: The Hook */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Flex flexDir={"column"} gap={"6px"}>
              <Text fontSize={"12px"} opacity={"45%"} fontWeight={"500"} letterSpacing={"0.08em"}>
                01
              </Text>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
              >
                the hook — where 80% of your impact lives
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text>
                same exact content with a better hook took one thread from{" "}
                <span style={{ fontWeight: "500" }}>
                  63 retweets → 1,100 retweets.
                </span>{" "}
                the difference was just 4% more clicks. tiny gap. massive
                outcome.
              </Text>
              <Text>
                less than 3% of people will click past your first line. your
                only job is to get that number higher.
              </Text>

              <Flex flexDir={"column"} gap={"24px"} mt={"4px"}>
                <Flex flexDir={"column"} gap={"8px"}>
                  <Text fontWeight={"500"} fontSize={"16px"}>
                    leverage authority & credibility
                  </Text>
                  <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                    don&apos;t say &ldquo;a negotiation tactic you can use.&rdquo;
                    say &ldquo;steve jobs used this $1 trick to sell 40 million
                    ipads.&rdquo; you&apos;re borrowing the weight of a known
                    name to make a common concept sound like a game-changing
                    secret. that thread got 3,500 rts in 48 hours.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"8px"}>
                  <Text fontWeight={"500"} fontSize={"16px"}>
                    use specific numbers & bold claims
                  </Text>
                  <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                    &ldquo;20 cool concepts i learnt as a founder&rdquo; is lazy.
                    &ldquo;18 startup mental models that helped me sell my startup
                    to a $50B company&rdquo; is killer. odd specific numbers feel
                    real. round numbers feel made up.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"8px"}>
                  <Text fontWeight={"500"} fontSize={"16px"}>
                    promise personal stakes
                  </Text>
                  <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                    &ldquo;here&apos;s what it means for YOUR health&rdquo; turns
                    a random fact into something the reader cares about personally.
                    make them the protagonist. when the stakes feel personal,
                    clicking becomes involuntary.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"8px"}>
                  <Text fontWeight={"500"} fontSize={"16px"}>
                    create a curiosity gap
                  </Text>
                  <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                    hint at something surprising without revealing the answer.
                    force readers to click to close the loop. the best hooks
                    don&apos;t answer anything — they just make it impossible
                    not to ask the question.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"8px"}>
                  <Text fontWeight={"500"} fontSize={"16px"}>
                    add a visual or thumbnail
                  </Text>
                  <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                    images are processed faster than text. a striking thumbnail
                    stops the scroll before your words even register. one
                    well-chosen image can drive nearly{" "}
                    <span style={{ fontWeight: "500" }}>5x the average CTR.</span>
                  </Text>
                </Flex>
              </Flex>

              <Flex
                borderLeft={"3px solid #2E353F"}
                pl={"16px"}
                mt={"4px"}
                flexDir={"column"}
                gap={"6px"}
              >
                <Text fontWeight={"600"} fontSize={"14px"}>
                  the ritual
                </Text>
                <Text fontSize={"14px"} lineHeight={"26px"} opacity={"80%"}>
                  rewrite your hook 20 times. not 3, not 5 — twenty. when you
                  &ldquo;kinda&rdquo; like one, that&apos;s your winner. this
                  is the single most important habit you can build.
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Part 2: The Narrative */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Flex flexDir={"column"} gap={"6px"}>
              <Text fontSize={"12px"} opacity={"45%"} fontWeight={"500"} letterSpacing={"0.08em"}>
                02
              </Text>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
              >
                the narrative — why people stay
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text>
                the hook is the cover of the book. the narrative is why they
                keep reading. the way you tell a story is{" "}
                <span style={{ fontWeight: "500" }}>100x more important</span>{" "}
                than the moral of the story.
              </Text>

              <Flex flexDir={"column"} gap={"24px"} mt={"4px"}>
                <Flex flexDir={"column"} gap={"8px"}>
                  <Text fontWeight={"500"} fontSize={"16px"}>
                    wrap lists inside a story
                  </Text>
                  <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                    someone posted a plain list of useful startup tools — 23
                    retweets. same tools reframed as &ldquo;how to kickstart your
                    startup in 15 days&rdquo; with a step-by-step breakdown got{" "}
                    <span style={{ fontWeight: "500" }}>
                      1,800 rts and 8,200 likes in 24 hours.
                    </span>{" "}
                    content was 95% the same. narrative made it feel 10x more
                    valuable.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"8px"}>
                  <Text fontWeight={"500"} fontSize={"16px"}>
                    make the reader go on a journey
                  </Text>
                  <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                    don&apos;t present information. create a progression. show a
                    timeline. build toward a conclusion. the best threads read
                    like a documentary, not a textbook. escalate.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"8px"}>
                  <Text fontWeight={"500"} fontSize={"16px"}>
                    use unexpected angles
                  </Text>
                  <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                    shaan puri&apos;s thread on why clubhouse would fail got
                    5,000+ rts and 50k new followers in a week. because the
                    framing was so creative, forbes wrote about the thread.
                    unique lens drives external coverage.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"8px"}>
                  <Text fontWeight={"500"} fontSize={"16px"}>
                    tweet 1 must stand alone
                  </Text>
                  <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                    the thread is a bonus, not a crutch. if tweet 1
                    doesn&apos;t work by itself, nothing downstream saves it.
                    trailers sell tickets. write tweet 1 last.
                  </Text>
                </Flex>
              </Flex>

              <Flex
                borderLeft={"3px solid #2E353F"}
                pl={"16px"}
                mt={"4px"}
                flexDir={"column"}
                gap={"6px"}
              >
                <Text fontWeight={"600"} fontSize={"14px"}>
                  the ritual
                </Text>
                <Text fontSize={"14px"} lineHeight={"26px"} opacity={"80%"}>
                  before you write a single word, outline the entire thread as
                  bullet points. then ask — is this interesting enough? if not,
                  reframe. only start writing once the structure genuinely
                  excites you.
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Part 3: Viral Emotions */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Flex flexDir={"column"} gap={"6px"}>
              <Text fontSize={"12px"} opacity={"45%"} fontWeight={"500"} letterSpacing={"0.08em"}>
                03
              </Text>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
              >
                viral emotions — why people hit share
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text>
                without a strong emotion, people might enjoy your content but
                they won&apos;t share it. sharing is an{" "}
                <span style={{ fontWeight: "500" }}>emotional act</span>, not a
                rational one.
              </Text>
              <Text>
                every piece of viral content triggers one of these seven:
              </Text>

              <Flex flexDir={"column"} gap={"16px"} mt={"4px"}>
                <Flex flexDir={"column"} gap={"4px"}>
                  <Text fontWeight={"600"} fontSize={"15px"}>
                    LOL
                  </Text>
                  <Text fontSize={"14px"} lineHeight={"26px"} opacity={"80%"}>
                    &ldquo;this is hilarious, my friends need to see this.&rdquo;
                    comedy and absurdity make people tag others instinctively.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"4px"}>
                  <Text fontWeight={"600"} fontSize={"15px"}>
                    WTF
                  </Text>
                  <Text fontSize={"14px"} lineHeight={"26px"} opacity={"80%"}>
                    &ldquo;this is outrageous, unjust, or unbelievable.&rdquo;
                    righteous anger gets more retweets than almost anything.
                    same facts framed with anger can generate{" "}
                    <span style={{ fontWeight: "500" }}>2.5x the impressions</span>{" "}
                    of a comedy take.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"4px"}>
                  <Text fontWeight={"600"} fontSize={"15px"}>
                    AWW
                  </Text>
                  <Text fontSize={"14px"} lineHeight={"26px"} opacity={"80%"}>
                    &ldquo;this is so wholesome or adorable.&rdquo; cat videos,
                    heartwarming stories, feel-good moments. the cuteness reflex
                    drives massive sharing.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"4px"}>
                  <Text fontWeight={"600"} fontSize={"15px"}>
                    OHHHH
                  </Text>
                  <Text fontSize={"14px"} lineHeight={"26px"} opacity={"80%"}>
                    &ldquo;i finally understand this now.&rdquo; the lightbulb
                    moment. people share it because they want others to have the
                    same aha moment.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"4px"}>
                  <Text fontWeight={"600"} fontSize={"15px"}>
                    WOW
                  </Text>
                  <Text fontSize={"14px"} lineHeight={"26px"} opacity={"80%"}>
                    &ldquo;this is incredibly useful information.&rdquo;
                    high-utility content gets bookmarked, saved, and shared
                    because it feels like a gift.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"4px"}>
                  <Text fontWeight={"600"} fontSize={"15px"}>
                    YAYY
                  </Text>
                  <Text fontSize={"14px"} lineHeight={"26px"} opacity={"80%"}>
                    &ldquo;this is amazing news.&rdquo; people share in
                    celebration. the most social of all the emotions.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"4px"}>
                  <Text fontWeight={"600"} fontSize={"15px"}>
                    FINALLY
                  </Text>
                  <Text fontSize={"14px"} lineHeight={"26px"} opacity={"80%"}>
                    &ldquo;someone finally said what we&apos;re all thinking.&rdquo;
                    when you articulate something people feel but have never put
                    into words, they share it as validation. become the voice
                    people were waiting for.
                  </Text>
                </Flex>
              </Flex>

              <Flex
                borderLeft={"3px solid #2E353F"}
                pl={"16px"}
                mt={"4px"}
                flexDir={"column"}
                gap={"6px"}
              >
                <Text fontWeight={"600"} fontSize={"14px"}>
                  the ritual
                </Text>
                <Text fontSize={"14px"} lineHeight={"26px"} opacity={"80%"}>
                  before writing anything, write your target emotion at the top
                  of the page. every line you write should be in service of
                  hitting that emotion. if a sentence doesn&apos;t contribute to
                  the emotional payload, cut it.
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Part 4: Distribution */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Flex flexDir={"column"} gap={"6px"}>
              <Text fontSize={"12px"} opacity={"45%"} fontWeight={"500"} letterSpacing={"0.08em"}>
                04
              </Text>
              <Text
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"28px"}
                fontWeight={"500"}
              >
                distribution — engineering the spread
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text>
                great content at the wrong time is invisible. great content
                aimed at the wrong people doesn&apos;t spread.
              </Text>

              <Flex flexDir={"column"} gap={"24px"} mt={"4px"}>
                <Flex flexDir={"column"} gap={"8px"}>
                  <Text fontWeight={"500"} fontSize={"16px"}>
                    the timing window
                  </Text>
                  <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                    6–12 hours after a major event is the sweet spot. too early
                    = noise. too late = old news. post when your audience needs
                    someone to articulate what they already felt.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"8px"}>
                  <Text fontWeight={"500"} fontSize={"16px"}>
                    write for an amplifier
                  </Text>
                  <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                    before you post, identify the kind of account that would rt
                    this. policy folks amplify systemic critiques. tech folks
                    amplify irony. VCs amplify hot takes. write for that profile.
                    one rt from the right account changes everything.
                  </Text>
                </Flex>

                <Flex flexDir={"column"} gap={"8px"}>
                  <Text fontWeight={"500"} fontSize={"16px"}>
                    the anticipation hook
                  </Text>
                  <Text fontSize={"15px"} lineHeight={"26px"} opacity={"90%"}>
                    &ldquo;i&apos;m tired of pretending...&rdquo; or
                    &ldquo;nobody is talking about this...&rdquo; — these signal
                    that a controversial truth is coming. they create a promise
                    readers feel compelled to follow.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Putting it all together */}
          <Flex gap={"30px"} flexDir={"column"}>
            <Text
              fontSize={["21px", "21px", "24px"]}
              lineHeight={"28px"}
              fontWeight={"500"}
            >
              putting it all together
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
                the content matters. but the packaging is what determines
                whether 100 people see it or 10 million do.
              </Text>
              <Text>
                a 4% improvement in click-through rate is the difference between
                irrelevance and virality. treat every tweet like it deserves
                that level of craft.
              </Text>

              <Flex
                bg={"#F0EDE8"}
                borderRadius={"8px"}
                p={"18px 20px"}
                flexDir={"column"}
                gap={"14px"}
                mt={"4px"}
              >
                <Text fontWeight={"600"} fontSize={"14px"}>
                  3 rituals before you hit post
                </Text>
                <Flex flexDir={"column"} gap={"10px"}>
                  <Text fontSize={"14px"} lineHeight={"26px"} opacity={"85%"}>
                    <span style={{ fontWeight: "500" }}>①</span>{" "}
                    rewrite your hook 20 times. pick the one that makes YOU want
                    to click.
                  </Text>
                  <Text fontSize={"14px"} lineHeight={"26px"} opacity={"85%"}>
                    <span style={{ fontWeight: "500" }}>②</span>{" "}
                    outline the full thread as bullets. ask: &ldquo;would i
                    share this?&rdquo; reframe until yes.
                  </Text>
                  <Text fontSize={"14px"} lineHeight={"26px"} opacity={"85%"}>
                    <span style={{ fontWeight: "500" }}>③</span>{" "}
                    write the target emotion at the top of your page. write
                    every line to hit that emotion.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Note on originality */}
          <Flex gap={"20px"} flexDir={"column"}>
            <Flex
              flexDir={"column"}
              gap={"20px"}
              fontSize={["14px", "14px", "16px"]}
              lineHeight={"28px"}
              fontWeight={"normal"}
              opacity={"95%"}
            >
              <Text>
                we think good content has to teach something new.
              </Text>
              <Text>
                most of the time, it just needs to remind us of what we already
                know. we need reminders more than we need to be taught.
              </Text>
              <Text>
                take that viral post, video, or article you loved — package it
                with your story and your opinion.
              </Text>
              <Text fontWeight={"500"}>
                bangers are engineered, not accidental.
              </Text>
            </Flex>
          </Flex>

          <Divider borderColor={"black"} />

          {/* Footer */}
          <Flex flexDir={"column"} gap={"20px"}>
            <Text fontSize={"14px"} opacity={"75%"}>
              by{" "}
              <a
                href="https://twitter.com/0xratnakar"
                style={{ color: "#005B99" }}
                target={"_blank"}
                rel={"noreferrer"}
              >
                @0xratnakar
              </a>{" "}
              /{" "}
              <a
                href="https://www.ratnakar.xyz"
                style={{ color: "#005B99" }}
                target={"_blank"}
                rel={"noreferrer"}
              >
                ratnakar.xyz
              </a>
            </Text>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
