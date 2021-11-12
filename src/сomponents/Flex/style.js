import styled from "styled-components";

export const StyledFlex = styled.div`
    margin: ${({margin}) => margin || '0px'} ;
    padding: ${({padding}) => padding || '0px'};
    
    ${props=> props.width ? `width: ${props.width}` : null};
    ${props=> props.minWidth ? `min-width: ${props.minWidth}` : null};
    ${props=> props.maxWidth ? `max-width: ${props.maxWidth}` : null};

    ${props=> props.height ? `height: ${props.height}` : null};
    ${props=> props.minHeight ? `min-height: ${props.minHeight}` : null};
    ${props=> props.maxHeight ? `max-height: ${props.maxHeight}` : null};

    display: flex;
    flex-direction: ${props => props.direction || 'row'} ;
    ${props=> props.justify ? `justify-content: ${props.justify}` : null};
    ${props=> props.align ? `align-items: ${props.align}` : null};
    ${props=> props.grow ? `flex-grow: ${props.grow}` : null};
    ${props=> props.wrap ? `flex-wrap: ${props.wrap}` : null};
`