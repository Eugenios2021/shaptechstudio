import React from 'react'
import { Box, Container, Typography, Chip, Stack } from '@mui/material'

const About: React.FC = () => {
  const technologies = ['React', 'JavaScript', 'PHP']

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container id='about' maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
          About Me
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
          Passionate developer specializing in modern web and mobile technologies. I create robust applications using React, JavaScript, and PHP, focusing on clean code and user experience.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
          {technologies.map((tech) => (
            <Chip key={tech} label={tech} variant="outlined" size="medium" />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default About