import React, { Component } from 'react'
import { connect } from 'react-redux';
import { reduxForm,Field } from 'redux-form';
import FormField from '../common/FormField';
import { ProductFormFields } from './formFields';


class ProductForm extends Component {
    renderFields(formFields){
        return formFields.map(( {label, name , type,required}) => {
            return (
            <Field key={name} label={label} name={name} type={type} component={FormField} required={required} />

        )
    }
    )
}



    render() {
        const { onProductSubmit } = this.props;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
               {this.renderFields(ProductFormFields)}
               <button className="btn btn-block btn-info title" type="submit" >
               บันทึก
               </button>
 
                </form>

            </div>
        )
    }
}
function  validate(value){
    console.log(value);
    const errors = {};
    ProductFormFields.forEach(({name,required}) => {
        if(!value[name] && required){
            errors [name]= 'กรุณากรอกข้อมูลด้วยครับ';
        }

    });
    return errors;
}

function mapStateToProps( {products} ){
    if(products && products.id){
        return {initialValues : products};
    }else{
        return {};
    }
}


ProductForm = reduxForm({validate, form : "ProductForm"})(ProductForm);

export default connect (mapStateToProps)(ProductForm);