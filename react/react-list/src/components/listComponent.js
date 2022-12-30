import ListItemComponent from "./listItemComponent"
const staticList = [
  { id: '001', heading: 'Indian News', description:'some indian news headlines....'},
  { id: '002', heading: 'UK News', description:'some uk news headlines....'},
  { id: '003', heading: 'International News', description:'some international news headlines....'}
]
function ListComponent() {

  function renderListItem(data) {
    const {id, heading, description} = data;
    return <ListItemComponent 
      key={id} 
      heading={heading} 
      description= {description}/>
    //return <ListItemComponent {...data} />
  }
  return (
    <ul>
      {
        staticList.map(renderListItem)
      }
    </ul>
  )
}

export default ListComponent;