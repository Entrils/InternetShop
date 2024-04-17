import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

export const CreateType = ({show, onHide}) => {
  return (
    <Modal
    show = {show}
    onHide ={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
            
            placeholder={'Введите название типа'}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}
