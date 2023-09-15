import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './header.css';
import logo from './logo.png';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Barrapesquisa from './barrapesquisa';

const Header = () => {
    const navigate = useNavigate(); 

    const handleAccountIconClick = () => {
        navigate('/login'); 
    }

    return (
        <div>
            <React.Fragment>
                <AppBar sx={{ background: ' #0A2442' }} position='static'>
                    <Toolbar>
                        <Typography>
                            <img src={logo} alt='Logo' className='logo-img'></img>
                            <span className='conta-icon' style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer'}}>
                                <AccountCircleIcon style={{ fontSize: '40px' }} onClick={handleAccountIconClick} />
                            </span>
                            <span className='carrinho-icon' style={{ position: 'absolute', right: '70px', top: '10px', cursor: 'pointer' }}>
                                <LocalGroceryStoreIcon style={{ fontSize: '40px' }} />
                            </span>
                        </Typography>
                        <Barrapesquisa />
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    );
}

export default Header;
