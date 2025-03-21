const Header = ({name}) => {
    return <div>
      <h2>{name}</h2>
    </div>
  }
  
  const Part = ({part}) => {
    return <>
      <p>{part.name} {part.exercises}</p>
    </>
  }
  
  const Content = ({parts}) => {
  
    const sum = parts.reduce((sum, part)=> sum + part.exercises, 0)
  
    return <>
  
      {parts.map((part)=> <Part part={part}/>)}
      <p><b>total of {sum} exercises</b></p>
    </>
  }
  
  const Course = ({course}) => {
    return <div>
      <Header name={course.name}/>
      <Content parts = {course.parts}/>
    </div>
  }

  export default Course;