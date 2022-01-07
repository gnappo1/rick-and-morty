import styled from 'styled-components';

const theme = {
    font: {
      primary: "'Oswald', sans-serif",
      secondary: "Arial, sans-serif"
    },
    colors: {
      primary: "rgb(255, 120, 44)"
    }
}
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Card = styled.div`
    border: solid;
    width: 300px;
    margin: auto;
    h3{
        color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.font.primary}
    };
    &:hover{
        width: 350px;
        height: 500px
    }
`

export {Container, Card, theme}
