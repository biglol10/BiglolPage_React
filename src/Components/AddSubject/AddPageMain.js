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

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("ASDF");
    }

    const handleChange = (event) => {
        setItemAttribute({...itemAttribute, [event.target.name] : event.target.value});
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
                        
                    </main>
                )
            }
            <AddPagePointer/>
        </div>
    )
}

export default AddPageMain
