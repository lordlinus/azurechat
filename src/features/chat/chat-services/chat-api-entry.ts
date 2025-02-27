import { ChatAPIData } from "./chat-api-data";
import { ChatAPISimple } from "./chat-api-simple";
import { ChatAPIPromptFlow } from  "./chat-api-pf"
import { PromptGPTProps } from "./models";

export const chatAPIEntry = async (props: PromptGPTProps) => {
  if (props.chatType === "simple") {
    return await ChatAPISimple(props);
  } else if (props.chatType === "data") {
    return await ChatAPIData(props);
  } else if (props.chatType === "mssql") {
    return await ChatAPIData(props);
  } else if (props.chatType === "promptflow") {
    return await ChatAPIPromptFlow(props);
  } else {
    return await ChatAPISimple(props);
  }
};
