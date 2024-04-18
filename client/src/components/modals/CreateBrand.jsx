import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { createBrand } from '../../http/itemAPI'

export const CreateBrand = ({show, onHide}) => {

  const [value,setValue] = useState('')
  const addBrand =() =>{
    createBrand({name: value}).then(data => {
      setValue('')
      onHide()
  })
  }


  return (
    <Modal
    show = {show}
    onHide ={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={'Введите название бренда'}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={addBrand}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
}
