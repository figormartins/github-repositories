import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import Container from '../../components/Container'
import { Loading, Owner, IssueList } from './styles'

const Repository = ({ match }) => {
  const [repository, setRepository] = useState([])
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)

  const repositoryName = decodeURIComponent(match.params.repository)

  useEffect(() => {
    setLoading(true)

    const resolve = async () => {
      const [repository, issues] = await Promise.all([
        api.get(`/repos/${repositoryName}`),
        api.get(`/repos/${repositoryName}/issues`, {
          params: {
            state: 'open',
            per_page: 5
          }
        })
      ])

      setRepository(repository.data)
      setIssues(issues.data)
      setLoading(false)
    }

    resolve()
  }, [repositoryName])
  if (loading) {
    return (<Loading>Carregando</Loading>)
  }

  return (
    <Container>
      <Owner>
        <Link to="/">Voltar</Link>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>

      <IssueList>
        {issues.map(issue => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                {issue.labels.map(label => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssueList>
    </Container>

  )
}

export default Repository
