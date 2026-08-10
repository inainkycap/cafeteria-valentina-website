import { useEffect, useRef } from 'react'

interface SuperInternChatButtonConfig {
  baseSettings: {
    apiKey: string
    agentId: string
    modeShortId: string
    environment: 'production' | 'development' | 'staging' | string
    theme: {
      colorMode: {
        type: 'auto' | 'light' | 'dark'
      }
    }
    primaryBrandColor: string
    secondaryBrandColor: string
  }
  aiChatSettings: {
    aiAssistantName: string
    introMessage: string
    placeholder: string
    quickQuestions: string[]
  }
}

declare global {
  interface Window {
    SuperIntern?: {
      ChatButton: (config: SuperInternChatButtonConfig) => void
    }
  }
}

function SuperInternChat() {
  const hasMountedRef = useRef(false)

  useEffect(() => {
    if (hasMountedRef.current) {
      return
    }

    const translateSdkLabels = () => {
      const labelMap: Record<string, string> = {
        Clear: 'Limpiar',
        clear: 'Limpiar',
        Send: 'Enviar',
        send: 'Enviar',
        Thinking: 'Pensando',
        thinking: 'Pensando',
      }

      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(
          'button, [role="button"], [aria-label], .superintern-button, .superintern-chat-button',
        ),
      )

      for (const element of elements) {
        const currentText = element.textContent?.trim() ?? ''
        const ariaText = element.getAttribute('aria-label')?.trim() ?? ''

        if (labelMap[currentText]) {
          element.textContent = labelMap[currentText]
        }

        if (ariaText && labelMap[ariaText]) {
          element.setAttribute('aria-label', labelMap[ariaText])
        }
      }
    }

    const initChat = () => {
      if (typeof window === 'undefined' || !window.SuperIntern?.ChatButton) {
        return
      }

      const apiKey = import.meta.env.VITE_SUPERINTERN_API_KEY
      const agentId = import.meta.env.VITE_SUPERINTERN_AGENT_ID

      if (!apiKey || !agentId) {
        return
      }

      window.SuperIntern.ChatButton({
        baseSettings: {
          apiKey,
          agentId,
          modeShortId: 'kb-and-sales',
          environment: 'production',
          theme: { colorMode: { type: 'auto' } },
          primaryBrandColor: '#8a6f53',
          secondaryBrandColor: '#dbac7a',
        },
        aiChatSettings: {
          aiAssistantName: 'SuperVal',
          introMessage: '👋 ¡Hola! ¿En qué puedo ayudarte hoy?',
          placeholder: 'Escribe tu pregunta...',
          quickQuestions: [
            '¿Cuál es el horario?',
            '¿Qué tenéis en el menú?',
            '¿Dónde estáis ubicados?',
          ],
        },
      })

      hasMountedRef.current = true

      const applyTranslation = () => {
        translateSdkLabels()
      }

      const observer = new MutationObserver(() => {
        applyTranslation()
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      })

      window.setTimeout(() => {
        applyTranslation()
      }, 250)

      window.setTimeout(() => {
        observer.disconnect()
      }, 3000)
    }

    if (window.SuperIntern?.ChatButton) {
      initChat()
    } else {
      const onWindowLoad = () => {
        initChat()
      }

      window.addEventListener('load', onWindowLoad, { once: true })

      return () => {
        window.removeEventListener('load', onWindowLoad)
      }
    }
  }, [])

  return null
}

export default SuperInternChat
