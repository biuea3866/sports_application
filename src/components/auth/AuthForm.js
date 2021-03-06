import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
    h3 { 
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus: {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${palette.gray[6]};
        text-decoration: underline;
        &:hover {
            color: ${palette.gray[9]};
        }
    }
`;

const ButtonWidthMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const textMap = {
    login: '로그인',
    register: '회원가입',
};

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
    const text = textMap[type];

    return(
        <AuthFormBlock>
            <h3>{ text }</h3>
            <form onSubmit={ onSubmit }>
                <StyledInput autoComplete="id"
                             name="id"
                             placeholder="ID"
                             onChange={ onChange }
                             value={ form.id }
                />
                <StyledInput autoComplete="new-password"
                             name="passwd"
                             placeholder="Password"
                             type="password"
                             onChange={ onChange }
                             value={ form.passwd }
                />
                { type === 'register' && 
                    <>
                        <StyledInput autoComplete="new-password"
                                     name="passwdConfirm"
                                     placeholder="Re-Password"
                                     type="password"
                                     onChange={ onChange }
                                     value={ form.passwdConfirm }
                        />
                        <StyledInput autoComplete="email"
                                     name="email"
                                     placeholder="Email"
                                     onChange={ onChange }
                                     value={ form.email }
                        />
                        <StyledInput autoComplete="name"
                                     name="name"
                                     placeholder="Your name"
                                     onChange={ onChange }
                                     value={ form.name }
                        />
                    </>
                }
                { error && <ErrorMessage>{ error }</ErrorMessage> }
                <ButtonWidthMarginTop 
                    cyan
                    fullWidth        
                >
                    { text }
                </ButtonWidthMarginTop>
            </form>
            <Footer>
                { type === 'login' ? (
                    <Link to="/auth/register">Sign Up</Link>
                ) : (
                    <Link to="/auth/login">Login</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;