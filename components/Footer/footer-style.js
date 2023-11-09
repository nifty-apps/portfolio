import { makeStyles } from 'tss-react/mui';

const footerStyles = makeStyles({ uniqId: 'footer' })(theme => ({
  root: {
    textAlign: 'center',
    paddingBottom: theme.spacing(5),
    backgroundImage: `linear-gradient(120deg, ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main}, ${theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light})`,
    borderRadius:'20px'
  },
  decoration: {},
  logo: {
    color: theme.palette.text.primary,
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(5)
    },
    '& img': {
      filter: 'grayscale(0) contrast(1.5) brightness(2)',
      width: 80,
      marginBottom: theme.spacing(2),
      borderRadius:'50%'
    },
    '& h4': {
      textTransform: 'uppercase',
    }
  },
  margin: {
    margin: theme.spacing(2)
  },
  socmed: {
    margin: theme.spacing(3, 0),
    '& button': {
      margin: theme.spacing(),
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  contact: {
    color: theme.palette.text.primary,
  },
  divider: {
    margin: theme.spacing(1.5),
    border: 'none',
    background: 'none'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default footerStyles;
