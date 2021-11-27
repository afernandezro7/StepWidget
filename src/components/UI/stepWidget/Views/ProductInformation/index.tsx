import img1 from '../../../../../assets/img/group.svg';
import img2 from '../../../../../assets/img/group-3.svg';
export const ProductInformation = () => {
    return (
        <>
            <div className="product-title">
                <h2>Crea tu Password Manager</h2>
            </div>

            <div className="product-content">
                <div className="product-images">
                    <div className="product-img">
                        <img src={img1} alt="product" />
                        <p>Guarda aquí todas tus contarseñas,datos o cualquier información, olvida las notas de papel y las aplicaciones protegidas.</p>
                    </div>
                    <div className="product-img">
                        <img src={img2} alt="product" />
                        <p>Crea tu clave maestra: sólo tú podrás accedera tus secretos con ella.</p>
                    </div>
                </div>
                <div className="product-info">
                    <h3>Cómo funciona</h3>
                    <p>En primer lugar, debes crear una contraseña diferente para sus pertenecias electrónicas. 
                        No podrás recuperar tu contraseña así que recuérdala bien.
                    </p>
                </div>
                <div className="product-info">
                    <h3>Que datos puedes guardar</h3>
                    <p>Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, 
                        el número de serie de alguno de tus dispositivos 
                        o cualquier información que necesites tener en un lugar seguro
                    </p>
                </div>
            </div>
        </>
    )
}
