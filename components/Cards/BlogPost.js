import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

function BlogPost(props) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const { img, title, desc } = props;

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Paper className={classes.post}>
        <figure>
          <img src={img} alt="thumb" />
        </figure>
        <div className={classes.text}>
          <Typography variant="h5" className={text.subtitle2}>
            {title}
          </Typography>
          <Typography style={{color:'black'}} display="block" component="p" className={text.paragraph}>
            {desc.slice(0, 50) + '...'}
          </Typography>
        </div>
        <Button
          onClick={openModal}
          style={{color:'blue'}}
          className={classes.readmore}
          classes={{
            root: classes.rootReadmore,
            text: classes.textReadmore,
          }}
        >
          {t('profile-landing.read_more')}
        </Button>
      </Paper>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div style={{ padding: '20px', overflow: 'auto' }}>
          <Typography variant="h6" id="modal-title">
            {title}
          </Typography>
          <Typography id="modal-description">{desc}</Typography>
          <DialogActions>
            <Button onClick={closeModal}  style={{color:'blue' ,border:'2px solid blue' ,padding:'2px' ,}}>
              Close
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
}

BlogPost.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default BlogPost;
