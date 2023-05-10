import OpenAI from "langchain/chat_models/openai";
import DataberryRetriever from "langchain/retrievers/databerry";
import { RetrievalQAChain, loadQARefineChain } from "langchain/chains";
import Bull from 'bull';

const model = new OpenAI({ temperature: 0,  maxConcurrency: 5, cache: true });
const messageQueue = new Bull('message-queue');

const retriever = new DataberryRetriever({
  host: "https://app.databerry.ai/datastores/clgchaqrg000iji08j56xvt8f",
  apiKey: "9dc7e854-fe45-4271-8316-c8731ea70764",
  indexName: "finance",
}).error((err) => { throw new Error(err) });

const chain = new RetrievalQAChain({
  combineDocumentsChain: loadQARefineChain(model),
  retriever: retriever,
});

messageQueue.process(async (job) => {
  const { message } = job.data;
  console.log(`Processing message: ${message}`);
  
  const response = await chain.call({ question: message });

  const generatedResponse = response.data.choices[0].text;
  console.log(`Generated response: ${generatedResponse}`);
  
  job.return(generatedResponse);
});
