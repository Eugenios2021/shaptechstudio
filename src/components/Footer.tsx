import React from 'react'
import { Box, Container, Typography, Grid, Link } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#f5f5f5', py: 6, borderTop: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contact
            </Typography>
            <Typography variant="body2">
              Email: <Link href="mailto:contact@shaptech.studio">shaptechstudio@gmail.com</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#projects">Projects</Link>
              <Link href="#about">About</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Privacy
            </Typography>
            <Typography variant="body2">
              We respect your privacy. No personal data is collected on this website.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', pt: 4, borderTop: '1px solid #e0e0e0' }}>
          <Typography variant="body2" color="text.secondary">
            © 2024 ShapTech Studio. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer