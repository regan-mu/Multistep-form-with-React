import "./mainpage.css";
import useMultipleStepForm from "../../useMutliStepForm";
import { subscriptions, addonsData } from "../../data";
import { PersonalInfo, Plans, Addons, Summary } from "../../components";
import { useState } from "react";
import thankyou from "../../assets/icon-thank-you.svg";

const INITIAL_DATA = {
    name: "",
    email: "",
    phone: "",
    subscription: {},
    addons: []
}

const MainPage = ({changeStep}) => {
    const [ formData, setFormData ] = useState(INITIAL_DATA);
    const [annual, setAnnual] = useState(false);
    const [addonArray, setAddonArray] = useState([]);
    const [checkedPlan, setCheckedPlan] = useState({
        plan: "",
        monthly: "",
        annual: "",
        icon: ""
    });
    const [showSalutation, setShowSalutation] = useState(false);

    // handle radio button clicks
    const handlePlans = (e) => {
        const selectedPlan = subscriptions.filter(sub => {
            return sub.plan === e.target.value;
        });
        setCheckedPlan(selectedPlan[0]);
    }

    // Handle addon checkboxes
    const handleAddons = (e) => {
        const addonItem = addonsData.filter(add => {
            return add.addon === e.target.value;
        });
        setAddonArray(prev => {
            if (e.target.checked) {
                if (addonArray.includes(addonItem[0])) {
                    return prev
                } else {
                    return [...prev, addonItem[0]]
                }
            } else {
                return prev.filter(item => {
                    return item !== addonItem[0]
                })
            }
            
        });
    }

    const updateFields = (fields) => {
        setFormData(prev => {
          return {...prev, ...fields}
        });
    }
    const changePayment = (annual) => {
        setAnnual(!annual)
    }

    const {currentStepIndex, next, back, step, isFirst, isLast} = useMultipleStepForm(
        [
            <PersonalInfo {...formData} changeStep={changeStep} updatefields={updateFields} />,
            <Plans {...formData} payment={annual} checkedPlan={checkedPlan} handlePlans={handlePlans} updatefields={updateFields} changePayment={changePayment} />,
            <Addons {...formData} payment={annual} updatefields={updateFields} addonArray={addonArray} handleAddons={handleAddons} />,
            <Summary {...formData} payment={annual} />
        ]
    )
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isLast) {
            next();
          } else {
            setShowSalutation(!showSalutation);
        }
    }
    
    // Update the sidebar
    changeStep(currentStepIndex+1);

    return (
        <div className="form__main-page">
            <form onSubmit={handleSubmit}>
                {step}
                <div className="buttons">
                    {!isFirst && <button className="back" type="button" onClick={back}>Back</button>}
                    <button className={!isLast ? "next" : "next confirm"} type="submit" >{!isLast ? "Next Step" : "Confirm"}</button>
                </div>
            </form>
            {showSalutation ? 
                <div className="salutation">
                    <img src={thankyou} alt="" />
                    <h3>Thank you</h3>
                    <p>
                        Thank you for confirming your subscription. We hope you have fun using our platform.
                        If you ever need support please feel free to email us at support@loremgaming.com
                    </p>
                </div> : null
            }
        </div>
    )
}

export default MainPage;