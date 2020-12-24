import { useState, useEffect } from 'react'

const EmojiBox = ({ title, symbol }) => {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setSelected(false), 600)
    return () => clearTimeout(timer)
  }, [selected])

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(symbol)
        setSelected(true)
      }}
      className={`emoji-box ${selected ? 'selected' : ''}`}>
      <p className="emoji" dangerouslySetInnerHTML={{__html: `&#${symbol.codePointAt(0)};`}} />
      <p className="emoji-text">{title}</p>
    </div>
  )
}

export default EmojiBox