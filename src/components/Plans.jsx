import { subscriptions } from "../data";
import RadioButton from "./RadioButtons";
import uniqid from "uniqid";
import { useEffect } from "react";

const Plans = ({payment, changePayment, updatefields, checkedPlan, handlePlans}) => {

    useEffect(() => {
        updatefields({subscription: checkedPlan});
    }, [checkedPlan])

    return (
        <>
            <div className="form__main-page-top">
                <h2>Select your plan.</h2>
                <p>You have monthly or annual billing options.</p>
            </div>
            <div className="form__group form__group--checkbox" >
                {subscriptions.map(sub => {return <RadioButton 
                    key={uniqid()} 
                    handlePlans={handlePlans}
                    plan={sub.plan}
                    icon={sub.icon}
                    checkedPlan={checkedPlan}
                    amount={!payment ? `$ ${sub.monthly}/mo`: `$ ${sub.annual}/yr`}/>})
                }
            </div>
            <div className="toggle">
                <h5 className={ payment ? "blur" : null}>Monthly</h5>
                <div className= {!payment ? "switch" : "switch clicked"} onClick={() => {changePayment(payment)}}>
                    <div className="slider"></div>
                </div>
                <h5 className={ !payment ? "blur" : null}>Annual</h5>
            </div>
        </>
    )
}

export default Plans;