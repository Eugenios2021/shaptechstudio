import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Link,
  Chip,
  Stack,
  Alert,
  AlertTitle
} from '@mui/material';
import { 
  ArrowBack, 
  Security, 
  Storage, 
  Share, 
  ChildCare, 
  Gavel, 
  AdsClick, 
  Warning,
  CheckCircle,
  Info,
  Email,
  PrivacyTip,
  DataUsage,
  CloudOff,
  Shield,
  Policy,
  GavelOutlined
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const PrivatePolicy = () => {
    const navigate = useNavigate();
    
    return (
        <Box sx={{ 
          py: 6, 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ mb: 4 }}>
                    <Button 
                        variant="outlined" 
                        startIcon={<ArrowBack />}
                        onClick={() => navigate('/')}
                        sx={{ mb: 3 }}
                    >
                        Back to Home
                    </Button>
                    
                    <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                            <Security sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />
                            <Typography variant="h3" component="h1" sx={{ 
                              mb: 2, 
                              fontWeight: 700,
                              color: '#2c3e50'
                            }}>
                                Privacy Policy
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ 
                              maxWidth: 800,
                              mx: 'auto'
                            }}>
                                Your privacy is paramount to us. Learn how we protect your data.
                            </Typography>
                        </Box>
                    </Paper>
                </Box>

                {/* Main Content */}
                <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Policy sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                        <Typography variant="h4" sx={{ color: '#2c3e50', fontWeight: 600 }}>
                            Overview
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                        This application <strong>does not utilize a proprietary server</strong> and <strong>does not transmit your personal data to external servers</strong>, 
                        except through third-party Google services (AdMob and Firebase Crashlytics) as described below. 
                        All data, such as saved quotes or settings, are <strong>stored exclusively on your device</strong> 
                        and <strong>do not leave the device</strong> unless you choose to share them.
                    </Typography>
                    
                    <Alert severity="success" sx={{ mb: 3 }}>
                        <AlertTitle>✅ Important</AlertTitle>
                        We do not collect or store any personally identifiable information (name, email, phone number, geolocation, etc.).
                    </Alert>
                </Paper>

                {/* Definitions */}
                <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <PrivacyTip sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                        <Typography variant="h4" sx={{ color: '#2c3e50', fontWeight: 600 }}>
                            Definitions
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        For the purposes of this Policy:
                    </Typography>
                    <List>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemText 
                                primary={<strong>Personal Data:</strong>}
                                secondary="Any information relating to an identified or identifiable natural person."
                            />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemText 
                                primary={<strong>Processing:</strong>}
                                secondary="Any operation performed on personal data: collection, storage, use, transmission, deletion."
                            />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemText 
                                primary={<strong>Data Controller:</strong>}
                                secondary="ShapTech Studio — the entity determining the purposes and means of data processing."
                            />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemText 
                                primary={<strong>Processor:</strong>}
                                secondary="Third parties (Google AdMob, Firebase) processing data on behalf of the controller."
                            />
                        </ListItem>
                    </List>
                </Paper>

                {/* Data Collection */}
                <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <DataUsage sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                        <Typography variant="h4" sx={{ color: '#2c3e50', fontWeight: 600 }}>
                            Collected Information
                        </Typography>
                    </Box>
                    
                    <Typography variant="h5" sx={{ mb: 2, color: '#34495e' }}>
                        2.1. Automatically Collected Data
                    </Typography>
                    
                    <List sx={{ mb: 3 }}>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <Info color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                                primary="Device Information"
                                secondary="Device type, operating system version, memory capacity, screen resolution"
                            />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <AdsClick color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                                primary="Usage Data"
                                secondary="Usage time, viewed quotes, number of sessions"
                            />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <Storage color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                                primary="Technical Data"
                                secondary="IP address (anonymized), Advertising ID, network information"
                            />
                        </ListItem>
                    </List>
                    
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                        These data are <strong>automatically collected</strong> through <strong>Google AdMob</strong> and <strong>Firebase Crashlytics</strong> 
                        for advertising and crash analysis purposes.
                    </Typography>
                </Paper>

                {/* Third Party Services */}
                <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Share sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                        <Typography variant="h4" sx={{ color: '#2c3e50', fontWeight: 600 }}>
                            Third-Party Service Usage
                        </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" sx={{ mb: 2, color: '#34495e' }}>
                            3.1. Google AdMob
                        </Typography>
                        <List sx={{ mb: 2 }}>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon>
                                    <CheckCircle color="success" />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Purpose"
                                    secondary="Display advertisements to support free application services"
                                />
                            </ListItem>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon>
                                    <Storage color="info" />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Collected Data"
                                    secondary="Anonymized device information, behavioral data, advertising ID"
                                />
                            </ListItem>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon>
                                    <GavelOutlined color="info" />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Legal Basis"
                                    secondary="Our legitimate interest in providing a free service and interest-based advertising"
                                />
                            </ListItem>
                        </List>
                        
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>Management:</strong> Disable personalized advertising:
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                <Chip 
                                    label="Android Settings → Privacy → Ads" 
                                    variant="outlined" 
                                    size="small"
                                />
                                <Chip 
                                    label="Google Ad Settings" 
                                    variant="outlined" 
                                    size="small"
                                    component={Link}
                                    href="https://adssettings.google.com/" 
                                    target="_blank"
                                    clickable
                                />
                            </Stack>
                        </Box>
                        
                        <Link 
                            href="https://policies.google.com/privacy" 
                            target="_blank"
                            sx={{ 
                              color: '#1976d2', 
                              textDecoration: 'none',
                              '&:hover': { textDecoration: 'underline' }
                            }}
                        >
                            📄 Google Privacy Policy
                        </Link>
                    </Box>
                    
                    <Divider sx={{ my: 3 }} />
                    
                    <Box>
                        <Typography variant="h5" sx={{ mb: 2, color: '#34495e' }}>
                            3.2. Firebase Crashlytics
                        </Typography>
                        <List sx={{ mb: 2 }}>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon>
                                    <CheckCircle color="success" />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Purpose"
                                    secondary="Identification and resolution of application errors"
                                />
                            </ListItem>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon>
                                    <Warning color="warning" />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Collected Data"
                                    secondary="Crash reports, stack traces, crash time, device type, operating system"
                                />
                            </ListItem>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon>
                                    <GavelOutlined color="info" />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Legal Basis"
                                    secondary="Our legitimate interest in ensuring application stability and security"
                                />
                            </ListItem>
                        </List>
                        
                        <Alert severity="warning" sx={{ mb: 2 }}>
                            <AlertTitle>⚠️ Important</AlertTitle>
                            These data <strong>do not contain personal information</strong> and are used 
                            <strong> solely for improving application stability</strong>.
                        </Alert>
                        
                        <Link 
                            href="https://firebase.google.com/terms/data-processing-terms" 
                            target="_blank"
                            sx={{ 
                              color: '#1976d2', 
                              textDecoration: 'none',
                              '&:hover': { textDecoration: 'underline' }
                            }}
                        >
                            📄 Firebase Terms of Service
                        </Link>
                    </Box>
                </Paper>

                {/* Data Storage */}
                <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <CloudOff sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                        <Typography variant="h4" sx={{ color: '#2c3e50', fontWeight: 600 }}>
                            Data Storage
                        </Typography>
                    </Box>
                    <List>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <Storage color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                                primary="Local Storage"
                                secondary="All user data are stored locally on your device"
                            />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <CheckCircle color="success" />
                            </ListItemIcon>
                            <ListItemText 
                                primary="Automatic Deletion"
                                secondary="Upon application deletion, all local data are automatically removed"
                            />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <Info color="info" />
                            </ListItemIcon>
                            <ListItemText 
                                primary="Google Data Retention"
                                secondary="AdMob and Crashlytics data are stored by Google in aggregated and anonymized form for up to 24 months, after which they are deleted or anonymized."
                            />
                        </ListItem>
                    </List>
                </Paper>

                {/* Data Sharing */}
                <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Shield sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                        <Typography variant="h4" sx={{ color: '#2c3e50', fontWeight: 600 }}>
                            Data Transmission to Third Parties
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                        We <strong>do not sell, exchange, or transfer</strong> your personal data to third parties, except:
                    </Typography>
                    <List>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <CheckCircle color="success" />
                            </ListItemIcon>
                            <ListItemText 
                                primary="Google LLC"
                                secondary="For AdMob and Firebase functionality, as described above"
                            />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <Gavel color="warning" />
                            </ListItemIcon>
                            <ListItemText 
                                primary="Rights Holders or Government Authorities"
                                secondary="Only as required by law"
                            />
                        </ListItem>
                    </List>
                </Paper>

                {/* Data Protection */}
                <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Security sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                        <Typography variant="h4" sx={{ color: '#2c3e50', fontWeight: 600 }}>
                            Data Protection
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        We implement reasonable measures to protect data. In the event of a data breach, loss, or unauthorized access 
                        that may pose a high risk to user rights and freedoms, 
                        <strong> ShapTech Studio commits to notifying affected users and relevant data protection authorities</strong> 
                        within the timeframes established by applicable legislation (e.g., within 72 hours for GDPR).
                    </Typography>
                </Paper>

                {/* Age Restrictions */}
                <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <ChildCare sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                        <Typography variant="h4" sx={{ color: '#2c3e50', fontWeight: 600 }}>
                            Age Restrictions
                        </Typography>
                    </Box>
                    <Alert severity="warning">
                        <AlertTitle>👶 Age Restrictions</AlertTitle>
                        The application <strong>is not intended for children under 13 years of age</strong>. 
                        We <strong>do not knowingly collect data from children</strong>. 
                        If you believe a child has used the application, please contact us — 
                        we will assist in data removal through Google if necessary.
                    </Alert>
                </Paper>

                {/* User Rights */}
                <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Gavel sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                        <Typography variant="h4" sx={{ color: '#2c3e50', fontWeight: 600 }}>
                            Your Rights (GDPR, CCPA, and Others)
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                        If you are located in the EU, United Kingdom, California, or other regions with robust privacy regulations, you have the right to:
                    </Typography>
                    <List>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <CheckCircle color="success" />
                            </ListItemIcon>
                            <ListItemText primary="Access to data (within the limits permissible through Google)" />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <CheckCircle color="success" />
                            </ListItemIcon>
                            <ListItemText primary="Data Deletion" />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <CheckCircle color="success" />
                            </ListItemIcon>
                            <ListItemText primary="Restriction of Processing" />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <CheckCircle color="success" />
                            </ListItemIcon>
                            <ListItemText primary="Object to Personalized Advertising" />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <CheckCircle color="success" />
                            </ListItemIcon>
                            <ListItemText primary="Opt-out of Automated Decision-Making and Profiling" />
                        </ListItem>
                    </List>
                    
                    <Alert severity="info" sx={{ mt: 3 }}>
                        <AlertTitle>📧 Contact Us</AlertTitle>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            <strong>Email for Inquiries:</strong>{' '}
                            <Link 
                                href="mailto:shaptechstudio@gmail.com"
                                sx={{ 
                                  color: '#1976d2', 
                                  textDecoration: 'none',
                                  '&:hover': { textDecoration: 'underline' }
                                }}
                            >
                                shaptechstudio@gmail.com
                            </Link>
                        </Typography>
                        <Typography variant="body2">
                            <strong>Supervisory Authority:</strong> If you believe that the processing of your data violates applicable legislation, 
                            you have the right to file a complaint with the data protection authority in your country (e.g., in the EU — with the national data protection authority).
                        </Typography>
                    </Alert>
                </Paper>

                {/* Advertising */}
                <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <AdsClick sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                        <Typography variant="h4" sx={{ color: '#2c3e50', fontWeight: 600 }}>
                            Advertising and Tracking
                        </Typography>
                    </Box>
                    <List>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <AdsClick color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                                primary="Advertising via Google AdMob"
                                secondary="Advertisements are displayed through Google AdMob"
                            />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <Info color="info" />
                            </ListItemIcon>
                            <ListItemText 
                                primary="Personalized Advertising"
                                secondary="Advertisements may be personalized (based on interests)"
                            />
                        </ListItem>
                    </List>
                    
                    <Typography variant="h6" sx={{ mb: 2, color: '#34495e' }}>
                        Disabling Personalized Advertising:
                    </Typography>
                    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                        <Chip 
                            label="Android Settings → Privacy → Ads" 
                            variant="outlined" 
                            color="primary"
                        />
                        <Chip 
                            label="Google Ad Settings" 
                            variant="outlined" 
                            color="primary"
                            component={Link}
                            href="https://adssettings.google.com/" 
                            target="_blank"
                            clickable
                        />
                    </Stack>
                </Paper>

                {/* Liability */}
                <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Warning sx={{ fontSize: 40, color: '#ff9800', mr: 2 }} />
                        <Typography variant="h4" sx={{ color: '#2c3e50', fontWeight: 600 }}>
                            Limitation of Liability
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                        <strong>ShapTech Studio</strong> strives to provide a high-quality application but <strong>disclaims liability</strong> for:
                    </Typography>
                    <List>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <Warning color="warning" />
                            </ListItemIcon>
                            <ListItemText primary="Failures, interruptions, damages, or unstable application performance" />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <Warning color="warning" />
                            </ListItemIcon>
                            <ListItemText primary="System failures, viruses, interference, disconnections, or malfunctions" />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <Warning color="warning" />
                            </ListItemIcon>
                            <ListItemText primary="Actions by third parties, including hacks and modifications" />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                            <ListItemIcon>
                                <Warning color="warning" />
                            </ListItemIcon>
                            <ListItemText primary="Improper use of the application by the user" />
                        </ListItem>
                    </List>
                    
                    <Alert severity="error" sx={{ mt: 3 }}>
                        <AlertTitle>⚠️ Limitation of Liability</AlertTitle>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            <strong>ShapTech Studio is not liable</strong> for:
                        </Typography>
                        <List sx={{ py: 0 }}>
                            <ListItem sx={{ px: 0, py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 20 }}>
                                    <Typography variant="body2" sx={{ color: '#d32f2f' }}>•</Typography>
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Damage to equipment of the user or third parties"
                                    sx={{ '& .MuiListItemText-primary': { color: '#d32f2f' } }}
                                />
                            </ListItem>
                            <ListItem sx={{ px: 0, py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 20 }}>
                                    <Typography variant="body2" sx={{ color: '#d32f2f' }}>•</Typography>
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Data loss due to operating system failures, application deletion, or user actions"
                                    sx={{ '& .MuiListItemText-primary': { color: '#d32f2f' } }}
                                />
                            </ListItem>
                        </List>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            <strong>You agree to indemnify</strong> and hold ShapTech Studio harmless from any claims related to violation of the terms of use.
                        </Typography>
                    </Alert>
                </Paper>

                {/* Footer */}
                <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Email sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, color: '#2c3e50' }}>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        If you have any questions about our privacy policy, please contact us:
                    </Typography>
                    <Link 
                        href="mailto:shaptechstudio@gmail.com"
                        sx={{ 
                          color: '#1976d2', 
                          textDecoration: 'none',
                          fontSize: '1.1rem',
                          fontWeight: 500,
                          '&:hover': { textDecoration: 'underline' }
                        }}
                    >
                        📧 shaptechstudio@gmail.com
                    </Link>
                    <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary' }}>
                        Last Updated: December 08, 2024
                    </Typography>
                </Paper>
            </Container>
        </Box>
    );
};

export default PrivatePolicy;