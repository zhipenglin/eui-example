import React from 'react'
import Markdown from 'react-markdown'
import CodeBlock from './CodeBlock'

export default ({children})=>{
    return <Markdown className="markdown-body" source={children} renderers={{code: CodeBlock}}/>
}
