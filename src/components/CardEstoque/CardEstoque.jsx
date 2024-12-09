/* eslint-disable react/prop-types */
import React from "react";
import styles from "./CardEstoque.module.css";
import ModalEditarLote from "../ModaisLote/ModalEditarProduto";
import ModalExcluirLote from "../ModaisLote/ModalExcluirProduto";
import {
  BsCalendar4Event,
  BsFillPencilFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { useState } from "react";

const Card = ({
  id,
  name,
  description,
  price,
  image,
  onDelete,
  onEdit,
  category,
  quantity,
  expireDate,
}) => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  console.log(expireDate)
  const openModalDelete = () => setIsModalDeleteOpen(true);
  const closeModalDelete = () => setIsModalDeleteOpen(false);

  //Modal editar
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const openModalEdit = () => setIsModalEditOpen(true);
  const closeModalEdit = () => setIsModalEditOpen(false);
  return (
    <div className={styles.card_estoque}>
      <div className={styles.container}>
        <div className={styles.img}>
          <div className={styles.upload_img}>
            <img src={image} alt={name} />
          </div>
        </div>
        <div className={styles.container_info}>
          <div className={styles.line}>
            <span className={styles.text}>Produto: {name}</span>
          </div>
          <div className={styles.line}>
            <span className={styles.text}>
              Quantidade em estoque: {quantity}
            </span>
          </div>
          {/* <select name="" id="" className={styles.line}>
                        <option value="">
                            <span className={styles.text}>Selecionar Lote</span>
                        </option>
                    </select>
                    <div className={styles.line}>
                        <span className={styles.text}>Quantidade lote {}:    </span>
                    </div> */}
          {/* <div className={styles.line}>
                        <span className={styles.text}>Excluir Produtos <BsPlusLg className={styles.icon} /></span>
                    </div> */}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.box_status}>
            <span className={styles.text}>Status</span>
            <div className={styles.line_color}></div>
          </div>

          <div className={styles.box_rep_val}>
            <span className={styles.text}>Última reposição</span>
            <div className={styles.box_intern}>
              <BsCalendar4Event />
            </div>
          </div>

          <div className={styles.box_rep_val}>
            <span className={styles.text}>Validade</span>
            <div className={styles.box_intern}>
              <BsCalendar4Event />
              <span className={styles.date}>
                {expireDate}
              </span>
            </div>
          </div>

          <div className={styles.box_btn}>
            <button onClick={openModalEdit} className={styles.btn_edit_delete}>
              <BsFillPencilFill />
              <span className={styles.text}>Editar</span>
            </button>

            <button onClick={openModalDelete}className={styles.btn_edit_delete}>
              <BsFillTrashFill />
              <span className={styles.text}>Excluir</span>
            </button>
          </div>
        </div>
      </div>
      {isModalDeleteOpen && (
        <ModalExcluirLote
          isOpen={isModalDeleteOpen}
          setModalOpen={closeModalDelete}
          productId={id}
          onDeleteSuccess={() => onDelete(id)} // Chama a função passada por prop
        />
      )}
      {isModalEditOpen && (
        <ModalEditarLote
          isOpen={isModalEditOpen}
          setModalOpen={closeModalEdit}
          productId={id}
          name={name}
          category={category}
          description={description}
          price={price}
          image={image}
          onEditSuccess={() => onEdit(id)} // Chama a função passada por prop
        />
      )}
    </div>
  );
};

export default Card;
