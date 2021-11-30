import img1 from '../../../../../assets/img/group.svg';
import img2 from '../../../../../assets/img/group-3.svg';
import { actionCreators } from '../../../../../redux';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import './productInfo.scss'
import { useTranslation } from 'react-i18next';

export const ProductInformation = () => {

    const [t] = useTranslation("global")

    const dispatch = useDispatch()
    const {startNextStep} = bindActionCreators(actionCreators,dispatch)
    
    const handleNext = () => {
        startNextStep()
    }

    return (
        <>
            <div className="product-title">
                <h2>{t("product_info.title")}</h2>
            </div>

            <div className="product-content">
                <div className="product-images">
                    <div className="product-img">
                        <img src={img1} alt="product" />
                        <p>{t("product_info.prod_img1")}</p>
                    </div>
                    <div className="product-img">
                        <img src={img2} alt="product" />
                        <p>{t("product_info.prod_img1")}</p>
                    </div>
                </div>
                <div className="product-info">
                    <h3>{t("product_info.prod_info1.title")}</h3>
                    <p>{t("product_info.prod_info1.content")}</p>
                </div>
                <div className="product-info">
                    <h3>{t("product_info.prod_info2.title")}</h3>
                    <p>{t("product_info.prod_info2.content")}</p>
                </div>
            </div>

            <hr />

            <div className="btn-group">         
                <button className="btn btn-secondary">{t("back_btn")}</button>
                <button className="btn btn-primary" onClick={handleNext}>{t("next_btn")} &gt;</button>
            </div>

        </>
    )
}
