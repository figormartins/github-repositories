import React, { useState, useEffect } from 'react'
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import Container from '../../components/Container'
import { Form, SubmitButton, List } from './styles'

const Main = () => {
  const [repository, setRepository] = useState('')
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const repos = localStorage.getItem('repositories')

    if (repos) {
      setRepositories(JSON.parse(repos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('repositories', JSON.stringify(repositories))
  }, [repositories])

  const handleInputChange = (e) => {
    setRepository(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    const response = await api.get(`/repos/${repository}`)
    const data = {
      id: Date.now(),
      name: response.data.full_name
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

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
              <FaPlus color="#FFF" size={14} />
            )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map(repo => (
          <li key={repo.id}>
            <span>{repo.name}</span>
            <Link to={`/repository/${encodeURIComponent(repo.name)}`}>Detalhes</Link>
          </li>
        ))}
      </List>
    </Container>
  )
}

export default Main
