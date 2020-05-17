import React, { PureComponent, ChangeEvent, FormEvent } from 'react'
import {RouteComponentProps} from 'react-router-dom'

import { Input } from '../Input'
import { FormWrapper } from '../FormWrapper'

interface AuthProps {
    submitCallback: (userId: TUUID) => void
}

export class Auth extends PureComponent<AuthProps & RouteComponentProps, FormState> {
    state = {
        fields: {
            login: 'demo',
            password: 'demo'
        },
        errors: {}
    }

    setError = (field: string, text: string) => {
        this.setState(prevState => {
            return {
                errors: {
                    ...prevState.errors,
                    [field]: text
                }
            }
        })
    }

    unsetError = (field: string) => {
        this.setState(prevState => {
            let prevErrors = {
                ...prevState.errors
            }

            delete prevErrors[field]

            return {
                errors: prevErrors
            }
        })
    }
    
    handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name: field, value} = event.target
        
        this.unsetError(field)

        this.setState(prevState => {
            return {
                fields: {
                    ...prevState.fields,
                    [field]: value
                }
            }
        })
    }

    validateLogin = () => {
        const login = this.state.fields.login

        //TODO: Написать функцию проверки существования логина
        if (login !== 'demo') {
            this.setError('login', 'Такого аккаунта нет')
        }
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (Object.keys(this.state.errors).length === 0) {
            const {history, submitCallback} = this.props
            const {login, password} = this.state.fields
    
            //TODO: Написать функцию валидации пользователя
            if (login === 'demo' && password === 'demo') {
                submitCallback('a2d451ac-1c55-49ee-95e4-a1eca43520c7')
                history.push('/chat')
            } else {
                this.setError('password', 'Неверный пароль')
            }
        }
    }

    render() {
        const history = this.props.history

        return (
            <FormWrapper title="Войдите, чтобы продолжить">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <Input
                            name="login"
                            type="text"
                            placeholder="Введите логин"
                            onChange={this.handleInputChange}
                            onBlur={this.validateLogin}
                            value={this.state.fields.login}
                            error={ 'login' in this.state.errors ? this.state.errors['login'] : ''}
                        />
                    </div>
                    
                    <div className="form-field">
                        <Input
                            name="password"
                            type="password"
                            placeholder="Введите пароль"
                            onChange={this.handleInputChange}
                            value={this.state.fields.password}
                            error={ 'password' in this.state.errors ? this.state.errors['password'] : ''}
                        />
                    </div>

                    <button className="button" type="submit">Войти</button>
                    
                    <button
                        className="button button_view_pseudo"
                        onClick={() => { history.push('/registration') }}
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </FormWrapper>
        )
    }
}