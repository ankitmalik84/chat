import { create } from "zustand";
const useConversation = create((set) => ({
  selectedConversation: null,
  // setSelectedConversation: (conversation) => set({selectedConversation: conversation}),
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
