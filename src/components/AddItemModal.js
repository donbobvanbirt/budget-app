import React from 'react'
import { compose, withProps, withState, withHandlers } from 'recompose'
import { Icon, Modal, Form } from 'semantic-ui-react'
import moment from 'moment'

const availableCategroies = ['personal', 'insurance', 'food', 'etc.']

const AddItemModal = ({
  date,
  amount,
  name,
  description,
  category,
  type,
  setDate,
  setAmount,
  setName,
  setDescription,
  setCategory,
  setType,
  handleSubmit,
  readyToSubmit,
  modalOpen,
  setModalOpen
}) => (
  <Modal
    open={modalOpen}
    trigger={<Icon onClick={() => setModalOpen(true)} name="add" />}
    onClose={() => setModalOpen(false)}
  >
    <Modal.Header>Add Item</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              label="Date"
              control="input"
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <Form.Field
              label="Amount"
              control="input"
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="$"
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              control="input"
              label="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Acme Coffee Shop"
            />
            <Form.Select
              fluid
              label="Category"
              options={availableCategroies.map(category => ({
                key: category,
                text: category,
                value: category
              }))}
              value={category}
              onChange={(e, { value }) => setCategory(value)}
            />
          </Form.Group>

          <Form.TextArea
            label="Description"
            placeholder="Before work coffee"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <Form.Group inline>
            <label>Type</label>
            <Form.Radio
              label="Expense"
              value="expense"
              checked={type === 'expense'}
              onChange={() => setType('expense')}
            />
            <Form.Radio
              label="Income"
              value="income"
              checked={type === 'income'}
              onChange={() => setType('income')}
            />
          </Form.Group>

          <Form.Button onClick={handleSubmit} disabled={!readyToSubmit}>
            Submit
          </Form.Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default compose(
  withState('date', 'setDate', moment().format('YYYY-MM-DD')),
  withState('amount', 'setAmount', ''),
  withState('name', 'setName', ''),
  withState('description', 'setDescription', ''),
  withState('category', 'setCategory', ''),
  withState('type', 'setType', 'expense'),
  withState('modalOpen', 'setModalOpen', false),
  withProps(props => {
    return {
      readyToSubmit: props.amount && props.category && props.date
    }
  }),
  withHandlers({
    handleSubmit: ({
      amount,
      category,
      date,
      description,
      name,
      type,
      setAmount,
      setName,
      setDescription,
      setCategory,
      readyToSubmit,
      setModalOpen,
      submitNewItem
    }) => () => {
      if (readyToSubmit) {
        submitNewItem({
          amount,
          category,
          date,
          description,
          name,
          type,
          timestamp: moment(date).unix(),
          dateAdded: Date.now()
        })

        setAmount('')
        setName('')
        setDescription('')
        setCategory('')

        setModalOpen(false)
      }
    }
  })
)(AddItemModal)
