import React, { useContext } from "react";
import Title from "../blog_dark/title";
import Button from "../blog_dark/button";
import { ThemeContext } from "../context/theme-context";

export default function DarkLightTheme(){
    const {theme, changeTheme} = useContext(ThemeContext);
    return(  
        <div className="container p-1">
            <Title text={`Blog with ${theme} theme.`}/>
            <span style={{position: "absolute", top:10, right:10}}>
                <Button text={theme === "Dark" ? "Light":"Dark"} 
                        btnClass={`${theme === "dark" && "btn-light"} btn-sm`} 
                        onClick={changeTheme}/>
            </span>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                A autem, iure aperiam, doloremque nam ab nisi, quae magni dolor vitae 
                magnam commodi repellendus ipsa assumenda obcaecati dolore ipsam 
                inventore ut?
            </p>
        </div>
    );
}