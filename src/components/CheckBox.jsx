const CheckBox = ({addon, addonArray,amount, handleChecks}) => {
    return (
        <div className="form__field form__field--checkbox">
            <input checked={addonArray.includes(addon)} type="checkbox" onChange={handleChecks} name="addon" value={addon.addon} id={addon.id} />
            <label htmlFor={addon.id}>
                <h5>{addon.addon}</h5>
                <p>{addon.description}</p>
            </label>
            <p className="price">+{amount}</p>
        </div>
    )
}

export default CheckBox;