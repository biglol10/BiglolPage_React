import React from 'react';
import './IntroComponent.css';
import LogoJs from '../Images/Skills/logo-js.png';
import LogoReact from '../Images/Skills/logo-react.png';
import LogoHtml from '../Images/Skills/logo-html-5.png';
import LogoJquery from '../Images/Skills/logo-jquery.png';
import LogoCss from '../Images/Skills/logo-css.png';
import LogoAspnet from '../Images/Skills/logo-aspnet.png';
import LogoSpringBoot from '../Images/Skills/logo-springboot.png';

import logo_skills from './HomeConstVariable';
import ItemImage from './ItemImage';
import { Link, useHistory } from 'react-router-dom';
import { HistoryOutlined } from '@material-ui/icons';

function IntroComponent({variant}) {
    const history = useHistory();

    const moveToDetails = e => {
        e.preventDefault();
        if(variant == 'Skills')
            history.push('/skills');
        else if(variant == 'Clone/Projects')
            history.push('/projects');
        else if(variant == 'AboutMe')
            history.push('/about');
        else
            history.push('/');
    }

    // console.log(variant);
    return (
        <div className="introComponent">
            <div className="introComponent_info">
                <p>{variant}</p>
                <div className="comp_lists">
                    {variant != '' && 
                        logo_skills[variant].map((item, index) => (
                            <div className="itemList">
                                <img src={item.img_url} alt={item.item_name}/>
                                <div className="item_desc">{item.item_name}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button onClick={moveToDetails}>See Details</button>
        </div>
    )
}

export default IntroComponent
