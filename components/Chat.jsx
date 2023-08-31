'use client'

import { AblyProvider } from '@ably-labs/react-hooks';
import ChatBox from './ChatBox.jsx'

export default function Chat() {
  return (
    <AblyProvider options={{ authUrl: '/api' }}>
      <ChatBox />
    </AblyProvider>
  )
} 