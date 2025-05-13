import type { MessageState } from "~/types";

export const useChats = () => {
  const messages = useState<MessageState[]>("messages", () => []);
  const addMessage = (newMessage: MessageState) => {
    messages.value = [
      ...messages.value,
      {
        ...newMessage,
        id: Date.now(),
        createdAt: new Date(),
      },
    ];
    if (newMessage.isUser) {
      // todo: ai
    }
  };
  const clearMessages = () => {
    messages.value = [];
  };
  return {
    messages: readonly(messages),
    addMessage,
    clearMessages,
  };
};
