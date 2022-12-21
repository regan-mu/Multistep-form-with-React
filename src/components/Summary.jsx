import { useEffect, useState } from "react";
import uniqid from "uniqid";
import "./formStyle.css";
// import Plans from "./Plans";
// import useMultipleStepForm from "../useMutliStepForm";

const Summary = ({subscription, addons, payment}) => {
    const sumAmount = () => {
        let addonsSum = 0
        addons.forEach(add => {
            !payment ? addonsSum += add.monthly : addonsSum += add.annual
        });
        const planAmount = !payment ? subscription.monthly : subscription.annual
        return planAmount + addonsSum
    }
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount(sumAmount());
    }, []);
    return (
        <>
            <div className="form__main-page-top">
                <h2>Finishing Up</h2>
                <p>Double check everything looks OK before confirming.</p>
            </div>
            <div className="form__main-summary">
                <div className="form__summary-item sub">
                    <div className="form__subscription">
                        <p>{`${subscription.plan} ${!payment ? "(Monthly)" : "(Yearly)"}`}</p>
                        <p className="change">Change</p>
                    </div>
                    <h4>${ !payment ? `${subscription.monthly}/mo` : `${subscription.annual}/yr`}</h4>
                </div>
                {addons.map(add => {
                    return (
                        <div className="form__summary-item addons" key={uniqid()}>
                            <p>{add.addon}</p>
                            <p className="amount">+${!payment ? `${add.monthly}/mo` : `${add.annual}/yr`}</p>
                        </div>
                    )
                })}
                <div className="form__summary-item total">
                    <p> {`Total (per ${!payment ? "month" : "year"})`} </p>
                    <p className="total-amount"> {`$${totalAmount}/`}{!payment ? "mo" : "yr"} </p>
                </div>
            </div>
        </>
    )
}

export default Summary;