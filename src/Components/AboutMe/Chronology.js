import React from 'react';
import './Chronology.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Chronology_Const from './AboutConstVariable';

function Chronology({year, circleColor}) {

    return (
        <div className="chronology">
            <strong className="compYear">
                {year}
            </strong>
            <p className="compCircle" style={{color:circleColor}}><FiberManualRecordIcon/></p>
            <div className="arrowLine">
                <hr style={{borderTop: "dotted 3px #E74C3C"}} />
                <i class="fas fa-angle-double-right"></i>
            </div>
                
            <div className="compContent">
                {
                    Chronology_Const[year].map((item, i) => (
                        <p><i class="fas fa-comment-dots"></i>{item}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Chronology
