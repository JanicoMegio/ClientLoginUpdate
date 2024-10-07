
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';



export default function Dashboard() {
    return (
        <Container
            sx={{
                bgcolor: '#ffffff',
                marginTop: '30px',
                marginBottom: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
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
                        textAlign: 'start',
                        width: { xs: '100%', sm: 'auto' },
                        mb: { xs: 4, sm: 3 },
                        ml: { xl: 5, md: 5, sm: 3}
                    }}
                >
                    My Loan Application
                </Typography>
                <Button
                    variant='contained'
                    sx={{
                        width: { xs: '100%', sm: 'auto' },
                        mr: { xl: 5, md: 5, sm: 3}
                    }}
                >
                    Get Loan Today!
                </Button>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mb: 3,
                    mt: 2,
                    pr: 5,
                }}
            >
                <TextField type="search" placeholder="Search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }} />
            </Box>


            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
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
                    {Array(4).fill('').map((_, index) => (
                        <Card
                            key={index}
                            sx={{
                                width: { xs: '90%', sm: '45%', md: '22%' },
                                boxSizing: 'border-box',
                                mb: 2,
                            }}
                        >
                            <CardContent>
                                <Typography>Product type : 2nd Hand Car</Typography>
                                <Typography>Account No.  : ******</Typography>
                                <Typography>Loan Amount  : ******</Typography>
                                <Typography>Balance      : ******</Typography>
                            </CardContent>
                            <Box sx={{ px: 3, pb: 2 }}>
                                <Button fullWidth variant="contained">Request COF</Button>
                                <Button fullWidth variant="contained" sx={{ mt: 1 }}>OR</Button>
                                <Button fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>VIEW SOA</Button>
                            </Box>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Container>
    );
}