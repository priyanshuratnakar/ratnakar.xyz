import { Flex, Text, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";

const courses = [
  {
    code: "CS221",
    title: "Artificial Intelligence: Principles and Techniques",
    url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOca_Ovz1DvdtWuz8BfSWL2",
    notes: [
      "covers search, game playing, MDPs, constraint satisfaction, and bayesian networks",
      "teaches you to think about AI as optimization — every problem is a search problem at its core",
      "heavy on mathematical foundations: probability, logic, and utility theory",
      "builds intuition for when to use which AI technique in real-world scenarios",
      "prerequisite for most other Stanford AI courses",
    ],
  },
  {
    code: "CS229",
    title: "Machine Learning",
    subtitle: "by Andrew Ng",
    url: "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU",
    notes: [
      "the gold standard ML course — most people who learned ML properly have taken this",
      "covers supervised learning, unsupervised learning, and reinforcement learning from scratch",
      "Andrew Ng's teaching style is unusually clear — he builds intuition before equations",
      "assignments are in MATLAB/Octave but the concepts transfer to any language",
      "if you only take one ML course, this is the one",
    ],
  },
  {
    code: "CS229M",
    title: "Machine Learning Theory",
    url: "https://www.youtube.com/playlist?list=PLoROMvodv4rP8nAmISxFINlGKSK4rbLKh",
    notes: [
      "the 'why does ML actually work' course — goes deep into generalization and learnability",
      "covers PAC learning, VC dimension, rademacher complexity, and statistical learning theory",
      "more mathematical than CS229 — expect real analysis and measure theory",
      "good for understanding why your model overfits and how to reason about it rigorously",
      "recommended after CS229, not as a starting point",
    ],
  },
  {
    code: "CS230",
    title: "Deep Learning",
    subtitle: "2025, by Andrew Ng",
    url: "https://www.youtube.com/playlist?list=PLoROMvodv4rNRRGdS0rBbXOUGA0wjdh1X",
    notes: [
      "covers CNNs, RNNs, hyperparameter tuning, batch norm, and practical advice",
      "Andrew Ng focuses on practitioner intuition — how to actually get models to work",
      "includes a strong section on structuring ML projects, which most courses skip",
      "pairs well with fast.ai for hands-on implementation",
      "the 2025 edition includes updated material on modern deep learning practices",
    ],
  },
  {
    code: "CS234",
    title: "Reinforcement Learning",
    subtitle: "2024",
    url: "https://www.youtube.com/playlist?list=PLoROMvodv4rN4wG6Nk6sNpTEbuOSosZdX",
    notes: [
      "covers MDPs, Q-learning, policy gradients, actor-critic methods, and model-based RL",
      "bridges the gap between theoretical RL and modern deep RL (like what powers ChatGPT's RLHF)",
      "assignments use OpenAI Gym — you actually train agents, not just read about them",
      "prerequisite: solid understanding of probability and linear algebra",
      "good foundation if you want to understand how LLMs are fine-tuned with human feedback",
    ],
  },
  {
    code: "CS224U",
    title: "Natural Language Understanding",
    url: "https://www.youtube.com/playlist?list=PLoROMvodv4rPt5D0zs3YhbWSZA8Q_DyiJ",
    notes: [
      "covers NLU tasks: textual entailment, sentiment analysis, question answering, and grounding",
      "more semantics-focused than CS224N — asks 'does the model actually understand language?'",
      "includes a strong section on evaluation methodology and benchmarks",
      "Chris Potts brings a linguistics perspective that most ML courses completely ignore",
      "great complement to CS224N if you want both the engineering and the language science side",
    ],
  },
  {
    code: "CS224N",
    title: "Deep Learning for NLP",
    subtitle: "2024",
    url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D",
    notes: [
      "covers word vectors, attention, transformers, pretraining, and prompting",
      "the course that traces the arc from word2vec all the way to modern LLMs",
      "assignments are hands-on — you implement transformers and fine-tune BERT",
      "2024 edition has updated content on instruction tuning and RLHF",
      "if you want to understand how GPT and Claude work, start here",
    ],
  },
  {
    code: "CME295",
    title: "Transformers and Large Language Models",
    subtitle: "2025",
    url: "https://www.youtube.com/playlist?list=PLoROMvodv4rObv1FMizXqumgVVdzX4_05",
    notes: [
      "deep dive into the transformer architecture — attention, positional encoding, and scaling",
      "covers pretraining, fine-tuning, RLHF, and inference-time compute",
      "more focused on the systems and engineering side than CS224N",
      "2025 edition includes content on reasoning models and long-context techniques",
      "recommended if you want to go from using LLMs to actually building and training them",
    ],
  },
  {
    code: "CS236",
    title: "Deep Generative Models",
    subtitle: "2023",
    url: "https://www.youtube.com/playlist?list=PLoROMvodv4rPOWA-omMM6STXaWW4FvJT8",
    notes: [
      "covers VAEs, GANs, normalizing flows, diffusion models, and energy-based models",
      "the theoretical backbone behind Stable Diffusion, DALL-E, and similar systems",
      "explains the math of 'how do you train a model to generate images from noise'",
      "Stefan Ermon's lectures are dense but rewarding — expect to rewatch",
      "good entry point if you're curious about the generative AI wave at a deeper level",
    ],
  },
  {
    code: "CS336",
    title: "Language Modeling from Scratch",
    subtitle: "2025",
    url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOY23Y0BoGoBGgQ1zmU_MT_",
    notes: [
      "you literally build a language model from scratch — tokenization, architecture, training loop",
      "covers data curation, scaling laws, and distributed training",
      "the most hands-on LLM course Stanford offers — closer to an engineering course than a theory one",
      "2025 edition is up to date with current frontier model techniques",
      "if you want to understand what it takes to actually train an LLM, this is the one",
    ],
  },
];

export default function LearnAIStanford() {
  return (
    <>
      <Head>
        <title>Stanford&apos;s Free AI and ML Courses | ratnakar</title>
        <meta
          name="description"
          content="56 lectures covering AI principles, techniques, history, and applications. All free."
        />
        <meta property="og:title" content="Stanford's Free AI and ML Courses" />
        <meta
          property="og:description"
          content="56 lectures covering AI principles, techniques, history, and applications. All free."
        />
        <meta property="og:type" content="article" />
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
            <Flex flexDir={"column"} gap={"20px"}>
              <Text
                color={"black"}
                fontSize={["21px", "21px", "24px"]}
                lineHeight={"32px"}
                fontWeight={"500"}
                opacity={"100%"}
              >
                Stanford&apos;s Free AI and ML Courses
              </Text>
              <Text
                fontSize={["14px", "14px", "16px"]}
                lineHeight={"28px"}
                opacity={"75%"}
              >
                56 lectures covering AI principles, techniques, history, and
                applications. for free.
              </Text>
              <Divider borderColor={"black"} />
            </Flex>

            <Flex flexDir={"column"} gap={"40px"}>
              {courses.map((course, i) => (
                <Flex key={course.code} flexDir={"column"} gap={"12px"}>
                  <Flex flexDir={"column"} gap={"4px"}>
                    <Text
                      fontSize={["12px", "12px", "13px"]}
                      opacity={"50%"}
                      fontWeight={"500"}
                      letterSpacing={"0.04em"}
                    >
                      {String(i + 1).padStart(2, "0")} — {course.code}
                    </Text>
                    <Text
                      fontSize={["17px", "17px", "20px"]}
                      fontWeight={"500"}
                      lineHeight={"28px"}
                    >
                      <a
                        className={"project"}
                        href={course.url}
                        target={"_blank"}
                        rel={"noreferrer"}
                        style={{ color: "#005B99" }}
                      >
                        {course.title}
                      </a>
                      {course.subtitle && (
                        <Text
                          as={"span"}
                          fontSize={["13px", "13px", "14px"]}
                          fontWeight={"400"}
                          opacity={"60%"}
                          ml={"8px"}
                        >
                          {course.subtitle}
                        </Text>
                      )}
                    </Text>
                  </Flex>
                  <Flex flexDir={"column"} gap={"6px"} pl={"2px"}>
                    {course.notes.map((note, j) => (
                      <Text
                        key={j}
                        fontSize={["13px", "13px", "14px"]}
                        lineHeight={"24px"}
                        opacity={"70%"}
                      >
                        — {note}
                      </Text>
                    ))}
                  </Flex>
                  {i < courses.length - 1 && (
                    <Divider borderColor={"#E2E2DC"} mt={"8px"} />
                  )}
                </Flex>
              ))}
            </Flex>

            <Divider borderColor={"black"} />
            <Text
              fontSize={["13px", "13px", "14px"]}
              opacity={"60%"}
              lineHeight={"24px"}
            >
              all courses are free on youtube. no paywalls, no sign-ups.
            </Text>
          </Flex>
        </motion.div>
      </Flex>
    </>
  );
}
