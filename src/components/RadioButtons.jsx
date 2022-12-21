const RadioButton = ({handlePlans, checkedPlan, plan, amount, icon}) => {
    return (
        <div className="form__field">
            <label htmlFor={plan}>
                <img src={icon} />
                <div>
                    <h4>{plan}</h4>
                    <p>{amount}</p>
                </div>
                <input name="plan" onChange={handlePlans} checked = {checkedPlan.plan === plan} value={plan} id={plan} type="radio"/>
            </label>
        </div>
    )
}

export default RadioButton;