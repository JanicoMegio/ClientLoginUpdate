import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CustomIcons from '../components/Pagination'; 
import CircularProgress from '@mui/material/CircularProgress'; 

const cardData = Array(13).fill('').map((_, index) => ({
    productType: '2nd Hand Car',
    accountNo: `12345678${index}`,
    loanAmount: '1,000,000 PHP',
    balance: '500,000 PHP',
}));


export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false); 
    const itemsPerPage = 4;
    const totalPages = Math.ceil(cardData.length / itemsPerPage);

   
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    
    const currentCards = cardData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page !== currentPage) {
            setLoading(true); 
            setTimeout(() => {
                setCurrentPage(page); 
                setLoading(false); 
                console.log(cardData)
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 350); 
        }
    };

    return (
        <Container
            sx={{
                bgcolor: '#ffffff',
                marginTop: '30px',
                marginBottom: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
           
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        mb: 2,
                        mt: 4,
                    }}
                >
                
                    <Typography
                        variant='h4'
                        sx={{
                            textAlign: {md: 'start', xs: 'center'},
                            width: { xs: '100%', sm: 'auto' },
                            mb: { xs: 4, sm: 3 },
                            ml: { xl: 5, md: 5, sm: 3, lg: 5 },
                            mt: 2,
                            fontSize: {xs: '1.5rem'}
                        }}
                    >
                        My Loan Application
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{
                            width: { xs: '60%', sm: 'auto' },
                            mr: { lg: 5, xl: 5, md: 5, sm: 3 },

                        }}
                    >
                        <Typography sx={{ fontWeight: 'bold' }}>Get Loan Today!</Typography>
                    </Button>
            </Box>
            </Container>
            <Container>
            <Box
                sx={{ mx: 2 }}
            >
                <TextField
                    type="search"
                    fullWidth
                    placeholder="Search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            </Container>
          
            {cardData.length === 0 ? (
                <Typography variant='h6' sx={{ textAlign: 'center', mb: 5,}}> No records found</Typography>
            ): (
                
                <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    pb: 5,
                }}
            >
                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        maxWidth: '1200px',
                        gap: 2,
                        padding: 2,
                    }}
                >
                    {loading ? ( 
                        <CircularProgress />
                    ) : (
                        currentCards.map((card, index) => (
                            <Card
                                key={index}
                                sx={{
                                    width: { xs: '90%', sm: '45%', md: '22%' },
                                    boxSizing: 'border-box',
                                    border: '1px solid #000000',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                <CardContent sx={{ px: 1, py: 3 }}>
                                    <Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography fontWeight="bold">Product type:</Typography>
                                            <Typography>{card.productType}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography fontWeight="bold">Account No.:</Typography>
                                            <Typography sx={{ wordWrap: 'break-word', maxWidth: '200px' }}>{card.accountNo}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography fontWeight="bold">Loan Amount:</Typography>
                                            <Typography sx={{ wordWrap: 'break-word', maxWidth: '200px' }}>{card.loanAmount}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography fontWeight="bold">Balance:</Typography>
                                            <Typography sx={{ wordWrap: 'break-word', maxWidth: '200px' }}>{card.balance}</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                                <Box sx={{ px: 3, pb: 2 }}>
                                    <Button fullWidth variant="contained">
                                        <Typography sx={{ fontWeight: 'bold' }}>Request COF</Typography>
                                    </Button>
                                    <Button fullWidth variant="contained" sx={{ mt: 1 }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>OR</Typography>
                                    </Button>
                                    <Button fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
                                        <Typography sx={{ fontWeight: 'bold' }}>VIEW SOA</Typography>
                                    </Button>
                                </Box>
                            </Card>
                        ))
                    )}
                </Stack>
            </Box>
            )}
              <Box>
            <CustomIcons 
                currentPage={currentPage} 
                setCurrentPage={handlePageChange}
                totalPages={totalPages} 
                
            />
            </Box>

           
           
        </Container>
    );
}
