'use client';

import { useEffect, useState } from 'react';
import * as Ably from 'ably';
import { ChatClient } from '@ably/chat';
import { ChatClientProvider, ChatRoomProvider } from '@ably/chat/react';
import ChatBox from './ChatBox.jsx';

const roomOptions = {};

export default function Chat() {
  const [chatClient, setChatClient] = useState(null);

  useEffect(() => {
    const realtimeClient = new Ably.Realtime({ authUrl: '/api' });
    const client = new ChatClient(realtimeClient);
    setChatClient(client);
    return () => {
      realtimeClient.close();
    };
  }, []);

  if (!chatClient) return <div>Loading...</div>;

  return (
    <ChatClientProvider client={chatClient}>
      <ChatRoomProvider name="chat-demo" options={roomOptions}>
        <ChatBox />
      </ChatRoomProvider>
    </ChatClientProvider>
  );
}
