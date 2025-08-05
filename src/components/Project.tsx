import React from 'react'
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material'

const Project: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container id='projects' maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Featured Project
        </Typography>
        <Card sx={{ display: 'flex', alignItems: 'center', p: 3, bgcolor: 'background.paper' }}>
          <Box sx={{ fontSize: '4rem', mr: 3, flexShrink: 0 }} aria-hidden="true">
            📱
          </Box>
          <CardContent sx={{ flex: 1, p: 0 }}>
            <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
              Daily Quote X
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Inspiring daily quotes application for Android. Get motivated with carefully curated quotes delivered fresh every day.
            </Typography>
            <Button variant="contained" size="large">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default Project