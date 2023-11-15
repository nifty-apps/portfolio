import { makeStyles } from 'tss-react/mui';
import { black } from '../../theme/palette';

const contactStyles = makeStyles({ uniqId: 'contact' })(theme => ({
  formWrap: {
    position: 'relative'
  },
  formBox: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7),
    },
    '&:before': {
      content: '""',
      left: -16,
      bottom: -16,
      width: '45%',
      height: '30%',
      border: '16px solid',
      borderImageSource: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
      borderImageSlice: 1,
      borderTop: 0,
      borderRight: 0,
      position: 'absolute'
    },
  },
  title: {
    textAlign: 'left',
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(3),
      position: 'relative'
    }
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3)
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
  },
  btnArea: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(0, 0, 3),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(3, 0, 0)
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color:black
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default contactStyles;
