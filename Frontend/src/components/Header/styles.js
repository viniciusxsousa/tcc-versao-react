import styled from  'styled-components';

export const Container = styled.div`
 width: 100%;
 height: 60px;
 background: #20295F;
 

 display: flex;


`
export const LeftSide = styled.div`
width: 50%;
height: 70px;
display: flex;
align-items: center;
padding-left: 10px;

img {
    width: 100px;
    height: 40px;
}

h3{
    color: white;
}

`
export const RightSide = styled.div`
width: 50%;
height: 70px;
display: flex;
align-items: center;
justify-content: flex-end;

button {
    background: none;
    height: 50px;
    width: 50px; 
    border: none;
    cursor: pointer;
}

a, button {
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

   

    &: hover{
        color: #EE6B26;
    }

}

#notification {
    img {
        width: 25px;
        height: 30px;
    }
    span {
        background: #FFF;
        color: #EE6B26;
        padding: 3px 7px;   
        border-radius: 50%;
        position: relative;
        position: -20px;
        top: -20px;
        right: 10px;
    }
    
    &: hover {
        opacity: 0.5;
    }
}

.dividir::after{
    content: "|";
    margin: 0 10px;
    color: #FFF;
}

`