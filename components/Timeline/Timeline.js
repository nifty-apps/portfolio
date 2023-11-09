import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './timeline-style';
import brand from '~/public/text/brand';

function Timeline() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();

  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const [play, setPlay] = useState(false);

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            {!isTablet && (
              <Typography variant="h2" className={classes.nameDeco}>
                {/* {brand.profile.name} */}

              
              </Typography>
            )}
          </Grid>
          <Grid item container spacing={3} md={12} lg={10}>
            <Grid item md={5} sm={6} xs={12}>
              <div className={classes.history}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('profile-landing.timeline_experience')}
                </Typography>
                <ul>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Fronted Developer Intern</Typography>
                        <Typography gutterBottom>at Nift It Solution</Typography>
                        <Typography className={classes.time}>18-08-2023 - Present</Typography>
                      </div>
                    </ScrollAnimation>

                   
             </li>
             <div>

              <img style={{width:'350px', height:'650px' ,borderRadius:'20px'}} src='https://i.pinimg.com/originals/be/54/d4/be54d436daac3158360c69b39ae3fe3a.jpg' ></img>
             </div>
                </ul>

              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.progress}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('profile-landing.timeline_skill')}
                </Typography>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  delay={400}
                  duration={0.3}
                  afterAnimatedIn={handlePlay}
                >
                  <ul>
  <li>
    <div className={classes.textIcon}>
      <i className="ion-ios-desktop" />
      <Typography variant="h6" className={text.subtitle2}>Responsive Web Design</Typography>
    </div>
    <LinearProgress
      variant="determinate"
      value={play ? 90 : 0}
      classes={{
        root: classes.progressBg,
        bar: classes.bar
      }}
    />
  </li>
  <li>
    <div className={classes.textIcon}>
      <i className="ion-logo-react" />
      <Typography variant="h6" className={text.subtitle2}>React.js Development</Typography>
    </div>
    <LinearProgress
      variant="determinate"
      value={play ? 85 : 0}
      classes={{
        root: classes.progressBg,
        bar: classes.bar
      }}
    />
  </li>
  <li>
    <div className={classes.textIcon}>
      <i className="ion-logo-html5" />
      <Typography variant="h6" className={text.subtitle2}>HTML5 & CSS3</Typography>
    </div>
    <LinearProgress
      variant="determinate"
      value={play ? 95 : 0}
      classes={{
        root: classes.progressBg,
        bar: classes.bar
      }}
    />
  </li>
  <li>
    <div className={classes.textIcon}>
      <i className="ion-logo-javascript" />
      <Typography variant="h6" className={text.subtitle2}>JavaScript Development</Typography>
    </div>
    <LinearProgress
      variant="determinate"
      value={play ? 90 : 0}
      classes={{
        root: classes.progressBg,
        bar: classes.bar
      }}
    />
  </li>

  <li>
    <div className={classes.textIcon}>
      <i className="ion-logo-redux" />
      <Typography variant="h6" className={text.subtitle2}>Redux</Typography>
    </div>
    <LinearProgress
      variant="determinate"
      value={play ? 70 : 0}
      classes={{
        root: classes.progressBg,
        bar: classes.bar
      }}
    />
  </li>
  <li>
    <div className={classes.textIcon}>
      <i className="ion-logo-nodejs" />
      <Typography variant="h6" className={text.subtitle2}>Express.js</Typography>
    </div>
    <LinearProgress
      variant="determinate"
      value={play ? 75 : 0}
      classes={{
        root: classes.progressBg,
        bar: classes.bar
      }}
    />
  </li>
  <li>
    <div className={classes.textIcon}>
      <i className="ion-logo-mongodb" />
      <Typography variant="h6" className={text.subtitle2}>MongoDB</Typography>
    </div>
    <LinearProgress
      variant="determinate"
      value={play ? 70 : 0}
      classes={{
        root: classes.progressBg,
        bar: classes.bar
      }}
    />
  </li>
  <li>
    <div className={classes.textIcon}>
      <i className="ion-logo-typescript" />
      <Typography variant="h6" className={text.subtitle2}>TypeScript</Typography>
    </div>
    <LinearProgress
      variant="determinate"
      value={play ? 85 : 0}
      classes={{
        root: classes.progressBg,
        bar: classes.bar
      }}
    />
  </li>
  <li>
    <div className={classes.textIcon}>
      <i className="ion-logo-graphql" />
      <Typography variant="h6" className={text.subtitle2}>GraphQL</Typography>
    </div>
    <LinearProgress
      variant="determinate"
      value={play ? 75 : 0}
      classes={{
        root: classes.progressBg,
        bar: classes.bar
      }}
    />
  </li>
  <li>
    <div className={classes.textIcon}>
      <i className="ion-logo-git-branch" />
      <Typography variant="h6" className={text.subtitle2}>Version Control (Git)</Typography>
    </div>
    <LinearProgress
      variant="determinate"
      value={play ? 80 : 0}
      classes={{
        root: classes.progressBg,
        bar: classes.bar
      }}
    />
  </li>
</ul>

                </ScrollAnimation>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Timeline;
