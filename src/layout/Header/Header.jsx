import React from 'react';
import { Header } from 'antd/lib/layout/layout';
import './Header.css'
// import ButtonGroup from 'antd/lib/button/button-group';
import { Button } from 'antd';
// import { Layout } from 'antd';

const HeaderLayout = () => {
    return (
        <Header className="Header">
            <div className="Logo">
                <img src="https://www.pngitem.com/pimgs/m/145-1451097_team-liquid-logo-png-team-liquid-logo-png.png" alt="logo"/>
                <div className="LogoTexto">
                    <p>
                        Transformação
                    </p>
                    <p >
                        Digital
                    </p>
                </div>
            </div>
            <div>
            </div>
            <div className="Buttons" >
                <Button shape="round" >Home</Button>
                <Button shape="round" >Contato</Button>
            </div>
        </Header>
    )
}

export default HeaderLayout