import Container from '@mui/material/Container'
import LoanApplication from '../components/LoanApplication'
import AppBar from '../components/Appbar'


export default function MainDashboard(){
    return(
        <Container sx={{   backgroundColor: '#00237D'}}>
            <AppBar/>
            <LoanApplication />
        </Container>
    );
}