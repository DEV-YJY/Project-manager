import React, { useState } from 'react'
import TaskComponent from './TaskComponent'
import { Col, Button, Card, Form, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface BoardSectionProps {
  title: String
  tasks: Task[]
}

const BoardSection: React.FC<BoardSectionProps> = ({ title, tasks }) => {
  return (
    <>
      <Col md={3} className='d-flex-column p-2'>
        <div className='board-section-header d-flex flex-row align-items-center'>
          <h3 className='me-auto'>{title}</h3>
          <FontAwesomeIcon icon='fa-plus' style={{'color': '#6f7782'}} />
        </div>
        <Container className='p-0 d-flex flex-column h-100'>
          {tasks &&
            tasks.map((task: Task, index: number) => {
              return (
                <TaskComponent
                  title={task.title}
                  description={task.description}
                  id={task.id}
                  key={task.id}
                />
              )
            })
          }
        </Container>
      </Col>
    </>
  )
}

export default BoardSection