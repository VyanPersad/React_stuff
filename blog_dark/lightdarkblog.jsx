import React, { useEffect, useState } from "react";
import DarkLightTheme from "./blog_dark";
import { ThemeContext, themes } from "../context/theme-context";

export default function Blog(){

    const [theme,setTheme]= useState(themes.light);
    function changeTheme(){
        theme === themes.light? 
        setTheme(themes.dark): 
        setTheme(themes.light);
    }
    useEffect(()=>{
        switch(theme){
            case themes.light:
                document.body.classList.remove("bg-dark");
                document.body.classList.remove("text-light"); 
                document.body.classList.add("bg-light");
                document.body.classList.add("text-dark"); 
                break;
            case themes.dark:
                document.body.classList.remove("bg-light");
                document.body.classList.remove("text-dark"); 
                document.body.classList.add("bg-dark");
                document.body.classList.add("text-light"); 
                break;
        }
    },[theme]);

    return(
        <ThemeContext.Provider value={{theme, changeTheme}}>
            <DarkLightTheme/>
        </ThemeContext.Provider>
    );
}