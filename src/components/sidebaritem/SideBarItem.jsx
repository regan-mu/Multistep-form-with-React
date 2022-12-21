import "./sidebaritem.css";

const SideBarItem = ({step, description, currentPage}) => {
    return (
        <div className="form__side-item">
            <div className={currentPage === step ?`form__step-number current` : `form__step-number` }>
                <h4>{step}</h4>
            </div>
            <div className="form__step-description">
                <p>Step {step}</p>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default SideBarItem;