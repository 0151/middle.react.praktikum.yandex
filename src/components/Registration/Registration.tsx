import React, { PureComponent, ChangeEvent, FormEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Input } from '../Input'
import { FormWrapper } from '../FormWrapper'

interface RegistrationProps {
    submitCallback: (userId: TUUID) => void
}

export class Registration extends PureComponent<RegistrationProps & RouteComponentProps, FormState> {
    state = {
        fields: {
            login: '',
            password1: '',
            password2: '',
            name: ''
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

        //TODO: Написать функцию проверки логина на доступность
        if (login === 'demo') {
            this.setError('login', 'Логин уже занят')
        }
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (Object.keys(this.state.errors).length === 0) {
            const {history, submitCallback} = this.props
            const {password1, password2} = this.state.fields
            
            if (password1 !== password2) {
                this.setError('password2', 'Подтверждение не совпадает с паролем')
            } else {
                
                //Добавление пользователя
                //...
                
                submitCallback('a2d451ac-1c55-49ee-95e4-a1eca43520c7')
                history.push('/chat')    
            }
        }
    }

    render() {
        const history = this.props.history

        return (
            <FormWrapper title="Регистрация">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <Input
                            name="name"
                            type="text"
                            placeholder="Имя"
                            onChange={this.handleInputChange}
                            value={this.state.fields.name}
                            error={ 'name' in this.state.errors ? this.state.errors['name'] : ''}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <Input
                            name="login"
                            type="text"
                            placeholder="Придумайте логин"
                            onChange={this.handleInputChange}
                            onBlur={this.validateLogin}
                            value={this.state.fields.login}
                            error={ 'login' in this.state.errors ? this.state.errors['login'] : ''}
                            required
                        />
                    </div>
                    
                    <div className="form-field">
                        <Input
                            name="password1"
                            type="password"
                            placeholder="Придумайте пароль"
                            onChange={this.handleInputChange}
                            value={this.state.fields.password1}
                            error={ 'password1' in this.state.errors ? this.state.errors['password1'] : ''}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <Input
                            name="password2"
                            type="password"
                            placeholder="Повторите пароль"
                            onChange={this.handleInputChange}
                            value={this.state.fields.password2}
                            error={ 'password2' in this.state.errors ? this.state.errors['password2'] : ''}
                            required
                        />
                    </div>

                    <button className="button" type="submit">Зарегистрироваться</button>
                    
                    <button
                        className="button button_view_pseudo"
                        onClick={() => { history.push('/auth') }}
                    >
                        Войти
                    </button>
                </form>
            </FormWrapper>
        )
    }
}