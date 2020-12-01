import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import HomeIcon from '../../lib/styles/img/home-outline.svg';
import Icon from '../../components/common/Icon';

const Header = styled.div`
    width: 100%;
    height: 130px;
    position: fixed;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
`;

const Header_title = styled.div`
    float: left;
    width: 100%;
    height: 50px;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    Link {
        color: #000080;
    }
`;

const Header_nav = styled.div`
    float: left;
    width: 100%;
    height: 80px;
    text-align: center;
    ul {
        float: left;
        list-style: none;
        margin: 0 auto;
        padding: 0;
        li {
            float: left;
            width: 50px;
            height: 80px;
            text-align: center;
            margin-left: 15px;
            margin-right: 15px;
            a {
                color: #000000;
            }
        }
    }
`;

const Header_nav_icon_area = styled.div`
    width: 50px;
    height: 40px;
`;

const Header_nav_text_area = styled.div`
    font-size: 15px;
`;

const Header_nav_area = styled.div`
    display: inline-block;
    margin-top: 15px;
`;

const HeaderBlock = () => {
    return(
        <Header>
            <Header_title>
                <Link to="/">Sports Application</Link>
            </Header_title>
            <Header_nav>
                <Header_nav_area>
                    <ul>
                        <li>
                            <Link to="/">
                                <Header_nav_icon_area>
                                    <Icon name={ HomeIcon } />
                                </Header_nav_icon_area>
                                <Header_nav_text_area>
                                    Home
                                </Header_nav_text_area>
                            </Link>
                        </li>
                    </ul>
                </Header_nav_area>
            </Header_nav>
        </Header>
    );
};

export default HeaderBlock;