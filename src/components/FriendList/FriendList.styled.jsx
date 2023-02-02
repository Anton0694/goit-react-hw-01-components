import styled from '@emotion/styled'

export const Status = styled.span`
    display: flex;
   margin-top: 60px;
   margin-left: 30px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    position: absolut;
    top: 50%;

    background-color: ${props => {
    switch (props.isOnline) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'grey';
    }
    }};
`;