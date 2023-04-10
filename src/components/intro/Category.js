
import "./Category.css"
import ProductCategories from "./ProductCategories";

const Category =()=>{

    return(
        <div className="category">
            <div className="all-category"></div>
            <div className="custom-category">
                <ProductCategories/>
                <ProductCategories/>
                <ProductCategories/>
                <ProductCategories/>
                <ProductCategories/>
                <ProductCategories/>
            </div>
            <div className="price-filter"></div>
        </div>
    );


}
export default Category;
