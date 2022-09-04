import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
      }}
    >
      <Typography variant='h1'>404</Typography>
      <Link to={'/'}>Go to Home Page</Link>
    </Box>
  )
}

export default NotFound
