import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Dropdown, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Context } from '../../index'

export const CreateItem = ({show,onHide}) => {

  const {item} = useContext(Context)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
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
          Добавить сладость
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown>
              <Dropdown.Toggle>
                Выберите тип
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {item.types.map(type =>
                <Dropdown.Item key={type.id}>
                  {type.name}
                </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle>
                Выберите бренд
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {item.brands.map(brand =>
                <Dropdown.Item key={brand.id}>
                  {brand.name}
                </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control
            
                placeholder='Введите название сладости'
            />
             <Form.Control
            type='number'
            placeholder='Введите стоимость сладости'
        />
         <Form.Control
            type='file'
        />
        <hr/>
        <Button
        onClick={addInfo}
        >
          Добавить новое свойство
        </Button>
        {
          info.map(i =>
          <Row className='mt-2' key={i.number}>
            <Col md={4}>
              <Form.Control
                placeholder='Введите название свойства'
              />
            </Col>
            <Col md={4}>
              <Form.Control
              placeholder='Введите описание свойства'
              />
            </Col>
            <Col md={4}>
              <Button
              onClick={() => removeInfo(i.number)}
              > Удалить </Button>
            </Col>
          </Row>
          )
        }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Закрыть</Button>
        <Button onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
}
