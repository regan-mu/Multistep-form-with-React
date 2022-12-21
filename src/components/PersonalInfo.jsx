import "./formStyle.css";

const PersonalInfo = ({name, email, phone, updatefields}) => {
    return (
        <>
            <div className="form__main-page-top">
                <h2>Personal Info</h2>
                <p>Please provide name, email addreess and phone number</p>
            </div>
            <div className="form__group">
                <div className="form__field">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} onChange={e => {updatefields({name: e.target.value})}} required placeholder="John Doe" id="name"/>
                </div>
                <div className="form__field">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={e => {updatefields({email: e.target.value})}} required placeholder="john.doe@email.com" id="email" />
                </div>
                <div className="form__field">
                    <label htmlFor="mobile">Phone Number</label>
                    <input type="text" value={phone} onChange={e => {updatefields({phone: e.target.value})}} required placeholder="+2547*********" id="mobile"/>
                </div>
            </div>
        </>
    )
}

export default PersonalInfo;