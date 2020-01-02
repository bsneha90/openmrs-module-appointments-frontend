import React from "react";
import classNames from "classnames";
import {FormattedMessage, injectIntl} from "react-intl";
import {
    button,
    newAppointmentLink,
    saveConfirmationFooter,
    saveModal,
    saveModalBody,
    saveModalCloseIcon,
    saveModalTitle
} from "./SuccessModal.module.scss";
import {AppContext} from "../AppContext/AppContext";
import PropTypes from "prop-types";
import FocusLock from "react-focus-lock";

const UpdateSuccessModal = (props) => {

    const {intl, updateSeries} = props;
    const {onBack} = React.useContext(AppContext);

    return (
        <FocusLock>
            <div className={classNames(saveModal)}>
                <div className={classNames(saveModalCloseIcon)}>
                    <button data-testid="save-close-icon" tabIndex={2}>
                        <i className={classNames("fa", "fa-times")} onClick={onBack}/>
                    </button>
                </div>
                <div>
                    <h1 className={classNames(saveModalTitle)}>
                        <FormattedMessage id={'APPOINTMENT_UPDATE_SUCCESS_TITLE'}
                                          defaultMessage={'Update Successful!'}/>
                    </h1>

                    <div className={classNames(saveModalBody)}>
                        {updateSeries ?
                            <FormattedMessage id={'APPOINTMENT_UPDATE_ALL_SUCCESS_TEXT'}
                                              defaultMessage={'Details are successfully updated for the entire appointment series.'}/> :
                            <FormattedMessage id={'APPOINTMENT_UPDATE_SINGLE_SUCCESS_TEXT'}
                                              defaultMessage={'Details are successfully updated for the selected appointment.'}/>
                        }
                    </div>

                    <div className={classNames(saveConfirmationFooter)}>
                        <button className={classNames(button)} data-testid="save-close-button" onClick={onBack} tabIndex={1}>
                            <FormattedMessage id={'APPOINTMENT_SAVE_CONFIRMATION_CLOSE'} defaultMessage={'Close'}/>
                        </button>
                    </div>
                </div>
            </div>
        </FocusLock>
    );
};

UpdateSuccessModal.propTypes = {
    updateSeries: PropTypes.bool
};
export default injectIntl(UpdateSuccessModal);
