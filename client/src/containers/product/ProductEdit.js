import React, { Component } from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductForm from "../../components/product/ProductForm"
import { connect } from 'react-redux';
import { productFetch, productUpdate, productCreate } from "../../actions";

 class ProductEdit extends Component {

    componentDidMount(){
   if(this.props.match.params.id){
       this.props.productFetch(this.props.match.params.id);
   }
    }


    render() {
        const {formValues, match,products,productCreate,productUpdate} = this.props
        console.log(match);
        return (
            <div>
            <Header />
            <div className="container col-md-s">
            {match.path.indexOf("add") > 0 && (
                <div>
                <h2>เพิ่ม</h2>
                <hr />
                <ProductForm onProductSubmit={() =>productCreate(formValues) }/>
                </div>

            )}
            {match.path.indexOf("edit") > 0 && (
                <div>
                <h2>แก้ไข</h2>
                <hr />
                <ProductForm onProductSubmit={() =>productUpdate(products.id,formValues) }/>
                </div>

            )}


            
            </div>
            <Footer />
                
            </div>
        );
    }
}
function mapStateToProps({form,products}) {
    return {formValues: form.productForm ? form.productForm.values: null,products};
}


export default connect(mapStateToProps, { productFetch , productUpdate, productCreate})(ProductEdit);