import React, {PureComponent, KeyboardEvent, ChangeEvent} from 'react'
import './Compose.css'
import {autoExpand} from '../../utils/textareaAutoSize'

interface ComposeProps {
    handlePushMessage: (message: string) => void
}

interface ComposeState {
    text: string
}

export class Compose extends PureComponent<ComposeProps, ComposeState> {
    state = {
        text: ''
    }
    
    handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (!event.shiftKey && event.which === 13) {
            event.preventDefault();
            
            //TODO: Проверять текст сообщения перед отправкой

            if (this.state.text) {
                this.props.handlePushMessage(this.state.text)
                this.setState({
                    text: ''
                })    
            }
        }
    }

    handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            text: event.target.value
        })

        autoExpand(event.target)
    }


    render() {
        return (
            <div className="compose">
                <textarea
                    className="message-editor"
                    rows={1}
                    placeholder="Напишите сообщение..."
                    autoComplete="false"
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChange}
                    value={this.state.text}
                />
            </div>
        )
    }
}