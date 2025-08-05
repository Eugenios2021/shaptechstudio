import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'

const Support: React.FC = () => {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
          Support My Work
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          If you find my projects helpful, consider supporting my development efforts.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="https://buymeacoffee.com/shaptech"
          aria-label="Support ShapTech Studio on Buy Me a Coffee"
          sx={{ fontSize: '1.1rem', px: 4, py: 1.5 }}
        >
          ☕ Buy Me a Coffee
        </Button>
      </Container>
    </Box>
  )
}

export default Support