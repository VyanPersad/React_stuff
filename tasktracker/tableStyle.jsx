import styled from 'styled-components';

export const TableStyle= styled.div`
    width: 700px;
    margin: auot;
    font-weight: 600;
    ul.table-head{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background-color: #333;
        color: #fff;
        border-radius: 3px;
        padding: 15px 20px;
        margin-top: 25px;
        margin-bottom: 25px;
        list-style: none;
    }
    ul.table-row{
        margin-bottom: 25px;
        list-style: none;
        & li{
            background-color: #fff;
            box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
            border-radius: 3px;
            padding: 15px 20px;
            margin-top: 25px;
            transition: all 0.3s;
            &:hover{
                cursor: pointer;
                box-shadow: none;
            }
            &:nth-child(even){
                background-color: rgba(30,158,186,0.3);
            }
            &:nth-child(odd){
                background-color: rgba(30,158,186,0.1);
            }
            &.completed{
                color: gray;
                background-color: lightgray;
                box-shadow: none;
            }
        }        
    }
    input{
        border: none;
        padding: 0.35rem 0.75rem;
        font-weight: bold;
        font-size: 0.9;
    }
    input:hover{
        background: rgba(104,104,104,0.2);
    }
`;

export const NewTaskStyle = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
`;