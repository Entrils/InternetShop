import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

export const CreateBrand = ({show, onHide}) => {
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
            
            placeholder={'Введите название бренда'}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
}
