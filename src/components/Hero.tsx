import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const Hero: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper', textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Independent Android & Web Development
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Creating innovative Android applications and web services with modern technologies
        </Typography>
      </Container>
    </Box>
  )
}

export default Hero