import React, { Fragment, useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import ImageThumbCard from '../Cards/ImageThumb';
import Title from '../Title';
import useStyle from './gallery-style';
import { Link } from '@mui/material';

const portfolio = [
  {
    img: imgAPI.profile[3],
    title: 'Online Sports Acedamy',
    link: 'https://school-65c7c.web.app/',
    size: 'short',
    category: 'fronted+backend'
  },
  {
    img: imgAPI.profile[4],
    title: 'Drag & Drop Gallery',
    link: 'https://wondrous-creponne-1c7c55.netlify.app/',
    size: 'short',
    category: 'redux'
  },
  {
    img: imgAPI.profile[5],
    title: 'Online Restuarent System , pass: 121',
    link: 'https://spontaneous-taffy-e8d872.netlify.app/',
    size: 'short',
    category: 'fronted+backend'
  },
  {
    img: imgAPI.profile[6],
    title: 'Recipe Hunter',
    link: 'https://recipe-hunter-ad129.web.app/',
    size: 'long',
    category: 'fronted+backend'
  },


  {
    img: imgAPI.profile[8],
    title: 'Movie List Track ',
    link: 'https://wondrous-pie-ba5426.netlify.app/',
    size: 'short',
    category: 'typescript+graphql+redux'
  },
  {
    img: imgAPI.profile[9],
    title: 'Online Toy Markets',
    link: 'https://toy-new1.web.app/toy',
    size: 'short',
    category: 'fronted+backend'
  },
 

];

function Gallery() {
  const { classes, cx } = useStyle();
  const { t } = useTranslation('common');
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(true);
  const [filter, setFilter] = useState('all');
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  useEffect(() => {
    setData(portfolio);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  };

  const filterChildren = name => {
    if (name !== 'all') {
      const filteredData = portfolio.filter(item => item.category === name);
      setData(filteredData);
      setFilter(name);
    } else {
      setData(portfolio);
      setFilter('all');
    }

    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
    }, 700);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Title>
          {t('profile-landing.gallery_title')}
          <strong>
            {t('profile-landing.gallery_titleBold')}
          </strong>
        </Title>
        <div className={classes.filter}>
          <Button
            onClick={() => filterChildren('all')}
            className={filter === 'all' ? classes.selected : ''}
          >
            All
          </Button>
          <Button
            onClick={() => filterChildren('fronted+backend')}
            className={filter === 'fronted+backend' ? classes.selected : ''}
          >
          Fronted + Backend
          </Button>
          <Button
            onClick={() => filterChildren('redux')}
            className={filter === 'redux' ? classes.selected : ''}
          >
           Redux
          </Button>
          <Button
            onClick={() => filterChildren('typescript+graphql+redux')}
            className={filter === 'typescript+graphql+redux' ? classes.selected : ''}
          >
           Typescripts+Redux+Graphql
          </Button>
          {/* <Button
            onClick={() => filterChildren('cat4')}
            className={filter === 'cat4' ? classes.selected : ''}
          >
            Category 4
          </Button>
          <Button
            onClick={() => filterChildren('cat5')}
            className={filter === 'cat5' ? classes.selected : ''}
          >
            Category 5
          </Button> */}
        </div>
        {!isMobile ? (
  <Fragment>
    <div className={classes.massonry} >
      {data.map((item, index) => (
        <div
          className={cx(classes.item, isLoaded && classes.loaded)}
          key={index.toString()}
          style={{ transitionDuration: index / 4 + 's' }}
        >
          <Link style={{color:'black'}} href={item.link} target="_blank" rel="noopener noreferrer">
            <ImageThumbCard
              img={item.img}
              title={item.title}
              link={item.link}
              size={item.size}
            />
          </Link>
        </div>
      ))}
    </div>
    {data.length < 1 && <Typography variant="button" component="p" align="center">{t('profile-landing.gallery_nodata')}</Typography>}
  </Fragment>
) : (
  <Carousel {...settings} >
    {data.map((item, index) => (
      <div
        className={classes.itemCarousel}
        key={index.toString()}
      >
        <Link  href={item.link} target="_blank" rel="noopener noreferrer">
          <ImageThumbCard
            img={item.img}
            title={item.title}
            link={item.link}
            size={item.size}
          />
        </Link>
      </div>
    ))}
  </Carousel>
)}

      </Container>
    </div>
  );
}

export default Gallery;
