import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";



const InfoPage = () => {

    async function user(userName) {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        return await response.json();
    }

    async function userRepos(userName) {
        const response = await fetch(`https://api.github.com/users/${userName}/repos?per_page=10`);
        return await response.json();
    }


    const { userName } = useParams()

    const [info, setInfo] = useState({})

    const [infoRepos, setInfoRepos] = useState([])

    useEffect(() => {
        async function fetchUser() {
            const info = await user(userName)
            setInfo(info)
            const repos = await userRepos(userName)
            setInfoRepos(repos)
        }

        fetchUser()


    }, [])

    return (

        <Main>

            <DivInfo>
                <Img src={info.avatar_url} />
                <Name>{info.name ?? "Este usuário não possui nome cadastrado!"}</Name>
                <Bio>{info.bio ?? "Este usuário não possui bio cadastrada!"}</Bio>
            </DivInfo>

            <DivRepos>
                <Title>Repositórios</Title>

                <Div>

                    {infoRepos && infoRepos.map(repos =>
                        (<A target="_blank" href={repos.html_url} key={repos.id}><Repos>{repos.name}</Repos></A>)
                    )}

                    

                </Div>
            </DivRepos>

        </Main>

    )
}

export { InfoPage }

const Main = styled.main`
    width: 100%;
    height: 95vh;
    padding: 20px;
    display: flex;
    text-align: center;

    @media (max-width: 768px) {
        padding: 10px;
    }

    @media (max-width: 425px) {
        flex-direction: column
    }

    @media (max-width: 375px) {
        gap: 50px
    }
    
`

const DivInfo = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 425px) {
        width: 100%;
        height: 80%;
    }
`

const Img = styled.img`
    border: 2px solid #0e0e0e;
    border-radius: 100%;
    width: 400px;
    height: 400px;

    @media (max-width: 768px) {
        width: 300px;
        height: 300px;  
    }
`

const Name = styled.h3`
    font-size: 24px;
    font-weight: 400;
    width: 300px;
    text-align: center;
`

const Bio = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-top: -2px;
    
`

const DivRepos = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media (max-width: 425px) {
        width: 100%;
        height: 80%;
    }
`

const Title = styled.h2`
    width: 100%;
`

const Div = styled.div`
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

const A = styled.a`
    text-decoration: none;
    color: #0e0e0e;
    border: 1px solid #0e0e0e;
    padding: 10px;
    border-radius: 10px;
    transition: 0.3s;
    :hover {
        transform: scale(1.1);
    }
`

const Repos = styled.div`

`