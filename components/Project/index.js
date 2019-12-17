import React from 'react';
import general from '../../asset/style/general.scss';
import grid from '../../asset/style/grid.scss';
import css from './style.scss';

// const rootDir = require('../../util/path');

//
import {useDetailProjectDispatch} from '../../hooks/useDetailProjectDipatch';

const Project = () => {
   const dispatchDetail = useDetailProjectDispatch();
   const [activeClass, setActiveClass] = React.useState(0);
   const [countProject, setCountProject] = React.useState(0);
   const [showMore, setShowMore] = React.useState(false);
   const refContainer = React.useRef(null);
   // const scrollToRef = (ref) => window.scrollTo(0, refContainer.current.offsetTop)

   let mock_project = [
      {
         icon: 'e.',
         title: 'exhibition',
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
      setCountProject(mock_project.length);
   }, [mock_project]);
   let mock_progress = [
      {
         logo: '/static/social.png',
         title: 'social media',
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
   const handleClick = (detail, i) => {
      // console.log(detail);
      dispatchDetail(detail);
      setActiveClass(i);
   };
   const handleShowMore = () => {
      setShowMore(true);
      refContainer.current.scrollIntoView({block: 'end', behavior: 'smooth'});
      // refContainer.current.scrollTo(refContainer.current.clientHeight);
   };
   return (
      <div className={`${grid.row} ${grid.flexWrap} ${css.wrapper}`}>
         <div className={css.leftSide}>
            <h4 className={css.mainTitle}>
               projects <span className={general.count}>({countProject})</span>
            </h4>
            <ul className={`${css.step} ${showMore ? css.hasMore : ''}`}>
               {mock_project.map((eachItem, index) => {
                  return eachItem.detail === 'hasMore' ? (
                     <li className={`${css.item} ${css.more}`} key={index}>
                        <a onClick={handleShowMore}>
                           <div className={css.projectBox}>
                              <h3 className={css.icon}>{countProject - 5}+</h3>
                           </div>
                           <h4 className={css.title}>{eachItem.title}</h4>
                        </a>
                     </li>
                  ) : (
                     <li className={css.item} key={index}>
                        <a
                           onClick={() => handleClick(eachItem.detail, index)}
                           className={activeClass === index ? css.active : ''}>
                           <div className={css.projectBox}>
                              <h3 className={css.icon}>{eachItem.icon}</h3>
                           </div>
                           <h4 className={css.title}>{eachItem.title}</h4>
                        </a>
                     </li>
                  );
               })}
               <span ref={refContainer} />
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
                        <a onClick={() => handleClick(eachItem.detail)}>
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
