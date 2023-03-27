import { useState } from "react";
import  styled  from "styled-components";
import LogoGithub from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const [userName, setUserName] = useState("")

    const navigate = useNavigate()

    function handleSubmit() {
        if (userName) {
            navigate(`/${userName}`)
        }
    }



    return (

        <> 

            <Main>

                <img src={LogoGithub} alt="Logo do Github"/>

                <Title>Escreva seu nome de usuário Github</Title>

                <Input onChange={(event) => {setUserName(event.target.value)}} value={userName} type="text" id="buscar" placeholder="Digite Aqui"/>

                <Button onClick={handleSubmit} type="submit" id="botao-buscar">Buscar</Button>

            </Main>

        </>


    )

}  

export { HomePage }

const Main = styled.main`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    gap: 20px;
`

const Title = styled.h1`
    font-weight: 300;
`

const Input = styled.input`
    width: 300px;
    height: 30px;
    border: none;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid black;
    :focus {
        outline: none;
    }
`

const Button = styled.button`
    width: 150px;
    height: 30px;
    font-weight: 700;
    border: none;
    border: 1px solid grey;
    border-radius: 2px;
    transition: 0.5s;

    :hover {
        cursor: pointer;
        transform: scale(1.06);
    }

`