import React, { useContext, useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Dropdown, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Context } from '../../index'
import { fetchTypes, fetchBrands, createItem } from '../../http/itemAPI'
import { observer } from 'mobx-react-lite'

export const CreateItem = observer(({show,onHide}) => {

  const {item} = useContext(Context)

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)


  const [info, setInfo] = useState([])

  useEffect(()=>{
    fetchTypes().then(data=> item.setTypes(data))
    fetchBrands().then(data=> item.setBrands(data))
  },[])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value}: i))
  }

  const selectFile = e => {
      setFile(e.target.files[0])
  }

  const addItem =() =>{
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', item.selectedBrand.id)
    formData.append('typeId', item.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createItem(formData).then(data => onHide())
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
                {item.selectedType.name || 'Выберите Тип'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {item.types.map(type =>
                <Dropdown.Item key={type.id} onClick={() => item.setSelectedType(type)}>
                  {type.name}
                </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle>
              {item.selectedBrand.name || 'Выберите Бренд'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {item.brands.map(brand =>
                <Dropdown.Item key={brand.id} onClick={() => item.setSelectedBrand(brand)}>
                  {brand.name}
                </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control
            value={name}
            onChange={e => setName(e.target.value)}
                placeholder='Введите название сладости'
            />
             <Form.Control
             value={price}
             onChange={e => setPrice(Number(e.target.value))}
            type='number'
            placeholder='Введите стоимость сладости'
        />
         <Form.Control
            type='file'
            onChange={selectFile}
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
              value={i.title}
              onChange={(e)=> changeInfo('title',e.target.value, i.number)}
                placeholder='Введите название свойства'
              />
            </Col>
            <Col md={4}>
              <Form.Control
              value={i.description}
              onChange={(e)=> changeInfo('description',e.target.value, i.number)}
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
        <Button onClick={addItem}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});
