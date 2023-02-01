import styled from '@emotion/styled'

export const Status = styled.span`
    display: flex;
    outline: 1px solid black;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    top: 50%;

    background-color: ${props => {
    switch (props.isOnline) {
        case 'true':
            return 'green';
        case 'false':
            return 'red';
        default:
            return 'grey';
    }
    }};
`;