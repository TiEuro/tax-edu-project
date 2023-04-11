import styled from "styled-components";

export const Styles = styled.div
`
    .main {
        background-image: url("tax.png"), linear-gradient(to left, #6cccdc, #aeeff4);
        background-repeat: no-repeat;
        background-position: right bottom;
        background-size: 25%, auto;
        margin-top: 5px;

   }

   .taxLogo{
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-top: 1%;
        width: 15%;
   }

    h1{
        text-align: center;
    
    }

    .error{
        color:red;
        font-size: 6px;
    }

    p{
        margin: 0px;
    }

    hr{
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    }

    .formulario{

        padding: 30px;
        background: rgb(46,162,175);
        background: linear-gradient(90deg, rgba(46,162,175,1) 7%, rgba(55,172,185,0.9037990196078431) 51%, rgba(52,170,194,1) 83%);
        box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
        border-radius: 5px;
        
    }
    .validar{
        margin-top: 10px;
    }

    @media screen and (min-width: 801px){
        .title{
            font-family: montserrat;
            font-weight: bold;
            font-size: 50px;
        }
    }
    @media screen and (max-width: 800px){
        .title{
            font-family: montserrat;
            font-weight: bold;
            font-size: 30px;
        }
    }

`

export const form = styled.form`
    background-color:rgba(142, 193, 180, 1); 
    box-shadow: 5px 5px 5px rgba(0,0,0);







`