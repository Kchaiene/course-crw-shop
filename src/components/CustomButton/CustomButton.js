import React from 'react';
import {CustomButtonContainer} from "./custom-button.styles";



const CustomButton = ({children, customType='', ...otherProp}) => {
    return (
        <CustomButtonContainer customType={customType} {...otherProp} >
            {children}
        </CustomButtonContainer>
    );
};

export default CustomButton;
