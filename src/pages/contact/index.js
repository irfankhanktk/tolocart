import React from 'react';
import StoreCardHeader from '../../components/store-card-header';
import LoginModal from '../../components/modals/login-modal';
const Contact = () => {
    const [show, setShow] = React.useState(false);
    return (
        <div>
            <StoreCardHeader />
            <LoginModal show={show} setShow={setShow} />
        </div>
    );
};
export default Contact;