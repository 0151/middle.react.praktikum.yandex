import React, { PureComponent } from 'react'
import Unsplash from 'unsplash-js'

import './FormWrapper.css'

interface FormWrapperProps {
    title: string
}

interface FormWrapperState {
    backgroundImage: string
}

export class FormWrapper extends PureComponent<FormWrapperProps, FormWrapperState> {
    state = {
        backgroundImage: 'none'
    }

    componentDidMount() {
        const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY || ''
        const unsplash = new Unsplash({accessKey: UNSPLASH_API_KEY})

        unsplash.photos.getRandomPhoto({
            collections: ['446755']
        })
            .then(res => res.json())
            .then(data => {
                if (data.errors && !data.errors.length) {
                    this.setState({
                        backgroundImage: data.urls.regular
                    })    
                }
            })
            .catch(error => console.error(error))
        }

    render() {
        const styles = {
            backgroundImage: `url(${this.state.backgroundImage})`
        }

        return (
            <div className="wrapper" style={styles}>
                <div className="auth">
                    <div className="auth__header">
                        <span className="auth__title">{this.props.title}</span>
                    </div>
                    <div className="auth__content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )       
    }
}