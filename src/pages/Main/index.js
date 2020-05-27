import React, { useState } from 'react'
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'

import api from '../../services/api'

import { Container, Form, SubmitButton, List } from './styles'

const Main = () => {
  const [repository, setRepository] = useState('')
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setRepository(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    const response = await api.get(`/repos/${repository}`)

    const data = {
      name: response.data.full_name,
    }

    setRepositories([...repositories, data])
    setRepository('')
    setLoading(false)
  }

  return (
    <Container>
      <h1>
        <FaGithub />
        Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar repositório"
          value={repository}
          onChange={handleInputChange}
        />

        <SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
              <FaPlus color="#FFF" size={14} />
            )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map(repo => (
          <li key={repo.name}>
            <span>{repo.name}</span>
            <a href="">Detalhes</a>
          </li>
        ))}
      </List>
    </Container>
  )
}

export default Main
