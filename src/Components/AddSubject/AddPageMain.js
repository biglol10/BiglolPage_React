import React, {useState, useEffect} from 'react';
import './AddPageMain.css';
import './react-popupbox.css';
import { useStateValue } from '../../StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import AddPagePointer from './AddPagePointer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddSkill from './AddSkill';
import AddProject from './AddProject';
import { Timer10TwoTone } from '@material-ui/icons';
import AddCourse from './AddCourse';


function AddPageMain() {

    const [{jwt_token}, dispatch] = useStateValue();

    const history = useHistory();

    const [itemAttribute, setItemAttribute] = useState({});

    const openPopupbox = () => {
        const content = (
            <div>
                <p className="quotes">Unauthorized Access</p><br/><hr/><br/>
                <p className="quotes">There is no proper JWT Token</p>
                <p className="quotes">You should Login before you add something</p>
                <span className="quotes-from">― Biglol</span>
            </div>
        )
        PopupboxManager.open({ content })
    }

    const handleChange = (event) => {
        setItemAttribute({...itemAttribute, [event.target.name] : event.target.value});
    }

    
    const backgrounds = [
        `radial-gradient(#2B3760, #0B1023)`,
        `radial-gradient(#4E3022, #161616)`,
        `radial-gradient(#4E4342, #161616)`
    ];
    
    const [current, setCurrent] = useState(0);

    const nextSlide = (pageNumber) => {
        const slides = document.querySelectorAll(".slide");
        const pages = document.querySelectorAll(".addPage");
        pageNumber-=1;
        const nextPage = pages[pageNumber];
        const currentPage = pages[current];
        const nextForm = nextPage.querySelector('form');
        const currentForm = currentPage.querySelector('form');
        const nextText = nextPage.querySelector('.details');
        
        // since there is no import for this specific one, use window.
        const tl = new window.TimelineMax({
            onStart: function(){
                slides.forEach(slide => {
                    slide.style.pointerEvents = "none"
                })
            },
            onComplete: function(){
                slides.forEach(slide => {
                    slide.style.pointerEvents = "all";
                })
            }
        })

        tl.fromTo(currentForm, 0.3, { y: '0%'}, {y: '-200%'})
          .fromTo(currentPage, 0.3, {opacity: 1, pointerEvents: 'all'}, { opacity: 0, pointerEvents: 'none'})
          .fromTo(nextPage, 0.3, {opacity: 0, pointerEvents: 'none'}, {opacity: 1, pointerEvents:'all'}, "-=0.5")
          .to(nextPage, 0.3, { backgroundImage: backgrounds[pageNumber]}, '-=0.2')
          .fromTo(nextForm, 0.3, {y: '-200%'}, {y: '0%'}, '-=0.2')
        setCurrent(pageNumber);
    }

    useEffect(()=>{
        if(jwt_token){
            // alert("You do not have proper authentication");
            openPopupbox();
            setTimeout(function() {
                history.push('/');
            }, 3000);
        }
    },[])

    return (
        <div className="addPageMain">
            {
                <PopupboxContainer />
            }
            {
                !jwt_token && (
                    <main>
                        <AddSkill/>
                        <AddProject/>
                        <AddCourse/>
                    </main>
                )
            }
            <AddPagePointer changeDots={nextSlide}/>
        </div>
    )
}

export default AddPageMain
