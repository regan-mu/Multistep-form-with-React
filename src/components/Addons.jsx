import CheckBox from "./CheckBox";
import { addonsData } from "../data";
import uniqid from "uniqid"
import { useState, useEffect } from "react";

const Addons = ({payment, updatefields, addonArray, handleAddons}) => {
    
    useEffect(() => {
        updatefields({addons: addonArray});
    }, [addonArray]);
    return (
        <>
            <div className="form__main-page-top">
                <h2>Pick add-ons</h2>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="form__group">
                {addonsData.map(add => {return <CheckBox 
                    key={uniqid()}
                    addon={add}
                    addonArray={addonArray}
                    handleChecks={handleAddons}
                    amount={!payment ? `$${add.monthly}/mo`: `$${add.annual}/yr`}
                    />})
                }
            </div>
            
        </>
    )
}

export default Addons;