import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from "./with-spinner.styles";




const WithSpinner = WrapComponent => props => {
    const {isLoading, ...otherProps} = props;

    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : <WrapComponent {...otherProps} />;
};

export default WithSpinner;
