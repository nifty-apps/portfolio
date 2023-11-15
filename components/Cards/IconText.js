import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

export default function Testimonial(props) {
  const { classes, cx } = useStyles();
  const textStyle = useText();
  const {
    icon,
    text,
    desc,
  } = props;
  return (
    <Paper className={classes.iconText}>
      <div style={{color:'black'}} className={classes.icon}>
        <span style={{color:'black'}} className={icon} />
      </div>
      <div style={{color:'black'}} className={classes.more}>
        <Typography style={{color:'black'}} className={cx(classes.name, textStyle.paragraph)} variant="h6" display="block">{text}</Typography>
        <Typography style={{color:'black'}} className={cx(classes.desc, textStyle.paragraph)} display="block">{desc}</Typography>
      </div>
    </Paper>
  );
}

Testimonial.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
