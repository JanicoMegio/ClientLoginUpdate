import Container from '@mui/material/Container'
import LoanApplication from '../components/LoanApplication'
import AppBar from '../components/Appbar'
import Box from '@mui/material/Box'


export default function MainDashboard(){
    return(
        <Box sx={{ backgroundColor: '#00237D'}}>
            <Container >
                <AppBar/>
                <LoanApplication />
            </Container>
        </Box>
    );
}