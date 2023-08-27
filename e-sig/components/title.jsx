import React from 'react'

export default function Title({text}){
    return(<h1>{
        !text 
        ? "Title" 
        :text}
        </h1>)
}