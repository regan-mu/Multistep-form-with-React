import arcade from "./assets/icon-arcade.svg";
import pro from "./assets/icon-pro.svg";
import advanced from "./assets/icon-advanced.svg"


const subscriptions = [
    {
        plan: "Arcade",
        monthly: 9,
        annual: 90,
        icon: arcade
    },
    {
        plan: "Advanced",
        monthly: 12,
        annual: 120,
        icon: pro
    },
    {
        plan: "Pro",
        monthly: 15,
        annual: 150,
        icon: advanced
    }
]

const addonsData = [
    {   id: "multiplayer",
        addon: "Online service",
        description: "Access to multiplayer games",
        monthly: 1,
        annual: 10
    },
    {
        id:"storage",
        addon: "Larger Storage",
        description: "Extra 1TB of cloud save",
        monthly: 2,
        annual: 20
    },
    {   
        id:"profile",
        addon: "Customizable profile",
        description: "Custom theme on your profile",
        monthly: 2,
        annual: 20
    },
]

export { subscriptions, addonsData }