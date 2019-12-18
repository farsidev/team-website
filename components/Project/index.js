import React from 'react';
import general from '../../asset/style/general.scss';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';

// const rootDir = require('../../util/path');
const animateColor = () => {
   setInterval(() => {
      index++;
      index <= lengthHiddenProject
         ? setCountProject(index)
         : clearInterval(refInetervalID.current);
   }, 100);
};
//
import {useDetailProjectDispatch} from '../../hooks/useDetailProjectDipatch';

const Project = () => {
   const dispatchDetail = useDetailProjectDispatch();
   const [activeClass, setActiveClass] = React.useState(0);
   const [countProject, setCountProject] = React.useState(0);
   const [showMore, setShowMore] = React.useState(false);
   const refContainer = React.useRef(null);
   const refShowMore = React.useRef(null);
   const refInetervalID = React.useRef(null);
   // let inetervalID;

   // const scrollToRef = (ref) => window.scrollTo(0, refContainer.current.offsetTop)

   let mock_project = [
      {
         icon: 'e.',
         title: 'exhibition',
         bg: 'linear-gradient(  45deg,#2b2d42, #37114d )',
         detail: {
            logo: '/static/exhibition.png',
            title: 'iran international exhibition',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'expotik.com',
            url_address: 'https://www.expotik.com',
            cover: '/static/image/wallpaper/expo.png',
            devices: [
               {
                  img: '/static/image/icon/android.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/react.svg',
                  title: 'react js',
               },
               {
                  img: '/static/image/icon/nodejs.svg',
                  title: 'node js',
               },
               {
                  img: '/static/image/icon/antd.svg',
                  title: 'ant design',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
               {
                  img: '/static/image/guys/sina.png',
                  title: 'sina zeini',
               },
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'ali sameni',
               },
               {
                  img: '/static/image/guys/farshid.jpg',
                  title: 'farshid keymanesh',
               },
            ],
         },
      },
      {
         icon: 'm.',
         title: 'moneyz',
         bg: 'linear-gradient(45deg, #7EA654, #2F6651)',
         detail: {
            logo: '/static/moneyz.svg',
            title: 'moneyz',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'moneyz.com',
            url_address: 'https://www.moneyz.com',
            cover: '/static/image/wallpaper/moneyz.png',
            devices: [
               {
                  img: '/static/image/icon/android.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/react.svg',
                  title: 'react js',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
               {
                  img: '/static/image/guys/sina.png',
                  title: 'sina zeini',
               },
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'ali sameni',
               },
               {
                  img: '/static/image/guys/farshid.jpg',
                  title: 'farshid keymanesh',
               },
            ],
         },
      },
      {
         icon: 'b.',
         title: 'besparo',
         bg: 'linear-gradient(45deg, #232526, #414345)',
         detail: {
            logo: '/static/besparo.png',
            title: 'besparo',
            is_active: 1,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'besparo.com',
            url_address: 'https://www.besparo.com',
            cover: '/static/image/wallpaper/besparo.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/react.svg',
                  title: 'react js',
               },
               {
                  img: '/static/image/icon/nodejs.svg',
                  title: 'node js',
               },
               {
                  img: '/static/image/icon/antd.svg',
                  title: 'ant design',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
               {
                  img: '/static/image/guys/sina.png',
                  title: 'sina zeini',
               },
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'ali sameni',
               },
               {
                  img: '/static/image/guys/farshid.jpg',
                  title: 'farshid keymanesh',
               },
            ],
         },
      },
      {
         icon: 'a.',
         title: 'ahali',
         bg:
            'linear-gradient( 89deg,  rgba(21,74,189,1) 0.1%, rgba(26,138,211,1) 51.5%, rgba(72,177,234,1) 100.2% )',
         detail: {
            logo: '/static/ahali.svg',
            title: 'ahali',
            is_active: 1,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'ahali.com',
            url_address: 'https://www.ahali.com',
            cover: '/static/image/wallpaper/ahali.jpeg',
            devices: [
               {
                  img: '/static/image/icon/android.svg',
                  title: 'android application',
               },
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/react.svg',
                  title: 'react js',
               },
               {
                  img: '/static/image/icon/nodejs.svg',
                  title: 'node js',
               },
               {
                  img: '/static/image/icon/antd.svg',
                  title: 'ant design',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
               {
                  img: '/static/image/guys/sina.png',
                  title: 'sina zeini',
               },
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'ali sameni',
               },
               {
                  img: '/static/image/guys/farshid.jpg',
                  title: 'farshid keymanesh',
               },
            ],
         },
      },
      {
         icon: 's.',
         title: 'social media',
         bg: 'linear-gradient(45deg, #4a00e0, #8e2de2)',
         detail: {
            logo: '/static/social.png',
            title: 'social media',
            is_active: 1,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'expotik.com',
            url_address: 'https://expotik.com/',
            cover: '/static/image/wallpaper/social.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/react.svg',
                  title: 'react js',
               },
               {
                  img: '/static/image/icon/nodejs.svg',
                  title: 'node js',
               },
               {
                  img: '/static/image/icon/webpack.svg',
                  title: 'webpack',
               },
               {
                  img: '/static/image/icon/antd.svg',
                  title: 'ant design',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
               {
                  img: '/static/image/guys/sina.png',
                  title: 'sina zeini',
               },
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'ali sameni',
               },
               {
                  img: '/static/image/guys/farshid.jpg',
                  title: 'farshid keymanesh',
               },
            ],
         },
      },
      {
         title: 'more',
         detail: 'hasMore',
      },
      {
         icon: 'm.',
         title: 'mahan',
         bg: 'linear-gradient(45deg, #134E5E, #71B280)',
         detail: {
            logo: '/static/mahan.png',
            title: 'bimeh mahan',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'bimemahan.com',
            url_address: 'https://bimemahan.com/',
            cover: '/static/image/wallpaper/mahan.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/react.svg',
                  title: 'react js',
               },
               {
                  img: '/static/image/icon/webpack.svg',
                  title: 'webpack',
               },
               {
                  img: '/static/image/icon/antd.svg',
                  title: 'ant design',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
            ],
         },
      },
      {
         icon: 't.',
         title: 'tiktrip',
         bg: 'linear-gradient(45deg, #fc4a1a, #f7b733)',
         detail: {
            logo: '/static/tiktrip.svg',
            title: 'tiktrip',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'tiktrip.com',
            url_address: 'https://tiktrip.com/',
            cover: '/static/image/wallpaper/tiktrip.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'ali sameni',
               },
               {
                  img: '/static/image/guys/sina.png',
                  title: 'sina zeini',
               },
            ],
         },
      },
      {
         icon: 'm.',
         title: 'markiz center',
         bg: 'linear-gradient(45deg, #C49950, #4A9E8D)',
         detail: {
            logo: '/static/markiz.png',
            title: 'markiz center',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'markizcenter.com',
            url_address: 'https://markizcenter.com/',
            cover: '/static/image/wallpaper/markiz.jpg',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sina.png',
                  title: 'sina zeini',
               },
            ],
         },
      },
      {
         icon: 't.',
         title: 'tak setareh',
         bg: 'linear-gradient(45deg, #0F2027, #2C5364)',
         detail: {
            logo: '/static/setareh.jpg',
            title: 'tak setareh golpaygan',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'tsg.co.ir',
            url_address: 'http://www.tsg.co.ir/',
            cover: '/static/image/wallpaper/setareh.jpg',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sina.png',
                  title: 'sina zeini',
               },
            ],
         },
      },
      {
         icon: 'p.',
         title: 'partonab',
         bg: 'linear-gradient(45deg, #1e3c72, #2a5298)',
         detail: {
            logo: '/static/partonab.png',
            title: 'partonab electronic',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'partonab.com',
            url_address: 'http://partonab.com/',
            cover: '/static/image/wallpaper/partonab.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sina.png',
                  title: 'sina zeini',
               },
            ],
         },
      },
      {
         icon: 'a.',
         title: 'acharcharkh',
         bg: 'linear-gradient(45deg, #457fca, #5691c8)',
         detail: {
            logo: '/static/achar.png',
            title: 'acharcharkh',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'acharcharkh.com',
            url_address: 'http://acharcharkh.com/',
            cover: '/static/image/wallpaper/achar.jpg',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sina.png',
                  title: 'sina zeini',
               },
            ],
         },
      },
      {
         icon: 'k.',
         title: 'katakala',
         bg: 'linear-gradient(45deg, #76b852, #8DC26F)',
         detail: {
            logo: '/static/katakala.jpg',
            title: 'katakala online shopping',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'katakala.com',
            url_address: 'http://katakala.com/',
            cover: '/static/image/wallpaper/katakala.jpg',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sina.png',
                  title: 'sina zeini',
               },
            ],
         },
      },
      {
         icon: 'r.',
         title: 'aftab',
         bg: 'linear-gradient(45deg, #B79891, #94716B)',
         detail: {
            logo: '/static/aftab.png',
            title: 'resaneh aftab',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'rasane-aftab.ir',
            url_address: 'http://rasane-aftab.ir/',
            cover: '/static/image/wallpaper/aftab.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
            ],
         },
      },
      {
         icon: 'c.',
         title: 'conf paper',
         bg: 'linear-gradient(45deg, #283048, #859398)',
         detail: {
            logo: '/static/conf.jpg',
            title: 'conf paper',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'confpaper.com',
            url_address: 'http://confpaper.com/',
            cover: '/static/image/wallpaper/conf.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
            ],
         },
      },
      {
         icon: 'a.',
         title: 'aras book',
         bg: 'linear-gradient(45deg, #ff9966, #ff5e62)',
         detail: {
            logo: '/static/aras.png',
            title: 'aras book',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'arasbooks.com',
            url_address: 'http://arasbooks.com/',
            cover: '/static/image/wallpaper/aras.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
            ],
         },
      },
      {
         icon: 'm.',
         title: 'magazine',
         bg: 'linear-gradient(45deg, #1D2B64, #F8CDDA)',
         detail: {
            logo: '/static/car.svg',
            title: 'car magazine',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'carmagazine.com',
            url_address: 'http://carmagazine.com/',
            cover: '/static/image/wallpaper/car.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
            ],
         },
      },
      {
         icon: 'd.',
         title: '3dinga',
         bg: 'linear-gradient(45deg, #59C173, #a17fe0, #5D26C1)',
         detail: {
            logo: '/static/dinga.svg',
            title: '3dinga',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: '3dinga.com',
            url_address: 'https://3dinga.com/',
            cover: '/static/image/wallpaper/dinga.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'ali sameni',
               },
            ],
         },
      },
      {
         icon: 'j.',
         title: 'jaabook',
         bg: 'linear-gradient(45deg, #153B43, #DC9E2D)',
         detail: {
            logo: '/static/jaabook.svg',
            title: 'jaabook',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'jaabook.com',
            url_address: 'http://jaabook.com/',
            cover: '/static/image/wallpaper/jaabook.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
            ],
         },
      },
      {
         icon: 'a.',
         title: 'amaday',
         bg: 'linear-gradient(45deg, #83657F, #AACF74)',
         detail: {
            logo: '/static/amaday.jpg',
            title: 'amaday',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'amaday.com',
            url_address: 'http://amaday.com/',
            cover: '/static/image/wallpaper/amaday.jpg',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
            ],
         },
      },
      {
         icon: 't.',
         title: 'tamsofa',
         bg: 'linear-gradient(45deg, #1C1636, #cbb4d4)',
         detail: {
            logo: '/static/tamsofa.svg',
            title: 'tamsofa',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'tamsofa.com',
            url_address: 'https://tamsofa.com/',
            cover: '/static/image/wallpaper/tamsofa.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
            ],
         },
      },
      {
         icon: 'd.',
         title: 'dokme',
         bg: 'linear-gradient(45deg, #bc4e9c, #f80759)',
         detail: {
            logo: '/static/dokme.png',
            title: 'dokme',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'dokme.com',
            url_address: 'https://dokme.com/',
            cover: '/static/image/wallpaper/dokme.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'ali sameni',
               },
            ],
         },
      },
      {
         icon: 'k.',
         title: 'kiket',
         bg: 'linear-gradient(45deg, #B4502D, #ED8F03)',
         detail: {
            logo: '/static/kiket.png',
            title: 'kiket',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'kiket.com',
            url_address: 'https://kiket.com/',
            cover: '/static/image/wallpaper/kiket.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'ali sameni',
               },
            ],
         },
      },
      {
         icon: 'k.',
         title: 'kamand',
         bg: 'linear-gradient(45deg, #E0B74D, #1D0C02)',
         detail: {
            logo: '/static/kamand.png',
            title: 'kamand salon',
            is_active: 0,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'kamandsalon.com',
            url_address: 'http://kamandsalon.com/',
            cover: '/static/image/wallpaper/kamand.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/html-5.svg',
                  title: 'html5',
               },
               {
                  img: '/static/image/icon/css-3.svg',
                  title: 'css3',
               },
               {
                  img: '/static/image/icon/javascript.svg',
                  title: 'javascript',
               },
               {
                  img: '/static/image/icon/laravel.svg',
                  title: 'laravel',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'ali sameni',
               },
            ],
         },
      },
   ];
   React.useEffect(() => {
      let lengthVisibleProject = 5;
      let lengthHiddenProject = mock_project.length - lengthVisibleProject;
      let index = 0;
      refInetervalID.current = setInterval(() => {
         index++;
         index <= lengthHiddenProject
            ? setCountProject(index)
            : clearInterval(refInetervalID.current);
      }, 100);
   }, []);

   let mock_progress = [
      {
         logo: '/static/social.png',
         title: 'social media',
         bg: 'linear-gradient(45deg, #4a00e0, #8e2de2)',
         description:
            'To use more sophisticated CSS-in-JS solutions, you typically have to implement\n' +
            '                                        style',
         detail: {
            logo: '/static/social.png',
            title: 'social media',
            is_active: 1,
            description:
               'It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your.',
            url_text: 'expotik.com',
            url_address: 'https://www.expotik.com',
            cover: '/static/image/wallpaper/social.png',
            devices: [
               {
                  img: '/static/image/icon/laptop.svg',
                  title: 'website',
               },
            ],
            technologies: [
               {
                  img: '/static/image/icon/react.svg',
                  title: 'react js',
               },
               {
                  img: '/static/image/icon/nodejs.svg',
                  title: 'node js',
               },
               {
                  img: '/static/image/icon/antd.svg',
                  title: 'ant design',
               },
            ],
            developers: [
               {
                  img: '/static/image/guys/sdg.jpg',
                  title: 'mohammadreza sadeghi',
               },
               {
                  img: '/static/image/guys/sina.png',
                  title: 'sina zeini',
               },
               {
                  img: '/static/image/guys/ali.jpg',
                  title: 'ali sameni',
               },
               {
                  img: '/static/image/guys/farshid.jpg',
                  title: 'farshid keymanesh',
               },
            ],
         },
      },
   ];
   const handleClick = (detail, bg, i) => {
      // console.log(detail);
      document.body.style.background = bg;
      dispatchDetail(detail);
      setActiveClass(i);
   };
   const handleShowMore = () => {
      setShowMore(true);
      refContainer.current.scrollIntoView({block: 'end', behavior: 'smooth'});
      refShowMore.current.style.display = 'none';
      setCountProject(mock_project.length);
      // refContainer.current.scrollTo(refContainer.current.clientHeight);
   };
   return (
      <div className={`${grid.row} ${grid.flexWrap} ${css.wrapper}`}>
         <div className={css.leftSide}>
            <h4 className={css.mainTitle}>
               projects{' '}
               <span className={general.count}>({mock_project.length})</span>
            </h4>
            <ul className={`${css.step} ${showMore ? css.hasMore : ''}`}>
               {mock_project.map((eachItem, index) => {
                  return eachItem.detail === 'hasMore' ? (
                     <li
                        className={`${css.item} ${css.more}`}
                        key={index}
                        ref={refShowMore}>
                        <a onClick={handleShowMore}>
                           <div className={css.projectBox}>
                              <h3 className={css.icon}>{countProject}+</h3>
                           </div>
                           <h4 className={css.title}>{eachItem.title}</h4>
                        </a>
                     </li>
                  ) : (
                     <li className={css.item} key={index}>
                        <a
                           onClick={() =>
                              handleClick(eachItem.detail, eachItem.bg, index)
                           }
                           className={activeClass === index ? css.active : ''}>
                           <div className={css.projectBox}>
                              <h3 className={css.icon}>{eachItem.icon}</h3>
                           </div>
                           <h4 className={css.title}>{eachItem.title}</h4>
                        </a>
                     </li>
                  );
               })}
               <li ref={refContainer} />
            </ul>
         </div>
         <div className={css.rightSide}>
            <h4 className={css.mainTitle}>
               in progress... <span className={general.count}>(1)</span>
            </h4>
            <ul>
               {mock_progress.map((eachItem, index) => {
                  return (
                     <li key={index}>
                        <a
                           onClick={() =>
                              handleClick(eachItem.detail, eachItem.bg)
                           }>
                           <div className={css.progressBox}>
                              <div
                                 className={`${grid.row} ${grid.alignItemsCenter}`}>
                                 <div className={css.progressLogo}>
                                    <img src={eachItem.logo} alt="" />
                                 </div>
                                 <div className={css.progressDescription}>
                                    <h4>{eachItem.title}</h4>
                                    <p>{eachItem.description}</p>
                                 </div>
                              </div>
                           </div>
                        </a>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

export default Project;
