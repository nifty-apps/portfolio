import React, { useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import Title from '../Title';
import BlogPostCard from '../Cards/BlogPost';
import useStyle from './blog-style';
import imgApi from '~/public/images/imgAPI';

const blogData = [
  {
    img: imgApi.photo[0],
    title: 'Mastering Responsive Web Design',
    desc: 'Explore the best practices and techniques for creating responsive web designs that look great on various devices.'
  },
  {
    img: imgApi.photo[1],
    title: 'Optimizing Performance in React.js Applications',
    desc: 'Learn effective strategies to optimize the performance of your React.js applications, from code splitting to lazy loading.'
  },
  {
    img: imgApi.photo[2],
    title: 'CSS-in-JS: A Comprehensive Guide',
    desc: 'Dive into the world of CSS-in-JS solutions and understand how they can enhance your styling workflow in front-end development.'
  },
  {
    img: imgApi.photo[3],
    title: 'Exploring the Latest Features in ESNext',
    desc: 'Stay up-to-date with the newest features introduced in the latest ECMAScript versions, and how they can be leveraged in your projects.'
  },
  {
    img: imgApi.photo[4],
    title: 'Building Scalable and Maintainable React Components',
    desc: 'Discover best practices and patterns for building scalable and maintainable React components to ensure a robust and flexible codebase.'
  },
  {
    img: imgApi.photo[5],
    title: 'The Future of Front-end: Trends to Watch',
    desc: 'Get insights into the emerging trends and technologies shaping the future of front-end development, from WebAssembly to Progressive Web Apps.'
  },
];

function Blog() {
  const slider = useRef(null);
  const { t } = useTranslation('common');

  const lastSlide = Math.floor(blogData.length - 2);
  const theme = useTheme();

  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const { classes, cx } = useStyle();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  if (theme.direction === 'rtl') {
    slider.current.slickGoTo(lastSlide);
  }

  return (
    <div className={classes.root}>
      <div className={classes.floatingTitle}>
        <Title>
          {t('profile-landing.blog_title')}
          &nbsp;
          <strong>
            {t('profile-landing.blog_titlebold')}
          </strong>
        </Title>
        <Typography gutterBottom className={text.paragraph}>
          {t('profile-landing.blog_desc')}
        </Typography>
        <Button className={classes.link} color="primary" href="#">ekram.blog.com</Button>
      </div>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <IconButton
            className={cx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
            size="large"
          >
            <i className="ion-ios-arrow-back" />
          </IconButton>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={cx(classes.item, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {blogData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <BlogPostCard
                  img={item.img}
                  title={item.title} 
                  desc={item.desc.slice(0,50)+'...'}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={cx(classes.item, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
          <IconButton
            className={cx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}
            size="large"
          >
            <i className="ion-ios-arrow-forward" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Blog;
