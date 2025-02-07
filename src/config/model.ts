import { GoogleGenerativeAI} from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Write a script to generate 30 seconds video on topic : Interesting historical story along with AI Image prompt in realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[\n  {\n    \"imagePrompt\": \"Ancient Roman forum, bustling with people in togas, senators debating, merchants selling goods, gladiators practicing in the background, sunny day, realistic, 8K resolution, cinematic lighting.\",\n    \"ContentText\": \"(SCENE START) Narrator: Imagine Rome, 2000 years ago. A bustling city, the heart of an empire. But beneath the grandeur, a peculiar story unfolds...\"\n  },\n  {\n    \"imagePrompt\": \"Close-up of a Roman toilet, a long stone bench with holes, several people sitting and conversing casually, realistic, dimly lit, ancient Roman public lavatory, 8K resolution.\",\n    \"ContentText\": \"Narrator: ... a story centered on a place often overlooked: the public toilet.\"\n  },\n  {\n    \"imagePrompt\": \"Wide shot of the Roman toilet, showing the layout and people using it, with a sewer flowing beneath, light entering from openings in the ceiling. Realistic, ancient Roman public lavatory, 8K resolution, architectural details.\",\n    \"ContentText\": \"Narrator: These weren't just places for necessities. They were social hubs.\"\n  },\n  {\n    \"imagePrompt\": \"Two Roman men sitting next to each other on a public toilet, engaged in a heated debate, gesturing animatedly, realistic, natural lighting, ancient Roman setting, 8K resolution.\",\n    \"ContentText\": \"Narrator: Imagine conducting business deals, discussing politics, even making friends... all while seated next to complete strangers.\"\n  },\n  {\n    \"imagePrompt\": \"Roman man using a sponge on a stick to clean himself in the toilet. Realistic, ancient Roman public lavatory, 8K resolution, showing the ancient hygiene practices.\",\n    \"ContentText\": \"Narrator: And hygiene? Well, let's just say it involved a shared sponge on a stick. (pause for comedic effect)\"\n  },\n  {\n    \"imagePrompt\": \"Ancient Roman mosaic floor with inscriptions and patterns, zoom in on a specific inscription related to a witty remark or quote, realistic, detailed texture, 8K resolution.\",\n    \"ContentText\": \"Narrator: They even left graffiti, witty insults, and philosophical ponderings etched into the walls and floors.\"\n  },\n  {\n    \"imagePrompt\": \"A modern historian studying ancient roman toilet, holding a magnifying glass and taking notes. Realistic, study setting, 8K resolution.\",\n    \"ContentText\": \"Narrator: So next time you visit a restroom, remember the Romans. They turned a basic necessity into a surprisingly social and, well, unforgettable experience. (SCENE END)\"\n  }\n]\n```\n"},
        ],
      },
    ],
  });