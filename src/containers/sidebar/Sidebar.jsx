import sidebar from "../../assets/bg-sidebar-desktop.svg";
import sidebarMobile from "../../assets/bg-sidebar-mobile.svg";
import "./sidebar.css";
import {SideBarItem} from "../../components";

const steps = [
    {
        step: 1,
        description: "Your info"
    },
    {
        step: 2,
        description: "Select plan"
    },
    {
        step: 3,
        description: "Add-ons"
    },
    {
        step: 4,
        description: "Summary"
    }
]

const Sidebar = ({currentPage}) => {
    const background = {
        "@media screen and (maxWidth: 600px)": {
            backgroundImage: `url(${sidebarMobile})`
        },
        backgroundImage: `url(${sidebar})`,
    }
    return (
        <div className="form__sidebar"  style={background} >
            {steps.map((step, index) => {return <SideBarItem key={index} step={step.step} currentPage={currentPage} description={step.description} /> })}
        </div>
    )
}

export default Sidebar;