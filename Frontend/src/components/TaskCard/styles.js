import styled from  'styled-components';

export const Container = styled.div`
    width: 800px;
    height: 56px;
    border: 1px solid black;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: ${props => props.done ? 0.5 : 1};


    &:hover{
        opacity: 0.5;
    }
`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        height: 60px;
        width: 60px;
    }

    h3{
        text-align: justify;
    }

`

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong {
        color: #EE6B26;
        font-weight: bold;
    }

    span {
        color: #707070;
    }

`