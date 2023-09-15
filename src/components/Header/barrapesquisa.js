import React from "react";
import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Barrapesquisa = () => {
    const handleSearch = (e) => {
        console.log(e.target.value);
    };

    return (
        <div style={{
            position: 'absolute',
            right: "190px", // Define a margem
            top: "15px",
            width: '500px',
            display: 'flex',
            height: '35px',
        }}>
            <Paper>
                <IconButton sx={{ p: '0px',marginLeft: '500px',top: '8px',height: '0px' }} aria-label="pesquisar">
                    <SearchIcon />
                </IconButton>
                <div style={{ position: 'relative', marginTop: '-8px' }}>
                <InputBase
                style={{marginTop: '-80px'}}
                    placeholder="Pesquisar produto"
                    inputProps={{ 'aria-label': 'pesquisar' }}
                    fullWidth
                    onChange={handleSearch}
                />
                </div>
            </Paper>
        </div>
    );
}

export default Barrapesquisa;
