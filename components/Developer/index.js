import React from 'react';
import general from "../../asset/style/general.scss";
import grid from '../../asset/style/grid.scss';
import css from './style.scss';

// import Image
import Image_one from '../../asset/image/guys/sina.png';
import Image_two from '../../asset/image/guys/ali.jpg';
import Image_three from '../../asset/image/guys/sdg.jpg';
import Image_four from '../../asset/image/guys/farshid.jpg';

const Developer = (props) => {
    let mock_developer = [
        {
            image: Image_two,
            title: 'ali sameni',
            subtitle: 'back-end developer'
        },
        {
            image: Image_four,
            title: 'fr keymanesh',
            subtitle: 'UI / UX designer'
        },
        {
            image: Image_three,
            title: 'mreza sadeghi',
            subtitle: 'front-end developer'
        },
        {
            image: Image_one,
            title: 'sina zeini',
            subtitle: 'front-end developer'
        }
    ];

    return (
        <div className={css.developersWrapper}>
            <h4 className={css.mainTitle}>our team <span className={general.count}>(5)</span></h4>
            <ul className={css.step}>
                {
                    mock_developer.map((eachItem, index) => {
                        return (
                            <li className={css.item} key={index}>
                                <div className={css.developerBox}>
                                    <img src={eachItem.image} alt=""/>
                                </div>
                                <h5 className={css.title}>{eachItem.title}</h5>
                                <h5 className={css.subTitle}>{eachItem.subtitle}</h5>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default Developer;