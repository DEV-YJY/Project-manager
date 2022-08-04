import React, {useState, useEffect} from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import { Row } from 'react-bootstrap'
import TaskComponent from '../components/TaskComponent'
import BoardSection from '../components/BoardSection'
import { DragDropContext } from 'react-beautiful-dnd'

const AllTasksQuery = gql `
  query {
    tasks {
      id
      title
      description
      status
    }
  }
`

const UpdateTaskMutation = gql`
  mutation UpdateTaskMutation($id: String!, $title: String, $description: String, $userId: String, $status: String!) {
    updateTask(description: $description, id: $id, title: $title, userId: $userId, status: $status) {
      id
      title
      description
      status
    }
  }
`

function Board() {
  const { data, loading, error } = useQuery(AllTasksQuery, {
    onCompleted: data => {
      console.log(data)
    }
  })

  const sections: string[] = ['Backlog', 'In-Progress', 'Review', 'Done']
  const [updateTask] = useMutation(UpdateTaskMutation)

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId) {
      return
    }

    updateTask({
      variables: {
        id: draggableId,
        status: destination.droppableId
      }
    })
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
      <div className='pt-3 h-100 d-flex flex-column'>
        <Row>
          <h1>Project Title</h1>
        </Row>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className='board-container d-flex flex-row flex-grow-1'>
            {sections.map((section: String, index: number) => {
              let filteredData: Array<Task> = data ? data.tasks.filter((task: Task) => {return task.status === section}) : []
              return (
                <BoardSection 
                  title={section}
                  key={index}
                  tasks={filteredData}
                />
              )
            })}
          </div>
        </DragDropContext>
      </div>
  )
}

export default Board