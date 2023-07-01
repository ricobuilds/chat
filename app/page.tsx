'use client'

import { Attribution } from '@/components/attribution';
import { useChat } from 'ai/react'
import { useRef, useEffect, Fragment } from 'react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Fragment>
      <div className="flex flex-col w-full max-w-md gap-6 pt-24 mx-auto mb-24 stretch">
        {messages.length > 0
          ? messages.map(m => (
            <div key={m.id} className={`flex flex-col gap-y-1 ${m.role === 'assistant' ? 'ml-4' : 'mr-4 self-end'}`}>
              <div className={`w-fit text-sm text-obsidian-400 ${m.role === 'user' ? 'mr-2.5 ml-auto' : 'ml-2.5'}`}>{m.role === 'user' ? 'User' : 'AI Assistant'}</div>
              <div className={`whitespace-pre-wrap rounded ${m.role === 'assistant' ? 'bg-onyx p-2 max-w-md w-fit' : 'bg-amethyst-500 text-onyx max-w-sm p-2 self-end'}`}>

                {m.content}
              </div>
              <div ref={endOfMessagesRef} />
            </div>
          ))
          : null}

        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Type AI instruction..."
            onChange={handleInputChange}
          />
        </form>
      </div>
      <Attribution/>
    </Fragment>
  )
}
