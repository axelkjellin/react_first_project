// import { Col, Row } from 'antd';
import React from 'react';
import { Layout } from 'antd';
import './App.css'
import HeaderLayout from './layout/Header/Header';
import FooterLayout from './layout/Footer/Footer';

const {  Footer, Content } = Layout;

const App = () => {
    return (
        <>
            <Layout>
                <HeaderLayout />
                <Content className="Content" />
                <FooterLayout />
            </Layout>
        </>
    )
}

export default App