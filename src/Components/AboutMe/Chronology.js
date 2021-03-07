import React from 'react';
import './Chronology.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Chronology() {
    return (
        <div className="chronology">
            <p className="compYear">
                2010
            </p>
            <p className="compCircle"><FiberManualRecordIcon/></p>
            <div className="arrowLine">
                <hr style={{borderTop: "dotted 3px black"}} />
                >
            </div>
            <div class="myarrow">
  <span class="arrow left"></span>
  <span class="line"></span>
  <span class="arrow right"></span>
</div>
                
            <div className="compContent">
                <span>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
                
            </div>
        </div>
    )
}

export default Chronology
