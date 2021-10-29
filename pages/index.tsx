import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletTodod, fetchAction, removeTodo } from '../redux/reduser'
import NewTodoForm from './NewTodoForm'
import { Onepage } from './Onepage'

const Home: NextPage = () => {
  const state = useSelector(state => state.one.todo)
  const { status, error } = useSelector(state => state.one)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAction())
  }, [dispatch])

  const delets = (id) => {
    dispatch(deletTodod(id))
  }

  return (
    <div>
      <NewTodoForm  />
      {status === 'loading' && <h2>loading...</h2>}
      {error && <h2> error {error}</h2>}

      {state.map(s =>
        <Onepage key={s.id} {...s} delets={delets} />
      )}
    </div>
  )
}

export default Home
