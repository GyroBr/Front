import styles from "./NavTopCardapio.module.css"
import configuration_icon from "../../assets/Produtos/configuration.png"
import Card2 from "./Card2"
import CardProduto from "./CardProduto"


export default function NavTopCardapio() {
    return (
        <>
            <div className={styles.all}>
                <section className={styles.section_navtop}>
                    <div className={styles.NavTop}>
                        <span>Gestão de Estoque</span>
                        <div className={styles.NavTopOptions}>
                            <p>Sucos</p>
                            <p>Refrigerantes</p>
                            <p>Cervejas</p>
                            <p>Vinhos</p>
                            <p>Gelos</p>
                            <p>Gin</p>
                            <p>Uisque</p>
                        </div>
                    </div>
                    <div className={styles.configurar}>
                        <img src={configuration_icon} alt="" />
                        <p>Configurar Cartegoria</p>
                    </div>
                </section>
                <Card2 />

                <div className={styles.div_produtos}>
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                </div>
                <div className={styles.div_produtos}>
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                </div>
                <div className={styles.div_produtos}>
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                    <CardProduto
                        tiltle={"Fanta Uva  350 ml"}
                        description={"bebida gaseificada refrescante e doce, com um sabor marcante de uva. Seu gosto vibrante e frutado é uma opção clássica para quem busca algo diferente do normal."}
                        price={"7,99"}
                    />
                </div>

            </div>

        </>
    )
}