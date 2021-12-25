type PersonListProps={
  names:{
    first:string
    last:string
  }[]
}

function PersonList(props:PersonListProps) {
  return (
    <div>
      <h2>{props.names[0].first}</h2>
      {
        props.names.map((name,index)=>(
          <h2 key={index}>{name.first} {name.last}</h2>
        ))
      }
    </div>
  )
}

export default PersonList
