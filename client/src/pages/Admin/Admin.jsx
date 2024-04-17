import React, { useState } from 'react'
import styles from './Admin.module.css'
import { CreateBrand } from '../../components/modals/CreateBrand.jsx';
import { CreateType } from '../../components/modals/CreateType.jsx';
import { CreateItem } from '../../components/modals/CreateItem.jsx';

export const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [itemVisible, setItemVisible] = useState(false)
  return (
    <section className={styles.container}>
      <button onClick={() => setTypeVisible(true)}>
        Добавить тип
      </button>
      <button onClick={() => setBrandVisible(true)}>
        Добавить бренд
      </button>
      <button onClick={() => setItemVisible(true)}>
        Добавить сладость
      </button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateType  show={typeVisible} onHide={() => setTypeVisible(false)}/>
      <CreateItem show={itemVisible} onHide={() => setItemVisible(false)}/>
    </section>
  )
}
export default Admin;
