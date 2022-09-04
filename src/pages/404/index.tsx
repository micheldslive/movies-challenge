import { Box, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const primary = purple[500]

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
