import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            alert('Please enter a search term');
            return;
        }
        onSearch(query);
    };

    return (
        <Paper
            component="form"
            onSubmit={handleSearch}
            sx={{
                width: '100%',
                p: 4,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(134,172,224,0.99)',
                mb: 2,
                margin: 0
            }}
        >
            <TextField
                label="Search for a recipe..."
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ mr: 2, backgroundColor: 'white', borderRadius: 1 }}
            />
            <Button type="submit" variant="contained" color="primary">
                Search
            </Button>
        </Paper>
    );
};

export default SearchBar;