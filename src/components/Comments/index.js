import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'
import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [data, setData] = useState([])

  const changeName = event => {
    setName(event.target.value)
  }

  const changeComment = event => {
    setComment(event.target.value)
  }

  const submitForm = event => {
    event.preventDefault()
    const newComments = {
      id: uuidv4(),
      name,
      comment,
    }
    setData(prevCommentsList => [...prevCommentsList, newComments])
    setName('')
    setComment('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={submitForm}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={changeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={comment}
          onChange={changeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {data.map(items => (
          <CommentItem key={items.id} commentDetails={items} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
