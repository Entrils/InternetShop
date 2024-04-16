import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../../index';
import styles from './TypeBar.module.css';
import ListGroup from 'react-bootstrap/ListGroup'

export const TypeBar = observer(() => {
    const {item} = useContext(Context)
  return (
    //<ul className={styles.Types}>
    <ListGroup>
       {item.types.map(type =>
       <ListGroup.Item
       style={{cursor: 'pointer'}}
       active={type.id === item.selectedType.id}
       onClick={() => item.setSelectedType(type)}
       key={type.id}
       >{type.name}</ListGroup.Item>
      )}
    </ListGroup>
  )
});
