import React from 'react'
import { AppBar, Toolbar, Typography, Container } from '@mui/material'

const Header: React.FC = () => {

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ minHeight: '100px', py: 0 }}>
          <img 
            src="/shaptechstudio/img/259146fc-8650-4957-b32d-53a24ca3b9fb.png" 
            alt="ShapTech Studio" 
            style={{ height: '100px', marginRight: '16px' }}
          />
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700, color: '#222' }}>
          Creative Code. Smart Solutions
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header