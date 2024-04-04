import clsx from "clsx"
import { useState } from "react"
export function Trafficlight () {
    const [light, setLight] = useState("green")
    const handleclickRed = () => {
        setLight("red")
    }
    const handleclickYellow = () => {
        setLight("yellow")
    }
    const handleclickGreen = () => {
        setLight("green")
    }
    return (<>
        <div className="trafficlight">
            <div className="trafficlight-stick"/>
            <div className="trafficlight-body">
                <div className={clsx("red", light === "red" && "glow")}
                    onClick={handleclickRed}
                />
                <div className={clsx("yellow", light === "yellow" && "glow")}
                    onClick={handleclickYellow}
                />
                <div className={clsx("green", light === "green" && "glow")}
                    onClick={handleclickGreen}
                />
            </div>
        </div>
        </>
    )
}