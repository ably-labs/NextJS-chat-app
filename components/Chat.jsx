'use client';

import * as Ably from 'ably';
import { ChatClient } from '@ably/chat';
import { ChatClientProvider, ChatRoomProvider } from '@ably/chat/react';
import ChatBox from './ChatBox.jsx';

const roomOptions = {
  history: { limit: 50 },
};

export default function Chat() {
  const realtimeClient = new Ably.Realtime({ authUrl: '/api' });
  const chatClient = new ChatClient(realtimeClient);

  return (
    <ChatClientProvider client={chatClient}>
      <ChatRoomProvider id="chat-demo" options={roomOptions}>
        <ChatBox />
      </ChatRoomProvider>
    </ChatClientProvider>
  );
}
