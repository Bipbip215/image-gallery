import React from 'react';
import { connect } from 'react-redux';

import { addImage, changeLoadStatus } from '../../actions';
import withImageCheckService from '../../hocs/withImageCheckService';
import withFormAddImage from '../../hocs/withFormAddImage';
import Loader from '../../components/loader';
import FormImage from '../../components/FormImage';

import './FormAddImage.css';

const actions = {addImage, changeLoadStatus}

const mapStateToProps = ({ loadImage }) => {
    return { loadImage };
};

const FormAddImage = (props) => {

    const { handleSubmit, loadImage } = props;

    return (
        loadImage ? <Loader /> : <FormImage handleSubmit={handleSubmit} />
    );
};

export default connect(mapStateToProps, actions)(withImageCheckService(withFormAddImage(FormAddImage)));