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

    const checkDecimalNumber = (num) => {    // send to child
        if(!isNaN(num)){
            if(num % 0.5 == 0)
                return true;
            else
                return false;
        }
        return false;
    }
    
    let current = 0;
    let scrollSlide = 0;

    const nextSlide = (pageNumber) => {
        scrollSlide = pageNumber;
        if(current == pageNumber) return;
        const slides = document.querySelectorAll(".slide");
        const pages = document.querySelectorAll(".addPage");
        
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

        // console.log(currentPage);
        // console.log(nextPage);

        tl.fromTo(currentForm, 0.3, { y: '0%'}, {y: '-200%'})
          .to(nextPage, 0.3, { backgroundImage: backgrounds[pageNumber]}, '-=0.2')
          .fromTo(currentPage, 0.3, {opacity: 1, pointerEvents: 'all'}, { opacity: 0, pointerEvents: 'none'})
          .fromTo(nextPage, 0.3, {opacity: 0, pointerEvents: 'none'}, {opacity: 1, pointerEvents:'all'}, "-=0.5")
          .fromTo(nextForm, 0.3, {y: '-200%'}, {y: '0%'}, '-=0.2')
          .set(currentPage, { clearProps: 'all'})
          .set(nextForm, { clearProps: 'all'})

        current = pageNumber;
    }

    const throttle = (func, limit) => {
        let inThrottle;
        return function(){
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        }
    }

    const changeDot = (dot) => {
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dot.classList.add('active');
    }

    const switchDots = (dotNumber) => {
        const slides = document.querySelectorAll('.slide');
        const activeDot = document.querySelectorAll(".slide")[dotNumber];
        slides.forEach(aSlide => {
            aSlide.classList.remove("active");
        });
        activeDot.classList.add("active");
    }
    
    const scrollChange = e => {
        if(e.deltaY > 0){
            scrollSlide += 1;
        }
        else{
            scrollSlide -= 1;
        }
        if(scrollSlide > 2){
            scrollSlide = 0;
        }
        if(scrollSlide < 0){
            scrollSlide = 2;
        }
        console.log(scrollSlide);
        nextSlide(scrollSlide);
        switchDots(scrollSlide);
    }

    useEffect(()=>{
        // const jwtToken = sessionStorage.getItem("jwt");
        if(!jwt_token){    // got from reducer
            // alert("You do not have proper authentication");
            openPopupbox();
        }

        // ******** This is necessary... if you do windows.addevent or document.addevent this will affect other components
        // ******** Be aware of this !!!!!!!!!! 
        const mainpage = document.getElementsByClassName('addPageMain')[0];
        // ******** Be aware of this !!!!!!!!!!

        const wheelEvent = mainpage.addEventListener('wheel', throttle(scrollChange, 1500));
        return () => {
            mainpage.removeEventListener('wheel', wheelEvent);
        }
    },[])

    return (
        <div className="addPageMain">
            {
                <PopupboxContainer />
            }
            <main>
                <AddSkill checkDecimal = {checkDecimalNumber}/>
                <AddProject checkDecimal = {checkDecimalNumber}/>
                <AddCourse checkDecimal = {checkDecimalNumber}/>
            </main>
            <AddPagePointer changeSlide={nextSlide} changeDot={changeDot}/>
        </div>
    )
}

export default AddPageMain
