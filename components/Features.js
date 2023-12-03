import { Typography, Grid, Paper } from '@mui/material';
import HearingIcon from '@mui/icons-material/Hearing';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import InsightsIcon from '@mui/icons-material/Insights';

export default function FeaturesSection() {
  return (
    <Grid container spacing={4} sx={{ padding: 4, justifyContent: 'center' }}>
      {/* Real-Time Bark Detection */}
      <Grid item xs={12} sm={4} textAlign="center">
        <HearingIcon sx={{ fontSize: 60 }} color="primary" />
        <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
          Real-Time Bark Detection
        </Typography>
        <Typography>
          Advanced machine learning for instant bark notifications.
        </Typography>
      </Grid>

      {/* Privacy-First Design */}
      <Grid item xs={12} sm={4} textAlign="center">
        <PrivacyTipIcon sx={{ fontSize: 60 }} color="primary"/>
        <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
          Privacy-First Design
        </Typography>
        <Typography>
          User-activated recording for enhanced privacy and trust.
        </Typography>
      </Grid>

      {/* Personalized Insights */}
      <Grid item xs={12} sm={4} textAlign="center">
        <InsightsIcon sx={{ fontSize: 60 }} color="primary"/>
        <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
          Personalized Insights
        </Typography>
        <Typography>
          In-depth analysis of your dog's barking patterns.
        </Typography>
      </Grid>
    </Grid>
  );
}
