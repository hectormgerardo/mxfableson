import React, { Component } from 'react';
import styled from 'styled-components';

const Menu = styled.nav`
    .sidebar{
        position: fixed;
        width: 250px;
        height: 100%;
        left: 0;
        background: #1b1b1b;
    }
    .sidebar .text{
        color: white;
        font-size: 25px;
        font-weight: 600;
        line-height: 65px;
        text-align: center;
        background: #1b1b1b;
        letter-spacing: 1px;
    }
    nav ul{
        background: #1b1b1b;
        height: 100%;
        width: 100%;
        list-style: none;
    }
    nav ul li{
        line-height: 60px;
        border-bottom: 1px solid transparent;
    }
    nav ul li a{
        color: white;
        text-decoration: none;
        font-size: 18px;
        padding-left: 40px;
        font-weight: 500;
        display: block;
        width: 100%;
    }
    nav ul li a:hover{
        color: cyan;
        background: #1e1e1e;
        border-left-color: cyan;
    }
    nav ul ul{
        position: static;
        displat: none;
    }
    nav ul ul li{
        line-height:
        border-bottom: none;
    }
    nav ul ul li a{
        font-size: 17px;
        color: #e6e6e6;
        padding-left: 80px;
    }
    nav ul ul li a span{
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        font-size: 22px;
    }
    nav ul ul li a:hover span{
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        font-size: 22px;
    }
    `;


const SidebarMenu = () => {
    return (
        <Menu>
            <nav className="sidebar">
                <div className="text">Side Menu</div>
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li>
                            <a href="#">Features
                                <span></span>
                            </a>
                            <ul>
                                <li><a href="#">Pages</a></li>
                                <li><a href="#">Elements</a></li>
                            </ul>
                            <a href="#">Services
                                <span></span>
                            </a>
                            <ul>
                                <li><a href="#">Pages</a></li>
                                <li><a href="#">Elements</a></li>
                            </ul>
                        </li>
                    </ul>
            </nav>
        </Menu>
    );
  };

export default SidebarMenu;
