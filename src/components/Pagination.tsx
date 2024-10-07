import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CustomIcons({ currentPage, setCurrentPage, totalPages }) {
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <Stack spacing={2} mb={3}>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                )}
            />
        </Stack>
    );
}
